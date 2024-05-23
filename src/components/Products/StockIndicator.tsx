// components/StockIndicator.tsx
import { Tag, Tooltip } from 'antd';
import {Product} from "@/utils/Interfaces";

interface Props {
    product: Product; // Pass the entire product object instead of just stock
}

const StockIndicator: React.FC<Props> = ({ product }) => {
    const { stock, title } = product;

    const tagColor = stock > 20 ? 'green' : stock > 0 ? 'orange' : 'red';
    const tagText = stock > 20 ? 'In Stock' : stock > 0 ? 'Low Stock' : 'Out of Stock';

    const tooltipContent = (
        <div>
            <p>Product: {title}</p>
            <p>Stock: {stock}</p>
        </div>
    );

    return (
        <Tooltip title={tooltipContent}>
            <Tag color={tagColor}>{tagText}</Tag>
        </Tooltip>
    );
};

export default StockIndicator;
