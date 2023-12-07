import './AlbumThumbnail.css';
import { Link } from 'react-router-dom';
import Line from '../Line/Line';
import Fancybox from '../FancyBox/FancyBox';
import Photo from '../Photo/Photo';

export default function AlbumThumbnail({album, setAlbums, user}) {
  const Photos = album.photos.map((p) => <Photo img={p} />);

  return (
    <div className='album-thumbnail'>
      <Link to={`/album/${album._id}`}><button className='edit-album-btn admin-button warning'>Edit Album</button></Link>
      <h1>{album.title}</h1>
        {/* <div className='album-thumbnail-img'> */}
          <Fancybox newClass='fancybox-thumbnail'>
            <img data-fancybox src={album.thumbnail} alt="" />
            {Photos}
          </Fancybox>
        {/* </div> */}
      {/* <Link id='album-link' to={`/album/${album._id}`}>
        <div className='album-thumbnail-img'>
          <img src={album.thumbnail} alt="" />
        </div>
      </Link> */}
      <Line />
    </div>
  )
}