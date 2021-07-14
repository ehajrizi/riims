import NavBar from "../../../app/layout/NavBar";
import "semantic-ui-css/semantic.min.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import cx from 'classnames';
import EksperiencaForm from "../../eksperiencat/form/EksperiencaForm";
import { Route } from "react-router-dom";

export default function Main2()
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
                        users
                    </div>
                </div>
            </div>
        </>
        )
}