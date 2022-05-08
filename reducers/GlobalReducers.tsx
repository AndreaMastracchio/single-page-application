import { updateObject } from '../utility/GeneralUtility'

export const globalReducers = (state: any, action: any) => {
  let new_state = {}
  switch (action.type) {
    default:
      new_state = updateObject(
        {
          ...state
        }, {
          state: action.value.state
        }
      )
      return new_state;;
  }
};
