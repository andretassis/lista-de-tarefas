import Button from '../Button/Button.jsx'
import './Edit.scss'

const Edit = () => {
    return (
        <section className="Edit">
            <div className="edit__container">
                <h2>Deseja editar esse item?</h2>
                <p>Colocar as descrições das tarefas aqui.</p>

                <Button />
            </div>
        </section>
    )
}

export default Edit