import './AlbumThumbnail.css';
import { Link } from 'react-router-dom';
import Line from '../Line/Line';

export default function AlbumThumbnail({album, setAlbums, user}) {
  return (
    <div className='album-thumbnail'>
      <h1>{album.title}</h1>
      <Link id='album-link' to={`/album/${album._id}`}>
        <div className='album-thumbnail-img'>
          <img src={album.thumbnail} alt="" />
        </div>
      </Link>
      <Line />
    </div>
  )
}