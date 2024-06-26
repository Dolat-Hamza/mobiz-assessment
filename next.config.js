/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack: (config) => {
        /**
         * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
         * Module parse failed: Unexpected character '�' (1:0)" error
         */
        config.resolve.alias.canvas = false;

        // You may not need this, it's just to support moduleResolution: 'node16'
        config.resolve.extensionAlias = {
            '.js': ['.js', '.ts', '.tsx'],
        };

        return config;
    },
    reactStrictMode: true,
    transpilePackages: [
        "antd",
        "@ant-design/plots",
        "@ant-design/icons",
        "@ant-design/icons-svg",
        "rc-pagination",
        "rc-picker",
        "rc-table",
        "rc-util",
        "rc-tree",
        "rc-tooltip"
    ], images: {
        domains: ["cdn.dummyjson.com"]
    }
}

module.exports = nextConfig
