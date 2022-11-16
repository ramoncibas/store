import { Button, Form, InputGroup } from "react-bootstrap"
import { Container } from "./style"

const Filter = () => {

  const product = {
    name: "2",
    price: "2",
    dessNumber: [45, 43, 42, 39, 46].sort(),
    category: ["Calçados", "Roupas", "Bolsas e Acessórios", "Esporte"],
    gender: ["Feminino", "Masculino", "Infantil"],
    brand: ["Nike", "Adidas", "Puma", "Gucci"],
    color: ["Azul", "Preto", "Branco"],    
  }

  const { dessNumber, brand, color, gender, category } = product
  
  return (
    <Container>
      <div className="ul-container">
        <p>GÊNERO</p>
        <ul className="ul-gender">
          {
            gender.map((genderName) => (
              <li>
                <input type="checkbox" name="" id="" className="items-size" value={genderName} key={genderName} />
                <label htmlFor="input">{genderName}</label>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="ul-container">
        <p>CATEGORIA</p>
        <ul className="ul-category">
          {
            category.map((categoryName) => (
              <li>
                <input type="checkbox" name="" id="" className="items-size" value={categoryName} key={categoryName} />
                <label htmlFor="input">{categoryName}</label>
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
            brand.map((brandName) => (
              <li className="">
                <input type="checkbox" name="" id="" className="items-size" value={brandName} key={brandName} />
                <label htmlFor="">{brandName}</label>
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