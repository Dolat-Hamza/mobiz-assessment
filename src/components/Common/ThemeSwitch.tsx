// components/ThemeSwitch.tsx
import { Switch, Tooltip } from 'antd';
import { BulbOutlined, BulbFilled } from "@ant-design/icons"
import {useTheme} from "@/context/ThemeContext";


const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Tooltip title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
            <Switch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                checkedChildren={<BulbFilled />}
                unCheckedChildren={<BulbOutlined />}
            />
        </Tooltip>
    );
};

export default ThemeSwitch;
