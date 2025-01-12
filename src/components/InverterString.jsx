import  { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaRedo } from 'react-icons/fa';

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
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Input = styled.input`
  padding: 15px;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 15px 0;
  width: 80%;
  max-width: 350px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.6);
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
  }

  &:disabled {
    background-color: #BDC3C7;
    cursor: not-allowed;
  }
`;

const Result = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #3498db;
  margin-top: 30px;
  transition: opacity 0.3s ease;

  &.hidden {
    opacity: 0;
  }

  &.visible {
    opacity: 1;
  }
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  color: #e74c3c;
  margin-top: 10px;
`;

const InverterString = () => {
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');
  const [isInverting, setIsInverting] = useState(false);
  const [error, setError] = useState(null);

  const inverter = (str) => {
    if (!str.trim()) {
      setError("Por favor, insira uma string válida.");
      return;
    }

    setError(null);
    setIsInverting(true);
    let invertida = '';
    
    // Inversão manual da string
    setTimeout(() => {
      for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i]; 
      }
      setSaida(invertida); // Atualiza o estado com a string invertida
      setIsInverting(false); // Finaliza o processo
    }, 500); // Simula um pequeno delay para uma interação mais fluída
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Container>
        <h2><FaRedo /> Inverter String</h2>
        <Input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          placeholder="Digite uma string"
        />
        <Button onClick={() => inverter(entrada)} disabled={isInverting}>
          {isInverting ? "Invertendo..." : "Inverter"}
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Result className={saida ? 'visible' : 'hidden'}>Resultado: {saida}</Result>
      </Container>
    </motion.div>
  );
};

export default InverterString;
