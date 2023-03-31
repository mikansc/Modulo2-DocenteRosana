import imagemCarregando from "../../../assets/carregando.gif";

export default function Loading() {
  return (
    <>
      <h3>Está carregando!</h3>
      <img src={imagemCarregando} alt="Carregando..." />;
    </>
  );
}
