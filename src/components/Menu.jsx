import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <header className="menu">
      <div className="menu-container">
        <div className="esquerda">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <nav className="direita">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/app">App</NavLink>
          <NavLink to="/suporte">Suporte</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Menu