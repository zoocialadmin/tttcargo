import { useState } from 'react';
import type { FormEvent } from 'react';
import { ScanSearch } from 'lucide-react';

export default function Tracking() {
  const [guideNumber, setGuideNumber] = useState('TTT-482190337');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (guideNumber.trim()) {
      setShowResult(true);
    }
  };

  return (
    <section className="tracking" id="rastreo" data-screen-label="Rastreo">
      <div className="frame trk">
        <i className="corner tl"></i>
        <i className="corner tr"></i>
        <i className="corner bl"></i>
        <i className="corner br"></i>
        <div>
          <span className="kicker">01 · Rastreo</span>
          <h2>Rastrea tu envío</h2>
          <p>Ingresa tu número de guía. Puedes separar varias con comas.</p>
        </div>
        <form className="trk-form" onSubmit={handleSubmit}>
          <input
            className="input"
            value={guideNumber}
            onChange={(e) => setGuideNumber(e.target.value)}
            aria-label="Número de guía"
            placeholder="ID de rastreo"
          />
          <button className="btn btn-primary" type="submit">
            <ScanSearch size={18} />
            Rastrear
          </button>
        </form>

        <div className={`result ${showResult ? 'on' : ''}`} id="res">
          <div className="res-head">
            <span className="guide">{guideNumber}</span>
            <span className="tag tag-accent">En tránsito</span>
            <span className="meta">Los Ángeles, US → Ciudad de México, MX · 2 bultos · 18.4 kg</span>
            <span className="meta">Entrega estimada: jue 15 oct</span>
          </div>
          <div className="steps">
            <div className="step done">
              <b>Recolectado</b>
              <span>10 oct · 14:20 · LAX</span>
            </div>
            <div className="step done">
              <b>En vuelo</b>
              <span>11 oct · 23:05 · TT-204</span>
            </div>
            <div className="step now">
              <b>Aduana</b>
              <span>12 oct · 06:40 · MEX</span>
            </div>
            <div className="step">
              <b>En reparto</b>
              <span>Pendiente</span>
            </div>
            <div className="step">
              <b>Entregado</b>
              <span>Pendiente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}