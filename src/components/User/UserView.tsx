import React from "react";
import {Avatar, Collapse, Descriptions, Divider, Tag, Typography} from "antd";
import Panel from "rc-table/es/Panel";
import {User} from "@/utils/Interfaces";

const {Text} = Typography;

interface UserViewProps {
    user: User;
}

const UserView: React.FC<UserViewProps> = ({user}) => {
    return (
        <div className={"flex bg-white p-6 rounded-md "}>
            <div>
                <Avatar src={user.image} size={150}/>
                <Descriptions title={user.firstName + " " + user.lastName} bordered column={1}
                              style={{marginTop: '16px'}}>
                    <Descriptions.Item label="Age">{user.age}</Descriptions.Item>
                    <Descriptions.Item label="Gender">{user.gender}</Descriptions.Item>
                    <Descriptions.Item label="Blood Group">{user.bloodGroup}</Descriptions.Item>
                    <Descriptions.Item label="Eye Color"><Tag color={user.eyeColor.toLowerCase()}>{user.eyeColor}</Tag></Descriptions.Item>
                    <Descriptions.Item label="Hair Color">{user.hair.color}</Descriptions.Item>
                </Descriptions>
            </div>

            <Divider type="vertical" style={{height: '100%'}}/>

            <div>
                <Descriptions bordered column={2} style={{marginTop: '16px', marginLeft: '32px'}}>
                    <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                    <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
                    <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
                    <Descriptions.Item label="Birth Date">{user.birthDate}</Descriptions.Item>
                    <Descriptions.Item label="Height">{user.height} cm</Descriptions.Item>
                    <Descriptions.Item label="Weight">{user.weight} kg</Descriptions.Item>
                    <Descriptions.Item label="Domain">{user.domain}</Descriptions.Item>
                    <Descriptions.Item label="IP">{user.ip}</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        <Text>{user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="MAC Address">{user.macAddress}</Descriptions.Item>
                    <Descriptions.Item label="University">{user.university}</Descriptions.Item>
                </Descriptions>

                <Collapse style={{marginTop: '16px', marginLeft: '32px'}}>
                    <Panel key="1" className={""}>
                        <Descriptions bordered column={2}>
                            <Descriptions.Item label="Card Number">{user.bank.cardNumber}</Descriptions.Item>
                            <Descriptions.Item label="Card Type">{user.bank.cardType}</Descriptions.Item>
                            <Descriptions.Item label="Card Expire">{user.bank.cardExpire}</Descriptions.Item>
                            <Descriptions.Item label="Currency">{user.bank.currency}</Descriptions.Item>
                            <Descriptions.Item label="IBAN">{user.bank.iban}</Descriptions.Item>
                        </Descriptions>
                    </Panel>

                </Collapse>
            </div>
        </div>
    );
};

export default UserView;

