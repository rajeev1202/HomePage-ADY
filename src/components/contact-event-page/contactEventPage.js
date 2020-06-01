import React from 'react';
import './contactEventPage.css';

const ContactEvent = () => (

<div className='contact-event-page'> 

<div className='contact-form'>
<h3 className='contact-header'>GET IN touch </h3>
<form>
    <input type='text' name ='Fname' placeholder='First Name'/>
    <input type='text' name ='lname' placeholder='Last Name'/><br/>
    <input type='email' name ='email' placeholder='Email address'/>
    <input type='url' name ='website' placeholder='Website'/><br/>
    <input type='date' name ='DOB' placeholder='dd/mm/yyyy'/>
    <textarea name="Message" placeholder="Message" rows='6' cols='10'></textarea>
    <button className='contact-submit'>SUBMIT</button>
</form>
</div>


<div className='event-info'>
    <h3>EVENTS</h3>
    <p><span className="event-date">28</span>There are many variations of passages of Lorem Ipsum available<a hraf='url'>DETAILS</a></p>
    <a className="more-events" href='url'>MORE EVENTS</a><br />
</div>



</div>

);
export default ContactEvent;