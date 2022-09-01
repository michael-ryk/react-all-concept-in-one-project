import { NavLink } from 'react-router-dom';

import { links } from '../const/links';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  let activeClassName = classes.active;
  return (
    <header className={classes['main-header']} >
      <nav className={classes.nav}>
        <ul>
          {links.map( link => {
            return (
              <li key={link.id}>
                <NavLink to={link.url} className={({isActive}) => isActive ? activeClassName : undefined}>
                  {link.text}
                </NavLink>    
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;