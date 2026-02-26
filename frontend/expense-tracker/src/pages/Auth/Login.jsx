import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-1.25 mb-6">Please enter your credentials to login</p>
            </div>
        </AuthLayout>
    )
}

export default Login;