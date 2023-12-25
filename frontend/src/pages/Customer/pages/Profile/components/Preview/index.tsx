import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { useDevices } from "hooks/useDevices";


const ProfileAvatarPreview = () => {
  const { isMobile } = useDevices();

  return (
    <div className="content">
      <span>IMAGE PREVIEW</span>
      {isMobile ? (
        <BsArrowDown size={72} />
      ) : (
        <BsArrowRight size={72} />
      )}
    </div>
  )
}



export default ProfileAvatarPreview;