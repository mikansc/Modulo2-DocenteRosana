import { useState } from "react";
// import { useInput1, useInput2 } from "hooks";

// sem custom hook
export const InputExample = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h3>Input com custom hook simples</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

// com custom hook
export const InputExample1 = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h3>Input com custom hook</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export const InputExample2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h3>Input com custom hook simples</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
