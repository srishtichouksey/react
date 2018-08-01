import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron,NavbarToggler,Collapse,Nav,NavItem, Modal, ModalHeader, ModalBody,Button,
Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen:false,
      isModalOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("username: "+ this.username.value+"password: "+this.password.value+" Remember" + this.remember.value);
    event.preventDefault();
  }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className = "mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante con Fusion" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                  <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lag"></span>Home
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lag"></span>About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lag"></span>Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lag"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                      <span className="fa fa-sign-in fa-lg"></span>
                  </Button>
                </NavItem>
            </Nav>
            </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username">UserName</Label>
                  <Input type="text" name="username" id="username" innerRef={(input) => this.username = input} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" name="password" id="password" innerRef={(input) => this.password = input}/>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} /> Remember Me
                  </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
              </Form>
          </ModalBody>
       </Modal>
    </React.Fragment>
    );
  }
}

export default Header;