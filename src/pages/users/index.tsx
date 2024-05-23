import { NextPage } from "next";

import { Alert, Spin } from 'antd';
import {useEffect, useState} from "react";
import {User} from "@/utils/Interfaces";
import {getUsers} from "@/utils/ApiCalls";
import UserList from "@/components/User/UserList";
import Layout from "@/components/Common/Layout";
import Title from "antd/es/skeleton/Title";


const UsersPage: NextPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedUsers = await getUsers();
                console.log(fetchedUsers)
                setUsers(fetchedUsers.data?.users? fetchedUsers.data?.users :[]);
            } catch (err) {
                setError("Error fetching users");
                console.error("Error fetching users:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <Spin size="large" />;
        }
        if (error) {
            return <Alert message={error} type="error" />;
        }
        return <UserList users={users} />;
    };

    return (
        <Layout>
        <div className={"flex flex-col items-center justify-center overflow-y-scroll gap-6 w-full h-full"}>
            <h1 className={"text-2xl font-bold "}>All Users Fetched From API</h1>
            {renderContent()}
        </div>
        </Layout>
    );
};

export default UsersPage;
