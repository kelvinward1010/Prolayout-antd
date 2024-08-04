import { ButtonType } from "antd/es/button";
import Button, { BaseButtonProps } from "antd/es/button/button";

interface ButtonProps extends Omit<BaseButtonProps, "type"> {
    type?: ButtonType;
    props?: any;
    lable?: any | React.Component;
    onClick?: () => void;
    htmlType?: any;
    children?: React.ReactNode;
    disabled?: boolean;
}

export const ButtonConfig: React.FC<ButtonProps> = ({
    props,
    type,
    lable,
    loading,
    styles,
    size,
    className,
    onClick,
    htmlType,
    danger,
    children,
    icon,
    iconPosition,
    disabled,
}) => {
    return (
        <Button
            disabled={disabled}
            icon={icon}
            iconPosition={iconPosition}
            danger={danger}
            htmlType={htmlType}
            onClick={onClick}
            className={className}
            styles={styles}
            size={size}
            loading={loading}
            {...props}
            type={type}
        >
            {lable}
            {children}
        </Button>
    );
};
