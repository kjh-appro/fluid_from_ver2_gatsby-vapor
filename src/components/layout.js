import React, { Component } from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";


class Layout extends Component {
  
  render() {
    const { title, children} = this.props
    const toggler = (
      <div className="toggler">
        <ThemeToggler>{({ theme, toggleTheme }) => (
          <label className="tog">
            <input
              type="checkbox"
              onChange={e =>
                toggleTheme(e.target.checked ? "dark" : "light")
              }
              checked={theme === "dark"}
              className="tog-checkbox"
            />
          </label>
        )}</ThemeToggler>
      </div>
    )

    return (
      <div className="site-container_front">
      <div className="header-menu-bar">
        <div className="nav-container">
            <ul className="header-nav">
              <li id="header-nav-first"><Link to={`/tags`}>Tags</Link></li>
              <li><Link to={`/search`}>Search</Link></li>
              <li>{toggler}</li>
            </ul>
            <ul className="header-link">
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                GitHub</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn</a></li>
            </ul>
          </div>
      </div>
      <div className="header-container">
        <Link
            className="header-title"
            to={`/`}
          >
              <img
    src={ require('../components/header-logo_3.png') }
    width='219px'
    height='229px'/>
       </Link>
       </div>
      <main>{children}</main>
      <div className="footer">
      <div className="dropup">
          <button className="footerbtn">2009-2015</button>
          <div className="dropup-content1">
          <a href="https://quirky-euclid-3c931b.netlify.app/tags/css">
            2009.5.16</a> 
          </div>
          <button className="footerbtn">2015-2020</button>
          <div className="dropup-content2">
          <a href="https://quirky-euclid-3c931b.netlify.app/tags/css">
            2011.6.8-2012.2.28</a> 
          <a href="https://quirky-euclid-3c931b.netlify.app/tags/css">
            2011.9.5-12.15</a>
          </div>
          <button className="footerbtn">2021-</button>
          <div className="dropup-content3">
          <a href="https://quirky-euclid-3c931b.netlify.app/tags/css">
            2012.4.3-10.12</a>  
          <a href="https://quirky-euclid-3c931b.netlify.app/tags/css">
            2012.9.3-12.13</a> 
          <a href="https://quirky-euclid-3c931b.netlify.app/tags/css">
            2012.5.14</a> 
          <a href="https://quirky-euclid-3c931b.netlify.app/tags/css">
            2012.7.28</a> 
          </div>
        </div>
        </div>
        <footer className="footer-copyright">
          © {new Date().getFullYear()} {title}, Built with
          {` `}
          <a className="footer-gatsby" href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      
      </div>
    )
  }
}


export default Layout
