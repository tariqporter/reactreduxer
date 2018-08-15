
export const Actions = {
	ON_MY_FIELD_CHANGE: 'ON_MY_FIELD_CHANGE'
};

export const onChangeAction = (name: string, value: string) => ({
  type: Actions.ON_MY_FIELD_CHANGE,
  name,
  value
})