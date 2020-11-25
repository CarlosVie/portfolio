import React, { useEffect } from 'react';
import StyledRootDiv from './style';
import 'aos/dist/aos.css';
import Aos from 'aos';

interface TimelineProps {
  data: Data[]
}

interface Data {
  title: string,
  img: string,
  description: string,
  fade: string
}

const Timeline = ({data}: TimelineProps): JSX.Element => {
  useEffect(() => {
    Aos.init({duration: 4000});
  }, []);
  
  return (
    <StyledRootDiv>
      <div className={'timeline'}>
        <h1 className={'section-title'}>Work</h1>
        <ul>
          {data.map(item => {
            return (
              <li key={item.title}>
                <div className="timeline-content" data-aos={item.fade}>
                  <div className={'imgDiv'}>
                    <img alt={'img'} src={item.img}/>
                  </div>
                  <h1>Project: {item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledRootDiv>
  );
};

export default Timeline;
