@import "vars.css";
@import "normalize.css";

/* Layout */
.contour {
    border: 0em;
    height: 0.0625rem;
    background-color: var(--color-gray-2);
}

.site-container {
    margin: auto;
    padding: auto;
    max-width: 45rem;
}

/* Layout-Header */

.header-container {
    display: flex;
    align-items: baseline; 
    align-items: center;
    align-content: center;
    padding-top: 56px;
    width: 100%;
    left:0;
    right:0;
}

.header-p1 {
    display: flex;
    justify-content: space-between;
    margin-top: 80em;
    padding-top: 80px;
    width: 581px;
    color: black;
    background-color: rgb(255, 48,0);
    font-size: 26pt;
    text-align: center;
}

.header-p2 {
    display: flex;
    justify-content: space-between;
    margin-top: -4em;
    width: 581px;
    color: black;
    background-color: rgb(255, 48,0);
    font-size: 26pt;
    text-align: center;
}

.header-p3 {
    display: flex;
    justify-content: space-between;
    margin-top: -4em;
    width: 581px;
    color: black;
    background-color: rgb(255, 48,0);
    font-size: 26pt;
    text-align: center;
}

.header-p4 {
    display: flex;
    justify-content: space-between;
    margin-top: -4em;
    width: 581px;
    color: black;
    background-color: rgb(255, 48,0);
    font-size: 26pt;
    text-align: center;
}

.header-p5 {
    display: flex;
    justify-content: space-between;
    margin-top: -4em;
    width: 581px;
    color: black;
    background-color: rgb(255, 48,0);
    font-size: 12pt;
    text-align: center;
}



@media (max-width: 540px) 

{
    .header-container {
        flex-wrap: wrap;
    }

    .header-p1 {
        flex-wrap: wrap;
    }
    .header-p2 {
        flex-wrap: wrap;
    }
    .header-p3 {
        flex-wrap: wrap;
    }
    .header-p4 {
        flex-wrap: wrap;
    }
    .header-p5 {
        flex-wrap: wrap;
    }
    .header-title {
        flex-wrap: wrap;
    }

    
    #header-nav-first {
        margin-left: 0em;
    }
}
.headr-p-box{
    border: 0.0625em solid var(--color-bg);
    border-radius: 0.3em;
    display: flex;
    width: 578px;
    padding-top: 136px;
    margin-top: 0em;
    margin-right: -56px;
    background-color: rgb(255, 48,0);
}

.header-p2 a {
    text-decoration: none;
    color: inherit;
}

.header-p2 div::selection,
.header-p2 a::selection {
    background: transparent;
}

.header-p2 p {
    text-decoration: none;
    color: black;
    font-size: 26pt;
    text-align: left;
    margin-top: -1.2em;
    width: 60%;
}

.header-p1 a {
    text-decoration: none;
    color: inherit;
}

.header-p1 div::selection,
.header-p1 a::selection {
    background: transparent;
}

.header-p1 p {
    text-decoration: none;
    color: black;
    font-size: 26pt;
    text-align: left;
    width: 60%;
}

.header-p3 a {
    text-decoration: none;
    color: inherit;
}

.header-p3 div::selection,
.header-p3 a::selection {
    background: transparent;
}

.header-p3 p {
    text-decoration: none;
    color: black;
    font-size: 26pt;
    text-align: left;
    margin-top: -1.2em;
    width: 60%;
}

.header-p4 a {
    text-decoration: none;
    color: inherit;
}

.header-p4 div::selection,
.header-p4 a::selection {
    background: transparent;
}

.header-p4 p {
    text-decoration: none;
    color: black;
    font-size: 26pt;
    text-align: left;
    margin-top: -1.2em;
    width: 60%;
}

.header-p5 a {
    text-decoration: none;
    color: inherit;
}

.header-p5 div::selection,
.header-p5 a::selection {
    background: transparent;
}

.header-p5 p {
    text-decoration: none;
    color: black;
    font-size: 14pt;
    text-align: left;
    margin-top: -1.2em;
    width: 60%;
}

.header-menu-bar {
    display: flex;
    position: fixed;
    align-items: baseline;
    text-align: center;
    width: 100%;
    background-color: white;
    float: left;
    left: 0;
    right: 0;
    margin-top: -1em;
    padding-top: 0.02em;
    border: 0 0.0625em 0  solid var(--color-postcard);
    box-shadow: 0 0.0625rem 0em var(--color-postcard);
 
}

