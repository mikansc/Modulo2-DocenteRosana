import "./BusinessCard.css";

export default function BusinessCard({ url, name, email, phone }) {
  return (
    <div className="cartao-de-visita">
      <img src={url} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>
          <span>E-mail: </span>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <span>Telefone: </span>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
    </div>
  );
}

BusinessCard.defaultProps = {
  url: "https://via.placeholder.com/150",
};
