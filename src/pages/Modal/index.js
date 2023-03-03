import "./style.css";

import { FiX } from "react-icons/fi";
export default function Modal({ conteudo, close }) {
  return (
    <div className="modal">
      <div className="container">
        <button className="close" onClick={close}>
          <FiX size="23" color="#fff" />
          Voltar
        </button>

        <div>
          <div>
            <div class="containerImg">
              <img className="picture" src={conteudo.foto} alt="" />
            </div>
            <div className="items">
              <span className="title">
              <a>{conteudo.nome}</a>
              </span>
              <span className="description">
              <a>{conteudo.descricao}</a>
              </span>

              <span className="preco">
                <a>R$ {conteudo.preco}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
