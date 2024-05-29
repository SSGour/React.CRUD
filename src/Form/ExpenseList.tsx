import React from "react";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export type IExpenseListProps = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

const ExpenseList = ({ expenses, onDelete }: IExpenseListProps) => {
  return (
    <>
      <table className="table table-bordered border-dark w-75">
        <thead>
          <th>Descriptions</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Delete Item</th>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClickCapture={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
export default ExpenseList;
