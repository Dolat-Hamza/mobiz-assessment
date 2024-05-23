// components/DashboardLayout.tsx
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Row gutter={[16, 16]}>{children}</Row>
    </motion.div>
);

export default DashboardLayout;
