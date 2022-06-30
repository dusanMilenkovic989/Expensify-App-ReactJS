import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ref, get, set } from 'firebase/database'
import db from '../../src-cli/firebase/database'
import { addExpense, editExpense, removeExpense, getExpenses } from '../../src-cli/redux/actions/expenses'
import { expenses } from '../fixtures/expenses-and-filters'

let store, userId
const createMockStore = configureStore([thunk])

beforeEach(async () => {
    userId = '123abc456def'
    store = createMockStore({ authenticated: { id: userId } })
    const expensesData = {}
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt }
    })
    await set(ref(db, `users/${userId}/expenses`), expensesData)
})

test('Should dispatch asynchronous action generator and remove from database', async () => {
    const id = expenses[1].id
    await store.dispatch(removeExpense({ id }))
    const actions = store.getActions()
    const expenseSnapshot = await get(ref(db, `users/${userId}/expenses/${id}`))
    
    expect(actions[0]).toEqual({ type: 'REMOVE_EXPENSE', id: expenses[1].id })
    expect(expenseSnapshot.val()).toBeNull()
})

test('Should dispatch asynchronous action generator and edit inside database', async () => {
    const id = expenses[2].id
    const updates = { description: 'testing', amount: 2222 }
    await store.dispatch(editExpense(id, updates))
    const actions = store.getActions()
    const expenseSnapshot = await get(ref(db, `users/${userId}/expenses/${id}`))

    expect(actions[0]).toEqual({ type: 'EDIT_EXPENSE', id, updates })
    expect(expenseSnapshot.val()).toEqual({ ...updates, note: expenses[2].note, createdAt: expenses[2].createdAt })
})

test('Should dispatch asynchronous action generator and save to database', async () => {
    const expense = { description: '', amount: 0, note: '', createdAt: 1000 }
    await store.dispatch(addExpense(expense))
    const actions = store.getActions()
    const expenseSnapshot = await get(ref(db, `users/${userId}/expenses/${actions[0].expense.id}`))
    
    expect(actions[0]).toEqual({ type: 'ADD_EXPENSE', expense: { id: expect.any(String), ...expense } })
    expect(expenseSnapshot.val()).toEqual(expense)
})

test('Should dispatch asynchronous action generator and read from database', async () => {
    await store.dispatch(getExpenses())
    const actions = store.getActions()

    expect(actions[0]).toEqual({ type: 'GET_EXPENSES', expenses})
})