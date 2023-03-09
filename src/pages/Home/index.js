import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
import { FaCartPlus, FaGreaterThan } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Modal from "../Modal";
import { toast } from "react-toastify";

function Home() {
  const [produto, setProduto] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState(false);

  async function listAllItens() {
    await axios.get("http://localhost:3000/produtos").then((exibejson) => {
      setProduto(exibejson.data);
    });
  }

  useEffect(() => {
    listAllItens();
  }, []);

  function adicionarItem(data) {
    const url = "http://localhost:3000/carrinho";
    axios(url, {
      method: "POST",
      data: data,
    })
      .then(function (response) {
        toast.success("Item adicionado ao seu carrinho!");
      })
      .catch(function (error) {
        toast.error(
          "Houve algum problema ao adicionar este item! ERRO: " + error
        );
      });
  }

  function togglePostModal(item) {
    setShowModal(!showModal); //troca de true para false
    setDetail(item);
  }

  return (
    <div>
      <header className="App-header"></header>
      <nav className="navbar">
        <Link to="/carrinho">
          <BsCartFill className="iconNav" color="white" size="20" />
        </Link>
      </nav>
      <div className="containerSeuCarrinho">
        <h2>
          <FaGreaterThan size={18} /> Produtos
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
              <button className="adicionar" onClick={() => adicionarItem(item)}>
                <FaCartPlus className="iconButton" size={20} /> Adicionar ao
                carrinho
              </button>
              <div className="action">
                <button onClick={() => togglePostModal(item)}>
                  <FiSearch className="iconButton" color="#fff" size={18} />
                  Mais detalhes
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showModal && <Modal conteudo={detail} close={togglePostModal} />}
    </div>
  );
}

export default Home;
