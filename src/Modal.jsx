import { createPortal } from "react-dom";

const Modal ({children}) => {
    const elRef = userRef(null);
    if (!elRef.current) {
        elref.current = document.createElement('div');
    }

    useInsertionEffect(()=>{
        const modalRoot = document.getElementById("Modal")
        modalRoot.appendChild(elRef.current)
    return () => modalRoot.removeChild(elRef.current)
    },[])
    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;