

const Tasks = ({tasks}) => {

    return (
        <>
            {
                tasks.map((val, i) => (
                    <p key={i}>{val.title}</p>
                ))
            }
        </>
    )
}

export default Tasks
