import './Header.css';

export default function Header({title, page, currentRef, setter, closed}) {
  function handleCollapse() {
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
    }, 1200);
  }

  return (
    <>
    <div className="page-header">
      <h1>{title}</h1>
      <i className="fa-solid fa-chevron-up" onClick={handleCollapse}></i>
    </div>

    </>
  )
}