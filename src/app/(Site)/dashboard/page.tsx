import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel",
  description: "Site para Estudar funcionalidades do Next",
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  openGraph: {
    images: ['https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png', 'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2024/07/11/shreak_5.png'],

  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true, 
      follow: true,
      noimageindex: true,
    }
  }
};

export default function Dashboard(){
    return(
        <div>
            <h1>Pagina painel</h1>
            <span>Bem Vindo</span>
            <br/>
        </div>
    )
}