.header-menu-bar a {
    text-decoration: none;
    color: black;
    align-items: center;
    text-align: center;
}

.header-menu-bar div::selection,
.header-menu-bar a::selection {
    background: transparent;
}

.header-title {
    width: 700px;
    height: 189px;
    white-space: nowrap;
    visibility: visible;
    align-items: center;
    align-content: center;
 
}



.nav-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 0.875em;
}

.header-nav {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    padding: 0em;
    margin-left: 0.8em;
}

.header-link {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    padding: 0em;
    margin-right: 0.8em;
}

.header-nav li {
    margin-left: 1.5em;
}

.header-link li {
    margin-left: 1.5em;
}

.tog-checkbox {
    display: none;
}
.tog-text {
    cursor: pointer;
}

/* Layout-Footer */
.footer-copyright {
    text-align: center;
    font-size: 0.875em;
}

.footer-gatsby {
    text-decoration: none;
    color: inherit;
}

/* Postcard*/
.post-card {
    border: 0.0625em solid var(--color-postcard);
    border-radius: 0.3em;
    box-shadow: 0 0.0625em 0.25em var(--color-postcard);
    margin-top: 0.5em;
    margin-bottom: 1.5em;
    padding: 2em 1.5em;
    cursor: default;
}

.post-card h1 {
    font-size: 2em;
    margin-top: 0em;
    margin-bottom: 0em;
    letter-spacing: -0.025em;
}
.post-card a {
    text-decoration: none;
    color: inherit;
}
.post-card p {
    margin-bottom: 0em;
    margin-top: 0.75em;
}
.post-card small {
    font-size: 0.8125em;
}
.post-card img {
    margin-top: 0.75em;
    width: 100%;
}


.tag-item {
    margin-right: 0.375em;
}


.post-header {
    text-align: center;
}
.post-header h1 {
    font-size: 3em;
    letter-spacing: -0.025em;
    margin-top: 0.8125em;
    margin-bottom: 0em;
    
}
.post-header p {
    font-size: 0.8125em;
    margin-top: 0.8125em;
}

.search-box-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.search-box {
    margin: 2em auto;
    width: 35%;
    border-radius: 0.625em;
    border: 0.0625em solid var(--color-font);
    box-shadow: 0 0.0625em 0.25em var(--color-postcard);
    padding: 0.8125em;
    font-family: inherit;
    color: inherit;
    background-color: transparent;
    
}
.search-box:focus {
    outline: none;
}
.search-box::placeholder {
    color: var(--color-gray-1);
}

.tag-archive-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.tag-archive-item {
    border: 0.0625em solid var(--color-postcard);
    border-radius: 0.3em;
    box-shadow: 0 0.0625em 0.25em var(--color-postcard);
    margin: 0.5em;
    padding: 0.2em 0.6em;
    
}
.tag-archive-link {
    text-decoration: none;
    color: inherit;
}

.pagenator {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    font-size: 0.875em;
}
.pagenator-link svg {
    fill: var(--color-font);
}
.pagenator-unlinked svg {
    fill: transparent;
}
.pagenator div::selection,
.pagenator a::selection {
    background: transparent;
}

.pagenator svg {
    width: 0.75rem;
    height: 0.75rem;
}

.post-card-readmore {
    margin-top: 0.375rem;
    font-size: 0.875em;
    color: var(--color-blue);
}
.post-card-readmore span::selection {
    background: transparent;
}
.post-card-readmore a:hover {
    text-decoration: underline;
}
.post-card-readmore svg {
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.125rem;
    fill: var(--color-blue);
}

.post-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    font-size: 1.125em;
}
.post-nav ::selection {
    background: transparent;
}
.post-nav a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: baseline;
}
.post-nav svg {
    width: 0.8125rem;
    height: 0.8125rem;
    fill: var(--color-font);
}
.post-nav-prev {
    margin-left: 0.125rem;
}
.post-nav-next {
    margin-right: 0.125rem;
}

article .tag-container {
    text-align: right;
}

article .tag-container a {
    text-decoration: none;
    color: inherit;
    font-size: 0.875em;
}
