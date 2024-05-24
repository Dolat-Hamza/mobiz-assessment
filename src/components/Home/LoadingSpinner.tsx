import React from "react";
import {Spin} from "antd";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Spin size="large" tip="Loading..."/>
        </div>
    );
};

export default LoadingSpinner;

