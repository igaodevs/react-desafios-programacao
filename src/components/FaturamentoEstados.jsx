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

const FaturamentoEstados = () => {
  const faturamentoEstados = [
    { estado: "SP", faturamento: 67836.43 },
    { estado: "RJ", faturamento: 36678.66 },
    { estado: "MG", faturamento: 29229.88 },
    { estado: "ES", faturamento: 27165.48 },
    { estado: "Outros", faturamento: 19849.53 }
  ];

  const totalFaturamento = faturamentoEstados.reduce((acc, estado) => acc + estado.faturamento, 0);

  const percentuais = faturamentoEstados.map(estado => ({
    estado: estado.estado,
    percentual: ((estado.faturamento / totalFaturamento) * 100).toFixed(2)
  }));

  return (
    <Container>
      <h2>Percentual de Faturamento por Estado</h2>
      {percentuais.map((item) => (
        <Result key={item.estado}>
          {item.estado}: {item.percentual}% do faturamento total
        </Result>
      ))}
    </Container>
  );
};

export default FaturamentoEstados;
