import React from 'react';
import {
  Container,
  Row,
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from 'react-bootstrap';

const UsersFilter = ({
  search,
  first,
  filter,
  titleTables,
  handleSelectTitle,
  handleFilter,
}) => {
  return (
    <>
      <Container>
        <Row>
          <InputGroup>
            <DropdownButton
              variant="info"
              title="Filtrado por"
              id="dropdown-basic"
            >
              <Dropdown.Item
                onSelect={(e) => handleSelectTitle(`${first}`)}
              >
                {first}
              </Dropdown.Item>
              {titleTables.slice(1, 3).map((title) => (
                <Dropdown.Item
                  eventKey={title}
                  onSelect={(e) => handleSelectTitle(e)}
                >
                  {title}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <FormControl
              type="text"
              onChange={(e) => handleFilter(e.target.value)}
              value={filter}
              placeholder={`${search}`}
            />
          </InputGroup>
        </Row>
      </Container>
    </>
  );
};

export default UsersFilter;
