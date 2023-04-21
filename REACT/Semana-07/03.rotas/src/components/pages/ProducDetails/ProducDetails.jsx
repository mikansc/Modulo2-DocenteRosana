import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Produto 2",
    price: 20.2,
    description: "Descrição do produto 2",
    image: "https://random.imagecdn.app/151/151",
  },
  {
    id: 2,
    name: "Produto 7",
    price: 70,
    description: "Descrição do produto 7",
    image: "https://random.imagecdn.app/156/156",
  },
];

export function ProducDetails() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3003/products/${id}`)
      .then((response) => response.json())
      .then((json) => setSelectedProduct(json));
  }, [id]);

  // const selectedProduct = products.find((item) => item.id === Number(id));
  console.log(selectedProduct);
  return (
    selectedProduct && (
      <div>
        <h2>Detalhes de {selectedProduct.name}</h2>
        <p>{selectedProduct.description}</p>
        <p>{`Preço: R$ ${selectedProduct?.price?.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`}</p>
        <img src={selectedProduct.image} alt={selectedProduct.description} />
      </div>
    )
  );
}
