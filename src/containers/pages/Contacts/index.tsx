import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { memo } from 'react';
import history from '../../../utils/history';
import HeaderPage from '../../components/Header';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import StyledContacts from './style';

const useStyles = makeStyles({
  root: {
    margin: '10px',
    background: '#E3E1E3',
    color: 'black',
    borderRadius: '50px',
  },
  icon: {
    background: '#FEFDFF',
    borderRadius: '100px',
    padding: '5px',
    width: '30px',
    height: '30px',
    color: '#98A0A5'
  },
  email: {
    background: '#E3E1E3',
  }
});

const Contacts = (): JSX.Element => {
  const classes = useStyles();
  
  return (
    <StyledContacts>
      <HeaderPage background={'white'} textColor={'black'} menuIconColor={'black'}/>
      <div className={'body'}>
        
        <div className={'map'}
             style={{background: 'url(' + require('../../../assets/map.png') + ')'}}>
        </div>
        
        <div className={'contacts'}>
          <div className={'info'}>
            <h1>Contact Me</h1>
            <p> Have some project in mind? Maybe I can help you. Feel free to send me a email with questions. Thanks</p>
          </div>
          <div className={'btns'}>
            <Button
              className={classes.root}
              style={{background: '#12D060'}}
              variant="contained"
              onClick={() => history.push('mailto:carlos_alberto_o@live.com.pt')}
              startIcon={<EmailIcon className={classes.icon} color='action'/>}
            >
              carlos_alberto_o@live.com.pt
            </Button>
            <Button
              className={classes.root}
              variant="contained"
              onClick={() => history.push('https://www.linkedin.com/in/carlosvieir/')}
              startIcon={<LinkedInIcon className={classes.icon} />}
            >
              LinkedIn
            </Button>
            <Button
              className={classes.root}
              onClick={() => history.push('https://github.com/CarlosVie')}
              variant="contained"
              startIcon={<GitHubIcon className={classes.icon} />}
            >
              Github
            </Button>
          </div>
        </div>
      </div>
    </StyledContacts>
  );
};

export default memo(Contacts);