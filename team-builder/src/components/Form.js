import React from 'react'

export default function Form(props) {

const { values } = props;

    return (
        <form>
            {/* STEP 3 {Make an input here for username} */}
            <label> Username:
                <input 
                name='username'
                type='text'
                value=''
                onChange=''
                placeholder='---Name here---'
                />
            </label>
            {/* STEP 4 {Make an input here for email} */}
            <label>Email:
                <input 
                name='email'
                type='email'
                value=''
                onChange=''
                placeholder='---Email here---'
                />
            </label>
            {/* STEP 5 {Make a dropdown for role} */}
            <label>Role:
                <select name='Role:'>
                    <option value=''>---Select Role---</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </label>

        </form>
    )
}
