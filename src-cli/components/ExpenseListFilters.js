import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../redux/actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onTextChange = (e) => { 
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => { 
        if (e.target.value === 'date') this.props.sortByDate()
        if (e.target.value === 'amount') this.props.sortByAmount()
    }
    onDatesChange = ({ startDate, endDate }) => { 
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            placeholder="Search expenses"
                            className="text-input"
                            value={this.props.filters.text} 
                            onChange={this.onTextChange} 
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            startDateId={JSON.stringify(this.props.filters.startDate)}
                            endDate={this.props.filters.endDate}
                            endDateId={JSON.stringify(this.props.filters.endDate)}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            minimumNights={0}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ filters: state.filters })

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => { dispatch(setTextFilter(text)) },
    sortByDate: () => { dispatch(sortByDate()) },
    sortByAmount: () => { dispatch(sortByAmount()) },
    setStartDate: (startDate) => { dispatch(setStartDate(startDate)) },
    setEndDate: (endDate) => { dispatch(setEndDate(endDate)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)