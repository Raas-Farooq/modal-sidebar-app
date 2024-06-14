import React, {useContext, useState} from 'react';

const appContext = React.createContext();

const AppProvider = ({children}) => {
    const [sidebarRender, setSidebarRender] = useState(false);
    const [modalRender, setModalRender] = useState(false);

    const showingSidebar = () => {
        setSidebarRender(true)
    }
    const closingSidebar = () => {
        setSidebarRender(false)
    }
    const showingModal = () => {
        setModalRender(true)
    }
    const closingModal = () => {
        setModalRender(false)
    }
    return <appContext.Provider 
        value = {{
            sidebarRender,
            modalRender ,
            showingModal ,
            showingSidebar ,
            closingSidebar,
            closingModal,
        }}
    >{children}</appContext.Provider>
}

export {AppProvider, appContext };