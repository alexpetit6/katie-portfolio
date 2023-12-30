import './Header.css';

export default function Header({black, title, page, currentRef, setter, setDisabled, closed}) {
  function handleCollapse() {
    setDisabled(true);
    setter({
      ...closed,
      [page]: 'closing-tab',
    });
    
    currentRef.style.height = '20vh';
    
    setTimeout(() => {
      setter({
        ...closed,
        [page]: 'closed-tab',
      });
      currentRef.style.height = ''
      setDisabled(false);
    }, 1200);
  }

  return (
    <>
    <div className={`page-header ${black ? 'black' : ''}`}>
      <h1>{title}</h1>
      <i className="fa-solid fa-chevron-up" onClick={handleCollapse}></i>
    </div>

    </>
  )
}