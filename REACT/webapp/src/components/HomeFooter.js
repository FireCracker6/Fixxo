import React from 'react'
import customerService from './assets/images/icons/customer-service.svg'
import deliveryTruck from './assets/images/icons/delivery-truck.svg'
import securePayment from './assets/images/icons/secure-payment.svg'

function HomeFooter() {
  return (
    <section className="home-footer-section">
    <div className="container">
<div className="home-footer">
    <div className="item-1"> <div className="item"><a href="#"><img src={customerService} /> </a></div>
    <h3>Customer Support</h3>
    <p>Village did removed enjoyed  <br /> explain talking.</p>
</div>
    <div className="item-1"> <div className="item"><a href="#"><img src={securePayment} /></a></div>
    <h3>Secured Payment</h3>
    <p>Village did removed enjoyed  <br /> explain talking.</p> </div>
    <div className="item-1"> <div className="item"><a href="#"><img src={deliveryTruck} /> </a></div>
    <h3>Free Home Delivery</h3>
    <p>Village did removed enjoyed  <br /> explain talking.</p> </div>
    <div className="item-1"> <div className="item"><a href="#"><img src={deliveryTruck} /></a></div>
    <h3>30 Days Reuters</h3>
    <p>Village did removed enjoyed <br /> explain talking.</p> </div>
   
</div>
</div>
</section>
  )
}

export default HomeFooter