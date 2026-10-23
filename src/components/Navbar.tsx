import { ChevronDown, CircleUser, Search } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'cotizador') => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <header className="top" data-screen-label="Nav">
      <div className="wrap">
        {/* Al hacer clic en el logo, volvemos a la landing principal */}
        <a className="mark" href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
          ttt<span className="dot"></span>cargo
        </a>
        <nav className="links">
          <a href="#rastreo" onClick={() => onNavigate('home')}>Rastrear</a>
          <a href="#">
            Envío <ChevronDown size={14} />
          </a>
          {/* Al hacer clic en Cotizar, cambia a la pantalla del cotizador */}
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('cotizador'); }}>
            Cotizar
          </a>
          <a href="#servicios" onClick={() => onNavigate('home')}>Servicios</a>
          <a href="#como" onClick={() => onNavigate('home')}>Cómo funciona</a>
        </nav>
        <div className="tools">
          <a className="login" href="#">
            <CircleUser size={18} />
            <span>Iniciar sesión</span>
          </a>
          <button className="btn btn-ghost btn-icon" aria-label="Buscar">
            <Search size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}