var config = {
	apiKey: "AIzaSyDiS4X9Rz1_t01wEIbul82s0ZLsrUkuziI",
	authDomain: "fantasygawlf.firebaseapp.com",
	databaseURL: "https://fantasygawlf.firebaseio.com",
	storageBucket: "fantasygawlf.appspot.com",
};

module.exports = {
	// MISC
	FIREBASE: firebase.initializeApp(config),

	// UI FEEDBACK ACTIONS
	DISPLAY_ERROR: "DISPLAY_ERROR",
	DISPLAY_MESSAGE: "DISPLAY_MESSAGE",
	DISMISS_FEEDBACK: "DISMISS_FEEDBACK",

	// AUTH ACTIONS
	ATTEMPTING_LOGIN: "ATTEMPTING_LOGIN",
	LOGIN_USER: "LOGIN_USER",
	LOGOUT: "LOGOUT",

	// AUTH STATES
	LOGGED_IN: "LOGGED_IN",
	ANONYMOUS: "ANONYMOUS",
	AWAITING_AUTH_RESPONSE: "AWAITING_AUTH_RESPONSE"

};
