import  { useState } from 'react';

const SomaSequencial = () => {
  const [indice, setIndice] = useState(13); // Valor inicial
  const [soma, setSoma] = useState(0);

  const calcularSoma = (valor) => {
    let somaTemp = 0;
    for (let k = 1; k <= valor; k++) {
      somaTemp += k;
    }
    setSoma(somaTemp);
  };

  const handleSliderChange = (event) => {
    const novoValor = parseInt(event.target.value, 10);
    setIndice(novoValor);
    calcularSoma(novoValor);
  };

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '400px',
        margin: '20px auto',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>
        Soma Sequencial
      </h2>
      <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
        Ajuste o índice e veja a soma em tempo real:
      </p>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="range"
          min="1"
          max="50"
          value={indice}
          onChange={handleSliderChange}
          style={{ width: '80%', margin: '10px 0' }}
        />
        <span style={{ fontSize: '1rem', color: '#666' }}>Índice: {indice}</span>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <p>Soma Atual: {soma}</p>
        <div
          style={{
            width: '100%',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            overflow: 'hidden',
            height: '20px',
            marginTop: '10px',
          }}
        >
          <div
            style={{
              height: '100%',
              backgroundColor: '#4caf50',
              width: `${(soma / (indice * (indice + 1) / 2)) * 100}%`,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SomaSequencial;
