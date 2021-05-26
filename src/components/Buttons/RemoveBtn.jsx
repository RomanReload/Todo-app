import { useDispatch } from "react-redux";

const RemoveButton = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE-DONE-TASKS",
    });
  };

  const handleRemoveAll = (e) => {
    dispatch({
      type: "DELETE-ALL-TASKS",
    });
  };
  return (
    <>
      <div className="col-6 col-sm-6 text-end">
        <button className={"btn remove-button"} onClick={handleClick}>
          Remove done tasks
        </button>
      </div>
      <div className="col-12 text-center text-md-end mt-1">
        <button className={"btn remove-button bgr"} onClick={handleRemoveAll}>
          Remove All
        </button>
      </div>
    </>
  );
};
export default RemoveButton;
