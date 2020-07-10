import styled from 'styled-components';
import Link from 'next/link';

const SearchBtn = styled((props) => (
  <span className={props.className}>
    <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
    </svg>
  </span>
))`
  position: absolute !important;
  right: 8px;
  width: 18px;
  height: 20px;
  top: 50% !important;
  transform: translate(0, -50%);
  cursor: pointer;
  z-index: 10;
`;

const SearchBarInput = styled((props) => (
  <input className={props.className} placeholder="Buscar en Red-Pri..." maxLength="200">
    {props.children}
  </input>
))`
  outline: none;
  height: 30px;
  border-radius: 15px;
  background: white;
  padding: 0 35px 0 10px;
  border: 1px solid transparent;
  box-shadow: none !important;
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.default};
`;

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  margin: 0 0.5em;
`;

const SearchBar = (props) => (
  <SearchBarContainer>
    <SearchBarInput className={props.className} />
    <SearchBtn />
  </SearchBarContainer>
  );

export default SearchBar;
