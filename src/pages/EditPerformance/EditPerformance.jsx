import './EditPerformance.css';
import { useEffect, useState, useRef } from 'react';
import { getPerformance, addPhotos } from '../../utilities/performance-api';
import { Link } from 'react-router-dom';
import Fancybox from '../../components/FancyBox/FancyBox';
import Photo from '../../components/Photo/Photo';

export default function EditPerformance() {
  const [performance, setPerformance] = useState();
  const [isLoading, setLoading] = useState(false);

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

  if (performance) {
    const Photos = performance.photos.map((p) => <Photo img={p} setPerformance={setPerformance} performance={performance} />);
  
    return (
      <div id="edit-performance">
        <Link to='/'>
          <button className='cancel-edit-album-btn warning'>CANCEL</button>
        </Link>
        <div id="edit-performance-header">
          <h1>Performance</h1>
          <form onSubmit={handleSubmit} id='performance-form'>
            <div id='add-performance-photos'>
              <label htmlFor="performance-photos-input">Add More Photos:</label>
              <input ref={photosRef} id='performance-photos-input' type="file" multiple />
            </div>
            <button type='submit' className='submit-performance-btn success'>Submit Photos</button>
          </form>
        </div>
        <Fancybox newClass='fancybox-container'>
          {Photos}
        </Fancybox>
      </div>
    );
  }
}