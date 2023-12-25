import { CircularProgress } from "@mui/material";
import { FC } from "react";
import { Form } from "react-bootstrap";
import { Input, Button } from "shared";

interface ProfileFormProps {
  data: any;
  isLoading: boolean;
  hasChangedUser: boolean;
  handleEdit: (event: any) => void;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ProfileForm: FC<ProfileFormProps> = ({ data, isLoading, hasChangedUser, handleChange, handleEdit }) => (
  <Form encType="multipart/form-data">
    <Input
      id="name"
      name="name"
      value={`${data?.first_name} ${data?.last_name}` || ''}
      label="Nome do Usuário"
      type="text"
      placeholder="Nome do Usuário"
      disabled
    />
    <Input
      id="email"
      name="email"
      value={data?.email || ''}
      label="E-mail"
      type="mail"
      placeholder="E-mail"
      onChange={handleChange}
    />
    <Input
      id="phone"
      name="phone"
      value={data?.phone || ''}
      label="Telefone"
      type="phone"
      placeholder="Telefone"
      onChange={handleChange}
    />
    <Form.Group controlId="user_picture" className="mb-3">
      <Form.Label>Imagem de Perfil</Form.Label>
      <Form.Control
        accept="image/*"
        name="user_picture"
        type="file"
        onChange={handleChange}
        className="input-file-custom"
      />
    </Form.Group>
    <Button
      onClick={handleEdit}
      disabled={isLoading || !hasChangedUser}
      background="#04AFD4"
    >
      {isLoading ? <CircularProgress variant="indeterminate" /> : "Salvar Informações"}
    </Button>
  </Form>
)

export default ProfileForm;