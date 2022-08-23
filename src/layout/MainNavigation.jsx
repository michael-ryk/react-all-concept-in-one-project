import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  let activeClassName = classes.active;
  return (
    <header className={classes['main-header']} >
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='homepage' className={({isActive}) => isActive ? activeClassName : undefined}>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to='usermodule' className={({isActive}) => isActive ? activeClassName : undefined}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to='fetch-movies' className={({isActive}) => isActive ? activeClassName : undefined}>
              Fetch
            </NavLink>
          </li>
          <li>
            <NavLink to='accordion' className={({isActive}) => isActive ? activeClassName : undefined}>
              Accordion
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;