import './Performance.css';
import React, { useEffect, useState } from 'react';
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
    const Photos = performance.photos?.map((p) => <img data-fancybox='performance' key={p} src={p} loading='lazy' />)
  
    return (
      <div id='performance'>
        {Photos}
      </div>
    );
  };
}