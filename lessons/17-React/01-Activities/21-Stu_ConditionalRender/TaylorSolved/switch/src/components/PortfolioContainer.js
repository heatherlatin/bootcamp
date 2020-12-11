import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let page;
    switch (this.state.currentPage.toLowerCase()) {
      case "home":
        page = <Home />;
        break;
      case "about":
        page = <About />;
        break;
      case "blog":
        page = <Blog />;
        break;
      case "contact":
        page = <Contact />;
        break;
      default:
        page = null;
        break;
    }
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {page}
      </div>
    );
  }
}

export default PortfolioContainer;
