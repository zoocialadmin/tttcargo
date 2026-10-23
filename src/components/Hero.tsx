import { Calculator, Send, Warehouse, ArrowUpRight } from 'lucide-react';
import heroPhoto from '../assets/avion1.webp';

interface HeroProps {
  onNavigate: (page: 'home' | 'cotizador') => void;
}


export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="hero" data-screen-label="Hero">
      <div>
        <h1 className="display">
          <span>Tu carga,</span>
          <span>por aire.</span>
          <span>Sin vueltas.</span>
        </h1>
        <p className="sub">
          Importamos tu mercancía en nuestros propios vuelos de carga: reservamos espacio, la liberamos en aduana y la entregamos en tu puerta.
        </p>
        <div className="actions">
         <a 
            className="frame action" 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate('cotizador'); }}
          >
            <i className="corner tl"></i>
            <i className="corner tr"></i>
            <i className="corner bl"></i>
            <i className="corner br"></i>
            <Calculator size={28} />
            <b>
              Cotizar <ArrowUpRight size={18} />
            </b>
            <small>Precio por kilo y destino en segundos.</small>
          </a>
          <a className="frame action" href="#">
            <i className="corner tl"></i>
            <i className="corner tr"></i>
            <i className="corner bl"></i>
            <i className="corner br"></i>
            <Send size={28} />
            <b>
              Enviar <ArrowUpRight size={18} />
            </b>
            <small>Genera tu guía y agenda la recolección.</small>
          </a>
          <a className="frame action" href="#">
            <i className="corner tl"></i>
            <i className="corner tr"></i>
            <i className="corner bl"></i>
            <i className="corner br"></i>
            <Warehouse size={28} />
            <b>
              Rentar espacio <ArrowUpRight size={18} />
            </b>
            <small>Pallets y bodega en vuelos programados.</small>
          </a>
        </div>
      </div>
      <figure className="frame hero-photo blueprint duotone" style={{ margin: 0, border: '1px solid var(--color-divider)' }}>
        <img 
            src={heroPhoto} 
            alt="Vista aérea de un avión de carga en la pista" 
            style={{ 
            position: 'absolute',
            inset: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
            }}
        />
        <span className="label">MEX ← LAX · Vuelo TT-204</span>
        <i className="corner tl"></i>
        <i className="corner tr"></i>
        <i className="corner bl"></i>
        <i className="corner br"></i>
      </figure>
    </section>
  );
}