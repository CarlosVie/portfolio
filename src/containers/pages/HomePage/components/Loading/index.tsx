import React from 'react';
import StyledLoading from './style';

const Loading = (): JSX.Element => {
  return(
    <StyledLoading >
      <img alt={'gif'} src={'https://media.giphy.com/media/j1yIKDQBW83t9IRS29/giphy.gif'} />
      <h1>Loading...</h1>
    </StyledLoading>
  )
}

export default Loading;