import React from 'react'
import "../Css/Form.css"
import "semantic-ui-css/semantic.min.css"

export const FormComponent = () => {
    return (
        <div>
            <form className="ui form">
                <h4 className="ui dividing header">Contact Us</h4>
                    <div className="field">
                        <label>Name</label>
                            <div className="two fields">
                                <div className="field">
                                    <input 
                                    type="text" 
                                    name="first-name" 
                                    placeholder="First Name" />
                                </div>
                                <div className="field">
                                    <input 
                                    type="text" 
                                    name="last-name" 
                                    placeholder="Last Name" />
                                </div>
                            </div>
                    </div>
                    <div className="field">
                        <label>Email</label>
                    <div className="field">
                            <input 
                            type="Email" 
                            name="Email" 
                            placeholder="Email" />
                    </div>
                    </div>
            </form>
            <div className="container">
                <div className="ui form">
                        <div className="field">
                            <label>Message</label>
                            <textarea></textarea>
                        </div>
                        <div className="field">
                            <label>Additional details</label>
                            <textarea rows="2"></textarea>
                        </div>
                </div> 
            </div>
                <button className="ui primary button">
                    Submit
                </button>
        </div>
    )
}
