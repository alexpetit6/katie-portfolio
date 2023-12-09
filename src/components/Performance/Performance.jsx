import './Performance.css';
import { useEffect, useState } from 'react';
import { getPerformance } from '../../utilities/performance-api';

export default function Performance() {
  const[performance, setPerformance] = useState();

  useEffect(function() {
    async function getPerf() {
      const performance = getPerformance();
      setPerformance(performance);
    }
    getPerf();
  }, []);

  useEffect(function() {
    async function getPerf() {
      const performance = await getPerformance();
      setPerformance(performance);
    }
    getPerf();
  }, []);

  if (performance) {
    const Photos = performance.photos?.map((p) => <img data-fancybox='performance' src={p} />)
  
    return (
      <div id='performance'>
        {Photos}
      </div>
    );
  };
}