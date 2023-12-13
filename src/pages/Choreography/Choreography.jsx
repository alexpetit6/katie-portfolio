import './Choreography.css'
import Albums from "../../components/Album/Album";
import Header from "../../components/Header/Header";
import Line from '../../components/Line/Line';

export default function Choreography({currentRef, setter, closed}) {
  return (
    <div id="choreo-bg">
      <div id="choreo">
        <Header title='Choreography' currentRef={currentRef} setter={setter} closed={closed} page='choreo' />
        <div className="double-line"><Line /><Line /></div>
        <Albums />
      </div>
    </div>
  )
}