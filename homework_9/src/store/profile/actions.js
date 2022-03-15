export const CHANGE_SHOW_NAME = "PROFILE::CHANGE_SHOW_NAME";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const changeShowName = {
  type: CHANGE_SHOW_NAME,
};

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  name: newName,
});
