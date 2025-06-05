"use client"

import { useEffect } from 'react';
import Link from 'next/link';

const Error = ({error, reset}: {error: Error; reset: () => void}) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    
    return(
        <div>
            <h2>Deu o Caralho</h2>
            <div>
                <Link href="/">
                    Voltar para Home
                </Link>
            </div>
        </div>
    )
}

export default Error;