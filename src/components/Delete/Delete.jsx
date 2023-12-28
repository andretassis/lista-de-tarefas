import Button from '../Button/Button.jsx'
import './Delete.scss'

const Delete = () => {
    return (
        <section className="Delete">
            <div className="delete__container">
                <h2>Deseja excluir esse item?</h2>
                <p>Colocar as descrições das tarefas aqui.</p>

                <Button />
            </div>
        </section>
    )
}

export default Delete