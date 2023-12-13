import './Landing.css';
import React, { useRef } from 'react';
import Line from '../../components/Line/Line';

export default function Landing () {
  const landingRef = useRef(null);

  function scroll() {
    const portPos = landingRef.current.getBoundingClientRect().bottom;
    window.scrollBy({
      top: portPos,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div ref={landingRef} id='landing-bg'>
      <h1 id='landing-title'>Katie Newbury</h1>
      <Line />
      <h3 id='landing-subtitle'>Choreographer ● Actor ● Artist</h3>
      <i onClick={scroll} className="fa-solid fa-chevron-up"></i>
    </div>
  )
}