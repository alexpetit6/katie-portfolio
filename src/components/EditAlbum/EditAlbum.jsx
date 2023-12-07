import './EditAlbum.css';
import { useState, useRef } from 'react';
import { update } from '../../utilities/albums-api';
import Fancybox from '../FancyBox/FancyBox';
import Line from '../Line/Line';

export default function EditAlbum({Photos, album, setAlbum, setEditing, user}) {
  const [title, setTitle] = useState(album.title);
  const [isLoading, setLoading] = useState(false);

  const thumbnailRef = useRef(null);
  const photosRef = useRef(null);

  function handleStopEdit() {
    setEditing(false);
  }

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

  return (
    <div className='edit-album'>
      <button onClick={handleStopEdit} className='cancel-edit-album-btn warning'>CANCEL</button>
      <form className='edit-album-form'>
        <input id='add-photos-input' type="file" multiple />
        <input id='edit-title-input' onChange={handleChange} type="text" value={title} />
        <button className='submit-album-update-btn success'>Submit Changes</button>
      </form>
      <div className="triple-line"><Line/><Line/><Line/></div>
      {/* <Header title={album.title} /> */}
      <Fancybox newClass='fancybox-container'>
        {Photos}
      </Fancybox>
    </div>
  )
}