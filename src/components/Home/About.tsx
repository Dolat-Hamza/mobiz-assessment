import { motion } from 'framer-motion';
import { Typography, Row, Col, Image } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
    return (
        <section className="py-12">
            <div className="flex flex-row items-center justify-between w-full ">
                <Row className={"flex flex-row items-center justify-around"} gutter={[32, 32]}>
                    <Col xs={24} md={4}>
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }} viewport={{ once: true }}>
                            <Image src="/images/logo.png" alt="About Us" />
                        </motion.div>
                    </Col>
                    <Col xs={24} md={12}>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }} viewport={{ once: true }}>
                            <Title level={2}>About Us</Title>
                            <Paragraph>
                                We are a passionate team dedicated to creating innovative products that make a difference.
                                Our mission is to empower businesses with cutting-edge technology solutions.
                            </Paragraph>

                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default AboutUs;
