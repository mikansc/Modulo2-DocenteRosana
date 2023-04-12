import { useState, useEffect } from "react";

// Hook customizado podem ser simples ou complexos, o importante é que sejam adequados para seu projeto
export const useFetch = (url) => { 
  const [itens, setItens] = useState(null);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
      });
  };

  useEffect(() => getData(), []);

  const handleDelete = (item) => {
    fetch(`${url}/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(() => getData());
  };

  return [itens, handleDelete];
}


// Esse useFetch é mais simples, ele só tem o data
// Só pode ser usado para requisições GET
export const useFetch1 = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return [data, refetch];
};

// Esse useFetch é um pouco mais completo, ele tem um loading e um error
// Também tem um refetch, que é uma função que pode ser chamada para refazer a requisição
export const useFetch2 = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return [data, error, loading, refetch];
};
