import './EditAlbum.css';
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { update } from '../../utilities/albums-api';
import { albumDetail } from '../../utilities/albums-api';
import Fancybox from '../FancyBox/FancyBox';
import Line from '../Line/Line';
import Photo from '../Photo/Photo';

export default function EditAlbum({ user }) {
  const [album, setAlbum] = useState();
  const [title, setTitle] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { albumId } = useParams();
  
  const thumbnailRef = useRef(null);
  const photosRef = useRef(null);

  useEffect(function() {
    async function getAlbum() {
      const a = await albumDetail(albumId);
      setAlbum(a);
      setTitle(a.title);
    }
    getAlbum();
  }, []);

  function handleChange(evt) {
    setTitle(evt.target.value)
  }

  
  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    const newFormData = new FormData();
    newFormData.append('title', title);
    if (thumbnailRef.current) newFormData.append('thumbnail', thumbnailRef.current.files[0]);
    if (photosRef.current) {
      for (let i = 0; i < photosRef.current.files.length; i++) {
        newFormData.append('photos', photosRef.current.files[i]);
      };
    };
    const updatedAlbum = await update(album._id, newFormData);
    setAlbum(updatedAlbum);
    setTitle(updatedAlbum.title);
    setLoading(false);
  }
  
  if (album) {
    const Photos = album.photos.map((p) => <Photo img={p} setAlbum={setAlbum} album={album} />);

    return (
      <div className='edit-album'>
        <button className='cancel-edit-album-btn warning'>CANCEL</button>
        <form onSubmit={handleSubmit} className='edit-album-form'>
          <input id='edit-title-input' onChange={handleChange} type="text" value={title} />
          <button type='submit' className='submit-album-update-btn success'>Submit Changes</button>
          <div className='add-photos'>
            <label htmlFor="add-photos-input">Add More Photos:</label>
            <input ref={photosRef} id='add-photos-input' type="file" multiple />
          </div>
          <div className='edit-thumbnail'>
            <div className='edit-thumbnail-img'>
              <img src={album.thumbnail} />
            </div>
            <label htmlFor="edit-thumbnail-input">Change Thumbnail:</label>
            <input type="file" ref={thumbnailRef} />
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
  