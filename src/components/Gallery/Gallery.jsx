import './Gallery.css';
import Fancybox from '../FancyBox/FancyBox';
import Photo from '../Photo/Photo';
import Header from '../Header/Header';
import Line from '../Line/Line';

export default function Gallery({title}) {
  return(
    <div className="gallery">
      <Header title={title} />
      <div className="triple-line"><Line/><Line/><Line/></div>
      <Fancybox newClass='fancybox-container'>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </Fancybox>

    </div>

  ) 
}