import styled from 'styled-components';
import Navigation from './Navigation';

const Container = (props) => (
    <div className={props.className}>
        <Navigation />
        <div>
            {props.children}
        </div>
    </div>
  );
  
export default styled(Container)`
    background: ${({ theme }) => theme.colors.mainViolet};
`;
