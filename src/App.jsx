import 'react';
import FibonacciVerifica from './components/FibonacciVerifica';
import SomaSequencial from './components/SomaSequencial';
import Faturamento from './components/Faturamento';
import FaturamentoEstados from './components/FaturamentoEstados';
import InverterString from './components/InverterString';
import FaturamentoMensal from './components/FaturamentoMensal';
import './App.css'; // Arquivo CSS atualizado

const App = () => {
  const faturamentoData = [
    { "dia": "01", "valor": 1000 },
    { "dia": "02", "valor": 2000 },
    { "dia": "03", "valor": 0 },
    { "dia": "04", "valor": 3000 },
    { "dia": "05", "valor": 1500 }
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Desafios de Programação em React</h1>
      <p className="app-description">
        Experimente cada desafio e veja os resultados de forma dinâmica e interativa.
      </p>
      <div className="cards-container">
        <div className="card">
          <h2 className="card-title">Sequência de Fibonacci</h2>
          <FibonacciVerifica />
        </div>
        <div className="card">
          <h2 className="card-title">Soma Sequencial</h2>
          <SomaSequencial />
        </div>
        <div className="card">
          <h2 className="card-title">Faturamento Diário</h2>
          <Faturamento faturamentoData={faturamentoData} />
        </div>
        <div className="card">
          <h2 className="card-title">Faturamento por Estados</h2>
          <FaturamentoEstados />
        </div>
        <div className="card">
          <h2 className="card-title">Inverter String</h2>
          <InverterString />
        </div>
        <div className="card">
          <h2 className="card-title">Faturamento Mensal</h2>
          <FaturamentoMensal />
        </div>
      </div>
    </div>
  );
};

export default App;
