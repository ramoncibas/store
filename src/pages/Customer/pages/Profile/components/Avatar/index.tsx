import { FC } from "react";

import DefaultImage from "assets/img/default-image-user.png";

interface ProfileAvatarProps {
  image?: string;
}

const ProfileAvatar: FC<ProfileAvatarProps> = ({ image = DefaultImage }) => (
  <img src={image} alt="Imagem do Usuário" />
);

export default ProfileAvatar;