// components/LandingPage/Pricing.tsx

import React from 'react';
import {Card, Row, Col, Button, Tag} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import {motion} from 'framer-motion';

const pricingPlans = [
    {name: 'Basic', price: '$19', features: ['10GB Storage', '5 Users', 'Email Support'], isRecommended: false},
    {name: 'Pro', price: '$49', features: ['50GB Storage', '20 Users', 'Priority Support'], isRecommended: true},
    {
        name: 'Enterprise',
        price: '$99',
        features: ['Unlimited Storage', 'Unlimited Users', 'Dedicated Support'],
        isRecommended: false
    },
];

const Pricing: React.FC = () => {
    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Choose the Plan That&apos;s Right for You
                </h2>
                <Row gutter={[16, 16]} justify="center">
                    {pricingPlans.map((plan) => (
                        <Col key={plan.name} xs={24} sm={12} md={8} lg={6}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible">
                                <Card
                                    title={plan.name}
                                    className={`shadow-md ${plan.isRecommended ? 'border-2 border-blue-500' : ''}`} // Highlight recommended plan
                                >
                                    <p className="text-4xl font-bold mb-4">{plan.price}</p>
                                    <p className="text-gray-600 mb-4">
                                        {plan.isRecommended && <Tag color="blue">Recommended</Tag>}
                                    </p>
                                    <ul>
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-center mb-2">
                                                <CheckOutlined className="text-green-500 mr-2"/>
                                                {feature}
                                            </li>
                                        ))}
                                        {/* You can add more features or limitations with CloseOutlined icon */}
                                    </ul>
                                    <Button type="primary" className="mt-4">
                                        Get Started
                                    </Button>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Pricing;
