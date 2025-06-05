import Image from "next/image";
import styles from "./styles/page.module.css";
import {useState} from 'react';

import { OwnerRepo } from "@/components/owner_repo";

interface DataProps{
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string
  }
}

async function delay(delay: number){
  await new Promise(resolve => setTimeout(resolve, delay));

  const url = "https://api.github.com/users/MahmoudFGhazal/repos";
  const response = await fetch(url);

  return response.json();
}

async function getData() {
  const url = "https://api.github.com/users/MahmoudFGhazal/repos";
  const response = await fetch(url, {next: { revalidate: 120}});

  return response.json();
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Home</h1>
      <span>Seja Bem-Vindo</span>
      <br/>

      <h3>Meus Repositorios</h3>
      {data.map((item) => (
        <div key={item.id} className={styles.content}>
          <strong>Repositorio:</strong><a href={item.html_url}>{item.name}</a>
          <br/>
          <OwnerRepo 
            repo={item}
          />

          <br/>
        </div>
      ))}
    </main>
  );
}
