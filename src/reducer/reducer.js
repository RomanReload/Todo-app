const initialState = {
    todoTasks: [],
    inputValue: "",
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TODO":
            {
                const { inputValue } = state;
                if (!inputValue) {
                    return state;
                }
                const currentTask = action.payload;
                return {
                    ...state,
                    todoTasks: [...state.todoTasks, currentTask],
                };
            }
        case "INPUT-VALUE":
            {
                const { inputValue } = action.payload;
                state.inputValue = inputValue;
                return state;
            }
        case "TASK-DONE":
            {
                const { taskId } = action.payload;
                const { todoTasks } = state;

                const newTodoTasks = todoTasks.map((item) => {
                    if (item.id === taskId) {
                        item.done = !item.done;
                        return item;
                    }
                    return item;
                });

                return {...state, todoTasks: newTodoTasks };
            }
        case "CLEAN-INPUT":
            {
                let { inputValue } = state;
                inputValue = "";

                return {...state, inputValue: inputValue };
            }
        case "REMOVE-ITEM":
            {
                const { targetId } = action.payload;
                const { todoTasks } = state;
                const filteredTodos = todoTasks.filter(({ id }) => id !== targetId);
                return {...state, todoTasks: filteredTodos };
            }
        default:
            return state;
    }
};

export default todoReducer;