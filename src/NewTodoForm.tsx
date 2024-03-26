import { useState } from "react";

type NewTodoFormProps = {
    onSubmit: (title: string) => void;
}

function NewTodoForm({ onSubmit: addTodo }: NewTodoFormProps) {

    const [newItem, setNewItem] = useState<string>('Jaeson');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit', newItem);
        //Check if newItem is empty string or not
        if (!newItem.trim()) {
            return;
        }

        addTodo(newItem);

        setNewItem('');
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className="form-row">

                <label htmlFor="item">New item:</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />

            </div>

            <button className="btn">Add</button>
        </form>
    )

}

export default NewTodoForm;