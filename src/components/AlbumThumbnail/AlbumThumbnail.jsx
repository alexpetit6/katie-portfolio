import './AlbumThumbnail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Line from '../Line/Line';
import Fancybox from '../FancyBox/FancyBox';
import Photo from '../Photo/Photo';
import DeleteAlbum from '../DeleteAlbum/DeleteAlbum';

export default function AlbumThumbnail({album, setAlbums, user}) {
  const [hidden, setHidden] = useState(true);

  function handleClick() {
    if (user) {
      document.body.style.overflow = 'hidden';
      setHidden(false);
    }
  }

  const Photos = album.photos.map((p) => <Photo img={p} />);

  return (
    hidden
    ?
    <div className='album-thumbnail'>
      {
      user
      ?
      <>
      <Link className='edit-album-btn' to={`/album/${album._id}`}>
        <button className='admin-button warning'>Edit Album</button>
      </Link>
      <button onClick={handleClick} className='delete-album-btn admin-button danger'>DELETE</button>
      </>
      :
      null
      }
      <h1>{album.title}</h1>
          <Fancybox newClass='fancybox-thumbnail'>
            <img data-fancybox src={album.thumbnail} alt="" />
            {Photos}
          </Fancybox>
      <Line />
    </div>
    :
    <DeleteAlbum user={user} setAlbum={setAlbums} album={album} setHidden={setHidden} hidden={hidden}/>
  )
}