import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavBar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <NavBar sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/shopping-cart/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/shopping-cart/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/shopping-cart/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{
              width: '3rem',
              height: '3rem',
              fontSize: '1.3rem',
              position: 'relative',
            }}
            className='d-flex align-items-center rounded-circle'
            variant='outline-primary'
          >
            <FaShoppingCart />

            <div
              className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                width: '1.5rem',
                height: '1.5rem',
                fontSize: '1rem',
                color: 'white',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavBar>
  );
}
