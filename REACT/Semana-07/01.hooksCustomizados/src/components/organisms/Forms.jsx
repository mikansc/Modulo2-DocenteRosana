import { useState } from "react";
// import { useForm, useForm2 } from "hooks";

// sem custom hook
export const FormExample = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h3>Form sem custom hook</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"  />
        <input type="email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};


// com custom hook
export const FormExample1 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h3>Form com custom hook</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"  />
        <input type="email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

// com custom hook e maps
const inputs = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
]
export const FormExample2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h3>Form com custom hook + maps</h3>
      <form onSubmit={handleSubmit}>
        {/* map */}
        <input type="text"  />
        <input type="email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

// simplificando com bind
export const FormExample3 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h3>Form com custom hook + maps + bind</h3>
      <form onSubmit={handleSubmit}>
        {/* map */}
        <input type="text"  />
        <input type="email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
