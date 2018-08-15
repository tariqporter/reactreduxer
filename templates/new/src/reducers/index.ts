const initialState = {
  test: '' as string,
  comments: [] as any[]
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'ON_CHANGE':
      return {...state, [action.name]: action.value};
    default:
      return state;
  }
}