import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center px-5 paper-grain">
    <div className="text-center">
      <p className="font-display text-7xl text-primary">404</p>
      <h1 className="mt-3 font-display text-3xl text-ink">Página não encontrada</h1>
      <Link to="/" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-ink">
        Voltar ao início
      </Link>
    </div>
  </div>
);

export default NotFound;
