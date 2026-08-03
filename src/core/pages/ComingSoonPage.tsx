import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function ComingSoonPage() {
  return (
    <div className="page-container">
      <section className="coming-soon surface-card">
        <p className="section-label">In development</p>
        <h1>Coming soon</h1>
        <p>This tool has not been added yet.</p>

        <Link className="coming-soon__link" to={ROUTES.home}>
          Return home
        </Link>
      </section>
    </div>
  );
}

export default ComingSoonPage;
