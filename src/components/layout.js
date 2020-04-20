import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { themes } from "../themes/themes"
import { GlobalStyles } from "../themes/global"

import Header from "./header"
import Line from "./line"
import "./layout.css"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('darkTheme')

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles/>
      <Line/>
      <Header siteTitle={data.site.siteMetadata.title} theme={theme} setTheme={setTheme} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" style={theme && {color: 'white'}}>Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
