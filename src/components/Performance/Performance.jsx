import './Performance.css';
import Fancybox from '../FancyBox/FancyBox';

export default function Performance() {

  function handleClick() {
    Fancybox.fromSelector('[data-fancybox="performance"]');
  }

  return (
    <div id='performance'>
        <img data-fancybox='performance' src="https://i.imgur.com/raT7EFb.jpg" alt="" />
        <img data-fancybox='performance' src="https://i.imgur.com/raT7EFb.jpg" alt="" />
        <img data-fancybox='performance' src="https://i.imgur.com/raT7EFb.jpg" alt="" />
        <img data-fancybox='performance' src="https://i.imgur.com/raT7EFb.jpg" alt="" />
        <img data-fancybox='performance' src="https://i.imgur.com/raT7EFb.jpg" alt="" />
        <img data-fancybox='performance' src="https://i.imgur.com/raT7EFb.jpg" alt="" />
    </div>
  )
}