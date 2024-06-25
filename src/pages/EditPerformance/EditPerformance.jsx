import './EditPerformance.css';
import React, { useEffect, useState, useRef } from 'react';
import { getPerformance, addPhotos } from '../../utilities/performance-api';
import { Link } from 'react-router-dom';
import Fancybox from '../../components/FancyBox/FancyBox';
import Photo from '../../components/Photo/Photo';

export default function EditPerformance() {
  const [performance, setPerformance] = useState();
  const [isLoading, setLoading] = useState(false);
  const [editOrder, setEditOrder] = useState(false);


  const photosRef = useRef(null);

  useEffect(function() {
    async function getPerf() {
      const performance = await getPerformance();
      setPerformance(performance);
    }
    getPerf();
  }, []);

  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    const newFormData = new FormData();
    if (photosRef.current) {
      for (let i = 0; i < photosRef.current.files.length; i++) {
        newFormData.append('photos', photosRef.current.files[i]);
      };
    };
    const updatedPerformance = await addPhotos(newFormData);
    setPerformance(updatedPerformance);
    setLoading(false);
  }

  function handleEditOrder(evt) {
    evt.preventDefault();
    setEditOrder(!editOrder);
  }

  if (performance) {
    const sortedPhotos = performance.gallery.sort((a, b) => a.order - b.order);
    const Photos = sortedPhotos.map((p) => <Photo img={p.url} order={p.order} editOrder={editOrder} setPerformance={setPerformance} performance={performance} key={p._id} />);
  
    return (
      <div id="edit-performance">
        <Link to='/'>
          <button className='cancel-edit-album-btn warning'>CANCEL</button>
        </Link>
        <button onClick={handleEditOrder} id='photo-order-btn' className='warning'>Change Photo Order</button>
        <div id="edit-performance-header">
          <h1>Performance</h1>
          <form onSubmit={handleSubmit} id='performance-form'>
            <div id='add-performance-photos'>
              <label htmlFor="performance-photos-input">Add More Photos:</label>
              <input ref={photosRef} id='performance-photos-input' type="file" accept='jpg, jpeg' multiple />
            </div>
            <button type='submit' className='submit-performance-btn success' disabled={isLoading}>{isLoading ? 'Uploading Photos...' : 'Upload Photos'}</button>
          </form>
        </div>
        <Fancybox newClass='fancybox-container'>
          {Photos}
        </Fancybox>
      </div>
    );
  }
}