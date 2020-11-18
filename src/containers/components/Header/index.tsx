import { IconButton, Menu } from '@material-ui/core';
import React, { memo } from 'react';
import { StyledDiv, StyledMenuItem } from './style';
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderPageProps {
  background?: string,
  textColor?: string,
  menuIconColor?: string,
}

const HeaderPage = ({background, textColor, menuIconColor}: HeaderPageProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  return (
    <StyledDiv style={background !== undefined ? {background: background} : undefined}>
      <a href={'/portfolio/#/'}>
        <h1 style={{color: textColor}}>C-A-O-S</h1>
      </a>
      <IconButton
        onClick={handleClick}
        className={'menu'}
        id={'menu'}
        aria-label="menu"
        component="span"
      >
        <MenuIcon style={menuIconColor !== undefined ? {color: menuIconColor} : {color: 'white'}}/>
      </IconButton>
      <ul>
        <li><a href={'/portfolio/#/'} style={{color: textColor}}>Home</a></li>
        <li><a href={'/portfolio/#/projects'} style={{color: textColor}}>Projects</a></li>
        <li>
          <a href={'/portfolio/#/contacts'}>
            <button>Contact</button>
          </a>
        </li>
      </ul>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}><a href={'/portfolio/#/'}>Home</a></StyledMenuItem>
        <StyledMenuItem onClick={handleClose}><a href={'/portfolio/#/projects'}>Projects</a></StyledMenuItem>
        <StyledMenuItem onClick={handleClose}><a href={'/portfolio/#/contacts'}>Contacts</a></StyledMenuItem>
      </Menu>
    </StyledDiv>
  );
};

export default memo(HeaderPage);