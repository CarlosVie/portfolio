import React from 'react';
import { ProjectProps } from '../type';
import StyledItem from './style';

interface ItemProps {
  readonly data: ProjectProps,
}

const Item = ({data}: ItemProps): JSX.Element => {
  return (
    <StyledItem>
      <div className={'item'}>
        <h1 >{data.name}</h1>
        <img src={data.img} alt={data.name}/>
      </div>
    </StyledItem>
  );
};

export default Item;