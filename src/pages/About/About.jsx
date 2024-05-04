import './About.css';
import { useState, useEffect } from 'react';
import { getAbout } from '../../utilities/about-api';

export default function About({setter, closed, setDisabled, page, currentRef}) {
  const [about, setAbout] = useState({});

  useEffect(function() {
    async function showAbout() {
      const about = await getAbout();
      setAbout(about);
    }
    showAbout();
  }, []);

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

  if (about) {

    return (
      <div id="about">
        <div id="about-container">
          <h1>About</h1>
          <i className="fa-solid fa-chevron-up" onClick={handleCollapse}></i>
          <div id='about-statement'>
            {about.text}

            {/* <p>
              Katie Newbury is an emerging figure in the performing arts scene in the greater Seattle area. As a choreographer, performer, and director, she consistently seeks enriching experiences to further her lifelong education in theatre and dance. Katie's presence in the rehearsal room is marked by a contagious, bright energy and a let's-get-after-it attitude, setting her apart as a standout collaborator.
            </p>
            <br />
            <p>
              Her commitment to excellence is reflected in her select creative team credits, including Urinetown, The PROM, and The SpongeBob Musical (Village Theatre KIDSTAGE), as well as Bring It On: The Musical (Auburn Avenue Theatre). Select performance credits include She Kills Monsters, Urinetown, The Laramie Project, and Theory of Relativity (Western Oregon University).
            </p>
            <br />
            <p>
              Katie Newbury proudly describes herself as a fat-bodied artist and is a fervent advocate for body diversity and plus-size representation on stage. Her passion for inclusivity extends beyond performance, as she consistently strives to be a voice for the plus-size community in the theatre. Katie is dedicated to demonstrating that individuals of all shapes and sizes are capable of outstanding work.
            </p> */}
          </div>
        </div>
      </div>
    )
  }
  
                // Katie Newbury is an emerging figure in the performing arts scene in the greater Seattle area. As a choreographer, performer, and director, she consistently seeks enriching experiences to further her lifelong education in theatre and dance. Katie's presence in the rehearsal room is marked by a contagious, bright energy and a let's-get-after-it attitude, setting her apart as a standout collaborator.

                // Her commitment to excellence is reflected in her select creative team credits, including Urinetown, The PROM, and The SpongeBob Musical (Village Theatre KIDSTAGE), as well as Bring It On: The Musical (Auburn Avenue Theatre). Select performance credits include She Kills Monsters, Urinetown, The Laramie Project, and Theory of Relativity (Western Oregon University).
              
                // Katie Newbury proudly describes herself as a fat-bodied artist and is a fervent advocate for body diversity and plus-size representation on stage. Her passion for inclusivity extends beyond performance, as she consistently strives to be a voice for the plus-size community in the theatre. Katie is dedicated to demonstrating that individuals of all shapes and sizes are capable of outstanding work.
  }