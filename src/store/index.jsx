import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { streamReducer as stream } from './stream';
import { userReducer as user } from './user';
import { socketReducer as socket } from './socket';
import { peersReducer as peers } from './peers';
import { friendsReducer as friends } from './friends';
import { friendRequestReducer as friendRequest } from './friendRequest';
import { messageReducer as message } from './message';
import { serversReducer as server } from './server';
import { usersReducer as users } from './users';


const reducer = combineReducers({
  stream,
  user,
  socket,
  peers,
  friends,
  friendRequest,
  message,
  server,
  users
});
export { streamActions } from './stream';
export { userActions } from './user';
export { peersActions } from './peers';
export { friendsActions } from './friends';
export { friendRequestActions } from './friendRequest'
export { messageActions } from './message'
export { serversActions } from './server'
export { usersActions } from './users';


export default configureStore({ 
  reducer,
});
