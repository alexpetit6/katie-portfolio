import './Main.css';
import Landing from '../../components/Landing/Landing';
import ContactBar from '../../components/ContactBar/ContactBar';
import Accordion from '../../components/Accordion/Accordion';

export default function Main({user}) {

  return (
    <>
    {/* <ContactBar /> */}
    <Landing />
    <Accordion user={user} />
    <img id='accordion-bg' src="/accordion-bg.jpg" alt="" />
    </>
  )

}