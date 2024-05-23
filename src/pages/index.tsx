// pages/index.tsx

"use client";
import {useEffect, useState} from "react";
import {getProducts} from "@/utils/ApiCalls";


import {ApiResponse, ProductsResponse} from "@/utils/Interfaces";
import LoadingSpinner from "@/components/Home/LoadingSpinner";
import ErrorAlert from "@/components/Home/ErrorAlert";
import Hero from "@/components/Home/Hero";
import ProductGrid from "@/components/Home/ProductGrid";
import CallToAction from "@/components/Home/CallToAction";
import Footer from "@/components/Common/Footer";
import Layout from "@/components/Common/Layout";
import AboutUs from "@/components/Home/About";
import FeatureHighlights from "@/components/Home/FeatureHighlights";
import Pricing from "@/components/Home/Pricing";


const LandingPage: React.FC = () => {
    const [apiResponse, setApiResponse] = useState<ApiResponse<ProductsResponse>>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProducts();
            console.log("YOOO", response);
            // Check for success and extract data
            if (response.statusCode === 200 && response.data) {
                setApiResponse({
                    statusCode: 200,
                    message: "Products fetched successfully",
                    data: {
                        products: response.data.products,
                        total: response.data.total,
                        skip: response.data.skip,
                        limit: response.data.limit,
                    },
                }); // Update the state with the full ApiResponse
            } else {
                setApiResponse({
                    statusCode: response.statusCode,
                    message: response.message || "An error occurred",
                });
            }
        };

        fetchData();
    }, []);

    const products = apiResponse?.data?.products || []; // Use optional chaining for safety

    if (!apiResponse) {
        return <LoadingSpinner/>;
    }

    if (apiResponse && apiResponse.statusCode !== 200) {
        return <ErrorAlert message={apiResponse.message}/>;
    }

    return (
        <Layout>
            <div className="bg-gray-100">

                <Hero/>

                <section className="py-12">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Featured Products
                        </h2>
                        <ProductGrid products={products}/>
                    </div>
                </section>
                <Pricing/>
                <FeatureHighlights/>
                <AboutUs/>

                <CallToAction/>
                <Footer/>
            </div>
        </Layout>
    );
};

export default LandingPage;
