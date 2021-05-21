import { uniqueId } from "lodash";
import { useDispatch } from "react-redux";

const Lists = ({ tasks }) => {
  const dispatch = useDispatch();
  const onChange = (id) => {
    dispatch({
      type: "TASK-DONE",
      payload: {
        taskId: id,
      },
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE-ITEM",
      payload: {
        targetId: id,
      },
    });
  };

  return (
    <>
      {tasks.map(({ done, id, title }) => {
        return (
          <li
            key={uniqueId(id)}
            id={id}
            className="row todo-list-main p-1 w-80"
          >
            <div className="checkbox  col-10">
              <label>
                <input
                  id={id}
                  onChange={(e) => onChange(e.target.id)}
                  checked={done}
                  type="checkbox"
                  className="form-check-input "
                />
                &emsp;&emsp;
                <span
                  className="m-1"
                  style={done ? { textDecoration: "line-through" } : null}
                >
                  {title}
                </span>
              </label>
            </div>
            <div
              className="col-2 close text-center"
              id={id}
              onClick={(e) => handleRemove(e.target.id)}
            >
              x
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Lists;
