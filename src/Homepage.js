import './Homepage.css';
import { Navbar, Nav, NavDropdown, Carousel, Container, Row, Col}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Navigation from './components/Navigation';
import Content from './components/Content';
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <Title />
      <Navigation />
      <Content />
    </div>
  );
}

export default Homepage;
