import './Contact.css';
import React, { useState, useRef } from 'react';
import { sendEmail } from '../../utilities/emails-api';
import Header from '../../components/Header/Header';
import Line from '../../components/Line/Line';

export default function Contact({currentRef, setter, closed, setDisabled}) {
  const baseData = {
    name: '',
    email: '',
    subject: '',
    msg: '',
  };

  const [formData, setFormData] = useState(baseData);
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const emailRef = useRef(null);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }
    
  async function handleSubmit(evt) {
    evt.preventDefault();
    const emailRegex = /^([a-z\d\.\-]+)@([a-z\d\-]+)(\.[a-z]{2,5})(\.[a-z]{2,5})?$/;
    if (emailRegex.test(emailRef.current.value)) {
      emailRef.current.style.border = '';
      setErrorMsg('');
      setLoading(true);
      setSuccess(false);
      await sendEmail(formData);
      setFormData(baseData);
      setLoading(false);
      setSuccess(true);
    } else {
      emailRef.current.style.outline = '3px solid red';
      setErrorMsg('Enter valid email');
    };
  }

  return (
    <div id="contact-bg">
      <div id="contact">
        <Header title='Contact' page='contact' currentRef={currentRef} setter={setter} closed={closed} setDisabled={setDisabled} />
        <Line />
        <h3 id='contact-error-msg'>{errorMsg}</h3>
        <form onSubmit={handleSubmit} id='contact-form'>
          <input name='name' onChange={handleChange} value={formData.name} type="text" placeholder='Name *' required/>
          <input ref={emailRef} name='email' onChange={handleChange} value={formData.email} type="text" placeholder='Email *' required/>
          <input name='subject' onChange={handleChange} value={formData.subject} type="text" placeholder='Subject' />
          <textarea name='msg' onChange={handleChange} value={formData.msg} placeholder='Message' />
          <button type='submit' className='user-btn'>
            {isLoading ? 'Sending...' : 'Send'} <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
        { success ? <h3 id='contact-success-msg'>Message Sent!</h3> : null }
        
      </div>
    </div>
  )
}