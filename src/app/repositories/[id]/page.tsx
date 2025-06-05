
interface PageDetailProps{
    params:{
        id: string;
    }
}

async function getData(id: string) {
  //https://api.github.com/users/MahmoudFGhazal/repos
  const response = await fetch("https://api.github.com/users/MahmoudFGhazal/repos");

  return response.json();
}

export default async function RepositoriesId({params}: PageDetailProps){
    const data = await getData(params.id);
    
    return(
        <div>
            <h1>ID {params.id}</h1>
        </div>
    )
}