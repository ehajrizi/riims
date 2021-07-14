import NavBar from "../../../app/layout/NavBar";
import "semantic-ui-css/semantic.min.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import cx from 'classnames';
import EksperiencaForm from "../../eksperiencat/form/EksperiencaForm";
import { Route } from "react-router-dom";
import TableExampleSingleLine from "../TableExampleSingleLine";

export default function Main()
{
    const [toggle, setToggle] = useState(false);

    const classes = cx(
        'pusher', 'bottom', {'dimmed': toggle}
    )

    function toggleMenu(){
        setToggle(!toggle);
    }
      
    return(
        <>
            <div>
                <Header onToggleMenu={toggleMenu}/>
                <div className='ui attached pushable' style={{height: '100vh'}}>
                    <Sidebar toggleMenu={toggle}/>
                    <div className={classes}>
                        statistics
                        statistics
                        statistics
                        statistics
                        statistics
                    </div>
                   
                </div>
                <TableExampleSingleLine/>
            </div>
        </>
        )
}