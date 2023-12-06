import './Photo.css';
import Line from '../Line/Line';

export default function Photo({ img }) {
  return (
    <div className='photo-thumbnail'>
      <div className='photo-thumbnail-img'>
        <img src={img} alt="" />
      </div>
      <Line />
    </div>
  )
}