
import "./Header.css";

export const Header = ({toggleTheme, theme}) => {
  return (
    <header className={`header ${theme}`}>
      <h1 className="header__title">Movie Search App</h1>
      <img src="https://www.svgrepo.com/show/309493/dark-theme.svg" 
      className={`dark-mode-toggle ${theme}`} 
      onClick={toggleTheme}
      /> 
    </header>
  );
};

export default Header;
