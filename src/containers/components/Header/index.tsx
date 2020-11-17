import { IconButton, Menu } from '@material-ui/core';
import React, { memo } from 'react';
import { StyledDiv, StyledMenuItem } from './style';
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderPageProps {
  background?: string,
  textColor?: string,
}

const HeaderPage = ({background, textColor}: HeaderPageProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  return (
    <StyledDiv style={background !== undefined ? {background: background} : undefined}>
      <a href={'/'}>
        <h1 style={{color: textColor}}>C-A-O-S</h1>
      </a>
      <IconButton
        onClick={handleClick}
        className={'menu'}
        id={'menu'}
        aria-label="menu"
        component="span"
      >
        <MenuIcon style={{color: 'white'}}/>
      </IconButton>
      <ul>
        <li><a href={'/'} style={{color: textColor}}>Home</a></li>
        <li><a href={'/projects'} style={{color: textColor}}>Projects</a></li>
        <li>
          <a href={'/contacts'}>
            <button>Contact</button>
          </a>
        </li>
      </ul>
      <Menu
        className={'Menu'}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}><a href={'/'}>Home</a></StyledMenuItem>
        <StyledMenuItem onClick={handleClose}><a href={'/projects'}>Projects</a></StyledMenuItem>
        <StyledMenuItem onClick={handleClose}><a href={'/contacts'}>Contacts</a></StyledMenuItem>
      </Menu>
    </StyledDiv>
  );
};

export default memo(HeaderPage);