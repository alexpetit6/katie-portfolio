import './Album.css';
import Header from '../Header/Header';
import Line from '../Line/Line';
import AlbumThumbnail from '../AlbumThumbnail/AlbumThumbnail';
import OpenAlbumForm from '../OpenAlbumForm/OpenAlbumForm';


export default function Album({title, currentRef, setter, closed, page, user}) {
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
        <AlbumThumbnail />
        <AlbumThumbnail />
        <AlbumThumbnail />
        <AlbumThumbnail />
      </div>
    </div>

  ) 
}