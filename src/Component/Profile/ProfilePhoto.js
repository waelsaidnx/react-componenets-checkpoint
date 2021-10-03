import './Profile.css'
import profilepic from "./img/myimage.png";

const ProfilePhoto = () => {
    return (
<div className="Photo">
        <img className="Mypic" src={profilepic} alt="mypic" />
</div>
    )
}
export default ProfilePhoto;