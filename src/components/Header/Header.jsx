import './Header.css';
import Line from '../Line/Line';

export default function Header({title}) {
  return (
    <>
    <div className="page-header">
      <h1>{title}</h1>
      <i className="fa-solid fa-chevron-up" style={{color: "#ffffff",}}></i>
    </div>
    <Line />
    </>
  )
}