import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { useDevices } from "hooks/useDevices";


const ProfileAvatarPreview = () => {
  const { isDesktop } = useDevices();

  return (
    <div className="content">
      <span>IMAGE PREVIEW</span>
      {isDesktop ? (
        <BsArrowDown size={72} />
      ) : (
        <BsArrowRight size={72} />
      )}
    </div>
  )
}



export default ProfileAvatarPreview;