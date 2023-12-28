import Edit from '../components/Edit/Edit.jsx'
import Header from '../components/Header/Header.jsx'
import "./Tasks.scss"

const Tasks = () => {
    return (
        <>
            <Header />
            <section className="Tasks">Otimize seu tempo e se organize com o nosso Planejador Diário.</section>
            <Edit />
        </>
    )
}

export default Tasks