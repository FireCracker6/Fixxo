import React from 'react'
import { useState } from 'react'

function ContactFormsSection2() {
 
    const [contactForm, setContactForm] = useState ({name: ``, email: ``, comments: ``})

    const [formErrors, setFormErrors] = useState({})

    const validate = (values) => {
        const errors = {}
        const regex_email =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!values.name) {
            errors.name = "You must enter a name"
        }

        if (!values.email) {
            errors.email = "You must enter an email address"
        }
        else if (!regex_email.test(values.email))
        errors.email = "You must enter a valid email address (eg. name@domain.com)"
     
        if (!values.comments) {
            errors.comments = "You must write a comment"
        }
        else if (!values.comments.length < 5)
        errors.comments = "Your comment must be longer than five characters. "

       
        
        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target 
        setContactForm({...contactForm, [id]: value })
    }

/*     const [name, setName] = useState("");
    const [email, setEmail] = useState(""); */
    

    /* function handleKeyUp() {
        if(!name) {
            document.getElementById('name').classList.add('error')

            document.getElementsByClassName('errorMessage')
          }
          else {
            document.getElementById('name').classList.remove('error')
          }
          if(!email) {
            document.getElementById('email').classList.add('error')

            document.getElementsByClassName('errorMessage')
          }
          else {
            document.getElementById('email').classList.remove('error')
          }
        console.log( "You pressed a key." )
    }

     */
       
        const handleSubmit = (e) => {

            e.preventDefault();
            setFormErrors(validate(contactForm))

        }
            
        /*   event.preventDefault();
          if(!name) {
            document.getElementById('name').classList.add('error')

            document.getElementsByClassName('errorMessage')
          }
          else {
            document.getElementById('name').classList.remove('error')
          }
          alert(`The name you entered was: ${name}`);
          if(!email) {
            document.getElementById('email').classList.add('error')

            document.getElementsByClassName('errorMessage')
          }
          else {
            document.getElementById('email').classList.remove('error')
          }
          alert(`The name you entered was: ${email}`); */
       
       
    
  return (

    
    
    <section className="form-comments">
        
    
    {/*    form  */}
       <div className="forms-input">
           <div className="container">
         
               <form onSubmit={handleSubmit} noValidate>
               <div className="header">
               <h2>Come in Contact with Us </h2>
              
           </div>
                   <div className="item-1">
                      
                       <input  id='name'  type='text' value={contactForm.fname}  onChange={handleChange}   placeholder='Your Name'  />
                        <div className='errorMessage'> {formErrors.name} </div>
                   </div>
                  
                   <div className="item-2">
                    
                   <input id='email' type='email'  value={contactForm.email}  onChange={handleChange}  placeholder='Your Mail' />
                   <div className='errorMessage'> {formErrors.email} </div>
                   </div>
           <div className="item-3">
            <textarea  placeholder="Comments"value={contactForm.comments}   onChange={handleChange}  id="comments" rows="8"></textarea>
            <div className='errorMessage'> {formErrors.comments} </div>
           
               <div className="cart-red-buttons mt-4"><button type="submit"  className=" post-button">Post Comments</button>
               </div> 
           </div>
        
              
          
       
             
       </form>
           </div>
       </div>

       
       </section>

       
  )

}

export default ContactFormsSection2