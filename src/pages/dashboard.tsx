import Layout from "@/components/Common/Layout";
import DashboardLayout from "@/components/Products/DashboardLayout";
import {getProducts} from "@/utils/ApiCalls";
import {useEffect, useState} from "react";
import {calculateAverageRating, countProductsByCategory} from "@/utils/ProductCalculations";
import {ApiResponse, ProductsResponse} from "@/utils/Interfaces";
import AverageRatingCard from "@/components/Products/AverageRating";
import {Col} from "antd";
import ProductTable from "@/components/Products/ProductTable";
import ProductCategoryChart from "@/components/Products/ProductCategoryChart";
import PriceDistributionChart from "@/components/Products/PriceDistributionChart";
import TopSellingProducts from "@/components/Products/TopSellingProducts";
import BrandPopularityChart from "@/components/Products/BrandPopularityChart";
import StockLevelGauge from "@/components/Products/StockLevelGauge";
import StockIndicator from "@/components/Products/StockIndicator";
import PriceDisplay from "@/components/Products/PriceDisplay";

const Dashboard = () => {
    const [apiResponse, setApiResponse] = useState<ApiResponse<ProductsResponse>>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProducts();
            console.log("YOOO",response)
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
            <div>
                {apiResponse?.message || "Loading products..."}
            </div>
        )
    }
    const averageRating = calculateAverageRating(products);
    const productCountsByCategory = countProductsByCategory(products);
    console.log(productCountsByCategory)

    return (
        <Layout>
            <DashboardLayout>
                {/*<div>Yolo</div>*/}
                <Col span={8}><AverageRatingCard products={products} /></Col>
                <Col span={12}><ProductCategoryChart productCountsByCategory={productCountsByCategory} /></Col>
                <Col span={12}><PriceDistributionChart products={products} /></Col>
                <Col span={24}><ProductTable products={products} /></Col>
                <Col span={24}><TopSellingProducts products={products}/></Col>
                <Col span={24}><BrandPopularityChart products={products}/></Col>
                <Col span={6}><StockLevelGauge products={products}/></Col>
                {/*<Col span={6}><StockIndicator product={products}/></Col>*/}




            </DashboardLayout>
        </Layout>
    );
};
export default Dashboard