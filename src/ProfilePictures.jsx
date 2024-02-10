import PropTypes from "prop-types";

const ProfilePictures = (props) => {
  const handleClick = (e) => (e.target.style.display = "none");
  return (
    <div>
      <img
        onClick={(e) => {
          handleClick(e);
        }}
        src={props.src}
        alt="pfp"
      />
    </div>
  );
};

ProfilePictures.propTypes = {
  src: PropTypes.string,
};

export default ProfilePictures;
