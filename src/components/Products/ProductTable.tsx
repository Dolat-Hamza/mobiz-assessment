// components/ProductTable.tsx
import {Avatar, Card, Input, Select, Space, Table} from 'antd';
import StockIndicator from "@/components/Products/StockIndicator";
import PriceDisplay from "@/components/Products/PriceDisplay";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {SearchOutlined} from "@ant-design/icons";
import {Product} from "@/utils/Interfaces";
interface Props {
    products: Product[]; // Use the Product interface from earlier
}

const ProductTable: React.FC<Props> = ({ products }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleSearch = (value: string) => {
        setSearchText(value);
    };

    const handleCategoryChange = (value: string | null) => {
        setSelectedCategory(value);
    };

    useEffect(() => {
        const filtered = products.filter((product) => {
            const matchesSearch = product.title.toLowerCase().includes(searchText.toLowerCase());
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        setFilteredProducts(filtered);
    }, [searchText, selectedCategory, products]);

    const columns = [
        {
            title: 'Product Image',
            dataIndex: 'thumbnail', // Use 'thumbnail' here for the image URL
            key: 'thumbnail',
            render: (thumbnail: string) => (
                <Avatar
                    src={thumbnail}
                    alt="Product Image"
                   size={50}
                    shape={"square"}
                />
            ),
        },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number, record: Product) => <PriceDisplay price={record.price}/>
        },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        { title: 'Brand', dataIndex: 'brand', key: 'brand' },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
            render: (stock: number, record: Product) => <StockIndicator product={record} />
        },
        {
            title: 'Units Left',
            dataIndex: 'stock',
            key: 'stock',
            render: (stock: number) => <span>{stock} left</span>
        },
    ];

    return (
        <Card rootClassName={"capitalize"} title="Products Table" style={{ width: '100%' }}>
            <Space direction="horizontal" style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Search by title"
                    prefix={<SearchOutlined />}
                    onChange={(e) => handleSearch(e.target.value)}
                    allowClear
                />
                <Select
                    placeholder="Filter by category"
                    onChange={handleCategoryChange}
                    allowClear
                    style={{ width: 200 }}
                >
                    {[...new Set(products.map(product => product.category))].map((category) => (
                        <Option key={category} value={category}>{category}</Option>
                    ))}
                </Select>
            </Space>
            <Table
                columns={columns}
                dataSource={filteredProducts}
                pagination={{ pageSize: 10 }}
                scroll={{ x: 1200 }}
            />
        </Card>    );
};

export default ProductTable;
