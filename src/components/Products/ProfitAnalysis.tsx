// components/ProfitAnalysis.tsx
import React from "react";
import {Card, Table, Statistic} from "antd";
import {Product, Props} from "@/utils/Interfaces";
import PriceDisplay from "@/components/Products/PriceDisplay";

const ProfitAnalysis: React.FC<Props> = ({products}) => {
    // Assuming you have a cost property in your product data

    const totalProfit = products.reduce(
        (sum, p) => sum + (p.price - p.price * p.discountPercentage / 100),
        0
    );

    const columns = [
        {title: "Product", dataIndex: "title", key: "title"},
        {
            title: "Profit",
            dataIndex: "price",
            key: "price",
            render: (price: number, record: Product) => <PriceDisplay
                price={price - price * record.discountPercentage / 100}/>
        },
        // ... Add other relevant columns
    ];

    return (
        <Card title="Profit Analysis" rootClassName={"w-full h-full overflow-y-scroll"}>
            <Statistic title="Total Profit" value={totalProfit.toFixed(2)} prefix="$"/>
            <Table pagination={{
                pageSize: 3,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`

            }} columns={columns} dataSource={products}/>
        </Card>
    );
};

export default ProfitAnalysis;
