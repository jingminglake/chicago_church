const SET = "SET_LOADING";

export const dispatchSetLoading = (value) => ({
  type: SET,
  value,
});

export default function (state = false, action) {
  switch (action.type) {
    case SET:
      return action.value;
    default:
      return state;
  }
}
