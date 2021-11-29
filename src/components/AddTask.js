import { useState } from "react";

const AddTask = ({ addNewTask }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const submitTask = (e) => {
        e.preventDefault();
        if (!title) {
            alert('Please Enter Title')
            return;
        }

        if (!description) {
            alert('Please Enter Description')
            return;
        }

        if (!day) {
            alert('Please Enter Day')
            return;
        }

        addNewTask({ title, description, day, reminder });

        setTitle('');
        setDescription('');
        setDay('');
        setReminder(false);

    }

    return (
        <form className="add-form" onSubmit={submitTask}>
            <div className="form-control">
                <label>Task Name</label>
                <input type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Description</label>
                <input type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Day</label>
                <input type='date'
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>


            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save" className="btn btn-block" />
        </form>
    )
}

export default AddTask
