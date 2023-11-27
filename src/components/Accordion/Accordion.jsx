import './Accordion.css';
import Resume from '../../pages/Resume/Resume';
import { useRef, useState } from 'react';

export default function Accordion() {
  const [closed, setClosed] = useState({
    about: true,
    choreo: true,
    perf: true,
    resume: true,
    contact: true,
  });

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
  };

  function handleExpand(page) {
    setClosed({
      ...closed,
      [page]: false
    });

    function scroll() {
      const portPos = refs[page].current.getBoundingClientRect().y;
      window.scrollBy({
        top: portPos,
        left: 0,
        behavior: 'smooth'
      });
    }
    setTimeout(scroll, 1);
  }

  return (
    <div id='accordion'>
      <div onClick={() => handleExpand('about')} ref={aboutRef}  className={closed.about ? 'closed-tab' : 'open-tab'} id='about-tab'>
        <div className="tab-title"><h1>About</h1></div>
      </div>
      <div onClick={() => handleExpand('choreo')} ref={choreoRef} className={closed.choreo ? 'closed-tab' : 'open-tab'} id='choreographer-tab'>
        <div className="tab-title"><h1>Choreography</h1></div>
      </div>
      <div onClick={() => handleExpand('perf')} ref={perfRef} className={closed.perf ? 'closed-tab' : 'open-tab'} id='performance-tab'>
        <div className="tab-title"><h1>Performance</h1></div>
      </div>
      <div onClick={() => handleExpand('resume')} ref={resumeRef} className={closed.resume ? 'closed-tab' : 'open-tab'} id='resume-tab'>
        <div className="tab-title"><h1>Resumes</h1></div>
        <Resume />
      </div>
      <div onClick={() => handleExpand('contact')} ref={contactRef} className={closed.contact ? 'closed-tab' : 'open-tab'} id='contact-tab'>
        <div className="tab-title"><h1>Contact</h1></div>
      </div>
    </div>
  )
}