import './Photo.css';
import { useState, useEffect } from 'react';
import Line from '../Line/Line';
import { deletePhoto, updatePhotoOrder } from '../../utilities/albums-api';
import { deletePerfPhoto, updateOrder } from '../../utilities/performance-api';

export default function Photo({ img, order, album, setAlbum, performance, setPerformance, editOrder, dataFancybox }) {
  const [newOrder, setNewOrder] = useState(order);
  const [handle, setHandle] = useState(0);

  useEffect(function() {
    if (handle) {
      if (album){
        async function changeAlbumOrder() {
          const adjOrder = newOrder;
          if (newOrder) {
            const prevOrder = order;
            const newAlbum = await updatePhotoOrder(album._id, { prevOrder: prevOrder, order: adjOrder });
            setAlbum(newAlbum);
          }
        }
        changeAlbumOrder();
      } else {
        async function changePerformanceOrder() {
          const adjOrder = newOrder;
          if (newOrder) {
            const prevOrder = order;
            const newPerformance = await updateOrder(performance._id, { prevOrder: prevOrder, order: adjOrder });
            setAlbum(newPerformance);
          }
        }
        changePerformanceOrder();
      }
    }
  }, [handle]);

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

  function handleOrder(evt) {
    const value = evt.target.value;
    if ((value < 1) || value > album.gallery.length) setNewOrder('');
    else setNewOrder(value);
    setHandle(handle + 1);
  }

  return (
    <div className='photo-thumbnail'>
      <div className='photo-thumbnail-img'>
        <button onClick={handleDelete} className='delete-photo-btn danger'>DELETE</button>
        {
        editOrder
        ?
        <input className='order-input' type='number' min={1} max={album.photos.length} onChange={handleOrder} value={newOrder}></input>
        :
        null
        }
        <img src={img} data-fancybox='choreo' alt="" />
      </div>
      <Line />
    </div>
  )
}