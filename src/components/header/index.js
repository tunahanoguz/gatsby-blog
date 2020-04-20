import React from "react"
import PropTypes from "prop-types"
import { StyledHeader, Title, TitleLink, Description, ThemeButton } from "./styles"

import Moon from "../../assets/icons/moon.svg"
import Sun from "../../assets/icons/sun.svg"

const Header = ({ siteTitle, theme, setTheme }) => {
  const isLightTheme = theme === "lightTheme"

  return (
    <StyledHeader>
      <Title className={styles.title}>
        <TitleLink to="/" className={styles.titleLink}>
          {siteTitle}
        </TitleLink>
        <Description>Computer Engineer</Description>
      </Title>
      <ThemeButton
        className={styles.themeButton}
        onClick={() => setTheme(isLightTheme ? "darkTheme" : "lightTheme")}
      >
        {isLightTheme ? (
          <Moon color="#959DA5" style={{ fill: "#959DA5" }} />
        ) : (
          <Sun color="white" style={{ fill: "white" }} />
        )}
      </ThemeButton>
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
