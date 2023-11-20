import './Accordion.css';
import AccordionTab from '../AccordionTab/AccordionTab';

export default function Accordion() {
  return (
    <div id='accordion'>
      <AccordionTab component='Product' />
      <AccordionTab component='Docu' />
      <AccordionTab component='Branded' />
      <AccordionTab component='Artist' />
      <AccordionTab component='About' />
    </div>
  )
}