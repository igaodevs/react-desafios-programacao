/* eslint-disable react/prop-types */
import 'react';
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Result = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #3498db;
  margin-top: 30px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Faturamento = ({ faturamentoData }) => {
  const calcularFaturamento = () => {
    const diasComFaturamento = faturamentoData.filter(item => item.valor > 0);
    
    const totalFaturamento = diasComFaturamento.reduce((acc, item) => acc + item.valor, 0);
    const mediaFaturamento = totalFaturamento / diasComFaturamento.length;

    const menorFaturamento = Math.min(...diasComFaturamento.map(item => item.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(item => item.valor));

    const diasAcimaDaMedia = diasComFaturamento.filter(item => item.valor > mediaFaturamento).length;

    return {
      menorFaturamento,
      maiorFaturamento,
      mediaFaturamento,
      diasAcimaDaMedia,
    };
  };

  const { menorFaturamento, maiorFaturamento, mediaFaturamento, diasAcimaDaMedia } = calcularFaturamento();

  return (
    <Container>
      <h2>Faturamento Diário da Distribuidora</h2>
      <Result>Menor Valor de Faturamento: R${menorFaturamento.toFixed(2)}</Result>
      <Result>Maior Valor de Faturamento: R${maiorFaturamento.toFixed(2)}</Result>
      <Result>Média de Faturamento: R${mediaFaturamento.toFixed(2)}</Result>
      <Result>Dias com Faturamento Acima da Média: {diasAcimaDaMedia}</Result>
    </Container>
  );
};

export default Faturamento;
