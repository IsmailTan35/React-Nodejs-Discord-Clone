import { createSlice, current  } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'friends',
  initialState: {
    onlineUsers:[],
    blocked:[],
    requests:[],
    all:[],
  },
  reducers: {
    refresh(state, action) {
        state[action.payload.name] = [];
        state[action.payload.name] = action.payload.value

    },
    update(state, action) {
        if(action.payload.type=='remove'){
            state[action.payload.name]=state[action.payload.name].filter(user => 
              user.name != action.payload.value.name && user.code != action.payload.value.code
            )
        }
        else if(action.payload.type=='add'){
            state[action.payload.name].push(action.payload.value)
        }
    }
  }
});

export { actions as friendsActions };
export { reducer as friendsReducer };