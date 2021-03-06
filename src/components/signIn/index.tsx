import React, { useState } from 'react';
import FormInput from '../formInput';
import CustomButton from '../customButton';
import  { auth, signInWithGoogle } from '../../firebase/';
import './signInstyle.scss';

const SignIn: React.FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch(err) {
            console.error(err);
        }
        setEmail('');
        setPassword('');
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput label="email" type="email" value={email} required handleChange={(e) => setEmail(e.target.value)}/>
                <FormInput label="password" type="password" value={password} required handleChange={(e) => setPassword(e.target.value)}/>
                <div className="buttons">
                    <CustomButton type="submit" >Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn >Sign In Google</CustomButton>
                </div>
                
            </form>
            
        </div>
    );
};

export default SignIn;
