import React from 'react';
import Carousel from 'react-multi-carousel';
import HeaderPage from '../../components/Header';
import Item from '../../components/Item';
import PROJECTS_INFO from '../constants';
import RESPONSIVE from './constants';
import StyledProjectPage from './style';
import 'react-multi-carousel/lib/styles.css';
import 'aos/dist/aos.css';

const Projects = (): JSX.Element => {
  const data = PROJECTS_INFO;
  return (
    <StyledProjectPage>
      <HeaderPage background={'white'} textColor={'black'} menuIconColor={'black'}/>
      <div style={{
        background: 'url(' + require('../../../assets/background.jpg') + ')',
        backgroundRepeat: 'no-repeat'
      }}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          containerClass="container"
          draggable
          infinite
          responsive={RESPONSIVE}
        >
          {data.map(item => {
            return (<Item key={item.id} data={item}/>);
          })}
        </Carousel>
      </div>
      <div className={'drag'}>
        <h1>DRAG</h1>
      </div>
    </StyledProjectPage>
  );
};

export default Projects;