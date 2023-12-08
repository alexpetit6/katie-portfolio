import './Main.css';
import Landing from '../../components/Landing/Landing';
import ContactBar from '../../components/ContactBar/ContactBar';
import Accordion from '../../components/Accordion/Accordion';
import Performance from '../../components/Performance/Performance';

export default function Main({user}) {

  return (
    <>
    <ContactBar />
    <Landing />
    <Accordion user={user} />
    <Performance />
    </>
  )

}