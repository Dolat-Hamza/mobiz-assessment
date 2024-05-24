import {Alert} from 'antd';

interface ErrorAlertProps {
    message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({message}) => {
    return (
        <Alert
            message="Error"
            description={message}
            type="error"
            showIcon
            className="m-4" // Add some margin for visual separation
        />
    );
};

export default ErrorAlert;
