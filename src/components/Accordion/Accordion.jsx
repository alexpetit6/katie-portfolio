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
      <div ref={aboutRef}  className={closed.about ? 'closed-tab' : 'open-tab'} id='about-tab'>
        <div onClick={() => handleExpand('about')} className="tab-title"><h1>About</h1></div>
      </div>
      <div ref={choreoRef} className={closed.choreo ? 'closed-tab' : 'open-tab'} id='choreographer-tab'>
        <div onClick={() => handleExpand('choreo')} className="tab-title"><h1>Choreography</h1></div>
      </div>
      <div ref={perfRef} className={closed.perf ? 'closed-tab' : 'open-tab'} id='performance-tab'>
        <div onClick={() => handleExpand('perf')} className="tab-title"><h1>Performance</h1></div>
      </div>
      <div ref={resumeRef} className={closed.resume ? 'closed-tab' : 'open-tab'} id='resume-tab'>
        <div onClick={() => handleExpand('resume')} className="tab-title"><h1>Resumes</h1></div>
        <Resume setter={setClosed} closed={closed} />
      </div>
      <div ref={contactRef} className={closed.contact ? 'closed-tab' : 'open-tab'} id='contact-tab'>
        <div onClick={() => handleExpand('contact')} className="tab-title"><h1>Contact</h1></div>
      </div>
    </div>
  )
}