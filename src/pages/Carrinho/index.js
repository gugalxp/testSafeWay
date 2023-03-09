import axios from "axios";
import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { toast } from "react-toastify";

function Carrinho() {
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

  async function deleteItem(itemId) {
    await axios.delete(`http://localhost:3000/carrinho/${itemId}`).then(function(response) {
      toast.success("Item removido do seu carrinho!");
    }) .catch(function(error) {
      toast.error("Houve algum problema ao remover este item removido do seu carrinho!");
    })
    setTimeout(() => {
      listAllItens();
    }, 200);
  }

  return (
    <div>
      <nav className="navbar">
        <Link className="textMenu" to="/">
          Home
        </Link>
      </nav>
      <div className="containerSeuCarrinho">
        <h2>
            <FaGreaterThan size={18} /> Carrinho
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
                  <button className="buttonCarrinhoComprar">
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
