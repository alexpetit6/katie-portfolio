import './OpenAlbumForm.css';
import { useState } from 'react';
import NewAlbumForm from '../NewAlbumForm/NewAlbumForm';

export default function OpenAlbumForm({user}) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <div className="open-album-form">
      {user ? <button onClick={handleClick} className='admin-button open-album-btn success'>Add Album</button> : null}
      <NewAlbumForm hidden={open ? false : true} setOpen={setOpen} />
    </div>
  )
}