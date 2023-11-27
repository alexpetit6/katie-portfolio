import './Accordion.css';
import Resume from '../../pages/Resume/Resume';

export default function Accordion() {
  return (
    <div id='accordion'>
      <div className="accordion-tab" id='about-tab'>
        <div className="tab-title"><h1>About</h1></div>
      </div>
      <div className="accordion-tab" id='choreographer-tab'>
        <div className="tab-title"><h1>Choreography</h1></div>
      </div>
      <div className="accordion-tab" id='performance-tab'>
        <div className="tab-title"><h1>Performance</h1></div>
      </div>
      <div className="accordion-tab" id='resume-tab'>
        <div className="tab-title"><h1>Resumes</h1></div>
        <Resume />
      </div>
      <div className="accordion-tab" id='contact-tab'>
        <div className="tab-title"><h1>Contact</h1></div>
      </div>
    </div>
  )
}