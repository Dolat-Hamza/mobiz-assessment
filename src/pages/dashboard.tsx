import Layout from "@/components/Common/Layout";
import {getProducts} from "@/utils/ApiCalls";
import {useEffect, useState} from "react";
import {calculateAverageRating, countProductsByCategory} from "@/utils/ProductCalculations";
import {ApiResponse, ProductsResponse} from "@/utils/Interfaces";
import AverageRatingCard from "@/components/Products/AverageRating";
import {Card, Col, Row} from "antd";
import ProductTable from "@/components/Products/ProductTable";
import ProductCategoryChart from "@/components/Products/ProductCategoryChart";
import PriceDistributionChart from "@/components/Products/PriceDistributionChart";
import TopSellingProducts from "@/components/Products/TopSellingProducts";
import BrandPopularityChart from "@/components/Products/BrandPopularityChart";
import StockLevelGauge from "@/components/Products/StockLevelGauge";
import ProfitAnalysis from "@/components/Products/ProfitAnalysis";
import SalesForecast from "@/components/Products/SalesForecast";
import {motion} from "framer-motion";
import LoadingSpinner from "@/components/Home/LoadingSpinner";
import Review from "@/components/Products/Review";

const Dashboard = () => {
    const [apiResponse, setApiResponse] = useState<ApiResponse<ProductsResponse>>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProducts();
            // Check for success and extract data
            if (response.statusCode === 200 && response.data) {
                setApiResponse(
                    {
                        statusCode: 200,
                        message: "Products fetched successfully",
                        data: {
                            products: response.data.products,
                            total: response.data.total,
                            skip: response.data.skip,
                            limit: response.data.limit
                        }
                    }
                ); // Update the state with the full ApiResponse
            } else {
                setApiResponse({
                    statusCode: response.statusCode,
                    message: response.message || "An error occurred",
                });
            }
        };

        fetchData();
    }, []);

    // Access product data like this:
    const products = apiResponse?.data?.products || []; // Use optional chaining for safety

    if (!apiResponse || !apiResponse?.data?.products) {
        return (
            <LoadingSpinner/>
        )
    }


    const averageRating = calculateAverageRating(products);
    const productCountsByCategory = countProductsByCategory(products);

    return (
        <Layout>
            <div className="p-6 flex flex-col items-center justify-center gap-6 w-full  bg-gray-200"> {/* Add padding to the content */}
                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0, transition: {duration: 0.8}}}
                    className="text-3xl font-bold mb-4 text-center"
                >
                    Dashboard
                </motion.h1>

                <Row className={"w-full h-full"} gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="shadow-md">
                            <AverageRatingCard products={products}/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="shadow-md">
                            <StockLevelGauge products={products}/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="shadow-md">
                            <Review/>
                        </Card>
                    </Col>

                </Row>

                <Row className={"w-full"} gutter={[16, 16]} >
                    <Col xs={24} md={12}>
                        <Card className="shadow-md">
                            <ProductCategoryChart productCountsByCategory={productCountsByCategory}/>
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card className="shadow-md">
                            <PriceDistributionChart products={products}/>
                        </Card>
                    </Col>
                </Row>
                <Row className={"w-full h-full "} gutter={[16, 16]} >
                    <Col xs={24} sm={24} md={12}>
                        <Card className="shadow-md">
                            <SalesForecast products={products}/>
                        </Card>

                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Card  className="shadow-md h-full">
                            <ProfitAnalysis products={products}/>
                        </Card>
                    </Col>

                </Row>

                <Row className={"w-full"} gutter={[16, 16]} >
                    <Col xs={24} md={12}>
                        <Card className="shadow-md">
                            <TopSellingProducts products={products}/>
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card className="shadow-md">
                            <BrandPopularityChart products={products}/>
                        </Card>
                    </Col>
                </Row>

                <Row className={"w-full"} >
                    <Col span={24}>
                        <Card className="shadow-md">
                            <ProductTable products={products}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};
export default Dashboard