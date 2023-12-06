import './AlbumThumbnail.css';
import Line from '../Line/Line';

export default function AlbumThumbnail({album, setAlbums, user}) {
  return (
    <div className='album-thumbnail'>
      <h1>{album.title}</h1>
      <div className='album-thumbnail-img'>
        <img src={album.thumbnail} alt="" />
      </div>
      <Line />
    </div>
  )
}