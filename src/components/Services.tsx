import { PlaneLanding, Boxes, FileCheck2, Truck } from 'lucide-react';

export default function Services() {
  return (
    <section className="block" id="servicios" data-screen-label="Servicios">
      <span className="kicker">02 · Servicios</span>
      <hr className="rule" />
      <h2 className="h2">Lo que movemos por ti</h2>
      <div className="cells">
        <div className="frame cell">
          <i className="corner tl"></i>
          <i className="corner tr"></i>
          <i className="corner bl"></i>
          <i className="corner br"></i>
          <PlaneLanding size={32} />
          <h3>Importación aérea</h3>
          <p>Carga general desde EE. UU. y Asia en vuelos propios, con salidas programadas cada semana.</p>
          <button className="btn btn-ghost">Ver rutas</button>
        </div>
        <div className="frame cell">
          <i className="corner tl"></i>
          <i className="corner tr"></i>
          <i className="corner bl"></i>
          <i className="corner br"></i>
          <Boxes size={32} />
          <h3>Renta de espacio</h3>
          <p>Aparta pallets o metros cúbicos en un vuelo. Pagas solo el espacio que reservas.</p>
          <button className="btn btn-ghost">Reservar espacio</button>
        </div>
        <div className="frame cell">
          <i className="corner tl"></i>
          <i className="corner tr"></i>
          <i className="corner bl"></i>
          <i className="corner br"></i>
          <FileCheck2 size={32} />
          <h3>Despacho aduanal</h3>
          <p>Nuestro equipo prepara pedimentos y documentos para que tu carga no se detenga.</p>
          <button className="btn btn-ghost">Saber más</button>
        </div>
        <div className="frame cell">
          <i className="corner tl"></i>
          <i className="corner tr"></i>
          <i className="corner bl"></i>
          <i className="corner br"></i>
          <Truck size={32} />
          <h3>Puerta a puerta</h3>
          <p>Recolectamos en origen y entregamos en tu bodega, con rastreo en cada tramo.</p>
          <button className="btn btn-ghost">Cotizar</button>
        </div>
      </div>
    </section>
  );
}