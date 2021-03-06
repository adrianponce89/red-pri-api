import styled from 'styled-components';

const External = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  max-width: 1032px;
  width: 100%;
`;

const Container = ({ children, ...otherProps }) => (
  <External {...otherProps}>
    <Inner>{children}</Inner>
  </External>
);

export default Container;
