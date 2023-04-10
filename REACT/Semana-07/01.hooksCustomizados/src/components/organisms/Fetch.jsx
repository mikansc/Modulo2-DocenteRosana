import { useState, useEffect } from "react";
// import { useFetch1, useFetch2, useFetch3 } from 'hooks'
import { ProductList } from "components/molecules";

// sem custom hook
export const Fetch = () => {
  
  return (
    <section className="flex-column flex-center gap-16">
      <h3>Sem custom hook</h3>
    </section>
  );
};

// com custom hook
export const Fetch1 = () => {

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook bem simples</h3>
    </section>
  )
}

export const Fetch2 = () => {

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook mais reaproveitável</h3>
    </section>
  )
}

export const Fetch3 = () => {

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook mais reaproveitável</h3>
    </section>
  )
}
