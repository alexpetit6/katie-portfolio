import './Photo.css';
import Line from '../Line/Line';

export default function Photo({ img, isEditing }) {
  return (
    <div className='photo-thumbnail'>
      <div className='photo-thumbnail-img'>
        {isEditing ? <button className='delete-photo-btn danger'>DELETE</button> : null}
        <img src={img} data-fancybox alt="" />
      </div>
      <Line />
    </div>
  )
}