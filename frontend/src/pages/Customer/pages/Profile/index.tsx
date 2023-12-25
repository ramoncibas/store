import { Title } from "shared";
import Profile from "./components";
import ProfileSkeleton from "./components/ProfileSkeleton";
import * as DefautlStyle from "assets/style/defaultContainerStyle";

import useProfile from "./hook/useProfile.hook";
import {
  ContainerProfile,
  ContentProfile,
  AlertProfile,
  AlertTitleProfile
} from "./style";

const UserProfile = () => {
  const {
    user,
    hasChangedUser,
    showAlert,
    imagePreview,
    handleEdit,
    handleChange,
    isLoadingCustomer,
    isLoadingEditCustomer
  } = useProfile();

  const renderUserProfile = () => (
    <>
      <ContentProfile>
        <DefautlStyle.Col md="4">
          <Title>Informações do Usuário</Title>
          <Profile.Form
            data={user}
            isLoading={isLoadingEditCustomer}
            hasChangedUser={hasChangedUser}
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
      </ContentProfile>

      {
        showAlert.status ? (
          <AlertProfile severity={showAlert.type} onClose={() => { }}>
            <AlertTitleProfile>{showAlert.title}</AlertTitleProfile>
            {showAlert.message}
          </AlertProfile>
        ) : <></>
      }
    </>

  );

  return (
    <ContainerProfile>
      <DefautlStyle.Row>
        {isLoadingCustomer ? <ProfileSkeleton /> : renderUserProfile()}
      </DefautlStyle.Row>
    </ContainerProfile>
  );
};

export default UserProfile;
