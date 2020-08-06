import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';
import FAIcon from '../FAIcon';

const FilterContainer = styled.h5`
  text-transform: capitalize;
`;

const Filters = ({ filters }) => (
  <FilterContainer>
    {filters
      .reduce((acc, val) => acc.concat(val.values), [])
      .map((filter) => (
        <Badge
          key={filter.id}
          variant="info"
          style={{ margin: '0.2em', padding: '0.4em' }}
        >
          {filter.name} <FAIcon className="fa fa-times" />
        </Badge>
      ))}
  </FilterContainer>
);

export default Filters;
