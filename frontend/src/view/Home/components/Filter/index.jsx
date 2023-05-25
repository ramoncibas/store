import { Button, Form, InputGroup } from "react-bootstrap";
import { Container, Filtered } from "./style";
import useHome from "view/Home/Home.hook";
import CheckBox from "shared/Checkbox";
import Badge from "shared/Badge";

const Filter = () => {
  const {
    aspects,
    filtered,
    queryParamsObj,
    randomKey,
    handleFilter,
    handleRemoveFilter,
  } = useHome();

  // REFERENCIA DE ESTIIZAÇÃO
  // https://cdn.shopify.com/app-store/listing_images/f44b43e81ef89598c0de05c8ea6dcf80/desktop_screenshot/CKCezOGbqPECEAE=.png?height=360&width=640

  //adicionar scroll nos componentes genero, categoria, etc..
  return (
    <Container>
      <Filtered>
        <p>FILTROS</p>
        {
          <div className="content">
            <Badge label={filtered?.gender} onClose={handleRemoveFilter} />
            <Badge label={filtered?.category} onClose={handleRemoveFilter} />
            <Badge label={filtered?.brand} onClose={handleRemoveFilter} />
          </div>
        }
      </Filtered>

      {aspects?.genders && (
        <div className="ul-container">
          <p>GÊNERO</p>
          <ul className="ul-gender">
            {aspects?.genders?.map(({ id, name }) => (
              <CheckBox
                key={randomKey()}
                name="gender"
                value={id}
                label={name}
                checked={Number(queryParamsObj?.gender) === id}
                onChange={handleFilter}
              />
            ))}
          </ul>
        </div>
      )}

      {aspects?.categories && (
        <div className="ul-container">
          <p>CATEGORIA</p>
          <ul className="ul-category">
            {aspects?.categories?.map(({ id, name }) => (
              <CheckBox
                key={randomKey()}
                name="category"
                value={id}
                label={name}
                checked={Number(queryParamsObj?.category) === id}
                onChange={handleFilter}
              />
            ))}
          </ul>
        </div>
      )}

      {aspects?.size && (
        <div className="ul-container">
          <p>TAMANHO</p>
          <div className="dress_number">
            <ul className="ul-size">
              {aspects?.size?.map(({ id, size }) => (
                <CheckBox
                  key={randomKey()}
                  name="size"
                  value={id}
                  label={size}
                  checked={Number(queryParamsObj?.size) === id}
                  onChange={handleFilter}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
      {aspects?.brands && (
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
            {aspects?.brands?.map(({ id, name }) => (
              <CheckBox
                key={randomKey()}
                name="brand"
                value={id}
                label={name}
                checked={Number(queryParamsObj?.brand) === id}
                onChange={handleFilter}
              />
            ))}
          </ul>
        </div>
      )}

      {aspects?.color && (
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
            {aspects?.color?.map(({ id, color }) => (
              <CheckBox
                key={randomKey()}
                name="color"
                value={id}
                label={color}
                checked={Number(queryParamsObj?.color) === id}
                onChange={handleFilter}
              />
            ))}
          </ul>
        </div>
      )}

      {aspects?.price && (
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
      )}
    </Container>
  );
};

export default Filter;
