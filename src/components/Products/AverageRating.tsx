// components/AverageRatingCard.tsx
import { Card, Statistic, Rate, Progress } from 'antd';
import { Props } from '@/utils/Interfaces';
import React from "react";
import {calculateAverageRating} from "@/utils/ProductCalculations";

const AverageRatingCard: React.FC<Props> = ({ products }) => {
    const averageRating = calculateAverageRating(products);

    const distribution = [0, 0, 0, 0, 0];
    products.forEach(p => {
        const roundedRating = Math.round(p.rating);
        if (roundedRating >= 1 && roundedRating <= 5) {
            distribution[roundedRating - 1]++;
        }
    });

    const totalRatings = products.length;

    return (
        <Card title="Average Product Rating">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <Statistic
                    title="Average"
                    value={averageRating}
                    precision={2}
                    valueStyle={{ fontSize: 24 }}
                />
                <Rate disabled defaultValue={averageRating} style={{ marginLeft: 16, fontSize: 20 }} />
            </div>
            <div>
                {distribution.map((count, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                        <Rate disabled defaultValue={index + 1} style={{ fontSize: 16 }} />
                        <Progress
                            percent={(count / totalRatings) * 100}
                            showInfo={false}
                            strokeColor="#FFA500"
                            style={{ width: 200, marginLeft: 8 }}
                        />
                        <span style={{ marginLeft: 8 }}>{count} ratings</span>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default AverageRatingCard;
