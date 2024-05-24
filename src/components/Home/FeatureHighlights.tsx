import {Card, Row, Col} from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';
import {motion} from 'framer-motion';

const features = [
    {
        icon: <CheckCircleOutlined/>,
        title: 'High Performance',
        description: 'Our products deliver top-notch performance and efficiency.'
    },
    {
        icon: <CheckCircleOutlined/>,
        title: 'Innovative Design',
        description: 'We focus on sleek, modern designs that stand out.'
    },
    {
        icon: <CheckCircleOutlined/>,
        title: 'User-Friendly',
        description: 'Our products are intuitive and easy to use for everyone.'
    },
    {
        icon: <CheckCircleOutlined/>,
        title: 'Secure and Reliable',
        description: 'Our products are built with security and reliability in mind.'
    },
    // Add more features as needed
];

const FeatureHighlights: React.FC = () => {
    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                <Row gutter={[16, 16]}>
                    {features.map((feature, index) => (
                        <Col key={index} xs={24} sm={12} md={6}>
                            <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                                <Card className="shadow-md">
                                    <div className="flex items-center">
                                        <div className="text-2xl text-blue-500 mr-4">{feature.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default FeatureHighlights;
