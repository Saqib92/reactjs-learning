import { FaTimesCircle } from "react-icons/fa";

const ShowTask = ({ data, onDelete, onToggle}) => {
    return (
        <div className={`task ${data.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(data.id)}>
            <h3>Name: {data.title}
                <FaTimesCircle style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(data.id)} />
            </h3>
            <div>Des: {data.description}</div>
            <p>Date: {data.day} </p>
        </div>
    )
}

export default ShowTask;