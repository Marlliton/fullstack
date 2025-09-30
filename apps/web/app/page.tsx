'use client';

import { useState, useEffect } from 'react';
import { soma } from '@fullstack/core';
import styles from './page.module.css';

export default function Home() {
  const [numA, setNumA] = useState(10);
  const [numB, setNumB] = useState(5);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    setResultado(soma(Number(numA) || 0, Number(numB) || 0));
  }, [numA, numB]);

  const inputStyles: React.CSSProperties = {
    padding: '0.8rem',
    fontSize: '1.2rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    textAlign: 'center',
    width: '100px',
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ marginBottom: '2rem', fontSize: '3rem' }}>
          Calculadora Monorepo
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <input
            type="number"
            value={numA}
            onChange={(e) => setNumA(Number(e.target.value))}
            style={inputStyles}
          />
          <span style={{ fontSize: '2rem' }}>+</span>
          <input
            type="number"
            value={numB}
            onChange={(e) => setNumB(Number(e.target.value))}
            style={inputStyles}
          />
        </div>
        <h2 style={{ marginTop: '3rem', fontSize: '2.5rem' }}>
          Resultado: <span style={{ color: '#0070f3' }}>{resultado}</span>
        </h2>
        <p style={{ marginTop: '3rem', color: '#888', textAlign: 'center' }}>
          Esta operação usa a função <code>soma</code> compartilhada do pacote <code>@fullstack/core</code>.
        </p>
      </main>
    </div>
  );
}
