'use client'

import { useState } from 'react';
import Image from 'next/image';

import styles from './owner_repo.module.css';

interface DataProps{
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string
  }
}

export function OwnerRepo({repo}: {repo:DataProps}){
    const [show, setShow] = useState(false);
    
    return(
        <div className={styles.container}>
            <button onClick={() => setShow(!show)} className={styles.button}>
                <p>{show ? "Ocultar" : "Mostrar"}</p>
            </button>

            {show && (
                <>
                    <Image 
                        src={repo.owner.avatar_url}
                        alt="Foto do avatar"
                        width={34}
                        height={34}
                        style={{borderRadius: 8}}
                    />
                    <strong className={styles.name}>{repo.name}</strong>
                </>
            )}
        </div>
    );
}