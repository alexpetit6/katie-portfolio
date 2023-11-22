import './Resume.css';
import Line from '../../components/Line/Line';

export default function Resume() {
  return (
    <div id='resume'>
      <h1>Resumes</h1>
      <Line />
      <div id='resume-container'>
        <div className="corner-border" id='corner-border-1'></div>
        <div className="corner-border" id='corner-border-2'></div>
        <div className="corner-border" id='corner-border-3'></div>
        <div className="corner-border" id='corner-border-4'></div>
      </div>
    </div>
  )
  
}