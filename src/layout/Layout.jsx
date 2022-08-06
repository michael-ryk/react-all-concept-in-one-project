import classes from './Layout.module.css';

// Layout component to wrap up others
// Make same teplate for all pages

const Layout = (props) => {
  return (
    <>
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;