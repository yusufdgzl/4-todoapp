

function AddTodo({todo,id,deleteHandler}) {



    return (
        <>
            <div className='addTodoList'>
                <p>{todo}</p>
                <button 
                onClick={()=>deleteHandler(id)}
                className='deleteButton'>x</button>
            </div>
        </>
    )



}


export default AddTodo