// components/ProductReview.tsx
import {Alert, Avatar, Card, Carousel, Rate, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {getProducts} from "@/utils/ApiCalls";
import {Review} from "@/utils/Interfaces";

const {Text} = Typography;


const ProductReview: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                // Fetch reviews based on productId (Replace with your actual API call)
                const response = await getProducts();
                const data = response.data?.products;
                const allReviews = data?.flatMap((product) => product.reviews || []);
                setReviews(allReviews ? allReviews : []);
            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to fetch reviews");
            } finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const renderReviewCard = (review: Review) => (
        <Card
            key={review.id}

        >
            <div className={"w-full h-full flex flex-col gap-6 items-start justify-center "}>
                <div className={"flex items-center gap-3"}>
                    <Avatar className={"shadow-lg"}
                            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${review.userId}`}/>
                    <div>
                        {/* Placeholder for reviewer's name (replace with actual name from data) */}
                        <Text strong>{review.reviewerName}</Text>
                    </div>
                </div>
                <div className={"flex items-center gap-3"}>
                    <Rate disabled defaultValue={review.rating}/>
                    <Text type="secondary">{review.comment}</Text>
                </div>
            </div>
        </Card>
    );

    return (
        <Card title="All Product Reviews" style={{width: "100%"}}>
            {isLoading ? (
                <div>Loading reviews...</div>
            ) : error ? (
                <Alert message={error} type="error"/>
            ) : (
                <Carousel autoplay dots={{className: "custom-dots"}}>
                    {reviews.map(renderReviewCard)}
                </Carousel>
            )}
        </Card>
    );
};

export default ProductReview;
