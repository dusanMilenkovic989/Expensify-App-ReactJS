import { ref, set, push, get, update, remove } from 'firebase/database'
import db from '../../firebase/database'

const addExpense = (expense) => async (dispatch, getState) => {
    const userId = getState().authenticated.id
    const newExpenseRef = push(ref(db, `users/${userId}/expenses`))

    try {
        await set(newExpenseRef, expense)
        dispatch({
            type: 'ADD_EXPENSE',
            expense: {
                id: newExpenseRef.key,
                ...expense
            }
        })
    } catch (e) {}
}

const editExpense = (id, updates) => async (dispatch, getState) => {
    const userId = getState().authenticated.id

    try {
        await update(ref(db, `users/${userId}/expenses/${id}`), updates)
        dispatch({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
    } catch (e) {}
}

const removeExpense = ({ id }) => async (dispatch, getState) => {
    const userId = getState().authenticated.id

    try {
        await remove(ref(db, `users/${userId}/expenses/${id}`))
        dispatch({
            type: 'REMOVE_EXPENSE',
            id
        })
    } catch (e) {}
}

const getExpenses = () => async (dispatch, getState) => {
    const userId = getState().authenticated.id
    const expenses = []

    try {
        const snapshot = await get(ref(db, `users/${userId}/expenses`))
        snapshot.forEach((childSnapshot) => {
            expenses.push({ id: childSnapshot.key, ...childSnapshot.val() })
        })
        dispatch({
            type: 'GET_EXPENSES',
            expenses
        })
    } catch (e) {}
}

export { addExpense, editExpense, removeExpense, getExpenses }