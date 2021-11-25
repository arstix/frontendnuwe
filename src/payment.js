import React from 'react'
import './payment.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MacBookPro from './images/MacBookPro.png'
import Redsys from './images/redsys.png'

function Payment() {


    return (
        <div>
            <div className="payment-header">
                <ArrowBackIcon className="payment__icon"/>
                <p className="paragraph__backtomarket">Back to the market</p>
            </div>
            <div className="payment-title">
                <p>New mac</p>
                <div className="payment-pricing">
                    <AttachMoneyIcon className="payment-sign"/>
                    <h1>899.00</h1>
                </div>
            </div>
            <div className="payment-picture">
                    <img src={MacBookPro} />
            </div>
            <div className="payment-footer">
                    <p className="powered-paragraph">Powered by</p>
                    <img src={Redsys} style={{height:"50px", marginLeft: "5px"}}/>
                    <div className="payment-line-footer"></div>
                    <p className="footer-terms">Terms</p>
                    <p className="footer-privacy">Privacy</p>
                </div>
        </div>
    )
}

export default Payment
