import './Resume.css';
import React, { useState, useEffect } from 'react';
import { getResumes } from '../../utilities/resumes-api';
import Line from '../../components/Line/Line';
import Header from '../../components/Header/Header';
import EditResumePDF from '../../components/EditResumePDF/EditResumePDF';

export default function Resume({setter, closed, setDisabled, currentRef, user}) {
  const [resume, setResume] = useState(null);
  const [isEditing, setEditing] = useState({
    choreo: false,
    perf: false
  });

  useEffect(function () {
    async function fetchResumes() {
      const resume = await getResumes();
      setResume(resume);
    }
    fetchResumes();
  }, []);

  function handleClick(type) {
    setEditing({
      ...isEditing,
      [type]: !isEditing[type]
    });
  }

  if(resume) {
    return (
      <div id="resume-bg">
        <div className='tab-page' id='resume'>
          <Header black title='Resumes' page='resume' setter={setter} closed={closed} currentRef={currentRef} setDisabled={setDisabled} />
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
                  <EditResumePDF handleClick={handleClick} setResume={setResume} type='choreo' />
                  :
                  <>
                    <a href={resume.choreo} target='_blank' rel="noreferrer">
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
                  <EditResumePDF handleClick={handleClick} setResume={setResume} type='perf'/>
                  :
                  <>
                    <a href={resume.perf} target='_blank' rel="noreferrer">
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
    );
  };
}
