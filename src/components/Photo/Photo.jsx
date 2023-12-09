import './Photo.css';
import Line from '../Line/Line';
import { deletePhoto } from '../../utilities/albums-api';
import { deletePerfPhoto } from '../../utilities/performance-api';

export default function Photo({ img, album, setAlbum, performance, setPerformance }) {

  async function handleDelete() {
    if (album) {
      const updatedAlbum = await deletePhoto(album._id, {url: img});
      setAlbum(updatedAlbum);
    };
    if (performance) {
      const updatedPerformance = await deletePerfPhoto({url: img});
      setPerformance(updatedPerformance);
    };
  }

  return (
    <div className='photo-thumbnail'>
      <div className='photo-thumbnail-img'>
        <button onClick={handleDelete} className='delete-photo-btn danger'>DELETE</button>
        <img src={img} data-fancybox alt="" />
      </div>
      <Line />
    </div>
  )
}