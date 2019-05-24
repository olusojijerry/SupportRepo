import React from 'react';

const Login = (props) => {
    return (
        <div className="app flex-row align-items-center">
            <div className="container">
                <span>&times</span>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h1>Login</h1>
                                    <p className="text-muted">Sign In to your account</p>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-user"></i>
                                        </span>
                                    </div>
                                    <input className="form-control" type="text" placeholder="Username"/>
                                    </div>
                                    <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="icon-lock"></i>
                                        </span>
                                    </div>
                                    <input className="form-control" type="password" placeholder="Password"/>
                                    </div>
                                    <div className="row">
                                    <div className="col-6">
                                        <button id="btnLogin" className="btn btn-primary px-4" type="button">Login</button>
                                    </div>
                                    <div className="col-6 text-right">
                                        <button className="btn btn-link px-0" type="button">Forgot password?</button>
                                    </div>
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

export default Login;