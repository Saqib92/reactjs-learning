import ShowTask from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {
                tasks.map((val, i) => (
                    <ShowTask data={val} key={i} lol={val.id} onDelete={onDelete} onToggle={onToggle}/>
                ))
            }
        </>
    )
}

export default Tasks
