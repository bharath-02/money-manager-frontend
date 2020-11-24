import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(0);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(0);

    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(0);

    return (
        <div className='row text-center'>
            <div className="col-2">
                <h4>Balance</h4>
                <h1>{total}</h1>
            </div>
            <div className="col-2 offset-3">
                <h4>Income</h4>
                <h1 id="income">{income}</h1>
            </div>
            <div className="col-2 offset-3">
                <h4>Expense</h4>
                <h1 id="expense">{expense}</h1>
            </div>
        </div>
    )
}

