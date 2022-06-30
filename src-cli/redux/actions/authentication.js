import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleAuthProvider } from '../../firebase/database'

const setUserId = (uid) => ({
    type: 'SET_USER_ID',
    id: uid
})

const removeUserId = () => ({
    type: 'REMOVE_USER_ID'
})

const login = () => async () => {
    signInWithPopup(auth, googleAuthProvider)
}

const logout = () => async () => {
    signOut(auth)
}

export { setUserId, removeUserId, login, logout }