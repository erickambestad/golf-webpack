import {
  FIREBASE,
  LOGIN_USER,
  ATTEMPTING_LOGIN,
  DISPLAY_ERROR,
  ANONYMOUS,
  LOGOUT
} from './config';


export function startListeningToAuth() {
  return (dispatch, getState) => {
    FIREBASE.auth().onAuthStateChanged((authData) => {
      if (authData){
        dispatch({
          type: LOGIN_USER,
          uid: authData.uid,
          username: authData.displayName || authData.email
        });
      } else {
        let auth = getState().allreducers.get('auth');
        if (auth.get('currently') !== ANONYMOUS){ // log out if not already logged out
          dispatch({type:LOGOUT});
        }
      }
    });
  }
}

export function attemptLogin(email, password) {
  return (dispatch, getState) => {
    dispatch({type:ATTEMPTING_LOGIN});
    FIREBASE.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      if (error) {
        dispatch({type:DISPLAY_ERROR,error:"Login failed! "+error});
        dispatch({type:LOGOUT});
      } else {
        // no need to do anything here, startListeningToAuth have already made sure that we update on changes
      }
    });
  }
}

export function logoutUser() {
   return (dispatch) => {
    FIREBASE.auth().signOut().then(function() {
      dispatch({type:LOGOUT});
    }, function(error) {
      // An error happened.
    });
  };
}
