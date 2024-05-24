// components/UserForm.tsx

import {Button, Form, Input} from 'antd';
import {Formik, FormikHelpers} from 'formik';
import {User} from "@/utils/Interfaces";
import {userValidationSchema} from "@/utils/validation";
import {usePathname, useRouter, useSearchParams} from "next/navigation";


interface UserFormProps {
    initialValues?: User;
    onSubmit: (values: User, actions: FormikHelpers<User>) => void;
}

const UserForm: React.FC<UserFormProps> = ({initialValues, onSubmit}) => {
    const router = useRouter();
    const searchParam = useSearchParams()
    const pathname = usePathname()
    const emptyUser: User = {
        id: 0,
        firstName: '',
        lastName: '',
        maidenName: '',
        age: 0,
        gender: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        birthDate: '',
        image: '',
        bloodGroup: '',
        height: 0,
        weight: 0,
        eyeColor: '',
        hair: {
            color: '',
            type: '',
        },
        domain: '',
        ip: '',
        address: {
            address: '',
            city: '',
            coordinates: {
                lat: 0,
                lng: 0,
            },
            postalCode: '',
            state: '',
        },
        macAddress: '',
        university: '',
        bank: {
            cardExpire: '',
            cardNumber: '',
            cardType: '',
            currency: '',
            iban: '',
        },
        company: {
            address: {
                address: '',
                city: '',
                coordinates: {
                    lat: 0,
                    lng: 0,
                },
                postalCode: '',
                state: '',
            },
            department: '',
            name: '',
            title: '',
        },
        ein: '',
        ssn: '',
        userAgent: '',
        crypto: {
            coin: '',
            wallet: '',
            network: '',
        },
    };

    return (
        <Formik
            initialValues={initialValues || emptyUser} // Use the emptyUser if initialValues is undefined
            validationSchema={userValidationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {({errors, touched, handleChange, handleBlur, values}) => (
                <Form rootClassName={"bg-white w-4/5 p-6 rounded-md"} layout="vertical" >
                    <Form.Item label="First Name" required>
                        <Input
                            name="firstName"
                            placeholder="Enter first name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />
                        {errors.firstName && touched.firstName && (
                            <div className="error">{errors.firstName}</div>
                        )}
                    </Form.Item>
                    <Form.Item label="Last Name" required>
                        <Input
                            name="lastName"
                            placeholder="Enter Last name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                        />
                        {errors.lastName && touched.lastName && (
                            <div className="error">{errors.lastName}</div>
                        )}
                    </Form.Item><Form.Item label="Email" required>
                    <Input
                        name="email"
                        placeholder="Enter Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && (
                        <div className="error">{errors.email}</div>
                    )}
                </Form.Item>
                    <Form.Item label="Password" required>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && (
                        <div className="error">{errors.password}</div>
                    )}
                </Form.Item>


                    <Form.Item>
                        <Button rootClassName={"w-full"} type="primary" htmlType="submit">
                            {searchParam.get('type') === 'create' ? 'Create User' : 'Update User'}
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    );
};

export default UserForm;

