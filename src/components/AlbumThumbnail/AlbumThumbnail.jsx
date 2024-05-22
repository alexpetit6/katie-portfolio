import './AlbumThumbnail.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateOrder } from '../../utilities/albums-api';
import Line from '../Line/Line';
import Fancybox from '../FancyBox/FancyBox';
import DeleteAlbum from '../DeleteAlbum/DeleteAlbum';

export default function AlbumThumbnail({album, albums, setAlbums, user, editOrder}) {
  const [hidden, setHidden] = useState(true);
  const [order, setOrder] = useState(album.order + 1);
  const [handle, setHandle] = useState(0);

  useEffect(function() {
    if (handle) {
      async function changeOrder() {
        const adjOrder = order - 1;
        if (order) {
          const prevOrder = album.order;
          const albums = await updateOrder(album._id, { prevOrder: prevOrder, order: adjOrder });
          setAlbums(albums);
        }
      }
      changeOrder();
    }
  }, [handle]);

  useEffect(function() {
    setOrder(album.order + 1);
  }, [album]);

  function handleClick() {
    if (user) {
      setHidden(false);
    };
  }

  function handleOrder(evt) {
    const value = evt.target.value;
    if ((value < 1 && value !== '') || value > albums.length) setOrder('');
    else setOrder(value);
    setHandle(handle + 1);
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
      {
        editOrder
        ?
        <input className='order-input' type='number' min={1} max={albums.length} onChange={handleOrder} value={order}></input>
        :
        null
      }
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