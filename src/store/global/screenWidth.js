const SET_SCREENWIDTH = "SET_SCREENWIDTH";

export const dispatchSetScreenWidth = (value) => ({
  type: SET_SCREENWIDTH,
  value,
});

export default function (state = window.innerWidth, action) {
  switch (action.type) {
    case SET_SCREENWIDTH:
      return action.value;
    default:
      return state;
  }
}
