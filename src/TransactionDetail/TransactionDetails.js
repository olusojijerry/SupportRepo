import React from 'react';
import TableRow from './TableRow/TableRow';

const transactionDetails = (props) => {
    return (
        <div className="transTable">
            <h4 className="card-title mb-0">Customer Transaction Details</h4>
            <table className="table table-responsive-sm table-hover table-outline mb-0">
                <thead className="thead-light">
                    <tr>
                        <th className="text-center">Cust Name</th>
                        <th>ID</th>
                        <th className="text-center">Meter Serial</th>
                        <th>Account</th>
                        <th className="text-center">Debt Payment</th>
                        <th>Total Payment</th>
                        <th className="text-center">Acct Bal</th>
                        <th>Unit Payment</th>
                        <th className="text-center">Unit</th>
                        <th>Unit Type</th>
                        <th className="text-center">Payment Date</th>
                        <th>Tariff Desc</th>
                    </tr>
                </thead>
                <TableRow items={props.details}></TableRow>
            </table>
        </div>
    )
}

export default transactionDetails;