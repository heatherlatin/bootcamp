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
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.state.currentPage === "Home" && 
          <Home />
        }
        {this.state.currentPage === "About" && 
          <About />
        }
        {this.state.currentPage === "Blog" && 
          <Blog />
        }
        {this.state.currentPage === "Contact" && 
          <Contact />
        }
      </div>
    );
  }
}

export default PortfolioContainer;
