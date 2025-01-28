import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Error: {error?.message || "Something went wrong"}</h1>
            </main>
        </>
    )
}

export default ErrorPage;