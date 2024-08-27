import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="bg-background flex items-center justify-center h-full w-full p-8">
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
