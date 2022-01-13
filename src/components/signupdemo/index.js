// import React from 'react'
import {Body, Main , Form, Button} from './signupStyle';
import React, { useEffect } from 'react';

export default function Signup() {
    // const form = document.getElementById("form");
    // form.addEventListener('submit', function(event){
    //     event.preventDefault(); //stop refreshing page
    //     checkInputs();
    // })
    useEffect(() => {
        document.title = `Signup - KFC Pakistan`;
    },[Signup])

    function events(e) {
        e.preventDefault(); //stop refreshing page
        checkInputs();
    }
    function checkInputs() {
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const password2 = document.getElementById("password2");   

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim(); 

        // validate username
        if (usernameValue === '') {
            SetError(username, "Username can't be empty") // call error function
            // document.getElementById("small").innerHTML = "Username can't be empty";
        }        
        else {
            SetSuccess(username)
        } 

        
        // validate email
        if (emailValue === '') {
            SetError(email, "Email can't be empty")
        } 
        else {
            SetSuccess(email)
        }

        // validate password
        if (passwordValue === '') {
            SetError(password, "Password can't be empty") // call error function
        }
        else if (passwordValue.length < 8) {
            SetError(password, "Password must contain eight digits") // call error function
        }
        else {
        SetSuccess(password)
        }

        // validate confirm password.
        if (password2Value === '') {
            SetError(password2, "Password can't be empty") // call error function
        }
        else if (password2Value !== passwordValue) {
            SetError(password2, "Password doesn't match") // call error function
        }
        else if (password2Value.length < 8) {
            SetError(password2, "Password must contain Eight Characters") // call error function
        }
        else {
            SetSuccess(password2)
        }
    }

    function SetError(input, message) {
        const content = input.parentElement;
        const small = content.querySelector("small");

        small.innerHTML = message;

        content.className = "content error";
        // document.getElementById('username').style.borderColor="red";

    }
    function SetSuccess(input) {
        // document.getElementById('username').className="err";

        const content = input.parentElement;
        content.className = "content";
    }

    return (
        <Body>
            <Main>
                <Form id="form" onSubmit={events}>
                    <div className="content">
                        <label for="">Username</label>
                        <input type="text" id="username" placeholder="Username"/>
                        <i className='fas fa-check-circle'/>
                        <i className="fas fa-exclamation-circle"/>
                        <small id="small">Create Strong Username with Alphabets and Number</small>
                    </div>
                    <div className="content">
                        <label for="">Email</label>
                        <input type="email" id="email" placeholder="Email"/>
                        <i className="fas fa-check-circle"/>
                        <i className="fas fa-exclamation-circle"/>
                        <small id="small">Error</small>
                    </div>
                    <div className="content">
                        <label for="">Password</label>
                        <input type="password" id="password" placeholder="Password"/>
                        <i className="fas fa-check-circle"/>
                        <i className="fas fa-exclamation-circle"/>
                        <small id="small">Password must be Greater than Eight Character</small>
                    </div>
                    <div className="content">
                        <label for="">Confirm Password</label>
                        <input type="password" id="password2" placeholder="Confirm password"/>
                        <i className="fas fa-check-circle"/>
                        <i className="fas fa-exclamation-circle"/>
                        <small id="small">Password must be Greater than Eight Character</small>
                    </div>
                    <Button type="submit">Submit</Button>
                </Form>
            </Main>
        </Body>
    )
}
