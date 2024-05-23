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
            rootClassName={"w-full "}
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => (
                <List.Item actions={[
                    <Link href={`/users/${user.id}/edit`}>Edit</Link>,
                    <Link href={`/users/${user.id}`}>View</Link>
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

