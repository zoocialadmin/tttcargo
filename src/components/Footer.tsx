import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="foot" id="contacto" data-screen-label="Contacto / Footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="mark" href="#" style={{ fontSize: '32px' }}>
              ttt<span className="dot"></span>cargo
            </a>
            <p className="pitch">Carga aérea de importación. Vuelos propios, aduana resuelta, entrega en tu puerta.</p>
            <div className="contact">
              <span>
                <Phone size={16} /> 55 0000 0000
              </span>
              <span>
                <Mail size={16} /> hola@tttcargo.mx
              </span>
              <span>
                <MapPin size={16} /> Terminal de carga AICM, CDMX
              </span>
            </div>
          </div>
          <div>
            <h4>Envíos</h4>
            <ul>
              <li><a href="#">Cotizar</a></li>
              <li><a href="#">Enviar</a></li>
              <li><a href="#rastreo">Rastrear</a></li>
              <li><a href="#">Rentar espacio</a></li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Flota</a></li>
              <li><a href="#">Rutas</a></li>
              <li><a href="#">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h4>Ayuda</h4>
            <ul>
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">Artículos prohibidos</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Aviso de privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 ttt•cargo</span>
          <span>Español (MX)</span>
        </div>
      </div>
    </footer>
  );
}