import React from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        note: this.props.expense ? this.props.expense.note : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: '' 
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(() => ({ amount }))
    }
    onDateChange = (createdAt) => {
        if (createdAt) this.setState(() => ({ createdAt }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) return this.setState(() => ({ error: 'Description and amount must be provided!' }))

        this.setState(() => ({ error: '' }))
        this.props.onFormSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            note: this.state.note,
            createdAt: this.state.createdAt.valueOf()
        })
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <div>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
                <textarea
                    placeholder="Add expense note here"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                />
                <div>
                    <button className="button">{this.props.expense ? 'Update Expense' : 'Add Expense'}</button>
                </div>
            </form>
        )
    }
}

export { ExpenseForm as default }