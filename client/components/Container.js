import styled from 'styled-components';
import Navigation from './Navigation';

const Container = (props) => (
  <div className={props.className}>
    <Navigation />
    {props.children}
  </div>
);
  
export default styled(Container)`
  padding-top: 80px;
`;
