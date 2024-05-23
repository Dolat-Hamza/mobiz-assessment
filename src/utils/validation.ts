// utils/validation.ts
import * as Yup from 'yup';

// Validation schema for users
export const userValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    maidenName: Yup.string(),
    age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
    gender: Yup.string().required('Gender is required').oneOf(['male', 'female'], 'Invalid gender'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),

});
