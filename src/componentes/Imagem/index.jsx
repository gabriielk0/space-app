/* eslint-disable react/prop-types */
const Imagem = ({ foto }) => {
  return (
    <figure>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <footer>
          <p>{foto.fonte}</p>
          <button>Favorito</button>
          <button>Expandir</button>
        </footer>
      </figcaption>
    </figure>
  );
};

export default Imagem;
