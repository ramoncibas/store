import useProduct from "../../../../../../hooks/useProduct.hook";
import { CgArrowsExchange } from "react-icons/cg";

import { Button } from "../../../../../../../../components";
import { AiTwotoneDelete } from "react-icons/ai";

const FormButtons = () => {
  const { productID, handleProduct, handeDelete } = useProduct();

  return (
    <div className="buttons-container">
      <Button onClick={(event: any) => handleProduct(event)}>
        {productID ? "Atualizar " : "Adicionar Produto "}&nbsp;
        <CgArrowsExchange color="fff" />
      </Button>

      {productID ? (
        <Button
          background="#ff7777"
          onClick={(event: any) => handeDelete(event)}
        >
          Deletar &nbsp;
          <AiTwotoneDelete color="fff" />
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormButtons;
