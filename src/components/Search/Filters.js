import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import FAIcon from '../FAIcon';

const FilterContainer = styled.h5`
  text-transform: capitalize;
`;

const StyledBadge = styled(Badge)`
  margin: 0.2em;
  padding: 0.4em;
`;

const Filters = ({ filters }) => {
  const router = useRouter();

  const flatFilters = filters.reduce(
    (acc, val) =>
      acc.concat(
        val.values.map((obj) => ({ ...obj, type: val.name })),
      ),
    [],
  );

  const getSlug = (type, name) => {
    const query = router.asPath.split('/')[2];
    const newFilters = flatFilters.filter(
      (f) => !(f.type === type && f.name === name),
    );

    const slug = `/busqueda/${query}${newFilters.reduce(
      (acc, val) =>
        `${acc}/${val.type}-${val.name.replace(/ /g, '-')}`,
      '',
    )}`;
    return slug;
  };

  return (
    <FilterContainer>
      {flatFilters.map((filter) => (
        <Link
          key={filter._id}
          href={getSlug(filter.type, filter.name)}
        >
          <a>
            <StyledBadge variant="info">
              {filter.name} <FAIcon className="fa fa-times" />
            </StyledBadge>
          </a>
        </Link>
      ))}
    </FilterContainer>
  );
};

export default Filters;
