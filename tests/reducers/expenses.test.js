import expensesReducer from '../../src-cli/redux/reducers/expenses'
import { expenses } from '../fixtures/expenses-and-filters'

test('Should setup default expenses state when initialized', () => {
    expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([])
})

test('Should add expense on state', () => {
    expect(expensesReducer(undefined, { type: 'ADD_EXPENSE', expense: expenses[0] })).toEqual([expenses[0]])
})

test('Should edit expense on state', () => {
    const amount = 30000
    const note = 'test'

    expect(expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: { amount, note } })[1])
        .toEqual({ ...expenses[1], amount, note})
})

test('Should not edit expense on state if id is incorrect', () => {
    const amount = 50000
    const note = 'test2'

    expect(expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '-1', updates: { amount, note } }))
        .toEqual(expenses)
})

test('Should remove expense from state', () => {
    expect(expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[2].id })).toEqual([ expenses[0], expenses[1] ])
})

test('Should not remove expense from state if id is incorrect', () => {
    expect(expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '5'})).toEqual(expenses)
})

test('Should set expenses to state', () => {
    const testExpense = { id:'0', description: 'test', amount: 0, note: '', createdAt: 4000 }
    expect(expensesReducer([testExpense], { type: 'GET_EXPENSES', expenses })).toEqual(expenses)
})