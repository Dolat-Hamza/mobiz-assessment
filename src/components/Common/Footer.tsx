import { Layout, Typography, Space, Row, Col, Divider } from "antd";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import {
    FacebookFilled,
    FacebookOutlined,
    InstagramFilled,
    InstagramOutlined,
    TwitterOutlined,
    TwitterSquareFilled
} from '@ant-design/icons';
import Paragraph from "antd/es/skeleton/Paragraph";
import Facebook from "next-auth/providers/facebook";
import {useSession} from "next-auth/react"; // Add social icons

const { Footer } = Layout;
const { Text, Link: AntdLink } = Typography;

const CustomFooter: React.FC = () => {
    const { theme } = useTheme();
    const {data: session, status} = useSession();
    return (
        <Footer
            style={{
                backgroundColor: theme === "dark" ? "#121212" : "white",
                color: theme === "dark" ? "white" : "black",
                padding: '24px' // Add some padding
            }}
        >
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={8}>
                    <div className={"flex flex-col gap-4 "}>
                        <p >Your Company Name</p>
                        <p>Your company slogan or a brief description.</p>
                    </div>
                </Col>
                <Col xs={24} sm={8}>
                    <div className={"flex flex-col gap-3"}>
                        <p className={"text-lg font-bold "}>Quick Links</p>
                        <ul className="list-none space-y-2">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            {session?.user.role === "admin" &&<li><Link href="/users">Users</Link></li>}
                            {/* Add more links as needed */}
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={8}>
                    <div className={"flex flex-row gap-4 items-center"}>
                        <p >Connect with Us</p>
                        <Space>
                            <AntdLink href="https://www.facebook.com/yourcompany" target="_blank"><FacebookFilled /></AntdLink>
                            <AntdLink href="https://www.instagram.com/yourcompany" target="_blank"><InstagramFilled /></AntdLink>
                            <AntdLink href="https://twitter.com/yourcompany" target="_blank"><TwitterSquareFilled /></AntdLink>
                        </Space>
                    </div>
                </Col>
            </Row>
            <Divider style={{ backgroundColor: theme === "dark" ? "white" : "black" }} /> {/* Themed divider */}
            <p >©{new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </Footer>
    );
};

export default CustomFooter;
