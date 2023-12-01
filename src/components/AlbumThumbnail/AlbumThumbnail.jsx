import './AlbumThumbnail.css';
import Line from '../Line/Line';

export default function AlbumThumbnail() {
  return (
    <div className='album-thumbnail'>
      <h1>Book of Mormon</h1>
      <img src="https://i.imgur.com/Rls5q4N.jpg" alt="" />
      <Line />
    </div>
  )
}