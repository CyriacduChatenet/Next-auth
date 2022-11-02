import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage: NextPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const authentication = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers : {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const data = await response.json();

        localStorage.setItem('token', data.token)
    };

    return (
        <div>
            <h1>Login</h1>
            <Link href={'/'}>Home</Link>
            <br />
            <form onSubmit={(e) => {
                e.preventDefault();
                authentication();
            }}>
                <label htmlFor="Email">
                    <p>Email</p>
                    <input type="email" name="email" onChange={(e) => setEmail((prevEmail : string) => prevEmail = e.target.value)}/>
                </label>
                <label htmlFor="Password">
                    <p>Password</p>
                    <input type="password" name="password" onChange={(e) => setPassword((prevPassword : string) => prevPassword = e.target.value)}/>
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LoginPage;