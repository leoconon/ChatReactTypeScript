function ProfilePic(props: ProfilePicProps) {
    return (
        <img className="profile-pic" width="35" src={`https://gravatar.com/avatar/${props.imageId}?d=identicon&f=y`}/>
    )
}

type ProfilePicProps = {
    imageId: String
}

export default ProfilePic;