import React from 'react';


function Form () { 
    return ( 
        <div className="form">
            <div className="container">
                <div className="form__wrapper">
                <div className="form__text">
                    <h2 className="form__title">Stay up to date!</h2>
                    <p className="form__subtitle">Sign up for the latest Clerksy news.</p>
                </div>
                <div className="form__sign">
                <div className="form__wrap">
             <form className="form__form"><input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="form__email"
            placeholder="Your email address"
            required
            />     
            <button
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              className="form__submit"
            >
              Sign Up
            </button>
            </form>
            <p className="form__signature">By submitting your email you agree to receive updates about Clerksy. You can <br/> unsubscribe at any time. View our full</p>
            </div>
                </div>
            </div>
            </div>
        </div>
    )

}


export default Form;