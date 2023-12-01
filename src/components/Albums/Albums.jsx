import './Albums.css';
import AlbumThumbnail from '../AlbumThumbnail/AlbumThumbnail';

export default function Albums() {
  return(
    <div className="albums">
      <AlbumThumbnail />
      <AlbumThumbnail />
      <AlbumThumbnail />
      <AlbumThumbnail />
    </div>

  ) 
}