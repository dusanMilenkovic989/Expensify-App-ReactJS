import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'Book',
    amount: 4500,
    note: '',
    createdAt: 0,
}, {
    id: '2',
    description: 'Rent',
    amount: 40000,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf(),
}, {
    id: '3',
    description: 'Burger',
    amount: 750,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf(),
}]

const defaultFiltersState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const altFiltersState = {
    text: 'food',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

export { expenses, defaultFiltersState, altFiltersState }