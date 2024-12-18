import './Home.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Carousel } from 'react-bootstrap'
import starbuck from '../../components/asserts/imagens/Carousel/starbuck.webp'
import caffe from '../../components/asserts/imagens/Carousel/caffe.jpg'
import item1 from '../../components/asserts/imagens/Carousel/item1.webp'
import item2 from '../../components/asserts/imagens/Carousel/item2.webp'
import ProductCard from '../../components/productCard/ProductCard'
import Title from '../../components/title/Title'
import { baseHome } from "../../environments";


function Home() {

  const [oferta, setOferta] = useState([])
  const [novidades, setNovidades] = useState([])


  useEffect(() => {
    // Fetch ofertas
    axios.get(`${baseHome}/ofertas`)
      .then((response) => {
        console.log("Ofertas recebidas:", response.data); // Log para verificar dados
        setOferta(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar ofertas:", error);
      });
  
    // Fetch novidades
    axios.get(`${baseHome}/novidade`)
      .then((response) => {
        console.log("Novidades recebidas:", response.data); // Log para verificar dados
        setNovidades(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar novidades:", error);
      });
  }, []);


  return (
    <>

      <Header />
      <div className="banner">

        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={caffe}
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={starbuck}
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={item1}
              alt="
              third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={item2}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        {/* *************************************** CAROUSEL BEGIN ************************************ */}
      </div>

      {/* Titulo * */}
      <div className="container title-main mt-1">
        <Title label="OFERTAS ESPECIAIS" > OFERTAS ESPECIAIS</Title>
      </div>
      {/* *************************************** PRODUTOS BEGIN ************************************ */}

      <div className="container  ">
        <div className="row justify-content-space ">
          {
            oferta.map(item => {
              return (
                <ProductCard key={item.id} col="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3" status={item.statusProduto} img={item.url} link={`/product/${item.id}`} nome={item.nomeProduto}
                  descri={item.descricao} product={item} price={item.preco} peso={item.peso} />
              )
            })
          }
        </div>
      </div>

      {/* Titulo * */}
      <div className="container title-main mt-5">
        <Title label="NOVIDADES" ></Title>
      </div>

      <div className="container  ">
        <div className="row justify-content-space ">
          {
            novidades.map(item => {
              return (
                <ProductCard key={item.id} col="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3" status={item.statusProduto} img={item.url} link={`/product/${item.id}`} nome={item.nomeProduto}
                  descri={item.descricao} product={item} price={item.preco} peso={item.peso} />
              )
            })
          }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home