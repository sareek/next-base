import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import NProgress from "nprogress";
import Router from "next/router";
import logoImage from "../static/logo.svg";
// import logoImage2 from "../static/img/bitsbeat.png";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarToggle: false,
      domain: "Witti",
      anotherDomain: "Prysm",
    };
  }

  componentDidMount() {
    if (window.location.href.includes("witti")) {
      this.setState({ domain: "Witti", anotherDomain: "Prysm" });
    } else if (window.location.href.includes("prysm")) {
      this.setState({ domain: "Prysm", anotherDomain: "Witti" });
    }
  }

  render() {
    const { domain, anotherDomain } = this.state;
    return (
      <header>
        <div className="top-nav">
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="main-nav"
        >
          <Container>
            <Link href="/" passHref>
              <Navbar.Brand>
                <div className="logo">
                  <img
                    style={{ maxWidth: "170px", maxHeight: "40px" }}
                    src={logoImage}
                    alt="Eth Logo"
                  />
                </div>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href="/reward" passHref>
                  <Nav.Link>Reward</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default NavigationBar;
