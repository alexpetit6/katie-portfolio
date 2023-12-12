import './Contact.css';
import React, { useState } from 'react'
import { sendEmail } from '../../utilities/emails-api';
import Header from '../../components/Header/Header';
import Line from '../../components/Line/Line';

export default function Contact({currentRef, setter, closed}) {
  const baseData = {
    name: '',
    email: '',
    subject: '',
    msg: '',
  };

  const [formData, setFormData] = useState(baseData);
  const [isLoading, setLoading] = useState(false);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }
    
  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    const success = await sendEmail(formData);
    setLoading(false);
  }

  return (
    <div id="contact-bg">
      <div id="contact">
        <Header title='Contact' page='contact' currentRef={currentRef} setter={setter} closed={closed} />
        <Line />
        <form onSubmit={handleSubmit} id='contact-form'>
          <input name='name' onChange={handleChange} value={formData.name} type="text" placeholder='Name *' />
          <input name='email' onChange={handleChange} value={formData.email} type="text" placeholder='Email *' />
          <input name='subject' onChange={handleChange} value={formData.subject} type="text" placeholder='Subject' />
          <textarea name='msg' onChange={handleChange} value={formData.msg} placeholder='Message' />
          <button type='submit' className='user-btn'>Send <i className="fa-regular fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  )
}