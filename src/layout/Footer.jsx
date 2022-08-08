import classes from './Footer.module.css';

const Footer = () => {

  return (
    <footer className={classes['main-footer']}>
      <nav>
        <ul>
          <li>Support</li>
          <li>About us</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;