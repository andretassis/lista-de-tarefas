// import Delete from '../components/Delete/Delete.jsx'
// import Edit from '../components/Edit/Edit.jsx'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import "./Tasks.scss"
import TaskComponent from '../components/TaskComponent/TaskComponent.jsx'

const Tasks = () => {
    return (
        <>
            <Header />
            <section className="Tasks">Otimize seu tempo e se organize com o nosso Planejador Diário.</section>
            <TaskComponent />
            <Outlet />
        </>
    )
}

export default Tasks