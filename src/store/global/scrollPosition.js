const set = "SET_SCROLLPOS";

export const dispatchSetScrollPosition = (value) => ({
  type: set,
  value,
});

export default function (state = 0, action) {
  switch (action.type) {
    case set:
      return action.value;
    default:
      return state;
  }
}
