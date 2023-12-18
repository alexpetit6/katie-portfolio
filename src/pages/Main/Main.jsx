import './Main.css';
import { getUser, logOut } from '../../utilities/users-service';
import Landing from '../../components/Landing/Landing';
import Accordion from '../../components/Accordion/Accordion';

export default function Main({user, setUser}) {
  function handleLogOut() {
    logOut();
    setUser(getUser());
  }

  return (
    <>
    { user ? <button onClick={handleLogOut} id='log-out'>Log out</button> : null}
    {/* <ContactBar /> */}
    <Landing />
    <Accordion user={user} />
    <img id='accordion-bg' src="/accordion-bg.jpg" alt="" />
    </>
  )

}