import React from 'react';

const detailsModal = (props) => {
    return (
        <div className="app flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h1>Account Details</h1>
                                    <p className="text-muted">Customer Account Details</p>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-user"></i>
                                        </span>
                                    </div>
                                    <input id="meterSerial" className="form-control" type="text" value={props.meterSerial} placeholder="Meter Serial Number"/>
                                    </div>
                                    <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-lock"></i>
                                        </span>
                                    </div>
                                    <input id="account" className="form-control" type="text" value={props.account} placeholder="Account"/>
                                    </div>
                                    <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-user"></i>
                                        </span>
                                    </div>
                                    <input id="accountBalance" className="form-control" type="text" value={props.accountBalance} placeholder="Account Balance"/>
                                    </div>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-user"></i>
                                        </span>
                                    </div>
                                    <input id="tariffDescription" className="form-control" type="text" value={props.tariffDescription} placeholder="Tariff Description"/>
                                    </div>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-user"></i>
                                        </span>
                                    </div>
                                    <input id="indicatorPrePostAccount" className="form-control" type="text" value={props.indicatorPrePostAccount} placeholder="Indicators Account"/>
                                    </div>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-user"></i>
                                        </span>
                                    </div>
                                    <input id="serviceAddress" className="form-control" type="text" value={props.serviceAddress} placeholder="Service Address"/>
                                    </div>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-user"></i>
                                        </span>
                                    </div>
                                    <input id="name" className="form-control" type="text" value={props.name} placeholder="Name"/>
                                    </div>
                                    <div className="col-6">
                                        <button id="btnDisplayResModal" onClick={props.close} className="btn btn-danger px-4" type="button">Close</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default detailsModal;