import containersPhoto from '../assets/containers-plane.webp';

interface HowItWorksProps {
  onNavigate: (page: 'home' | 'cotizador') => void;
}

export default function HowItWorks({ onNavigate }: HowItWorksProps) {
  return (
    <section className="block" id="como" data-screen-label="Cómo funciona">
      <span className="kicker">03 · Cómo funciona</span>
      <hr className="rule" />
      <div className="how">
        <figure className="frame how-photo blueprint duotone" style={{ margin: 0, border: '1px solid var(--color-divider)' }}>
            <img src={containersPhoto} alt="Vista aérea de un avión de carga en la pista"
             style={{
                position: 'absolute',
                inset: 0,
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
             }}
            />
          <i className="corner tl"></i>
          <i className="corner tr"></i>
          <i className="corner bl"></i>
          <i className="corner br"></i>
        </figure>
        <div>
          <h2 className="h2">Cuatro pasos, un solo responsable</h2>
          <ol className="list">
            <li>
              <span className="n">01</span>
              <div>
                <h3>Cotiza</h3>
                <p>Indica origen, destino, peso y medidas. Recibes el precio al instante.</p>
              </div>
            </li>
            <li>
              <span className="n">02</span>
              <div>
                <h3>Genera tu guía</h3>
                <p>Captura remitente, destinatario y contenido. Elige servicio estándar o express.</p>
              </div>
            </li>
            <li>
              <span className="n">03</span>
              <div>
                <h3>Entrega o recolección</h3>
                <p>Llévalo a nuestro centro o agenda que pasemos por él.</p>
              </div>
            </li>
            <li>
              <span className="n">04</span>
              <div>
                <h3>Rastrea hasta tu puerta</h3>
                <p>Sigue cada tramo — vuelo, aduana y reparto — con tu número de guía.</p>
              </div>
            </li>
          </ol>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'calc(1.5 * var(--u))' }}>
            <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); onNavigate('cotizador'); }}>
              Cotizar ahora
            </button>
            <button className="btn btn-secondary">Hacer un envío</button>
          </div>
        </div>
      </div>
    </section>
  );
}