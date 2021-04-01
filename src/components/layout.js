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
              <li id="header-nav-first"><Link  to={`/`}>Home</Link></li>
              <li><Link to={`/tags`}>Tag</Link></li>
              <li><Link to={`/search`}>Search</Link></li>
              <li>{toggler}</li>
            </ul>
            <ul className="header-link">
              <li><a href="https://twitter.com/fluid_from" target="_blank" rel="noopener noreferrer">
              <img
    src={ require('../components/sns_t.png') }
    width='20px'
    height='20px'/></a></li>
              <li><a href="https://twitter.com/fluid_from" target="_blank" rel="noopener noreferrer">
              <img
    src={ require('../components/sns_y.png') }
    width='20px'
    height='20px'/></a></li>
    <li><a href="https://github.com/kjh-appro/" target="_blank" rel="noopener noreferrer">
              <img
    src={ require('../components/sns_g.png') }
    width='20px'
    height='20px'/></a></li>
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

       <div className="menu-category">
       <li><a href="https://quirky-euclid-3c931b.netlify.app/tags/css">Photo</a></li> 
       <li><a href="https://quirky-euclid-3c931b.netlify.app/tags/css">Project</a></li> 
       <li><a href="https://quirky-euclid-3c931b.netlify.app/tags/css">Research</a></li> 
       <li><a href="https://quirky-euclid-3c931b.netlify.app/tags/css">Review</a></li> 
       <li><a href="https://quirky-euclid-3c931b.netlify.app/tags/css">Translation</a></li> 
       <li><a href="https://quirky-euclid-3c931b.netlify.app/tags/css">Wiki</a></li> 
       <li><a href="https://quirky-euclid-3c931b.netlify.app/tags/css">Writing</a></li> 
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
          </div>
          <div ID="top-btn" onClick="window.scrollTo(0,0);">
        <a href="#"><img
    src={ require('../components/top_btn_2.png') }
    width='60px'
    height='60px'/></a>
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
