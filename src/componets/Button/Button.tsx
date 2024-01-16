import clsx from "clsx";
import React, {FC, ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    view?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({children, view = null, onClick}) => (
    <button
        className={clsx("btn", view)}
        onClick={onClick}
    >
        {children}
    </button>
);


export default Button;
