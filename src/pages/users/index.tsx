import { NextPage } from "next";
import { Alert, message, Spin, Typography } from 'antd';
import { useEffect, useState } from "react";
import { User } from "@/utils/Interfaces";
import { getUsers } from "@/utils/ApiCalls";
import UserList from "@/components/User/UserList";
import Layout from "@/components/Common/Layout";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const { Title } = Typography;

const UsersPage: NextPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers.data?.users ? fetchedUsers.data?.users : []);
            } catch (err) {
                setError("Error fetching users");
                console.error("Error fetching users:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (session?.user?.role === "user" && pathname === "/users") {
            message.warning("You are Not Authorized To View This Page");
            router.push("/");
        }
    }, [pathname, router]);

    const renderContent = () => {
        if (isLoading) {
            return <Spin size="large" tip="Loading users..." />;
        }
        if (error) {
            return <Alert message={error} type="error" showIcon />;
        }
        return <UserList users={users} />;
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center gap-6 w-full h-full p-6 bg-gray-100">
                <Title level={2} className="text-center">
                    All Users Fetched From API
                </Title>
                <div className="w-full max-w-4xl">
                    {renderContent()}
                </div>
            </div>
        </Layout>
    );
};

export default UsersPage;
