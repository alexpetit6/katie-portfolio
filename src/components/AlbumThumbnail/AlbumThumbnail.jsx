import './AlbumThumbnail.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateOrder } from '../../utilities/albums-api';
import Line from '../Line/Line';
import Fancybox from '../FancyBox/FancyBox';
import DeleteAlbum from '../DeleteAlbum/DeleteAlbum';
import { update } from '../../utilities/about-api';

export default function AlbumThumbnail({album, setAlbums, user, editOrder}) {
  const [hidden, setHidden] = useState(true);
  const [order, setOrder] = useState(album.order);
  const [handle, setHandle] = useState(0);

  useEffect(function() {
    if (handle) {
      async function changeOrder() {
        if (order || order === 0) {
          const prevOrder = album.order;
          const albums = await updateOrder(album._id, { prevOrder: prevOrder, order: order });
          setAlbums(albums);
        }
      }
      changeOrder();
    } else return;
  }, [handle]);

  function handleClick() {
    if (user) {
      setHidden(false);
    };
  }

  function handleOrder(evt) {
    console.log('handling');
    setOrder(evt.target.value);
    setHandle(handle + 1);
    // if ( value || value === 0 ) {
    //   console.log('value', value);
    //   const prevOrder = album.order;
    //   setOrder(value);
    //   console.log('order', order)
    //   const albums = await updateOrder(album._id, { prevOrder: prevOrder, order: order });
    //   setAlbums(albums);
    // } else {
    //   setOrder(value);
    // }
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
        <input className='order-input' type='number' min={0} onChange={handleOrder} value={order}></input>
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