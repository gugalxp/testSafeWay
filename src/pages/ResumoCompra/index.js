import axios from "axios";
import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

function ResumoCompra() {
  const [produto, setProduto] = useState([]);

  function listAllItens() {
    axios.get(`http://localhost:3000/carrinho`)
      .then((exibejson) => {
        setProduto(exibejson.data);
      });
  }

  useEffect(() => {
    listAllItens();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <Link className="textMenu" to="/">
          Home
        </Link>
      </nav>
      <div className="containerDetalhes">
        <h2><FaGreaterThan size={18} /> Detalhes da compra</h2>
      </div>
      <div className="container">
        {produto.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="dimension">
                <img className="picture" src={item.foto} alt="" />
                <h1 className="title">{item.nome}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="containerBtnFinalizar">
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
}

export default ResumoCompra;
