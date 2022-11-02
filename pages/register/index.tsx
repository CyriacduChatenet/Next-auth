import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';

const RegisterPage: NextPage = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const authentication = async () => {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers : {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        })

        const data = await response.json();

        localStorage.setItem('token', data.token);

        Router.push('/login')
    };

    return (
        <div>
            <h1>Register</h1>
            <Link href={'/'}>Home</Link>
            <br />
            <form onSubmit={(e) => {
                e.preventDefault();
                authentication();
            }}>
                <label htmlFor="Username">
                    <p>Username</p>
                    <input type="username" name="username" onChange={(e) => setUsername((prevUsername : string) => prevUsername = e.target.value)}/>
                </label>
                <label htmlFor="Email">
                    <p>Email</p>
                    <input type="email" name="email" onChange={(e) => setEmail((prevEmail : string) => prevEmail = e.target.value)}/>
                </label>
                <label htmlFor="Password">
                    <p>Password</p>
                    <input type="password" name="password" onChange={(e) => setPassword((prevPassword : string) => prevPassword = e.target.value)}/>
                </label>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default RegisterPage;