import './Accordion.css';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../../pages/About/About';
import Album from '../Album/Album';
import Fancybox from '../FancyBox/FancyBox';
import Performance from '../Performance/Performance';
import Resume from '../../pages/Resume/Resume';
import Contact from '../../pages/Contact/Contact';

export default function Accordion({user}) {
  const [closed, setClosed] = useState({
    about: 'closed-tab',
    choreo: 'closed-tab',
    perf: 'closed-tab',
    resume: 'closed-tab',
    contact: 'closed-tab',
  });
  const [disabled, setDisabled] = useState(false)
  

  // useEffect(() => {
  //   setClosed({
  //     ...closed,
  //     choreo: 'open-tab'
  //   });
  // }, []);

  const aboutRef = useRef(null);
  const choreoRef = useRef(null);
  const perfRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const aboutTitleRef = useRef(null);
  const choreoTitleRef = useRef(null);
  const perfTitleRef = useRef(null);
  const resumeTitleRef = useRef(null);
  const contactTitleRef = useRef(null);

  const refs = {
    about: aboutRef,
    choreo: choreoRef,
    perf: perfRef,
    resume: resumeRef,
    contact: contactRef
  };

  const titleRefs = {
    about: aboutTitleRef,
    choreo: choreoTitleRef,
    perf: perfTitleRef,
    resume: resumeTitleRef,
    contact: contactTitleRef
  };

  function handleExpand(page) {
    const current = refs[page].current;
    const titleRef = titleRefs[page].current;
    setClosed({
      ...closed,
      [page]: 'open-tab'
    });
    current.style.height = `calc(${current.scrollHeight}px - ${titleRef.scrollHeight}px`;
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
      <div ref={aboutRef} className={closed.about} id='about-tab'>
        <div onClick={ disabled ? null : () => handleExpand('about')} ref={aboutTitleRef} className="tab-title"><h1>About</h1></div>
        <About currentRef={refs.about.current} setter={setClosed} setDisabled={setDisabled} closed={closed} page='about' user={user} />
      </div>
      <div ref={choreoRef} className={closed.choreo} id='choreographer-tab'>
        <div onClick={ disabled ? null : () => handleExpand('choreo')} ref={choreoTitleRef} className="tab-title"><h1>Choreography and More</h1></div>
        <Album title='Choreography' currentRef={refs.choreo.current} setter={setClosed} setDisabled={setDisabled} closed={closed} page='choreo' user={user} />
      </div>
      <div ref={perfRef} className={closed.perf} id='performance-tab'>
        { 
        user 
        ?
        <Link to='/edit-performance'>
          <button className='edit-performance-btn admin-button warning'>EDIT</button>
        </Link>
        : null
        }
        <Fancybox newClass='performance-fancybox'>
          <div data-fancybox-trigger='performance' ref={perfTitleRef} className="tab-title"><h1>Performance</h1></div>
          <Performance />
        </Fancybox>
      </div>
      <div ref={resumeRef} className={closed.resume} id='resume-tab'>
        <div onClick={ disabled ? null : () => handleExpand('resume')} ref={resumeTitleRef} className="tab-title"><h1>Resumes</h1></div>
        <Resume currentRef={refs.resume.current} setter={setClosed} setDisabled={setDisabled} closed={closed} user={user} />
      </div>
      <div ref={contactRef} className={closed.contact} id='contact-tab'>
        <div onClick={ disabled ? null : () => handleExpand('contact')} ref={contactTitleRef} className="tab-title"><h1>Contact</h1></div>
        <Contact currentRef={refs.contact.current} setter={setClosed} setDisabled={setDisabled} closed={closed} />
      </div>
    </div>
  )
}