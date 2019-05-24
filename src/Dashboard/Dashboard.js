import React, { Component} from 'react';
import DashboardItem from '../DashboardItem/DashboardItem';
import logo from '../img/isw_logo_blue.png';
import Card from '../Card/Card';
import Login from '../Login/Login';
import UserAccess from '../UserAccess/UserAccess';
import DetailsModal from '../DetailsModal/DetailsModal';
import TransactionDetails from '../TransactionDetail/TransactionDetails';
import iimg from '../img/avartars/6.jpg';
import axios from '../axios-orders';


class Dashboard extends Component {

    toggle = () => {
        var sideComponent = document.getElementById('sidebarContent');

        sideComponent.classList.toggle("hide");
    }

    popLoginModal = () => {
        var divv = document.getElementById('loginModal');
        
        divv.style.display = "block";

        console.log('done');
    }

    closePopModal = (btnId) => {
        var divv = document.getElementById(btnId);
        divv.style.display = "none";
    }

    state = {
        vendors :[
                {id:1, vendorName: "AEDC", vendorLink: "#"}],
        access_token :'',
        codType: [],
        custDetails: [],
        transDetail: [],
        value:'',
        type:'',
        err: false
    }

    changeHandler = (event) => {
        this.setState({
            value: event.target.value
        })
        
    }

    changeHandlerd = (event) => {
        this.setState({
            type: event.target.value
        })
        
    }

    getSearchCriteriaType = () => {
        axios.post('/venMeter/1.0.1/criteriaType', 
            { 
                idVendor: "7012",
                codUser: "InterswitchPost",
                pagesize: 10,
                pagenumber: 1
            },
            {
                headers: {
                'Authorization': 'Bearer '+ this.state.access_token,
                'Content-Type': 'application/json'
            }
        })
        .then((res, i) => {
            console.log(res.data)
            this.setState({
                key: i,
                codType: res.data
            })
        }).catch(error => {
            this.setState({
                err: true
            })
        })
    }
    
    loginHandler = () => {
        const login = "grant_type=password&username=7012#InterswitchPost&password=1nterSw!cth&scope=vending_users_private";
        axios.post('/token', login, {
            headers: {
                'Authorization': 'Basic ZEVnOGhkczFrVXFZOHdTS1JRMV90TTdac2FvYTpyWm5HZ2hoVzRhWlowSDBPYTllUWZZa3pEaDRh',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res =>{
            //console.log(res.data);
            this.setState({
                access_token: res.data.access_token
            });
            
            this.getSearchCriteriaType();
            var access = document.getElementById('userAccess');
            var login = document.getElementById('logingrp');

            // btnLogin.style.enabled = "false";
            access.style.display = "block";
            login.style.display = "none";
            console.log(this.state.access_token);
        }).catch(error => {
            this.setState({
                err: true
            })
        })
        
    }

    getCodTypes = () => {
        console.log(this.state.type);
        console.log(this.state.value);
        axios.post('/venMeter/1.0.1', 
            { 
                idVendor: "7012",
                codUser: "InterswitchPost",
                codType: this.state.type,
                value: this.state.value
            },
            {
                headers: {
                'Authorization': 'Bearer '+ this.state.access_token,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            this.setState({
                custDetails: res.data[0]
            });
            console.log(this.state.custDetails);

            var detailModal = document.getElementById("detailsModal");
            detailModal.style.display = "block";
        }).catch(error => {
            console.log('tisi:'+error);
            this.setState({
                err: true
            });
        })
    }

    retrieveTransactionDetails = () => {
        console.log(this.state.type);
        console.log(this.state.value);
        axios.post('/venPayment/1.0.1/paymentInfo', 
            { 
                idVendor: "7012",
                codUser: "InterswitchPost",
                transactionId: this.state.value
            },
            {
                headers: {
                'Authorization': 'Bearer '+ this.state.access_token,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            this.setState({
                transDetail: res.data[0]
            });
            console.log(this.state.transDetails);

            var detailModal = document.getElementById("transactionDetails");
            detailModal.style.display = "block";
        }).catch(error => {
            this.setState({
                err: true
            })
        })
    }



    render(){
        return (
            <React.Fragment>
                <header className="app-header navbar">
                <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
                        <span className="navbar-toggler-icon" onClick={this.toggle}></span>
                        </button>
                    <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
                        <span className="navbar-toggler-icon" onClick={this.toggle}></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img className="navbar-brand-full" src={logo} width="89" height="25" alt="Logo"/>
                    </a>
                       
                    
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item d-md-down-none">
                        <a className="nav-link" href="#">
                            <i className="icon-list"></i>
                        </a>
                        </li>
                        <li className="nav-item d-md-down-none">
                        <a className="nav-link" href="#">
                            <i className="icon-location-pin"></i>
                        </a>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
                                <div class="avatar">
                                    <img class="img-avatar" src={iimg} alt="admin@bootstrapmaster.com"/>
                                </div>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-bell-o"></i> Updates
                                    <span className="badge badge-info">42</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-envelope-o"></i> Messages
                                    <span className="badge badge-success">42</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-tasks"></i> Tasks
                                    <span className="badge badge-danger">42</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-comments"></i> Comments
                                    <span className="badge badge-warning">42</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-user"></i> Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-wrench"></i> Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-lock"></i> Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </header>
                <div className="app-body">
                    <div className="sidebar sidebars" id="sidebarContent">
                        <nav className="sidebar-nav">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        <i className="nav-icon icon-speedometer"></i> Dashboard
                                    </a>
                                </li>
                                <li className="nav-title">Vendors</li>
                                {this.state.vendors.map(vendor => {
                                    return <DashboardItem vendorName = {vendor.vendorName}  vendorLink={vendor.vendorLink} key={vendor.id}/>
                                })}
                            </ul>
                        </nav>
                    </div>
                    <main className="main">
                        <br/>
                        <div id="logingrp" className="container-fluid">
                            <div className="animated fadeIn">
                                <div className="row card-container">
                                    <Card click={this.loginHandler} status={this.state.err} key={this.state.vendors.id}>AEDC Prepaid Login</Card>
                                    <Card click={this.getSearchCriteriaType} status={this.state.err} key={this.state.vendors.id}>AEDC Postpaid Login</Card>
                                </div>
                            </div>
                        </div>
                        <div id="userAccess" className="card" style={{display:'none'}}>
                            <UserAccess click={this.getCodTypes} codType={this.state.codType} click2={this.retrieveTransactionDetails}
                            status={this.state}
                            change={this.changeHandler}
                            changed={this.changeHandlerd}
                            transaction={this.retrieveTransactionDetails}
                            key={this.state.vendors.id}/>
                        </div>
                        <div id="transactionDetails" className="card" style={{display:'none'}}>
                            <TransactionDetails details={this.state.transDetail} />
                        </div>                        
                        <div id="loginModal" className="modal">
                            <div className="modal-content">
                                <Login click={this.loginHandler}/>
                            </div>
                        </div>

                        <div id="detailsModal" className="modal">
                            <div className="modal-content">
                                <DetailsModal meterSerial={this.state.custDetails.meterSerial} account={this.state.custDetails.account} 
                                accountBalance={this.state.custDetails.accountBalance} tariffDescription={this.state.custDetails.tariffDescription}
                                indicatorPrePostAccount={this.state.custDetails.indicatorPrePostAccount} serviceAddress={this.state.custDetails.serviceAddress} 
                                name={this.state.custDetails.name} close={this.closePopModal.bind(this, 'detailsModal')}/>
                            </div>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}


export default Dashboard;