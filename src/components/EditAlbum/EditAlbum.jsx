import './EditAlbum.css';
import Fancybox from '../FancyBox/FancyBox';
import Line from '../Line/Line';

export default function EditAlbum({Photos, album, setEditing, user}) {
  function handleStopEdit() {
    setEditing(false);
  }

  return (
    <div className='edit-album'>
      <button onClick={handleStopEdit} className='cancel-edit-album-btn warning'>CANCEL</button>
      <form className='edit-album-form'>
        <input id='add-photos-input' type="file" multiple />
        <input id='edit-title-input' type="text" placeholder={album.title} />
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