import React, { Component } from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { HeadLogo } from "../components/header-logo.png";


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
            {theme === "dark" ? (
              <div className="tog-text">
                Light
              </div>
            ) : (
              <div className="tog-text">
                Dark
              </div>
            )}
          </label>
        )}</ThemeToggler>
      </div>
    )

    return (
      <div className="site-container">
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
      <div className="header-p-box">
        <div className="header-p1">
           <Link
            className="header-title"
            to={`/`}
           >
           
            경계 내에 머무르거나
            
           </Link>
           </div>
           <div className="header-p2">
           <Link
            className="header-title"
            to={`/`}
           >
           
            아니면
            
           </Link>
           </div>
      <div className="header-p3">
           <Link
            className="header-title"
            to={`/`}
           >
      
            내가 속한 곳으로 
           
           </Link>
           </div>
           <div className="header-p4">
           <Link
            className="header-title"
            to={`/`}
           >
            
            돌아가란다
            
           </Link>
           </div>
           <div className="header-p5">
           <Link
            className="header-title"
            to={`/`}
           >
            
            (Fanon, 1986)
            
           </Link>
           </div>
           </div>
        <main>{children}</main>
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
