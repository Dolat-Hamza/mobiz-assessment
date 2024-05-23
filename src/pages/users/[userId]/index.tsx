import {NextPage} from "next";
import {useRouter} from "next/router";

import {Alert, Spin} from 'antd';
import {ParsedUrlQuery} from "querystring";
import {User} from "@/utils/Interfaces";
import {useEffect, useState} from "react";
import {getSingleUserById} from "@/utils/ApiCalls";
import UserView from "@/components/User/UserView";
import Layout from "@/components/Common/Layout";

interface UserViewPageProps extends ParsedUrlQuery {
    userId: string;
}

const UserViewPage: NextPage<UserViewPageProps> = ({userId}) => {
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
                setUser(fetchedUser.data ? fetchedUser.data : null);
            } catch (err) {
                setError("Error fetching user");
                console.error("Error fetching user:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [parsedUserId]); // Include userId in the dependency array


    return (
        <Layout>
            <div>
                {isLoading ? (
                    <Spin size="large"/>
                ) : error ? (
                    <Alert message={error} type="error"/>
                ) : user ? (
                    <UserView user={user}/>
                ) : (
                    <Alert message="User not found" type="warning"/>
                )}
            </div>
        </Layout>
    );
};

export default UserViewPage;
