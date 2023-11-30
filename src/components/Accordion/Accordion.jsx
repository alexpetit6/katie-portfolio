import './Accordion.css';
import Resume from '../../pages/Resume/Resume';
import About from '../../pages/About/About';
import { useRef, useState } from 'react';

export default function Accordion() {
  const [closed, setClosed] = useState({
    about: 'closed-tab',
    choreo: 'closed-tab',
    perf: 'closed-tab',
    resume: 'closed-tab',
    contact: 'closed-tab',
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
    const current = refs[page].current;

    setClosed({
      ...closed,
      [page]: 'open-tab'
    });

    current.style.height = `calc(${current.scrollHeight}px - 20vh`;

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
      <div ref={aboutRef}  className={closed.about} id='about-tab'>
        <div onClick={() => handleExpand('about')} className="tab-title"><h1>About</h1></div>
      </div>
      <div ref={choreoRef} className={closed.choreo} id='choreographer-tab'>
        <div onClick={() => handleExpand('choreo')} className="tab-title"><h1>Choreography</h1></div>
      </div>
      <div ref={perfRef} className={closed.perf} id='performance-tab'>
        <div onClick={() => handleExpand('perf')} className="tab-title"><h1>Performance</h1></div>
      </div>
      <div ref={resumeRef} className={closed.resume} id='resume-tab'>
        <div onClick={() => handleExpand('resume')} className="tab-title"><h1>Resumes</h1></div>
        <Resume currentRef={refs.resume.current} setter={setClosed} closed={closed} />
      </div>
      <div ref={contactRef} className={closed.contact} id='contact-tab'>
        <div onClick={() => handleExpand('contact')} className="tab-title"><h1>Contact</h1></div>
      </div>
    </div>
  )
}