import './Gallery.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { albumDetail } from '../../utilities/albums-api';
import Fancybox from '../FancyBox/FancyBox';
import Photo from '../Photo/Photo';
import Header from '../Header/Header';
import Line from '../Line/Line';

export default function Gallery({title}) {
  const [album, setAlbum] = useState();

  const { albumId } = useParams();

  useEffect(function() {
    async function getAlbum() {
      const e = await albumDetail(albumId);
      setAlbum(e);
    }
    getAlbum();
  }, []);
  
  
  if(album) {
    const Photos = album.photos.map((p) => <Photo img={p} />);
    
    return(
      <div className="gallery">
        <Header title={title} />
        <div className="triple-line"><Line/><Line/><Line/></div>
        <Fancybox newClass='fancybox-container'>
          {Photos}
        </Fancybox>
  
      </div>
  
    ) 
  }
}