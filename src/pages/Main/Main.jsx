import './Main.css';
import Landing from '../../components/Landing/Landing';
import ContactBar from '../../components/ContactBar/ContactBar';
import Accordion from '../../components/Accordion/Accordion';
import Resume from '../Resume/Resume';

export default function Main () {

  return (
    <>
    <ContactBar />
    <Landing />
    <Accordion />
    <Resume />
    </>
  )

}