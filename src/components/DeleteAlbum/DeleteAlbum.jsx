import './DeleteAlbum.css';
import { deleteAlbum } from '../../utilities/albums-api';

export default function DeleteAlbum({ user, setAlbums, album, setHidden }) {

  function handleClose() {
    setHidden(true);
  }

  async function handleDelete() {
    if (user) {
      const albums = await deleteAlbum(album._id);
      setAlbums(albums);
    };
    setHidden(true);
  }

  return (
    <div id='delete-album'>
      <div id='delete-album-message'>
        <h1>Are you sure you want to delete {album.title}?</h1>
        <button onClick={handleDelete} className='confirm-delete-btn success'>CONFIRM</button>
        <button onClick={handleClose} className='cancel-delete-btn warning'>CANCEL</button>
      </div>
    </div>
  )
}