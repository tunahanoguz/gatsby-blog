import React, {useState} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./header.module.css"
import { StyledHeader, Description } from "./styles"

import Moon from "../../assets/icons/moon.svg"
import Sun from "../../assets/icons/sun.svg"

const Header = ({ siteTitle, theme, setTheme }) => {
  const isLightTheme = theme === 'lightTheme'

  return (
    <StyledHeader>
      <h1 className={styles.title}>
        <Link to="/" className={styles.titleLink}>
          {siteTitle}
        </Link>
        <Description>Computer Engineer</Description>
      </h1>
      <button className={styles.themeButton} onClick={() => setTheme(isLightTheme ? 'darkTheme' : 'lightTheme')}>
        {isLightTheme ? <Moon color="#1a202c" /> : <Sun color="white" />}
      </button>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
