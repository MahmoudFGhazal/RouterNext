"use client"
import { useState, useEffect } from "react"

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

export default function Repositories(){
    const [repos, setRepos] = useState<DataProps[]>([]);
    
    useEffect(() => {
        function getData() {
            //https://api.github.com/users/MahmoudFGhazal/repos
            fetch("https://api.github.com/users/MahmoudFGhazal/repos")
            .then(response => response.json())
            .then((data: DataProps[]) => {
                setRepos(data);
                console.log("Repos:" + repos);
                console.log(data);
            });
        }

        getData();
    }, []);

    return(
        <div>
            <h1>Repositorios</h1>

            <h3>Meus Repositorios</h3>
            {repos.map((item) => (
                <div key={item.id}>
                <strong>Repositorio:</strong><a> {item.name}</a>
                <br/>
                </div>
            ))}
        </div>
    )
}