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

      <div id="footer">
<ul>
  <li>2009-2015</li>
  </ul>
<ul>
  <li><a href="https://github.com/">2009.5.16</a></li>
</ul>

<ul>
  <li>2015-2017</li>
  </ul>
<ul>
  <li><a href="https://github.com/">2015.5.16</a></li>
  <li><a href="https://github.com/">2017.5.16</a></li>
</ul>

<ul>
  <li>2017-2021</li>
  </ul>
<ul>
  <li><a href="https://github.com/">2017.6.8-2012.2.28</a></li>
  <li><a href="https://github.com/">2017.9.5-12.15</a></li>
  <li><a href="https://github.com/">2017.9.5-12.15</a></li>
  <li><a href="https://github.com/">2017.9.5-12.15</a></li>
</ul>

<ul>
  <li>2021-</li>
  </ul>
<ul>
  <li><a href="https://github.com/">2021.6.8-2012.2.28</a></li>
  <li><a href="https://github.com/">2021.9.5-12.15</a></li>
  <li><a href="https://github.com/">2021.9.5-12.15</a></li>
  <li><a href="https://github.com/">2021.9.5-12.15</a></li>
  <li><a href="https://github.com/">2021.9.5-12.15</a></li>
  <li><a href="https://github.com/">2021.9.5-12.15</a></li>
  <li><a href="https://github.com/">2021.9.5-12.15</a></li>
</ul>

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
