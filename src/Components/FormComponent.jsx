import React from 'react'
import "semantic-ui-css/semantic.min.css";

export const FormComponent = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" className="FirstName" placeholder="First Name" />
                    <input type="text" className="LastName" placeholder="Last Name" />
                </div>
                <div>
                    <input type="Email" className="Email" placeholder="Email" />
                </div>
                <div class="field">
                    <label>Text</label>
                    <textarea></textarea>
                </div>
                <div class="inline field">
                    <input type="checkbox" tabindex="0" class="hidden" />
                    <label>Checkbox</label>
                </div>
                <div class="ui submit button">Submit</div>
            </form>    
        </div>
    )
}
