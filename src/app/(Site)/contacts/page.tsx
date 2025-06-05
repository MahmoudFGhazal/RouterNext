import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos",
  description: "Entre em contato",
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

export default function Contacts(){
    return(
        <div>
            <h1>Contatos</h1>
            <span>(xx) xxxxx-xxxx</span>
        </div>
    )
}