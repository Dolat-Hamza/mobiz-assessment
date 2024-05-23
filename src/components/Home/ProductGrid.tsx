import { Card, Col, Row, Rate, Image } from 'antd';
import { motion } from 'framer-motion';
import PriceDisplay from "@/components/Products/PriceDisplay";
import {Product} from "@/utils/Interfaces";

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };

    return (
        <Row gutter={[16, 16]}>
            {products.map((product) => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                    <motion.div variants={cardVariants} initial="hidden" animate="visible">
                        <Card
                            hoverable
                            cover={
                                <Image
                                    src={product.thumbnail}
                                    alt={product.title}
                                    preview={false}
                                    className="object-cover h-48 w-full"
                                />
                            }
                        >
                            <Card.Meta
                                title={product.title}
                                description={
                                    <>
                                        <Rate disabled allowHalf defaultValue={product.rating} />
                                        <br />
                                        <PriceDisplay price={product.price} />
                                    </>
                                }
                            />
                        </Card>
                    </motion.div>
                </Col>
            ))}
        </Row>
    );
};

export default ProductGrid;

