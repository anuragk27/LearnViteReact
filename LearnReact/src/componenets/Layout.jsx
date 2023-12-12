import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/learnmap">Learn Map</Link>
          </li>
          <li>
            <Link to="/learneffect">Learn Use Effect</Link>
          </li>
          <li>
            <Link to="/learnmemo">Learn Use Memo</Link>
          </li>
          <li>
            <Link to="/learnprops">LearnProps</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;