import './TaskComponent.scss'
import edit from '../../assets/edit.svg'
import del from '../../assets/del.svg'
import more from '../../assets/more.svg'
import checked from '../../assets/checked.svg'




const TaskComponent = () => {
    return (
        <section className="Task">
            <div className="task__container">
                <div className="task__container--header">
                    <p>Tarefas</p>
                    <p>Status</p>
                    <p>Opções</p>
                </div>
                <hr></hr>
                <div className="task__container--item">
                    <p>Nome da tarefa</p>

                    {/* NA HORA DE CLICAR NO CHECKBOX, TEM QUE TROCAR PARA A IMAGEM */}

                    {/* <img className="container--item--checked" src={checked} alt="Feito" /> */}
                    <input type="checkbox" id="myCheckbox" />
                    <label for="myCheckbox"></label>

                    <div>
                        <img src={edit} alt="Editar" />
                        <img src={del} alt="Deletar" />
                    </div>
                </div>
                <div className="task__container--new">
                    <p><em>Nova tarefa...</em></p>
                    <img src={more} alt="Mais" />
                </div>
            </div>
        </section>
    )
}

export default TaskComponent