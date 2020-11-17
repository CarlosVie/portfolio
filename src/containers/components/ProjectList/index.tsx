import { Tooltip } from '@material-ui/core';
import React from 'react';
import { ProjectProps } from '../type';
import StyleProjectList from './style';

interface ProjectListProps {
  data: ProjectProps[],
}

const ProjectList = ({data}: ProjectListProps): JSX.Element => {
  return (
    <StyleProjectList>
      <h1> Projects </h1>
      <table className="table table-dark">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Type</th>
          <th scope="col">Project</th>
        </tr>
        </thead>
        <tbody>
        {data.map(row => {
          return (
            <Tooltip title={row.description} placement={'top'}>
              <tr key={row.id}>
                <th scope="row">{row.id}</th>
                <td>{row.type}</td>
                <td>{row.name}</td>
              </tr>
            </Tooltip>
          );
        })}
        </tbody>
      </table>
    </StyleProjectList>
  );
};

export default ProjectList;