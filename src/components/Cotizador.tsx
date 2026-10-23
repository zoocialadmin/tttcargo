import { useState } from 'react';
import { CheckCircle2, AlertCircle, Package, ArrowRight, Truck, Calendar } from 'lucide-react';

interface AddressState {
  country: string;
  city: string;
  zip: string;
}

interface CommonBox {
  id: string;
  name: string;
  desc: string;
  l: number;
  w: number;
  h: number;
  weight: number;
}

const COMMON_BOXES: CommonBox[] = [
  { id: 'm1', name: 'Pallet Ligero UDL', desc: 'Mercancía en tarima estándar', l: 120, w: 100, h: 100, weight: 150 },
  { id: 'm2', name: 'Contenedor Mediano', desc: 'Caja alta para vuelo de carga', l: 150, w: 120, h: 120, weight: 300 },
  { id: 'm3', name: 'Módulo Gran Carga', desc: 'Espacio masivo UDL', l: 200, w: 150, h: 160, weight: 600 },
];

export default function Cotizador() {
  // Estado Sección 1: Dirección Origen y Destino
  const [from, setFrom] = useState<AddressState>({ country: 'México', city: '', zip: '' });
  const [to, setTo] = useState<AddressState>({ country: 'México', city: '', zip: '' });
  const [useType, setUseType] = useState<'personal' | 'business'>('business');

  // Estado Sección 2: Dimensiones y Paquete
  const [tab, setTab] = useState<'custom' | 'common'>('custom');
  const [selectedBox, setSelectedBox] = useState<string | null>(null);
  const [weight, setWeight] = useState<number>(100); // Mínimo inicial sugerido
  const [length, setLength] = useState<number>(80);
  const [width, setWidth] = useState<number>(80);
  const [height, setHeight] = useState<number>(80);
  const [quantity, setQuantity] = useState<number>(1);
  const [minError, setMinError] = useState<string>('');

  // Estado Sección 3: Resultado de Cotización
  const [showQuote, setShowQuote] = useState<boolean>(false);

  // Mapeo básico de prueba para Autollenado CP, Ciudad
  const handleCityChange = (type: 'from' | 'to', value: string) => {
    const zipMap: Record<string, string> = {
      'Mérida': '97000',
      'Cholul-Mérida': '97305',
      'Maxcanú': '97805',
      'Ciudad de México': '01000',
      'Los Ángeles': '90001'
    };
    const autoZip = zipMap[value] || '';
    if (type === 'from') {
      setFrom(prev => ({ ...prev, city: value, zip: autoZip || prev.zip }));
    } else {
      setTo(prev => ({ ...prev, city: value, zip: autoZip || prev.zip }));
    }
  };

  const handleZipChange = (type: 'from' | 'to', value: string) => {
    const cityMap: Record<string, string> = {
      '97000': 'Mérida',
      '97305': 'Cholul-Mérida',
      '97805': 'Maxcanú',
      '01000': 'Ciudad de México',
      '90001': 'Los Ángeles'
    };
    const autoCity = cityMap[value] || '';
    if (type === 'from') {
      setFrom(prev => ({ ...prev, zip: value, city: autoCity || prev.city }));
    } else {
      setTo(prev => ({ ...prev, zip: value, city: autoCity || prev.city }));
    }
  };

  // Validaciones Sección 1
  const isFromValid = from.country !== '' && from.city.trim() !== '' && from.zip.trim().length >= 4;
  const isToValid = to.country !== '' && to.city.trim() !== '' && to.zip.trim().length >= 4;
  const isStep1Complete = isFromValid && isToValid;

  // Selección de cajas comunes
  const handleSelectBox = (box: CommonBox) => {
    setSelectedBox(box.id);
    setLength(box.l);
    setWidth(box.w);
    setHeight(box.h);
    setWeight(box.weight);
  };

  // Cálculo e inicio de paso 3
  const handleCalculate = () => {
    // Validación de carga mínima (Formato UDL de avión)
    if (weight < 50 || length < 50 || width < 50 || height < 50) {
      setMinError('ttt•cargo transporta carga masiva de importación. El peso mínimo por bulto es de 50 kg y 50 cm por lado.');
      setShowQuote(false);
      return;
    }
    setMinError('');
    setShowQuote(true);
  };

  return (
    <div className="wrap cotizador-page">
      <h1 className="cotizador-title">Cotización gratuita para envíos nacionales e internacionales</h1>

      {/* SECCIÓN 1: ORIGEN Y DESTINO */}
      <section className="frame step-card" style={{ padding: '24px', background: 'var(--color-surface)' }}>
        <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
        <span className="kicker">Paso 01 · Origen y Destino</span>

        <div style={{ display: 'flex', gap: '16px', margin: '16px 0' }}>
          <button 
            className={`btn ${useType === 'business' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setUseType('business')}
          >
            Negocio / Carga Comercial
          </button>
          <button 
            className={`btn ${useType === 'personal' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setUseType('personal')}
          >
            Envío Personal / Importación
          </button>
        </div>

        <div className="form-grid-2">
          {/* DE (ORIGEN) */}
          <div className="location-block">
            <h3>De (Origen)</h3>
            <div className="input-group">
              <label>País / Territorio</label>
              <div className={`input-field ${from.country ? 'valid' : 'invalid'}`}>
                <select value={from.country} onChange={(e) => setFrom({ ...from, country: e.target.value })}>
                  <option value="México">🇲🇽 México</option>
                  <option value="Estados Unidos">🇺🇸 Estados Unidos</option>
                  <option value="China">🇨🇳 China</option>
                </select>
                <span className="input-icon valid"><CheckCircle2 size={16} /></span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
              <div className="input-group">
                <label>Ciudad</label>
                <div className={`input-field ${from.city.trim() ? 'valid' : 'invalid'}`}>
                  <input 
                    type="text" 
                    placeholder="Ej. Maxcanú" 
                    value={from.city} 
                    onChange={(e) => handleCityChange('from', e.target.value)} 
                  />
                  <span className={`input-icon ${from.city.trim() ? 'valid' : 'invalid'}`}>
                    {from.city.trim() ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  </span>
                </div>
              </div>

              <div className="input-group">
                <label>C.P.</label>
                <div className={`input-field ${from.zip.length >= 4 ? 'valid' : 'invalid'}`}>
                  <input 
                    type="text" 
                    placeholder="97805" 
                    value={from.zip} 
                    onChange={(e) => handleZipChange('from', e.target.value)} 
                  />
                  <span className={`input-icon ${from.zip.length >= 4 ? 'valid' : 'invalid'}`}>
                    {from.zip.length >= 4 ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PARA (DESTINO) */}
          <div className="location-block">
            <h3>Para (Destino)</h3>
            <div className="input-group">
              <label>País / Territorio</label>
              <div className={`input-field ${to.country ? 'valid' : 'invalid'}`}>
                <select value={to.country} onChange={(e) => setTo({ ...to, country: e.target.value })}>
                  <option value="México">🇲🇽 México</option>
                  <option value="Estados Unidos">🇺🇸 Estados Unidos</option>
                </select>
                <span className="input-icon valid"><CheckCircle2 size={16} /></span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
              <div className="input-group">
                <label>Ciudad</label>
                <div className={`input-field ${to.city.trim() ? 'valid' : 'invalid'}`}>
                  <input 
                    type="text" 
                    placeholder="Ej. Cholul-Mérida" 
                    value={to.city} 
                    onChange={(e) => handleCityChange('to', e.target.value)} 
                  />
                  <span className={`input-icon ${to.city.trim() ? 'valid' : 'invalid'}`}>
                    {to.city.trim() ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  </span>
                </div>
              </div>

              <div className="input-group">
                <label>C.P.</label>
                <div className={`input-field ${to.zip.length >= 4 ? 'valid' : 'invalid'}`}>
                  <input 
                    type="text" 
                    placeholder="97305" 
                    value={to.zip} 
                    onChange={(e) => handleZipChange('to', e.target.value)} 
                  />
                  <span className={`input-icon ${to.zip.length >= 4 ? 'valid' : 'invalid'}`}>
                    {to.zip.length >= 4 ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: DIMENSIONES Y PESO (DESBLOQUEADO SI PASO 1 ESTÁ COMPLETO) */}
      <section className={`frame step-card ${!isStep1Complete ? 'disabled' : ''}`} style={{ padding: '24px', background: 'var(--color-surface)' }}>
        <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
        <span className="kicker">Paso 02 · Detalles de la carga</span>

        <div className="tabs-header">
          <button 
            className={`tab-btn ${tab === 'custom' ? 'active' : ''}`} 
            onClick={() => setTab('custom')}
          >
            Dimensiones Personalizadas
          </button>
          <button 
            className={`tab-btn ${tab === 'common' ? 'active' : ''}`} 
            onClick={() => setTab('common')}
          >
            Módulos Comunes UDL
          </button>
        </div>

        {tab === 'common' && (
          <div className="boxes-grid">
            {COMMON_BOXES.map((b) => (
              <div 
                key={b.id} 
                className={`box-card ${selectedBox === b.id ? 'selected' : ''}`}
                onClick={() => handleSelectBox(b)}
              >
                <Package size={24} color="var(--color-accent)" />
                <strong>{b.name}</strong>
                <small>{b.desc}</small>
                <span style={{ fontSize: '11px', fontWeight: 600 }}>{b.l} x {b.w} x {b.h} cm</span>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px', alignItems: 'end' }}>
          <div className="input-group">
            <label>Peso (kg)</label>
            <div className="input-field">
              <input type="number" min="1" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
            </div>
          </div>

          <div className="input-group">
            <label>Largo (cm)</label>
            <div className="input-field">
              <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} />
            </div>
          </div>

          <div className="input-group">
            <label>Ancho (cm)</label>
            <div className="input-field">
              <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
            </div>
          </div>

          <div className="input-group">
            <label>Alto (cm)</label>
            <div className="input-field">
              <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
            </div>
          </div>

          <div className="input-group">
            <label>Bultos / Pallets</label>
            <div className="input-field">
              <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>
          </div>
        </div>

        <div className="notice-min-udl">
            <strong>Atención:</strong> TTT Cargo opera vuelos de carga masiva. Dimensiones mínimas sugeridas para tarifa estándar: 50x50x50 cm o mayor a 50 kg.
        </div>

        {minError && <p style={{ color: '#d32f2f', fontSize: '13px', marginTop: '12px' }}>{minError}</p>}

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-primary" onClick={handleCalculate} style={{ minHeight: '48px', paddingInline: '32px' }}>
            Obtener Cotización <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* SECCIÓN 3: RESULTADO DE LA COTIZACIÓN */}
      {showQuote && (
        <section className="frame step-card" style={{ padding: '24px', background: 'var(--color-surface)' }}>
          <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
          <span className="kicker">Paso 03 · Cotización Disponible</span>
          <h2>Tarifa de Flete Aéreo Directo</h2>

          <div className="quote-result-grid">
            <div className="quote-card featured">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag tag-accent">Vuelo Directo TT-Cargo</span>
                <Truck size={24} color="var(--color-accent)" />
              </div>
              <p style={{ margin: 0 }}>Importación Consolidada {from.city} → {to.city}</p>

              <div className="quote-price">
                MXN ${(weight * 45 * quantity + 1200).toLocaleString('es-MX', { minimumFractionDigits: 2 })}*
              </div>

              <div style={{ fontSize: '13px', color: 'color-mix(in srgb, var(--color-text) 75%, transparent)' }}>
                <p style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: '4px 0' }}>
                  <Calendar size={16} /> <strong>Entrega Estimada:</strong> Jueves, 29 de Octubre de 2026
                </p>
                <p style={{ margin: '4px 0' }}>Incluye liberación aduanal base y manejo de rampa UDL.</p>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                Reservar Espacio en Vuelo
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}