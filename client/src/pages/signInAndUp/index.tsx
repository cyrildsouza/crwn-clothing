import React from 'react';
import SignIn from '../../components/signIn';
import SignUp from '../../components/signUp';
import './signInAndUpStyle.scss';

const SignInAndUp: React.FunctionComponent = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInAndUp;
