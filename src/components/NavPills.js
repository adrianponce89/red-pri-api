import Nav from 'react-bootstrap/Nav';
import FAIcon from './FAIcon';

const NavPills = ({ items, activeKey }) => (
  <Nav variant="pills" activeKey={activeKey}>
    {items.map((item) => (
      <Nav.Item key={item.title}>
        <Nav.Link
          href={item.href}
          eventKey={item.eventKey}
          onClick={item.onClick}
        >
          {item.icon && (
            <>
              <FAIcon
                className={item.icon}
                style={{ verticalAlign: 'middle' }}
              />{' '}
            </>
          )}
          {item.title}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

export default NavPills;
