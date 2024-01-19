import React from "react";
import {createPortal} from "react-dom";
import { AnimatePresence, motion} from "framer-motion";
import style from './style.module.css'
import clsx from "clsx";

interface ModalProps {
    isVisible: boolean,
    children: React.ReactNode,
    className?: string,
    overlayClassName?: string,
    onClose: () => void;
}

const Modal = ({isVisible, children, className, overlayClassName, onClose}: ModalProps) => {

    return createPortal(
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={clsx(style.overlay, overlayClassName)}
                    onClick={() => onClose()}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.2 }
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.div
                        className={style.modalPosition}
                        initial={{
                            opacity: 0,
                            y: -60,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.2 }
                        }}
                        exit={{
                            opacity: 0,
                            y: 60,
                        }}
                    >
                        <motion.div className={style.modalContainer}>
                            <div
                                className={clsx(style.modal, className)}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {children}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;