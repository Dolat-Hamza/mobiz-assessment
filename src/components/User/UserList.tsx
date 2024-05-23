import { List, Avatar, Typography } from "antd";
import Link from "next/link";
import {User} from "@/utils/Interfaces";

const { Text } = Typography;

interface UserListProps {
    users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <List
            rootClassName={"w-full bg-white rounded-md p-4"}
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user, index) => (
                <List.Item key={index} actions={[
                    <Link key={index} href={`/users/${user.id}/edit`}>Edit</Link>,
                    <Link key={index} href={`/users/${user.id}`}>View</Link>
                ]}>
                    <List.Item.Meta
                        avatar={<Avatar src={user?.image} />}
                        title={<Text strong>{user.firstName + " " + user.lastName}</Text>}
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    );
};

export default UserList;

