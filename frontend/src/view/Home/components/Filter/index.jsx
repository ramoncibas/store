import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap"
import { Container } from "./style"
import api from "../../../../utils/api"

const Filter = () => {
  const [aspects, setAspects] = useState()

  const product = {
    dessNumber: [45, 43, 42, 39, 46].sort(),
    color: ["Azul", "Preto", "Branco"],    
  }

  const { dessNumber, color } = product
  
  // REFERENCIA DE ESTIIZAÇÃO
  // https://cdn.shopify.com/app-store/listing_images/f44b43e81ef89598c0de05c8ea6dcf80/desktop_screenshot/CKCezOGbqPECEAE=.png?height=360&width=640  

  useEffect(() => {
    api.get("/product/aspect").then(({ data }) => {
      const { brands, categories, genders } = data;      
      setAspects({ brands, categories, genders });
    });
  }, []);

  //adicionar scroll nos componentes genero, categoria, etc..
  return (
    <Container>
      <div className="ul-container">
        <p>GÊNERO</p>
        <ul className="ul-gender">
          {
            aspects?.genders?.map(({ name }) => (
              <li>
                <input type="checkbox" name="" id="" className="items-size" value={name} key={name} />
                <label htmlFor="input">{name}</label>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="ul-container">
        <p>CATEGORIA</p>
        <ul className="ul-category">
          {
            aspects?.categories?.map(({ name }) => (
              <li>
                <input type="checkbox" name="" id="" className="items-size" value={name} key={name} />
                <label htmlFor="input">{name}</label>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="ul-container">
        <p>TAMANHO</p>
        <div className="dress_number">
          <ul className="ul-size">
            {
              dessNumber.map((size) => (
                <li>
                  <input type="checkbox" name="" id="" className="items-size" value={size} key={size} />
                  <label htmlFor="input">{size}</label>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="ul-container">
        <p>MARCA</p>
        <InputGroup className="search-box-brand">
          <Form.Control
            placeholder="Digite a coloração"
            aria-label="Digite a coloração"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            🔎
          </Button>
        </InputGroup>
        <ul className="ul-brad">
          {
            aspects?.brands?.map(({ name }) => (
              <li className="">
                <input type="checkbox" name="" id="" className="items-size" value={name} key={name} />
                <label htmlFor="">{name}</label>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="ul-container">
        <p>COR</p>
        <InputGroup className="search-box-color">
          <Form.Control
            placeholder="Digite a coloração"
            aria-label="Digite a coloração"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            🔎
          </Button>
        </InputGroup>
        <ul className="ul-color">
          {
            color.map((colorName) => (
              <li className="">
                <input type="checkbox" name="" id="" className="items-size" value={colorName} key={colorName} />
                <label htmlFor="">{colorName}</label>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="ul-container">
        <p>PREÇO</p>
        <div className="checkbox-price-range">
          <input
            type="range"
            name="price-range"
            id="price-range"
            className="price-range"
          />
          <div className="price-values">
            {/* <label htmlFor="" className="label-left">{priceValue}</label> */}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Filter;