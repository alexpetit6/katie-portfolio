import './Photo.css';
import Line from '../Line/Line';

export default function Photo() {
  return (
    <div className='photo-thumbnail'>
      <div className='photo-thumbnail-img'>
        <img src="https://i.imgur.com/Rls5q4N.jpg" alt="" />
      </div>
      <Line />
    </div>
  )
}