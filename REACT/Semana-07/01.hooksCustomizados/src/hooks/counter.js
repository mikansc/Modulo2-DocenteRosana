import { useState } from "react";

// Esse é um exemplo de hooks customizado, mas que não é muito útil, pois não permite passar o incremento e decremento
// será sempre de 1 em 1
export const useCounter1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return [count, increment, decrement];
};


// OBS: Os hooks abaixo são mais úteis, pois permitem passar o incremento e decremento

// Permite passar o incremento e decremento no estado inicial do hook
export const useCounter2 = (
  initialValue = 0,
  incrementValue = 1,
  decrementValue = 1
) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + incrementValue);

  const decrement = () => setCount(count - decrementValue);

  return [count, increment, decrement];
};

// Permite passar o incremento e decremento nas funções de incrementar e decrementar
export const useCounter3 = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = (value = 1) => setCount(count + value);

  const decrement = (value = 1) => setCount(count - value);

  return [count, increment, decrement];
};
