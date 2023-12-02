import './AlbumThumbnail.css';
import Line from '../Line/Line';

export default function AlbumThumbnail() {
  return (
    <div className='album-thumbnail'>
      <h1>Book of Mormon</h1>
      <div className='album-thumbnail-img'>
        <img src="https://i.imgur.com/Rls5q4N.jpg" alt="" />
      </div>
      <Line />
    </div>
  )
}