import './AlbumThumbnail.css';
import { Link } from 'react-router-dom';
import Line from '../Line/Line';
import Fancybox from '../FancyBox/FancyBox';
import Photo from '../Photo/Photo';

export default function AlbumThumbnail({album, setAlbums, user}) {
  const Photos = album.photos.map((p) => <Photo img={p} />);

  return (
    <div className='album-thumbnail'>
      <Link className='edit-album-btn' to={`/album/${album._id}`}>
        <button className='admin-button warning'>Edit Album</button>
      </Link>
      <h1>{album.title}</h1>
          <Fancybox newClass='fancybox-thumbnail'>
            <img data-fancybox src={album.thumbnail} alt="" />
            {Photos}
          </Fancybox>
      <Line />
    </div>
  )
}