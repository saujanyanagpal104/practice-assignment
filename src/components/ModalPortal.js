import {createPortal} from 'react-dom';

const ModalPortal = (props) => {
    const modalRoot = document.getElementById('modal-root');
    return createPortal(props.children, modalRoot);
}

export default ModalPortal;