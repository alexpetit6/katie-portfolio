import './AlbumThumbnail.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Line from '../Line/Line';
import Fancybox from '../FancyBox/FancyBox';
import DeleteAlbum from '../DeleteAlbum/DeleteAlbum';

export default function AlbumThumbnail({album, setAlbums, user}) {
  const [hidden, setHidden] = useState(true);

  function handleClick() {
    if (user) {
      setHidden(false);
    };
  }

  const Photos = album.photos.map((p) => <img key={p} src={p} data-fancybox={album._id} loading='lazy'/>);

  return (
    hidden
    ?
    <div className='album-thumbnail'>
      {
      user
      ?
      <>
      <Link className='edit-album-btn' to={`/album/${album._id}`}>
        <button className='admin-button warning'>Edit Album</button>
      </Link>
      <button onClick={handleClick} className='delete-album-btn admin-button danger'>DELETE</button>
      </>
      :
      null
      }
      <h1>{album.title}</h1>
      <Fancybox newClass='fancybox-thumbnail'>
        <img data-fancybox-trigger={album._id} src={album.thumbnail} alt="" />
        {Photos}
      </Fancybox>
      <h3 className='album-subtitles'>{album.role}, {album.theater}</h3>
      <Line />
    </div>
    :
    <DeleteAlbum user={user} setAlbums={setAlbums} album={album} setHidden={setHidden} hidden={hidden}/>
  )
}