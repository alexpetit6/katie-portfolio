import './Photo.css';
import Line from '../Line/Line';
import { deletePhoto } from '../../utilities/albums-api';

export default function Photo({ img, album, setAlbum }) {

  async function handleDelete() {
    const updatedAlbum = await deletePhoto(album._id, {url: img});
    setAlbum(updatedAlbum);
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