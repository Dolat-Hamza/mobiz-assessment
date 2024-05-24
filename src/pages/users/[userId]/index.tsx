import {NextPage} from "next";
import {useRouter} from "next/router";
import {Alert, Spin} from 'antd';
import {ParsedUrlQuery} from "querystring";
import {User} from "@/utils/Interfaces";
import {useEffect, useState} from "react";
import {getSingleUserById} from "@/utils/ApiCalls";
import UserView from "@/components/User/UserView";
import Layout from "@/components/Common/Layout";
import {motion} from "framer-motion";

interface UserViewPageProps extends ParsedUrlQuery {
    userId: string;
}

const UserViewPage: NextPage<UserViewPageProps> = ({userId}) => {
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
    }, [parsedUserId]);

    return (
        <Layout>
            <div className="min-h-screen w-full flex flex-col gap-6 items-center justify-center bg-gray-100 p-4">
                <h1 className={" text-2xl font-bold"}>User {parsedUserId} Profile</h1>
                {isLoading ? (
                    <div className="flex w-4/5 justify-center items-center">
                        <Spin size="large"/>
                    </div>
                ) : error ? (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        className="w-full max-w-md"
                    >
                        <Alert message={error} type="error" showIcon/>
                    </motion.div>
                ) : user ? (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        className=" w-4/5 bg-white rounded-lg shadow-lg p-6"
                    >
                        <UserView user={user}/>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        className="w-full max-w-md"
                    >
                        <Alert message="User not found" type="warning" showIcon/>
                    </motion.div>
                )}
            </div>
        </Layout>
    );
};

export default UserViewPage;
