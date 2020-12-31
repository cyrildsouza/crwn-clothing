import React, { useState } from 'react';
import FormInput from '../formInput';
import CustomButton from '../customButton';
import { auth, createUserProfileDocument } from '../../firebase';
import './signUpStyle.scss';

const SignUp: React.FunctionComponent = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (password !== confirmedPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmedPassword('');
        } catch (err) {
            console.error(err);
        }
       
    };


    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={onSubmit}>
                <FormInput
                    type='text'
                    value={displayName}
                    handleChange={(e) => setDisplayName(e.target.value)}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    value={confirmedPassword}
                    handleChange={(e) => setConfirmedPassword(e.target.value)}
                    label='Confirm password'
                    required
                />
                <CustomButton type='submit'>Sign Up</ CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
