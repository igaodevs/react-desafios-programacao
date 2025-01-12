# Desafios de Programação em React

Este projeto foi desenvolvido para resolver uma série de desafios de programação utilizando React com Vite. A aplicação possui uma interface moderna, responsiva e interativa, com funcionalidades bem estruturadas e animações suaves para oferecer a melhor experiência ao usuário.

---

## **Funcionalidades Principais**

1. **Soma Sequencial**
   - Calcula a soma dos números de 1 até um índice selecionado pelo usuário.
   - Possui uma barra de progresso interativa que representa visualmente a soma calculada.

2. **Verificação de Fibonacci**
   - Verifica se um número informado pertence à sequência de Fibonacci.
   - Exibe a sequência gerada e uma mensagem indicando se o número faz parte ou não.

3. **Faturamento Diário**
   - Calcula o menor, maior e média de faturamento diário com base em dados de um arquivo JSON.
   - Mostra o número de dias em que o faturamento foi superior à média.

4. **Faturamento por Estado**
   - Calcula o percentual de participação de cada estado no faturamento total da distribuidora.
   - Exibe os resultados em um layout limpo e dinâmico.

5. **Inversão de String**
   - Permite que o usuário insira uma string e veja o resultado invertido em tempo real, sem usar funções prontas.

---

## **Tecnologias Utilizadas**

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta para inicialização rápida e desempenho otimizado do projeto.
- **CSS Moderno**: Estilos modulares e animações para um design moderno e responsivo.
- **JavaScript Avançado**: Lógicas otimizadas e complexas para cálculos e interações.

---

## **Como Configurar e Executar o Projeto**

### **Pré-requisitos**

Certifique-se de ter instalado em sua máquina:
- Node.js (v16 ou superior)
- npm (v7 ou superior) ou yarn

### **Passo a Passo**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/desafios-react.git
   cd desafios-react
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação:**
   Abra o navegador e acesse: [http://localhost:5173](http://localhost:5173)

---

## **Estrutura do Projeto**

```plaintext
├── public
├── src
│   ├── components
│   │   ├── FibonacciVerifica.jsx
│   │   ├── SomaSequencial.jsx
│   │   ├── Faturamento.jsx
│   │   ├── FaturamentoEstados.jsx
│   │   ├── InverterString.jsx
│   │   └── styles
│   │       └── geral.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

### **Componentes Principais**

1. **`FibonacciVerifica.jsx`**
   - Lida com a lógica para calcular a sequência de Fibonacci e verificar se um número pertence a ela.

2. **`SomaSequencial.jsx`**
   - Calcula a soma dos números de 1 até um valor selecionado pelo usuário e exibe uma barra de progresso dinâmica.

3. **`Faturamento.jsx`**
   - Processa dados JSON de faturamento diário e exibe resultados analíticos.

4. **`FaturamentoEstados.jsx`**
   - Calcula e exibe o percentual de faturamento por estado com um design limpo.

5. **`InverterString.jsx`**
   - Fornece uma interface para inversão de strings inseridas pelo usuário em tempo real.

---

## **Feedback Visual e Experiência do Usuário**

- **Design Responsivo:**
  - Ajusta-se automaticamente para diferentes tamanhos de tela.

- **Feedback Visual:**
  - Uso de animações em interações como sliders e progress bars.
  - Indicadores visuais para ações bem-sucedidas ou erros.

- **Cards Interativos:**
  - Todas as funcionalidades estão organizadas em cards, tornando a interface limpa e intuitiva.

---

## **Contribuição**

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`
4. Envie para o repositório remoto: `git push origin minha-feature`
5. Abra um Pull Request.

---

## **Licença**

Este projeto é licenciado sob a [MIT License](LICENSE).

---

## **Autor**

Desenvolvido por [Igor](https://github.com/igaodevs).

