import './TaskComponent.scss'
import edit from '../../assets/edit.svg'
import del from '../../assets/del.svg'
import more from '../../assets/more.svg'
import checked from '../../assets/checked.svg'
import { Link } from 'react-router-dom'




const TaskComponent = ({ data }) => {
    return (
        <section className="Task">
            <div className="task__container">
                <div className="task__container--header">
                    <p>Tarefas</p>
                    <p>Status</p>
                    <p>Opções</p>
                </div>
                <hr></hr>

                {/* COMPONENTIZAR ISSO ???? */}

                {data.map((task) => (

                    <div className="task__container--item">
                        <p>{task.title}</p>

                        {/* NA HORA DE CLICAR NO CHECKBOX, TEM QUE TROCAR PARA A IMAGEM */}

                        {/* <img className="container--item--checked" src={checked} alt="Feito" /> */}
                        <input type="checkbox" id="myCheckbox" />
                        <label for="myCheckbox"></label>

                        <div>
                            <Link to="/edit"><img src={edit} alt="Editar" /></Link>
                            <Link to="/delete"><img src={del} alt="Deletar" /></Link>
                        </div>
                    </div>
                ))}

                <div className="task__container--new">
                    <input type="text" placeholder='Nova tarefa...' />
                    <img src={more} alt="Mais" />
                </div>
            </div>
        </section>
    )
}

export default TaskComponent