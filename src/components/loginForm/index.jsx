import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGIN, SET_UID } from '../../store/auth/authSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const { email, password } = form;

    const handleOnChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            if (user) {
                dispatch(SET_LOGIN(true));
                dispatch(SET_UID(user?.uid));
                router.push('/');
                toast.success(
                    `Login Success, welcome ${auth?.currentUser?.displayName}`
                );
            }
        } catch (error) {
            console.log(error);
            toast.error('Login Failed');
        }
    };
}