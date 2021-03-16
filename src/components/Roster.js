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
    z-index: 1;
    background-color: white;
    padding: 11px;
  }
  & td {
    padding: 5px;
    vertical-align: middle;
  }
  .thSelect {
    padding: 11px 8px;
    display: flex;
    align-items: center;
    .select {
      margin-right: 5px;
    }
  }
`;

const Roster = ({ children, titlesHead, onSeletedAll, checked }) => {
  return (
    <TableFixHead>
      <TableSroll striped bordered hover>
        <thead>
          <tr>
            {titlesHead.map((title, i) =>
              i > 0 ? (
                <th style={{ textAlign: 'center' }}>{title}</th>
              ) : (
                <th className="thSelect">
                  <input
                    type="checkbox"
                    className="select"
                    checked={checked}
                    onChange={onSeletedAll}
                  />
                  {title}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableSroll>
    </TableFixHead>
  );
};

export default Roster;
