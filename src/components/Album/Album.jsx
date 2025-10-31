import './Album.css';
import React, { useState, useEffect } from 'react';
import { getAlbums } from '../../utilities/albums-api';
import Header from '../Header/Header';
import Line from '../Line/Line';
import AlbumThumbnail from '../AlbumThumbnail/AlbumThumbnail';
import OpenAlbumForm from '../OpenAlbumForm/OpenAlbumForm';


export default function Album({title, currentRef, setter, setDisabled, closed, page, user}) {
  const [albums, setAlbums] = useState([]);
  const [editOrder, setEditOrder] = useState(false);

  useEffect(function() {
    async function getAllAlbums() {
      const allAlbums = await getAlbums();
      setAlbums(allAlbums)
    }
    getAllAlbums();
  }, [])

  const AlbumThumbnails = albums.map(a => <AlbumThumbnail album={a} key={a._id} albums={albums} setAlbums={setAlbums} user={user} editOrder={editOrder} />)

  function handleEditOrder() {
    setEditOrder(!editOrder);
  }

  return(
    <div id="album-bg">
      {/* If performance gallery gets implemented background img and color will need to be set dynamically */}
      <div className="album">
        <Header 
          title={title} 
          currentRef={currentRef} 
          setter={setter}
          setDisabled={setDisabled} 
          closed={closed} 
          page={page} 
        />
        {
        user 
        ?
        <button className='admin-button warning' id='edit-order-btn' onClick={handleEditOrder}>EDIT ORDER</button>
        : 
        null
        }
        <OpenAlbumForm user={user} setAlbums={setAlbums}/>
        <div className="double-line"><Line /><Line /></div>
        <div className="album-thumbnails-container">
          {AlbumThumbnails}
        </div>
      </div>
    </div>

  ) 
}