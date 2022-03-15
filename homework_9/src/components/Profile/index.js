import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeShowName, changeName } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form";
import { set } from "@firebase/database";
import { useContext, useState } from "react";
import {
  auth,
  getProfileNameRef,
  logout,
  profileShowNameRef,
} from "../../services/firebase";

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

export const ProfileToConnect = () => {
  const [name] = useState("");
  const [showName] = useState(false);

  const handleChangeShowName = () => {
    set(profileShowNameRef, !showName);
  };

  const handleChangeName = (text) => {
    set(getProfileNameRef(auth.currentUser.uid), text);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <>
      <h3>Profile</h3>
      <div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
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