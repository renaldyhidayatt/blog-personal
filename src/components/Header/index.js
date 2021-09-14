import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { ModeContext } from "../../context/ModeProvider"
import { useConfigQuery } from "../../hooks/useConfigQuery"
import { Wrapper, Logo } from "./Header.styles"
import Menu from "../Menu"
import Hamburger from "../Hamburger"
import MobileMenu from "../MobileMenu"
import ModeButton from "../ModeButton"

const Header = ({ siteTitle = `` }) => {
  const [darkMode, setDarkMode] = useContext(ModeContext)
  const siteConfig = useConfigQuery()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Wrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <Menu items={siteConfig.menu} />

      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  )
}

export default Header
