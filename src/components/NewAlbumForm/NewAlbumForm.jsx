import './NewAlbumForm.css';
import { useState, useRef } from 'react';

export default function NewAlbumForm({category}) {
  // const { albumId } = useParams();

  const baseData = {
    title: '',
    category: category
  };

  const [formData, setFormData] = useState(baseData);

  const thumbnailRef = useRef(null);
  const photosRef = useRef(null);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  return (
    <div id='new-album'>
      <div id='new-album-container'>
        <form id='album-form'>
          <input id='title-input' name='title' type="text" placeholder='Title' onChange={handleChange}/>
          <label htmlFor="thumbnail">Thumbnail Image:</label>
          <input ref={thumbnailRef} id='thumbnail' name='thumbnail' type="file" placeholder='Title'/>
          <label htmlFor="photos">Select Photos:</label>
          <input ref={photosRef} id='photos' name='photos' type="file"  placeholder='Title' multiple/>
          <button id='album-submit-button' type='submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}