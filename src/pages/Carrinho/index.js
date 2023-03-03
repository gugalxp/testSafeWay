import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { toast } from 'react-toastify';

function Carrinho() {
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

  function deleteItem(itemId) {
    let response = axios.delete(`http://localhost:3000/carrinho/${itemId}`);
    window.location.reload(true);
      toast.success("Item removido do seu carrinho!")
  }

  function comprarItem() {}

  return (
    <div>
      <nav className="navbar">
        <Link className="textMenu" to="/produtos">
          Home
        </Link>
      </nav>
      <div className="containerSeuCarrinho">
        <h2>
          <strong>
            <FaGreaterThan size={18} />
          </strong>{" "}
          Carrinho
        </h2>
      </div>
      <div className="container">
        {produto.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="dimension">
                <img className="picture" src={item.foto} alt="" />
                <h1 className="title">{item.nome}</h1>
                <p className="description">{item.descricao}</p>
              </div>
              <div className="containerbutton">
                <Link to="/resumoCompra">
                  <button
                    className="buttonCarrinhoComprar"
                    onClick={() => comprarItem(item.id)}
                  >
                    <BsCartFill className="iconNavCarrinho" />
                    Comprar
                  </button>
                </Link>
                <button
                  className="buttonCarrinhoDesistir"
                  onClick={() => deleteItem(item.id)}
                >
                  Remover item do carrinho
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carrinho;
