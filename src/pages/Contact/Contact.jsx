import './Contact.css';
import Header from '../../components/Header/Header';
import Line from '../../components/Line/Line';

export default function Contact({currentRef, setter, closed}) {
  return (
    <div id="contact-bg">
      <div id="contact">
        <Header title='Contact' page='contact' currentRef={currentRef} setter={setter} closed={closed} />
        <Line />
        <form id='contact-form'>
          <input type="text" placeholder='Name *' />
          <input type="text" placeholder='Email *' />
          <input type="text" placeholder='Subject' />
          <textarea placeholder='Message' />
          <button className='user-btn'>Send <i className="fa-regular fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  )
}