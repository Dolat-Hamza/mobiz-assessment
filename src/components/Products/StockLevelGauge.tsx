// components/StockLevelGauge.tsx
import { Progress, Card, Statistic } from 'antd';
import { Props } from '@/utils/Interfaces';

const StockLevelGauge: React.FC<Props> = ({ products }) => {
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const maxStock = products.length * 100; // Assume max stock per product is 100
    const percent = Math.round((totalStock / maxStock) * 100);

    // Additional Stock Information
    const lowStockProducts = products.filter(p => p.stock < 10).length; // Customizable threshold
    const outOfStockProducts = products.filter(p => p.stock === 0).length;

    return (
        <Card title="Overall Stock Level" style={{ width: '100%' }}>
            <Progress percent={percent} showInfo={true} status={percent < 30 ? 'exception' : 'success'} />

            <div style={{ marginTop: '16px' }}>
                <Statistic title="Total Stock" value={totalStock} />
                <Statistic
                    title="Low Stock Products"
                    value={lowStockProducts}
                    valueStyle={{ color: lowStockProducts > 0 ? 'orange' : 'inherit' }}
                />
                <Statistic
                    title="Out of Stock Products"
                    value={outOfStockProducts}
                    valueStyle={{ color: outOfStockProducts > 0 ? 'red' : 'inherit' }}
                />
            </div>
        </Card>
    );
};

export default StockLevelGauge;
