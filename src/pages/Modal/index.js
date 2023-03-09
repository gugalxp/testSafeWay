import "./style.css";
import { Link } from "react-router-dom";

import { FiX } from "react-icons/fi";
export default function Modal({ conteudo, close }) {

  return (
    <div className="modal" onClick={close}>
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
              <Link className="preco" to="/resumoCompra">
                <span>
                  <a>R$ {conteudo.preco}</a>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
