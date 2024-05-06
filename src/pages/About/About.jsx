import './About.css';
import { useState, useEffect } from 'react';
import { getAbout, update } from '../../utilities/about-api';

export default function About({setter, closed, setDisabled, page, currentRef, user}) {
  const [about, setAbout] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    text: ''
  })

  useEffect(function() {
    async function showAbout() {
      const about = await getAbout();
      setAbout(about);
      setFormData({text: about.text});
    }
    showAbout();
  }, []);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const updatedAbout = await update(formData);
    setAbout(updatedAbout)
  }

  function handleEditing() {
    setIsEditing(!isEditing);
  }

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
            { isEditing
            ?
              <>
                <button onClick={handleEditing} id='edit-about-btn' className='admin-button warning'>CANCEL</button>
                <form onSubmit={handleSubmit}>
                  <textarea name="text" maxLength={1200} id="about-text-input" onChange={handleChange} value={formData.text}/>
                  <button type='submit' id='update-about-btn' className='success'>UPDATE</button>
                </form>
              </>
            :
              user
              ?
              <>
              <button onClick={handleEditing} id='edit-about-btn' className='admin-button warning'>Edit</button>
              {about.text}
              </>
              :
              about.text
            }
          

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