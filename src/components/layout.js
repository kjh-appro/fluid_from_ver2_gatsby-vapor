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
          <div className="header-p">
           <Link
            className="header-title"
            to={`/`}
           >
            <p>
              <br>경계 내에 머무르거나 아니면</br>
              <br>내가 속한 곳으로 돌아가라는 말을 들었다</br>
            </p>
            <p style="font-size: 17pt, text-algin: right">
            <br></br> 
           <br>(Fanon, 1986)</br> 
            </p>
           </Link>
           </div>
        <div className="header-container">
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
