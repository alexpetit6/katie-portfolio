import './Accordion.css';

export default function Accordion() {
  return (
    <div id='accordion'>
      <div className="accordion-tab" id='about-tab'>
        <h1>About</h1>
      </div>
      <div className="accordion-tab" id='choreographer-tab'>
        <h1>Choreography</h1>
      </div>
      <div className="accordion-tab" id='performance-tab'>
        <h1>Performance</h1>
      </div>
      <div className="accordion-tab" id='resume-tab'>
        <h1>Resumes</h1>
      </div>
      <div className="accordion-tab" id='contact-tab'>
        <h1>Contact</h1>
      </div>
    </div>
  )
}