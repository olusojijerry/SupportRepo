import React from 'react';

const userAccess = (props) => {
    let errors = '';

    if(props.status.err){
        errors = 'Oops!!! Something Went Wrong';
    }
    else{
        errors='';
    }
    var today = new Date();
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-sm-5">
                    <h4 className="card-title mb-0">Enter Customer Details</h4>
                    <div className="small text-muted">Please put either prepaid or postpaid here</div>
                </div>
                <div className="col-sm-7 d-none d-md-block">
                    <div className="btn-group btn-group-toggle float-right mr-3" data-toggle="buttons">
                        <label className="btn btn-outline-secondary">
                            <input id="option1" type="radio" name="options" autoComplete="off" readOnly/> {today.getDate()}
                        </label>
                        <label className="btn btn-outline-secondary active">
                            <input id="option2" type="radio" name="options" autoComplete="off" checked="" readOnly/> {'0'+(today.getMonth()+1)}
                        </label>
                        <label className="btn btn-outline-secondary">
                            <input id="option3" type="radio" name="options" autoComplete="off" readOnly/> {today.getFullYear()}
                        </label>
                    </div>
                </div>
            </div>
            <p style={{color:'red'}}>{errors}</p>                                  
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="codUser">User</label>
                            <input type="text" className="form-control" value="InterswitchPost" readOnly/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="codType">Type</label>
                            <select value={props.status.type} onChange={props.changed} className="form-control">
                                <option defaultValue value=''>Select Type</option>
                                {props.status.codType.map((types, i) => {
                                    return <option value={types.codType}>{types.type}</option>
                                }
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="value">Value/TransactionId</label>
                            <input type="text" className="form-control" onChange={props.change} name="value" id="value" placeholder="Value" value={props.value} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary px-4" onClick={props.click} type="button">Get Details</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary px-4" onClick={props.click2} type="button">Get Transaction Details</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default userAccess;