import './Album.css';
import { useState, useEffect } from 'react';
import { getAlbums } from '../../utilities/albums-api';
import Header from '../Header/Header';
import Line from '../Line/Line';
import AlbumThumbnail from '../AlbumThumbnail/AlbumThumbnail';
import OpenAlbumForm from '../OpenAlbumForm/OpenAlbumForm';


export default function Album({title, currentRef, setter, closed, page, user}) {
  const [albums, setAlbums] = useState([]);

  useEffect(function() {
    async function getAllAlbums() {
      const allAlbums = await getAlbums();
      setAlbums(allAlbums)
    }
    getAllAlbums();
  }, [])

  const AlbumThumbnails = albums.map(a => <AlbumThumbnail album={a} key={a.id} setAlbums={setAlbums} user={user} />)

  return(
    <div className="album">
      <Header 
        title={title} 
        currentRef={currentRef} 
        setter={setter} 
        closed={closed} 
        page={page} 
      />
      <OpenAlbumForm user={user} />
      <div className="double-line"><Line /><Line /></div>
      <div className="album-thumbnails-container">
        {AlbumThumbnails}
      </div>
    </div>

  ) 
}