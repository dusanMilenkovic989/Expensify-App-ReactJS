import moment from 'moment'

const visibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const expenseCreated = moment(expense.createdAt)
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        const startDateMatch = startDate ? expenseCreated.isSameOrAfter(startDate, 'day') : true
        const endDateMatch = endDate ? expenseCreated.isSameOrBefore(endDate, 'day') : true
    
        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        switch (sortBy) {
            case 'amount':
                if (a.amount > b.amount) return -1
                if (a.amount < b.amount) return 1
                return 0
            default:
                if (a.createdAt > b.createdAt) return -1
                if (a.createdAt < b.createdAt) return 1
                return 0
        }
    })
}

export { visibleExpenses as default }