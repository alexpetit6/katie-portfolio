import './About.css';

export default function About({setter, closed, setDisabled, page, currentRef}) {

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
      currentRef.style.height = '';
      setDisabled(false);
    }, 1200);
  }

  return (
    <div id="about">
      <div id="about-container">
        <h1>About</h1>
        {/* <div id="about-right"> */}
          <i className="fa-solid fa-chevron-up" onClick={handleCollapse}></i>
          <p>
            Katie, an ardent enthusiast of musical theater, breathes life into the stage with an unwavering passion for the performing arts. 
            Her love for musicals is a vibrant thread woven into the fabric of her identity, a sentiment that resonates in every step she takes 
            on and off the stage. With an innate talent for choreography, Katie effortlessly transforms music into mesmerizing movement, creating 
            captivating visual symphonies. Her proficiency in choreographing intricate routines is a testament to her dedication and creative flair, 
            turning each performance into a dynamic and memorable spectacle. 
          </p>
        {/* </div> */}
      </div>
    </div>
  )
}