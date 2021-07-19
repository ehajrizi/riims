import "semantic-ui-css/semantic.min.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import cx from 'classnames';
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { observer } from "mobx-react";
import UsersTable from "../UsersTable";


export default observer( function Main2()
{
    const [toggle, setToggle] = useState(false);
    const {userStore} = useStore();
   const {loadUsers,userRegistry} = userStore;


  useEffect(() =>{
    if(userRegistry.size <= 1) loadUsers();
  }, [userRegistry.size, loadUsers])

  if(userStore.loadingInitial) return <LoadingComponent content='Loading app'/>

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
                        <UsersTable/>
                    </div>
                </div>
            </div>
        </>
        )
})