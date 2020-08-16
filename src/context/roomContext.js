import React, { createContext, useReducer, useEffect } from 'react';
import { auth } from 'firebase'; // DEL

// firebase reducer
const roomReducer = (state, action) => {
	switch (action.type) {
		case 'CREATE_ROOM':
			sessionStorage.setItem('room', JSON.stringify(action.payload.room));
			sessionStorage.setItem('user', JSON.stringify(action.payload.room));
			sessionStorage.setItem('token', JSON.stringify(action.payload.user));
			return { ...state, user: action.payload.user, room: action.payload.room };

		case 'JOIN_ROOM':
			return { ...state, user: action.payload.user, room: action.payload.room };
		case 'LEAVE_ROOM':
			return {
				...state,
				room: state.room.players.filter((player) => player._id !== action.payload.user._id)
			};
		default:
			return state;
	}
};
// initial state
const initialState = {
	room: null,
	user: null,
	token: null
};

// create context
const RoomContext = createContext();

// context provider
const RoomProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(roomReducer, initialState);

	useEffect(() => {
		const unsubscribe = auth().onAuthStateChanged(async (user) => {
			if (user) {
				const idTokenResult = await user.getIdTokenResult();
				dispatch({
					type: 'CREATE_ROOM',
					payload: {
						token: idTokenResult.token
					}
				});
			} else {
				dispatch({
					type: '',
					payload: null
				});
			}
		});
		// call clean method to ensure that state won't lose if component is unmount and mounted again
		return () => unsubscribe();
	}, []);

	const value = { state, dispatch };

	return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

// export
export { RoomContext, RoomProvider };
