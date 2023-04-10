import { useState } from "react";
import { useCounter1, useCounter2, useCounter3 } from 'hooks'

// sem custom hook
export const Counter = () => {
  return (
    <section className="flex-column flex-center gap-4">
      <h3>Contador SEM custom hook - de 1 em 1</h3>
      <div className="flex-center gap-16">
        <button className="p-8" >-</button>
        {/* <span>{count}</span> */}
        <button className="p-8" >+</button>
      </div>
    </section>
  );
};


// com custom hook
export const Counter1 = () => {

  return (
    <section className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de 1 em 1</h3>
      <div className="flex-center gap-16">
        <button className="p-8" >-</button>
        {/* <span>{count}</span> */}
        <button className="p-8" >+</button>
      </div>
    </section>
  );
};

// sem custom hook, mas com incremento variável
export const Counter2 = () => {

return (
    <section className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de x em x</h3>
      <div className="flex-center gap-16">
        <button className="p-8" >-</button>
        {/* <span>{count}</span> */}
        <button className="p-8" >+</button>
      </div>
    </section>
  );
};


// com custom hook, mas com incremento variável
export const Counter3 = () => {

  return (
    <section className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de x em x</h3>
      <div className="flex-center gap-16">
        <button className="p-8" >-</button>
        {/* <span>{count}</span> */}
        <button className="p-8" >+</button>
      </div>
    </section>
  );
}

// com custom hook, mas com incremento e decremento variável (passados no estado inicial ou no momento de incrementar e decrementar)
export const Counter4 = () => {

  return (
    <section className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de x em x </h3>
      <div className="flex-center gap-16">
        <button className="p-8" >-</button>
        {/* <span>{count}</span> */}
        <button className="p-8" >+</button>
      </div>
    </section>
  );
}
