import React, {useContext, useState} from 'react';


const AppContext = React.createContext();

function AppProvider({children}){
    const [isSidebarThere, setIsSidebarThere] = useState(false)
    const [isModalThere, setIsModalThere] = useState(false);


    const showSidebar = () => {
        setIsSidebarThere(true);
    }

    function showModal(){
        setIsModalThere(true)
    }
    const hideSidebar = () => {
        setIsSidebarThere(false);
    }

    function hideModal(){
        setIsModalThere(false)
    }

    return(<AppContext.Provider value={{
        showSidebar,
        hideSidebar,
        showModal,
        hideModal,
        isSidebarThere,
        isModalThere
    }}> {children}</AppContext.Provider>)

}

const useMyGlobalContext = () => {
    return useContext(AppContext);
}

export {useMyGlobalContext, AppProvider};
// const AppProvider = ({children}) => {
//     const [sidebarRender, setSidebarRender] = useState(false);
//     const [modalRender, setModalRender] = useState(false);

//     const showingSidebar = () => {
//         setSidebarRender(true)
//     }
//     const closingSidebar = () => {
//         setSidebarRender(false)
//     }
//     const showingModal = () => {
//         setModalRender(true)
//     }
//     const closingModal = () => {
//         setModalRender(false)
//     }
//     return <appContext.Provider 
//         value = {{
//             sidebarRender,
//             modalRender ,
//             showingModal ,
//             showingSidebar ,
//             closingSidebar,
//             closingModal,
//         }}
//     >{children}</appContext.Provider>
// }

// export {AppProvider, appContext };