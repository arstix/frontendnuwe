import React from 'react'
import './form.css'
import { ApplePayButton } from "react-apple-pay-button";
import Visa from './images/download.png'
import CVC from './images/images.jpg'

function Form() {
    return (
        <div className="main-form">
            <div className="form-main">
                <ApplePayButton className="apple-pay" theme="dark">
                </ApplePayButton>
            <div className="pay-with-card-div">
                <div className="line-gray" style={{marginLeft: "110px", marginRight: "12.96px"}}></div>
                <p style={{fontFamily: "Roboto"}}>Or Pay with card</p>
                <div className="line-gray" style={{marginLeft: "12.96px"}}></div>
            </div>
            <div>
                <form className="global-form">
                    <div className="form-group-email">
                        <div>
                            <label htmlFor="cardNumber" className="label-email">Email</label>
                        </div>
                        <div>
                             <input type="text" className="form-control-email" />
                        </div>
                    </div>
                    <div className="form-group-creditcard">
                         <div>
                             <label htmlFor="cardNumber" className="label-cardDetails">Credit card details</label>
                        </div>
                        <div style={{display:"flex", alignItems: "center"}}>
                                <input type="number" className="form-control-cardNumber" id="cardNumber" placeholder="1234 1234 1234 1234"/>
                                <img src={Visa} style={{height:"46px", position: "absolute", marginLeft:"340.56px"}} className="visa-logo" />
                         </div>
                         <div className="form-control-creditcarddetails">
                            <div>
                                 <input type="text" className="form-control-cardDate" id="cardNumber" placeholder="MM/YY"/>
                            </div>
                            <div style={{display:"flex", alignItems: "center"}}>
                                  <input type="text" className="form-control-cardCVC" id="cardNumber" placeholder="CVC"/>
                                  <img src={CVC} style={{height:"16px", position: "absolute", marginLeft:"166.56px"}} className="visa-logo" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group-name">
                        <div>
                            <label htmlFor="cardNumber" className="label-cardName">Name on card</label>
                        </div>
                        <div>
                             <input type="text" className="form-control-cardName" id="cardNumber" />
                        </div>
                    </div>
                    <div className="form-group-country">
                         <label htmlFor="cardNumber" className="label-country">Country or region</label>
                        <div>
                             <select  className="form-control-countrySelector">
                                 <option>United States</option>
                             </select>
                             <input type="text" className="form-control-countryZIP" id="cardNumber" placeholder="ZIP"/>
                        </div>
                    </div>
                    <button className="button-apple">Pay $899.00</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Form
