import Nav from 'react-bootstrap/Nav';
import FAIcon from './FAIcon';

const NavPills = ({ items, defaultActiveKey }) => (
  <Nav variant="pills" defaultActiveKey={defaultActiveKey}>
    {items.map((item) => (
      <Nav.Item key={item.title}>
        <Nav.Link href={item.link}>
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
