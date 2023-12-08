import './DeleteAlbum.css';

export default function DeleteAlbum({ user, setAlbum, album, setHidden, hidden }) {

  function handleClose() {
    setHidden(true);
  }

  return (
    <div id='delete-album'>
      <div id='delete-album-message'>
        <h1>Are you sure you want to delete {album.title}?</h1>
        <button className='confirm-delete-btn success'>CONFIRM</button>
        <button onClick={handleClose} className='cancel-delete-btn warning'>CANCEL</button>
      </div>
    </div>
  )
}