import UserForm from '@/components/UserForm';
import {useRouter} from 'next/router';
import React from "react";
import {User} from "@/utils/Interfaces";
import {addUser} from "@/utils/ApiCalls";
import {FormikHelpers} from "formik";
import Layout from "@/components/Common/Layout";
import {message} from "antd";

const CreateUserPage: React.FC = () => {
    const router = useRouter();

    const handleSubmit = async (values: User, actions: FormikHelpers<User>) => {
        try {
            await addUser(values);
            actions.setSubmitting(false);
            message.success("User Created Successfully").then(() => {
                router.push('/users');

            })
        } catch (error) {
            actions.setSubmitting(false);
            console.error('Error creating user:', error);
            // Handle errors, e.g., show an error message to the user
        }
    };

    return (
        <Layout>
            <div className={"flex flex-col items-center justify-center w-full h-full gap-6"}>
                <h2 className={"text-2xl "}>Create User</h2>
                <UserForm onSubmit={handleSubmit}/>
            </div>
        </Layout>
    );
};

export default CreateUserPage;
