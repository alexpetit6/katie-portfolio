import './EditAlbum.css';
import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { update } from '../../utilities/albums-api';
import { albumDetail } from '../../utilities/albums-api';
import { Link } from 'react-router-dom';
import Fancybox from '../../components/FancyBox/FancyBox';
import Line from '../../components/Line/Line';
import Photo from '../../components/Photo/Photo';

export default function EditAlbum({ user }) {
  const [album, setAlbum] = useState();
  const [formData, setFormData] = useState({});
  const [isLoading, setLoading] = useState(false);

  const { albumId } = useParams();
  
  const thumbnailRef = useRef(null);
  const photosRef = useRef(null);

  useEffect(function() {
    async function getAlbum() {
      const a = await albumDetail(albumId);
      setAlbum(a);
      setFormData({
        title: a.title,
        role: a.role,
        theater: a.theater
      });
    }
    getAlbum();
  }, []);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  
  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    const newFormData = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    };
    if (thumbnailRef.current) newFormData.append('thumbnail', thumbnailRef.current.files[0]);
    if (photosRef.current) {
      for (let i = 0; i < photosRef.current.files.length; i++) {
        newFormData.append('photos', photosRef.current.files[i]);
      };
    };
    const updatedAlbum = await update(album._id, newFormData);
    setAlbum(updatedAlbum);
    setLoading(false);
  }
  
  if (album) {
    const Photos = album.photos.map((p) => <Photo img={p} setAlbum={setAlbum} album={album} />);

    return (
      <div className='edit-album'>
        <Link to='/'>
          <button className='cancel-edit-album-btn warning'>CANCEL</button>
        </Link>
        <form onSubmit={handleSubmit} className='edit-album-form'>
          <input id='edit-title-input' onChange={handleChange} type="text" value={formData.title} />
          <button type='submit' className='submit-album-update-btn success' disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit Changes'}</button>
          <div className='edit-subtitles'>
            <label htmlFor="edit-role">Change Role:</label>
            <select defaultValue={album.role} onChange={handleChange} name='role' id='role-select'>
              <option value="Choreographer">Choreographer</option>
              <option value="Director">Director</option>
            </select>
            <label htmlFor="edit-theater">Change Theater:</label>
            <input name='theater' type="text" id='edit-theater' onChange={handleChange} value={formData.theater} />
          </div>
          <div className='edit-thumbnail'>
            <div className='edit-thumbnail-img'>
              <img src={album.thumbnail} />
            </div>
            <label htmlFor="edit-thumbnail-input">Change Thumbnail:</label>
            <input id='edit-thumbnail-input' type="file" accept='jpg, jpeg' ref={thumbnailRef} />
          </div>
          <div className='add-photos'>
            <label htmlFor="add-photos-input">Add More Photos:</label>
            <input ref={photosRef} id='add-photos-input' type="file" accept='jpg, jpeg' multiple />
          </div>
        </form>
        <div className="triple-line"><Line/></div>


        <Fancybox newClass='fancybox-container'>
          {Photos}
        </Fancybox>
      </div>
    )
  }

  }
  