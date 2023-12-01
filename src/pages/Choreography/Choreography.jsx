import './Choreography.css'
import Albums from "../../components/Albums/Albums";
import Header from "../../components/Header/Header";
import Line from '../../components/Line/Line';

export default function Choreography() {
  return (
    <div id="choreography">
      <Header title='Choreography' />
      <div className="double-line"><Line /><Line /></div>
      <Albums />
    </div>
  )
}