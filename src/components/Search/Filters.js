import Badge from 'react-bootstrap/Badge';
import FAIcon from '../FAIcon';

const Filters = ({ filters }) => (
  <h5>
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
  </h5>
);

export default Filters;
