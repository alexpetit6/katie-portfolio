import './Resume.css';
import { useState } from 'react';
import Line from '../../components/Line/Line';
import Header from '../../components/Header/Header';
import EditResumePDF from '../../components/EditResumePDF/EditResumePDF';

export default function Resume({setter, closed, currentRef, user}) {
  const [isEditing, setEditing] = useState({
    choreo: false,
    perf: false
  });

  function handleClick(type) {
    setEditing({
      ...isEditing,
      [type]: !isEditing[type]
    });
  }

  return (
    <div id="resume-bg">
      <div className='tab-page' id='resume'>
        <Header title='Resumes' page='resume' setter={setter} closed={closed} currentRef={currentRef} />
        <Line />
        <div id='resume-frame'>
          <div className="corner-border" id='corner-border-1'></div>
          <div className="corner-border" id='corner-border-2'></div>
          <div className="corner-border" id='corner-border-3'></div>
          <div className="corner-border" id='corner-border-4'></div>
          <div id='resume-container'>
            <div>
              <h3>Choreography</h3>
              <i className="fa-regular fa-file-pdf" ></i>
              {
                isEditing.choreo
                ?
                <EditResumePDF handleClick={handleClick} type='choreo' />
                :
                <>
                  <a href="https://sei-chum-bucket.s3.us-west-2.amazonaws.com/choreography-resume.pdf" target='_blank' rel="noreferrer">
                    <button className='view-pdf'>View & Download</button>
                  </a>
                  {user ? <button onClick={() => handleClick('choreo')} className='edit-resume-btn admin-button warning'>Change PDF</button>: null}
                </>
              }

            </div>
            <div>
              <h3>Performance</h3>
              <i className="fa-regular fa-file-pdf" ></i>
              {
                isEditing.perf
                ?
                <EditResumePDF handleClick={handleClick} type='perf'/>
                :
                <>
                  <a href="https://sei-chum-bucket.s3.us-west-2.amazonaws.com/performance-resume.pdf" target='_blank' rel="noreferrer">
                    <button className='view-pdf'>View & Download</button>
                  </a>
                  {user ? <button onClick={() => handleClick('perf')} className='edit-resume-btn admin-button warning'>Change PDF</button>: null}
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}