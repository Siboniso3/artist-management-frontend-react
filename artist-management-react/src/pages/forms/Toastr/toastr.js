import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';

function Toaster() {


    return (
        <>
            {[
                // 'Primary',
                // 'Secondary',
                // 'Success',
                // 'Danger',
                'Warning',
                // 'Info',
                // 'Light',
                // 'Dark',
            ].map((variant, idx) => (
                <Toast
                    className="d-inline-block m-1"
                    bg={variant.toLowerCase()}
                    key={idx}
                >
                    <Toast.Header>
                        {/* <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        /> */}
                    </Toast.Header>
                    <Toast.Body className={variant === 'Dark' && 'text-white'}>
                        Please ensure the username and password are correct!, try again
                        <br /><span><p style={{ color: 'blue' }}> username and password are sbo</p></span>
                    </Toast.Body>
                </Toast>
            ))}
        </>
    );
}
export default Toaster;