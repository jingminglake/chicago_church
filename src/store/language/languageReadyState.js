const SET_ = "SET_LANGUAGEREADYSTATE";

export const dispatchSetLanguageReadyState = (value) => ({
  type: SET_,
  value,
});

export default function (state = false, action) {
  switch (action.type) {
    case SET_:
      return action.value;
    default:
      return state;
  }
}
