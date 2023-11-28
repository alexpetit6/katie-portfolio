import './Header.css';
import Line from '../Line/Line';

export default function Header({title, page, setter, closed}) {
  function handleCollapse() {
    setter({
      ...closed,
      [page]: true,
    });
  }

  return (
    <>
    <div className="page-header">
      <h1>{title}</h1>
      <button onClick={handleCollapse}>
        <i className="fa-solid fa-chevron-up" style={{color: "#ffffff",}} onClick={handleCollapse}></i>
      </button>
    </div>
    <Line />
    </>
  )
}