/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
    transform: scale(1.05);
  }

  &:active {
    background-color: #1f6780;
  }
`;

const Input = styled.input`
  padding: 8px;
  font-size: 18px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
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

const FibonacciVerifica = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);

  const fibonacci = (num, memo = {}) => {
    if (num <= 1) return num;
    if (memo[num]) return memo[num];
    
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    return memo[num];
  };

  const verificarSeFibonacci = (num) => {
    let a = 0, b = 1;
    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b === num;
  };

  const handleVerificar = () => {
    const num = parseInt(numero);
    if (verificarSeFibonacci(num)) {
      setResultado(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
      setResultado(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }
  };

  return (
    <Container>
      <h2>Verificação de Número na Sequência de Fibonacci</h2>
      <Input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Digite um número"
      />
      <Button onClick={handleVerificar}>Verificar Fibonacci</Button>
      {resultado && <Result>{resultado}</Result>}
    </Container>
  );
};

export default FibonacciVerifica;
