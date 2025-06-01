import Image from "next/image";
import styles from "./page.module.css";
import {useState} from 'react';

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

async function getData() {
  //https://api.github.com/users/MahmoudFGhazal/repos
  const response = await fetch("https://api.github.com/users/MahmoudFGhazal/repos");

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
        <div key={item.id}>
          <strong>Repositorio:</strong><a> {item.name}</a>
          <br/>
        </div>
      ))}
    </main>
  );
}
