import { IconButton } from '@material-ui/core';
import Aos from 'aos';
import React, { useEffect } from 'react';
import StyledFooter from './style';
import 'aos/dist/aos.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const FooterSection = (): JSX.Element => {
  
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);
  
  return (
    <StyledFooter>
      <div className={'contacts-section'}
           data-aos='fade-up'>
        <h1>Contacts</h1>
        <img alt={'gif'} src={'https://media.giphy.com/media/3o6nV3joqXzMkfkXrW/giphy.gif'}/>
      </div>
      <div className={'licence-section'}
           data-aos='fade-up'>
        <div>
          <ul>
            <li>
              <a href={'https://www.linkedin.com/in/carlosvieir/'}>
                <IconButton color='primary'>
                  <LinkedInIcon fontSize='large'/>
                </IconButton>
              </a>
            </li>
            <li>
              <a href={'mailto:carlos_alberto_o@live.com.pt'}>
                <IconButton color='primary' size="medium">
                  <EmailIcon fontSize='large'/>
                </IconButton>
              </a>
            </li>
            <li>
             
              <a href={'https://github.com/CarlosVie'}>
                <IconButton color='primary'>
                  <GitHubIcon fontSize='large'/>
                </IconButton>
              </a>
            </li>
          </ul>
        </div>
        <p>Design and developed by Carlos Vieira</p>
        <p>© 2020 All rights reserved</p>
      </div>
    </StyledFooter>
  );
};

export default FooterSection;