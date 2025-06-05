import { title } from "process";


export const metada ={
    title: "painel",
    description: "Esse são os paineis",
}

export default function DashboardLayout({
    children,
}: {children: React.ReactNode}){
    return(
        <>
            <h3>Header Dash</h3>
            <br/>
            {children}
        </>
    );
}