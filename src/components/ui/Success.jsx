import { faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Success = () => {
    const { successOpen } = useContext(AppContext)
    return (
        <div className={`success ${successOpen && 'success-open'}`}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>Item added to cart</span>

        </div>
    );
}

export default Success;
