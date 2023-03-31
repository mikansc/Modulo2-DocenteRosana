import "./Image.css"

export default function Image({ formato, url, nomeAlternativo }) {

 return (
   <img
     className={`imagem ${formato}`}
     src={url}
     alt={nomeAlternativo}
   />
 );
}
