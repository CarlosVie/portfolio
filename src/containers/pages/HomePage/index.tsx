import React, { memo, useEffect, useState } from 'react';
import Hero from './components/Hero';
import Loading from './components/Loading';
import StyledRootDiv from './style';

function HomePage(): JSX.Element {
  const [loaded, setLoaded] = useState(true);
  
  useEffect(() => {
    setTimeout(loading, 1500);
  }, []);
  
  const loading = () => {
    setLoaded(false);
  };
  
  return (
    <StyledRootDiv>
      {loaded
        ? <Loading/>
        : <Hero/>
      }
    </StyledRootDiv>
  );
}

export default memo(HomePage);