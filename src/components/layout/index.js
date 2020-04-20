import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "styled-components"
import { themes } from "../../themes/themes"
import { GlobalStyles } from "../../themes/global"

import Header from "../header"
import Line from "../line"
import { Main } from "./styles"

const Layout = ({ children }) => {
  const _theme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(_theme ? _theme : "darkTheme")

  const setSiteTheme = _theme => {
    setTheme(_theme)
    localStorage.setItem("theme", _theme)
  }

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
      <GlobalStyles />
      <Line />
      <Header
        siteTitle={data.site.siteMetadata.title}
        theme={theme}
        setTheme={setSiteTheme}
      />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
