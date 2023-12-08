import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { Container, Title, Input, Button } from "shared";
import * as DefautlStyle from "assets/style/defaultContainerStyle";
import useProfile from "./hook/useProfile.hook";
import Profile from "./components";

const UserProfile = () => {
  const {
    user,
    imagePreview,
    handleEdit,
    handleChange,
    isLoadingCustomer,
    isLoadingEditCustomer,
  } = useProfile();

  return (
    <>
      <Container>
        <DefautlStyle.Row>
          
          <DefautlStyle.Col md="auto">
            <Title>Informações do Usuário</Title>
          
            <Profile.Form
              data={user}
              handleEdit={handleEdit}
              handleChange={handleChange}
            />
          </DefautlStyle.Col>
          
          <DefautlStyle.Col md="auto">
            <DefautlStyle.PreviewContainer>
              <Profile.Preview />
            </DefautlStyle.PreviewContainer>
          </DefautlStyle.Col>

          <DefautlStyle.Col md="auto" className="image">
            <Profile.Avatar image={imagePreview ?? user?.user_picture_url}/>
          </DefautlStyle.Col>

        </DefautlStyle.Row>
      </Container>
    </>
  );
};

export default UserProfile;
