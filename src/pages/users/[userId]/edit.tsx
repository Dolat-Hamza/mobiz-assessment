import {NextPage} from 'next';
import {useRouter} from 'next/router';
import UserForm from '@/components/UserForm';
import {Alert, message, Spin} from 'antd';
import {ParsedUrlQuery} from 'querystring';
import {FormikHelpers} from "formik";
import {useEffect, useState} from "react";
import {User} from "@/utils/Interfaces";
import {getSingleUserById, updateUser} from "@/utils/ApiCalls";
import Layout from '@/components/Common/Layout';


interface EditUserPageProps extends ParsedUrlQuery {
    userId: string
}


const EditUserPage: NextPage<EditUserPageProps> = ({}) => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const {query} = useRouter();

    const parsedUserId = parseInt(query.userId as string);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedUser = await getSingleUserById(parsedUserId);
                setUser(fetchedUser?.data ? fetchedUser?.data : null);
            } catch (err) {
                setError('Error fetching user');
                console.error('Error fetching user:', err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [parsedUserId]); // Include userId in the dependency array

    const handleSubmit = async (values: User, actions: FormikHelpers<User>) => {
        try {
            await updateUser(parsedUserId, values);
            actions.setSubmitting(false);
            message.success('User updated successfully').then(
                () => router.push(`/users`)
            )

        } catch (error) {
            actions.setSubmitting(false);
            console.error('Error updating user:', error);
            // Handle the error (e.g., display an error message)
        }
    };

    return (
        <Layout>
            <div className={"flex flex-col items-center justify-center w-full h-full gap-6"}>
                <h2>Edit User</h2>

                {isLoading ? (
                    <Spin size="large"/>
                ) : error ? (
                    <Alert message={error} type="error"/>
                ) : user ? (
                    <UserForm initialValues={user} onSubmit={handleSubmit}/>
                ) : (
                    <Alert message="User not found" type="warning"/>
                )}
            </div>
        </Layout>);
};

export default EditUserPage;
