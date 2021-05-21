import { useDispatch } from "react-redux";
import { uniqueId } from "lodash";

const Button = ({ value }) => {
  const dispatch = useDispatch();
  const handleEnter = (value) => {
    dispatch({
      type: "ADD-TODO",
      payload: {
        done: false,
        id: uniqueId(value),
        title: value,
      },
    });
    dispatch({
      type: "CLEAN-INPUT",
    });
  };

  return (
    <>
      <button onClick={() => handleEnter(value)} className="task-button mb-1">
        Add
      </button>
    </>
  );
};
export default Button;
