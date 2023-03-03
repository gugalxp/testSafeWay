import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";

function ResumoCompra() {
  const [produto, setProduto] = useState([]);
  const [comprarProduto, setComprarProduto] = useState(true);

  useEffect(() => {
    function loadApp() {
      let produtos = "carrinho";
      let url = `http://localhost:3000/carrinho`;
      fetch(url)
        .then((results) => results.json())
        .then((exibejson) => {
          setProduto(exibejson);
        });
    }
    loadApp();
  }, []);

  function comprarItem() {}

  return (
    <div>
      <nav className="navbar">
        <Link className="textMenu" to="/produtos">
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
