import { Outlet } from "react-router-dom"; // Outlet means render whichever page matches the current route here.
import Navbar from "../components/Navbar";

function SiteLayout() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>
    </div>
  );
}

// Good area to add a footer and have it appear on every page

export default SiteLayout;
