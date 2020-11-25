import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import FooterSection from '../../../../components/Fiooter';
import HeaderPage from '../../../../components/Header';
import ProjectList from '../../../../components/ProjectList';
import Timeline from '../../../../components/Timeline';
import 'aos/dist/aos.css';
import Aos from 'aos';
import PROJECTS_INFO from '../../../constants';
import ABOUT_ME from './constants';
import { StyledColorDiv, StyledSHero } from './styled';

const Hero = (): JSX.Element => {
  const ref: any = useRef();
  useEffect(() => {
    Aos.init({duration: 2000});
    VanillaTilt.init(ref.current, {
      max: 15,
      speed: 200,
      glare: true,
      'max-glare': 0.5,
    })
  }, []);
  
  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const smile = require('../../../../../assets/smiling.svg');
  const devil = require('../../../../../assets/devil.svg');
  const [img, setImg] = useState(devil);
  
  const handlerLoad = async() => {
    await sleep(2000);
    setImg(smile)
  }
  
  return (
    <div>
      <HeaderPage/>
      <StyledColorDiv>
        <div className={'color-box'} data-aos={'zoom-in-left'} ref={ref}><></>
        </div>
      </StyledColorDiv>
      <StyledSHero>
        <h1 data-aos={'zoom-in-right'} >Software Developer</h1>
        <p className={'info'} data-aos={'zoom-in-right'}>Hello! I'm Carlos, based in Porto. I am passionate for
          technology and the vanguard development. With experience in build and deploy big
          and small project on the cloud.</p>
        <img src={img}  data-aos={'zoom-in-right'} alt={'smile'} onLoad={handlerLoad}/>
      </StyledSHero>
      <Timeline data={ABOUT_ME}/>
      <ProjectList data={PROJECTS_INFO}/>
      <FooterSection/>
    </div>
  );
};

export default Hero;