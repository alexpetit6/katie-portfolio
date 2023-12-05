import './Main.css';
import Landing from '../../components/Landing/Landing';
import ContactBar from '../../components/ContactBar/ContactBar';
import Accordion from '../../components/Accordion/Accordion';
import NewAlbumForm from '../../components/NewAlbumForm/NewAlbumForm';

export default function Main({user}) {

  return (
    <>
    <ContactBar />
    <Landing />
    {/* <NewAlbumForm /> */}
    <Accordion user={user} />
    </>
  )

}