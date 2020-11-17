import React from 'react';
import StyledRootDiv from './style';

export default function PageNotFound(): JSX.Element {
  const errorSvg = require('../../../assets/error.svg');
  return (
    <StyledRootDiv>
      <img alt={'error-img'} src={errorSvg}/>
    </StyledRootDiv>
  );
}
