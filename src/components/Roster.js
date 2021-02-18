import React from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

const TableFixHead = styled.div`
  overflow-y: auto;
  height: 60vh;
`;

const TableSroll = styled(Table)`
  border-collapse: initial;
  width: 100%;
  & thead th {
    position: sticky;
    top: 0;
    border: 2px solid #eee;
    z-index: 1;
    background-color: white;
    align-self: center;
  }
`;

const Roster = ({ children, titlesHead }) => {
  return (
    <div>
      <TableFixHead>
        <TableSroll striped bordered hover>
          <thead>
            <tr>
              {titlesHead.map((title, i) => (
                <th id={i}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </TableSroll>
      </TableFixHead>
    </div>
  );
};

export default Roster;
