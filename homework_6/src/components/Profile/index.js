import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeShowName, CHANGE_NAME, changeName } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form";

export const Profile = () => {
  const dispatch = useDispatch();
  const showName = useSelector(selectShowName, shallowEqual);
  const name = useSelector(selectName);

  const handleChangeShowName = () => {
    dispatch(changeShowName);
  };

  const handleChangeName = (text) => {
    dispatch(changeName(text));
  };

  return (
    <>
      <h3>Profile</h3>
      <div>
        {showName && <span>{name}</span>}
        <input type="checkbox" />
        <button onClick={handleChangeShowName}>Change show name</button>
      </div>
      <Form onSubmit={handleChangeName} />
    </>
  );
};

export const ProfileToConnect = ({ showName, name, setName, setShowName }) => {
  const handleChangeShowName = () => {
    setShowName();
  };

  const handleChangeName = (text) => {
    setName(text);
  };

  return (
    <>
      <h3>Profile</h3>
      <div>
        {showName && <span>{name}</span>}
        <input type="checkbox" />
        <button onClick={handleChangeShowName}>Change show name</button>
      </div>
      <Form onSubmit={handleChangeName} />
    </>
  );
};

const mapStateToProps = (state) => ({
  showName: selectShowName(state),
  name: selectName(state),
});

const mapDispatchToProps = {
  setShowName: () => changeShowName,
  setName: changeName,
};

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileToConnect);
export default ConnectedProfile;