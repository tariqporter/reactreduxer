const initialState = {
  comments: [] as any[]
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'ON_CHANGE':
      newState[action.name] = action.value
      return newState;
    default:
      return state;
  }
}