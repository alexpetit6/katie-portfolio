import './Resume.css';
import Line from '../../components/Line/Line';

export default function Resume() {
  return (
    <div className='tab-page' id='resume'>
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
            <i className="fa-regular fa-file-pdf" style={{color: '#ffffff'}}></i>
            <a href="https://sei-chum-bucket.s3.us-west-2.amazonaws.com/choreography-resume.pdf" target='_blank' rel="noreferrer">
              <button className='view-pdf'>View & Download</button>
            </a>
          </div>
          <div>
            <h3>Performance</h3>
            <i className="fa-regular fa-file-pdf" style={{color: '#ffffff'}}></i>
            <a href="https://sei-chum-bucket.s3.us-west-2.amazonaws.com/performance-resume.pdf" target='_blank' rel="noreferrer">
              <button className='view-pdf'>View & Download</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
  
}