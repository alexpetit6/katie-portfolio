import './Accordion.css';
import Resume from '../../pages/Resume/Resume';
import { useRef } from 'react';

export default function Accordion() {
  const aboutRef = useRef(null);
  const choreoRef = useRef(null);
  const perfRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    about: aboutRef,
    choreo: choreoRef,
    perf: perfRef,
    resume: resumeRef,
    contact: contactRef
  }

  function handleExpand(page) {
    refs[page].current.style.height = 'auto';
  }

  return (
    <div id='accordion'>
      <div onClick={() => handleExpand('about')} ref={aboutRef}  className="accordion-tab" id='about-tab'>
        <div className="tab-title"><h1>About</h1></div>
      </div>
      <div onClick={() => handleExpand('choreo')} ref={choreoRef} className="accordion-tab" id='choreographer-tab'>
        <div className="tab-title"><h1>Choreography</h1></div>
      </div>
      <div onClick={() => handleExpand('perf')} ref={perfRef} className="accordion-tab" id='performance-tab'>
        <div className="tab-title"><h1>Performance</h1></div>
      </div>
      <div onClick={() => handleExpand('resume')} ref={resumeRef} className="accordion-tab" id='resume-tab'>
        <div className="tab-title"><h1>Resumes</h1></div>
        <Resume />
      </div>
      <div onClick={() => handleExpand('contact')} ref={contactRef} className="accordion-tab" id='contact-tab'>
        <div className="tab-title"><h1>Contact</h1></div>
      </div>
    </div>
  )
}