import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.loading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;
const ChildrenContainer = styled.div`
  visibility: ${(props) => (props.loading ? 'hidden' : 'inherit')};
`;

const Loadable = (WrappedComponent) => ({
  loading,
  size,
  dark,
  color,
  children,
  ...otherProps
}) => (
  <WrappedComponent style={{ position: 'relative' }} {...otherProps}>
    <ChildrenContainer loading={loading}>
      {children}
    </ChildrenContainer>
    <SpinnerContainer loading={loading}>
      <Spinner size={size} dark={dark} color={color} />
    </SpinnerContainer>
  </WrappedComponent>
);

export const contentOnLoad = (WrappedComponent) => ({
  loading,
  size,
  dark,
  color,
  ...otherProps
}) => {
  if (loading) {
    return (
      <SpinnerContainer loading={loading}>
        <Spinner size={size} dark={dark} color={color} />
      </SpinnerContainer>
    );
  }
  return <WrappedComponent {...otherProps} />;
};

export const LoadableButton = Loadable(Button);

export default Loadable;
