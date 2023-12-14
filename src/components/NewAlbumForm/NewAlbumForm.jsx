import './NewAlbumForm.css';
import React, { useState, useRef } from 'react';
import { create } from '../../utilities/albums-api';

export default function NewAlbumForm({category, hidden, setOpen, setAlbums}) {
  // const { albumId } = useParams();

  const baseData = {
    title: '',
    category: 'choreography'
  };

  const [formData, setFormData] = useState(baseData);
  const [isLoading, setLoading] = useState(false);

  const thumbnailRef = useRef(null);
  const photosRef = useRef(null);

  function handleClose() {
    setOpen(false);
    document.body.style.overflow = 'auto';
  }

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
    // newFormData.append('title', formData.title)
    // newFormData.append('category', 'choreography')
    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    };
    newFormData.append('thumbnail', thumbnailRef.current.files[0]);
    for (let i = 0; i < photosRef.current.files.length; i++) {
      newFormData.append('photos', photosRef.current.files[i]);
    };
    const albums = await create(newFormData);
    thumbnailRef.current.value = '';
    photosRef.current.value = '';
    setFormData(baseData);
    setAlbums(albums);
    setLoading(false);
  }

  return (
    <div id='new-album' style={{visibility: hidden ? 'hidden' : 'visible'}}>
      <button onClick={handleClose} id='close-album-form-btn'>X</button>
      <div id='new-album-container'>
        <form id='album-form' onSubmit={handleSubmit}>
          <input id='title-input' name='title' type="text" placeholder='Enter Title' onChange={handleChange} value={formData.title} />
          <label htmlFor="thumbnail">Thumbnail Image:</label>
          <input ref={thumbnailRef} id='thumbnail' name='thumbnail' type="file" placeholder='Title'/>
          <label htmlFor="photos">Select Photos:</label>
          <input ref={photosRef} id='photos' name='photos' type="file"  placeholder='Title' multiple/>
          <button disabled={isLoading} id='album-submit-button' type='submit'>{isLoading ? 'Creating Album...' : 'SUBMIT'}</button>
        </form>
      </div>
    </div>
  );
}