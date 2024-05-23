// components/TopSellingProducts.tsx
import {Table, Card, Rate, Image, Typography, Avatar} from 'antd';
import { Props } from '@/utils/Interfaces';
import {Product} from "@/utils/ProductCalculations";
import PriceDisplay from "@/components/Products/PriceDisplay";

const { Text } = Typography;

const TopSellingProducts: React.FC<Props> = ({ products }) => {
    // Sort by rating (descending) and take top 5
    const topProducts = products
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    const columns = [
        {
            title: 'Product',
            dataIndex: 'thumbnail', // Image will be the first column
            key: 'thumbnail',
            render: (thumbnail: string, record: Product) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={thumbnail} alt={record.title} shape={"square"} size={"large"} />
                    <div style={{ marginLeft: 8 }}>
                        <Text strong>{record.title}</Text>
                        <br />
                        <Text type="secondary">{record.brand}</Text>
                    </div>
                </div>
            ),
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating: number) => <Rate disabled defaultValue={rating} />,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => <PriceDisplay price={price} />,
        },
    ];

    return (
        <Card rootClassName={"capitalize"} title="Top Rated Products" >
            <Table
                columns={columns}
                dataSource={topProducts}
                pagination={false}
                rowKey="id"  // Add rowKey for performance if your data has unique IDs
            />
        </Card>
    );
};

export default TopSellingProducts;
