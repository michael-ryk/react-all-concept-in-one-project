import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes['main-header']} >
      <nav >
        <ul>
          <li>
            Link1
          </li>
          <li>
            Link2
          </li>
          <li>
            Link3
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;