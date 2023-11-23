import './Resume.css';
import Line from '../../components/Line/Line';

export default function Resume() {
  return (
    <div id='resume'>
      <h1>Resumes</h1>
      <Line />
      <div id='resume-frame'>
        <div className="corner-border" id='corner-border-1'></div>
        <div className="corner-border" id='corner-border-2'></div>
        <div className="corner-border" id='corner-border-3'></div>
        <div className="corner-border" id='corner-border-4'></div>
        <div id='resume-container'>
          <div>
            <h3>Choreography</h3>
            <a href="https://sei-chum-bucket.s3.us-west-2.amazonaws.com/choreography-resume.pdf" target='_blank' rel="noreferrer">
              <i className="fa-regular fa-file-pdf" style={{color: '#ffffff'}}></i>
            </a>
            <a href="https://sei-chum-bucket.s3.us-west-2.amazonaws.com/choreography-resume.pdf">
              <button>View</button>
            </a>
          </div>
          <div>
            <h3>Performance</h3>
            <a href="https://sei-chum-bucket.s3.us-west-2.amazonaws.com/performance-resume.pdf" target='_blank' rel="noreferrer">
              <i className="fa-regular fa-file-pdf" style={{color: '#ffffff'}}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
  
}