import  { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  text-align: center;
  margin: 20px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  max-width: 450px;
  margin: 40px auto;
`;

const Button = styled.button`
  padding: 12px 30px;
  border-radius: 8px;
  border: none;
  background-color: #3498db;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px;

  &:hover {
    background-color: #2980b9;
  }
`;

const Result = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #3498db;
  margin-top: 30px;
`;

const FaturamentoMensal = () => {
  const faturamentoData = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
  ];

  const calcularFaturamento = () => {
    const faturamentosValidos = faturamentoData.filter(item => item.valor > 0);
    
    if (faturamentosValidos.length === 0) {
      return {
        menor: 0,
        maior: 0,
        diasAcimaMedia: 0
      };
    }

    // Menor e maior faturamento
    const menorFaturamento = Math.min(...faturamentosValidos.map(item => item.valor));
    const maiorFaturamento = Math.max(...faturamentosValidos.map(item => item.valor));

    // Média de faturamento
    const mediaFaturamento = faturamentosValidos.reduce((acc, item) => acc + item.valor, 0) / faturamentosValidos.length;

    // Contagem dos dias com faturamento superior à média
    const diasAcimaMedia = faturamentosValidos.filter(item => item.valor > mediaFaturamento).length;

    return {
      menor: menorFaturamento,
      maior: maiorFaturamento,
      diasAcimaMedia: diasAcimaMedia
    };
  };

  const [resultado, setResultado] = useState(null);

  const mostrarResultados = () => {
    const { menor, maior, diasAcimaMedia } = calcularFaturamento();
    setResultado({
      menor,
      maior,
      diasAcimaMedia
    });
  };

  return (
    <Container>
      <h2>Faturamento Mensal</h2>
      <Button onClick={mostrarResultados}>Calcular Faturamento</Button>
      {resultado && (
        <div>
          <Result>Menor faturamento: R${resultado.menor.toFixed(2)}</Result>
          <Result>Maior faturamento: R${resultado.maior.toFixed(2)}</Result>
          <Result>Número de dias com faturamento acima da média: {resultado.diasAcimaMedia}</Result>
        </div>
      )}
    </Container>
  );
};

export default FaturamentoMensal;
