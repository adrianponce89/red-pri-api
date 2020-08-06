import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const CategoryContainer = styled.div`
  margin: 1em 0;
`;

const CategoryName = styled.h5`
  margin: 0.2em 0;
  font-weight: bold;
`;

const Filter = styled.a`
  margin: 0;
  text-transform: capitalize;
`;

const Opaque = styled.span`
  opacity: 0.5;
`;

const ShowMore = styled.span`
  display: ${(props) => (props.display ? 'block' : 'none')};
  cursor: pointer;
  color: blue;
`;

const MAX_FILTERS = 10;
const Category = ({ category }) => {
  const [showMore, setShowMore] = useState(false);
  const filters = showMore
    ? category.values
    : category.values.slice(0, MAX_FILTERS);

  const router = useRouter();
  return (
    <CategoryContainer key={category.id}>
      <CategoryName>{category.name}</CategoryName>
      {filters.map((filter) => (
        <Filter
          key={filter._id}
          href={`${router.asPath}/${
            category._id
          }-${filter.name.toLowerCase().replace(/ /g, '-')}`}
        >
          {filter.name} <Opaque>({filter.results})</Opaque>
        </Filter>
      ))}
      <ShowMore
        display={!showMore && category.values.length > MAX_FILTERS}
        onClick={() => setShowMore(true)}
      >
        Ver más
      </ShowMore>

      <ShowMore
        display={showMore && category.values.length > MAX_FILTERS}
        onClick={() => setShowMore(false)}
      >
        Ver menos
      </ShowMore>
    </CategoryContainer>
  );
};

const AvailableFilters = ({ availableFilters }) => (
  <>
    {availableFilters.map((category) => (
      <Category key={category.id} category={category} />
    ))}
  </>
);
export default AvailableFilters;
