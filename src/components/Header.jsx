import zaikaLogo from '../assets/zaika-logo.png'

function Header() {
  return (
    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label="Zaika Food home">
        <img className="brand-logo" src={zaikaLogo} alt="" />
        <span>Zaika Food</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#quick-recipes">Quick Recipes</a>
        <a href="#weekend-specials">Weekend Specials</a>
      </nav>
      <span className="header-tagline">Pakistani recipes, shared with love.</span>
    </header>
  )
}

export default Header
