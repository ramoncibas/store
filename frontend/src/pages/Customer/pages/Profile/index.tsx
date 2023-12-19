import { Container, Title } from "shared";
import Profile from "./components";
import ProfileSkeleton from "./components/ProfileSkeleton";
import * as DefautlStyle from "assets/style/defaultContainerStyle";

import useProfile from "./hook/useProfile.hook";
import { Alert, AlertTitle } from "@mui/material";
import { ProfileContainer } from "./style";

const UserProfile = () => {
  const {
    user,
    showAlert,
    imagePreview,
    handleEdit,
    handleChange,
    isLoadingCustomer,
    isLoadingEditCustomer
  } = useProfile();

  const renderUserProfile = () => (
    <ProfileContainer>
      <DefautlStyle.Col md="4">
        <Title>Informações do Usuário</Title>
        <Profile.Form
          data={user}
          isLoading={isLoadingEditCustomer}
          handleEdit={handleEdit}
          handleChange={handleChange}
        />
      </DefautlStyle.Col>

      <DefautlStyle.Col md="4">
        <DefautlStyle.PreviewContainer>
          <Profile.Preview />
        </DefautlStyle.PreviewContainer>
      </DefautlStyle.Col>

      <DefautlStyle.Col md="4" className="image">
        <Profile.Avatar image={imagePreview ?? user?.user_picture_url} />
      </DefautlStyle.Col>

      {
        showAlert.status ? (
          <Alert severity={showAlert.type} onClose={() => { }}>
            <AlertTitle>{showAlert.title}</AlertTitle>
            {showAlert.message}
          </Alert>
        ) : <></>
      }

    </ProfileContainer>
  );

  return (
    <Container>
      <DefautlStyle.Row>
        {isLoadingCustomer ? <ProfileSkeleton /> : renderUserProfile()}
      </DefautlStyle.Row>
    </Container>
  );
};

export default UserProfile;
