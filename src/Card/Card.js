import React from 'react';

const Card = (props) => {
    let errors = '';

    if(props.status.err){
        errors = 'Oops!!! Something Went Wrong';
    }
    return (
        <div className="card text-white bg-primary" style={{height:160 +'px',width:49.5+'%'}}>
            
                <div className="card-body pb-0">
                    {/* <div className="btn-group float-right">
                        <button className="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="aside-menu-lg-show" aria-haspopup="true" aria-expanded="false">
                            <i className="icon-settings"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> */}
                    <p style={{color:'red'}}>{errors}</p>
                    <div className="text-value">APIs</div>
                    <div>{props.children}</div>
                </div>

                <div className="v1">
                    <a onClick={props.click}>
                        <h1>Login</h1>
                    </a>
                    {/* <button className="btn btn-primary card-btn px-4" onClick={props.click} style={{float:'right', bottom: 10+'px'}} type="button" data-toggle="aside-menu-lg-show">
                        Login
                    </button> */}
                </div>
            </div>
       
    )
}

export default Card;