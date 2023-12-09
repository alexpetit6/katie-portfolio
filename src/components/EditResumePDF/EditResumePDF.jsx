import './EditResumePDF.css';

export default function EditResumePDF({handleClick, type}) {


  return (
    <div className="edit-resume">
      <form className='edit-resume-form'>
        <label htmlFor="pdf-input">Change PDF:</label>
        <input id='pdf-input' type="file" />
        <button className='submit-resume-btn success'>Upload PDF</button>
      </form>
      <button onClick={() => handleClick(type)} className='stop-edit-resume-btn warning'>CANCEL</button>
    </div>
  )
}