import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { uniqueId } from "lodash";

const RandomTask = () => {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(false);
  const [randomTask, setRandomTask] = useState("");

  useEffect(() => {
    async function fetchData() {
      const URL = "https://www.boredapi.com/api/activity";
      const resonse = await fetch(URL);
      const task = await resonse.json();
      const { activity } = task;
      setRandomTask(activity);
      setSendRequest(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (sendRequest) {
        const URL = "https://www.boredapi.com/api/activity";
        const resonse = await fetch(URL);
        const task = await resonse.json();
        const { activity } = task;

        setRandomTask(activity);
        setSendRequest(false);
      }
    }
    fetchData();
  }, [sendRequest]);

  const hanldeClick = (e) => {
    dispatch({
      type: "RANDOM-TASK",
      payload: {
        done: false,
        id: uniqueId(randomTask),
        title: randomTask,
      },
    });
    e.preventDefault();
    setSendRequest(true);
    console.log(sendRequest);
  };

  return (
    <>
      <div className="col-4 col-sm-6 text-start">
        <button className="btn random-button" onClick={hanldeClick}>
          Random Task
        </button>
      </div>
    </>
  );
};

export default RandomTask;
