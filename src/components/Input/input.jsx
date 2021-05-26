import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uniqueId } from "lodash";
import Button from "./button";
import "./style/input.css";

const dispatchToProps = (dispatch) => {
  return {
    dispatchValue: (value) =>
      dispatch({
        type: "INPUT-VALUE",
        payload: {
          inputValue: value,
        },
      }),
  };
};

const Input = (props) => {
  const dispatch = useDispatch();
  const { dispatchValue } = props;
  const valueFromRedux = useSelector(({ inputValue }) => inputValue);
  const handleEnter = (value) => {
    dispatch({
      type: "ADD-TODO",
      payload: {
        done: false,
        id: uniqueId(value),
        title: value,
      },
    });
    dispatch({ type: "CLEAN-INPUT" });
  };
  const onChangeInp = (value) => {
    dispatchValue(value);
  };
  return (
    <div className="row position-relative m-2">
      <div className="col-8">
        <div className="form__group field m-1">
          <input
            type="input"
            autoComplete="off"
            maxLength="20"
            onKeyPress={(e) =>
              e.key === "Enter" ? handleEnter(e.target.value) : null
            }
            className="form__field"
            placeholder="Add new task"
            name="Add-new-task"
            value={valueFromRedux}
            onChange={(e) => onChangeInp(e.target.value)}
            id="Add-new-task"
            required
          />
          <label htmlFor="Add-new-task" className="form__label">
            Add new task
          </label>
        </div>
      </div>
      <div className="col-4 text-center mt-2">
        <Button value={valueFromRedux} />
      </div>
    </div>
  );
};

export default connect(null, dispatchToProps)(Input);
