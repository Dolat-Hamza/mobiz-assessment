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
    console.log(initialValues)
    const router = useRouter();
    const searchParam = useSearchParams()
    const pathname = usePathname()
   
    return (
        <Formik
            initialValues={initialValues || {
                firstName: '',
                lastName: '',
                maidenName: '',
                age: '',
                email: '',
                phone: '',
                username: '',
                password: '',

            }}
            validationSchema={userValidationSchema}
            onSubmit={onSubmit}
        >
            {({errors, touched, handleChange, handleBlur, values}) => (
                <Form layout="vertical" onFinish={() => onSubmit(values, {
                    setSubmitting: () => {

                    }
                } as FormikHelpers<User>)}>
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

