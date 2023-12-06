import './AlbumDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { albumDetail } from '../../utilities/albums-api';
import Fancybox from '../FancyBox/FancyBox';
import Photo from '../Photo/Photo';
import Header from '../Header/Header';
import Line from '../Line/Line';

export default function Gallery({user}) {
  const [album, setAlbum] = useState();

  const { albumId } = useParams();

  useEffect(function() {
    async function getAlbum() {
      const e = await albumDetail(albumId);
      setAlbum(e);
    }
    getAlbum();
  }, []);

  function handleEdit() {
    return
  }
  
  
  if(album) {
    const Photos = album.photos.map((p) => <Photo img={p} />);
    
    return(
      <div className="album-detail">
        <Header title={album.title} />
        {user ? <button onClick={handleEdit} className='edit-album-btn admin-button warning'>Edit Album</button> : null}
        <div className="triple-line"><Line/><Line/><Line/></div>
        <Fancybox newClass='fancybox-container'>
          {Photos}
        </Fancybox>
      </div>
  
    ) 
  }
}