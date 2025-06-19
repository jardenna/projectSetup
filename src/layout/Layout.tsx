import { Outlet } from 'react-router';

const Layout = () => (
  <div className="main-container">
    <header aria-label="primary">Header</header>
    <main>
      <Outlet />
    </main>
    <footer aria-label="primary">Footer</footer>
  </div>
);

export default Layout;
