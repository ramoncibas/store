import { Skeleton } from '@mui/material';
import Preview from '../Preview';
import * as DefautlStyle from "assets/style/defaultContainerStyle";

const Form = () => (
  <div className='form-skeleton' style={{ width: '400px' }}>
    <Skeleton animation="wave" height={70} />
    <Skeleton animation="wave" height={70} />
    <Skeleton animation="wave" height={70} />
    <Skeleton animation="wave" height={70} />
    <Skeleton animation="wave" height={80} />
  </div>
)

const Avatar = () => (
  <Skeleton variant="circular" width={300} height={300} />
)

const ProfileSkeleton = () => (
  <>
    <DefautlStyle.Col md="4">
      <Form />
    </DefautlStyle.Col>

    <DefautlStyle.Col md="4">
      <DefautlStyle.PreviewContainer>
        <Preview />
      </DefautlStyle.PreviewContainer>
    </DefautlStyle.Col>

    <DefautlStyle.Col md="4" className="image">
      <Avatar />
    </DefautlStyle.Col>
  </>
)

export default ProfileSkeleton;