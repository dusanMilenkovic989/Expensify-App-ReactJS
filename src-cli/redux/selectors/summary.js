const summary = (expenses) => expenses.map((expense) => expense.amount).reduce((previousValue, currentValue) => previousValue + currentValue, 0)

export { summary as default }