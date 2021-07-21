import NavBar from "../../app/layout/NavBar";
import "semantic-ui-css/semantic.min.css";
import UsersTable from "./UsersTable";

export default function AdminDashboard()
{
    return(
        <>
            <div>
                <NavBar/>
                <UsersTable/>
            </div>
        </>
    )
}