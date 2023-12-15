import './EditResumePDF.css';
import React, { useRef, useState } from 'react';
import { updateResume } from '../../utilities/resumes-api';


export default function EditResumePDF({handleClick, setResume, type}) {
  const [isLoading, setLoading] = useState(false);

  const pdfRef = useRef(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    const newFormData = new FormData();
    newFormData.append(type, pdfRef.current.files[0]);
    const updatedResume = await updateResume(newFormData);
    setResume(updatedResume);
    setLoading(false);
  }

  return (
    <div className="edit-resume">
      <form onSubmit={handleSubmit} className='edit-resume-form'>
        <label htmlFor="pdf-input">Change PDF:</label>
        <input ref={pdfRef} id='pdf-input' type="file" accept='.pdf'/>
        <button type='submit' className='submit-resume-btn success' disabled={isLoading}>{isLoading ? 'Uploading...' : 'Upload PDF'}</button>
      </form>
      <button onClick={() => handleClick(type)} className='stop-edit-resume-btn warning'>CANCEL</button>
    </div>
  )
}