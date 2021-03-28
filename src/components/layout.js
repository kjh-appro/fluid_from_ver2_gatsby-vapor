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

       <div ID="aside-bar">
       <li><a href="https://github.com/">2009-2015</a>/<a href="https://github.com/">2015-2017</a>/<a href="https://github.com/">2017-2020</a>/<a href="https://github.com/">2021-</a>
</li>
<li>
  <a href="https://github.com/">2009-2015</a>/<a href="https://github.com/">2015-2017</a>/<a href="https://github.com/">2017-2020</a>/<a href="https://github.com/">2021-</a>
</li>
<li>
  <a href="https://github.com/">2009-2015</a>/<a href="https://github.com/">2015-2017</a>/<a href="https://github.com/">2017-2020</a>/<a href="https://github.com/">2021-</a>
</li>
<li>
  <a href="https://github.com/">2009-2015</a>/<a href="https://github.com/">2015-2017</a>/<a href="https://github.com/">2017-2020</a>/<a href="https://github.com/">2021-</a>
</li>
          </div>
          <div ID="top-btn" onClick="window.scrollTo(0,0);">
        <li><a href="#">TOP</a></li>
      <main>{children}</main>

        <footer className="footer-copyright">
          © {new Date().getFullYear()} {title}, Built with
          {` `}
          <a className="footer-gatsby" href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      
      </div>
      </div>
    )
  }
}


export default Layout
