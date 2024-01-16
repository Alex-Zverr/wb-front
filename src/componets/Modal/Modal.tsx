import {FC, ReactNode, useEffect, useRef} from 'react';

interface ModalProps {
    children: ReactNode,
    open?: boolean,
}

const Modal: FC<ModalProps> = ({children, open}) => {
    const dialog = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        return  open ? dialog.current?.showModal() : dialog.current?.close()
    }, [open])

    return (
        <dialog ref={dialog} className="modal">
            <h3 className="modal__title">Моя модалка</h3>
            <div className="modal__body">{children}</div>
        </dialog>
    )
};

export default Modal;