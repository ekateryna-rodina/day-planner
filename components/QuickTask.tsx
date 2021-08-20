import React, { useEffect, useState } from "react";
import QuickTaskStyles from "../styles/QuickTask.module.scss";

interface IQuickTaskProps {
  id: string;
  description: string;
  done: boolean;
}
// standart number of chars per 128px width;
const originCharsPerWidth = [20, 128];
const QuickTask = (props: IQuickTaskProps) => {
  const { id, description: d, done } = props;
  const [description, setDescription] = useState<string>("");
  const [offset, setOffset] = useState<number>(5);

  const resizeHeight = (e: React.FormEvent<HTMLInputElement> | {} = {}) => {
    let fullId;
    if (!Object.keys(e).length) {
      fullId = `quickTaskCheck_${id}`;
    } else {
      fullId = e.target.id as string;
    }

    let textArea = document.getElementById(fullId);

    setOffset(textArea!.scrollHeight);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  useEffect(() => {
    setDescription(d);
    setTimeout(() => {
      resizeHeight();
    }, 0);
    // eslint-disable-next-line
  }, [d]);
  return (
    <div
      className={QuickTaskStyles.quickTaskRow}
      style={{ height: `${offset}px` }}
    >
      <input type="checkbox" />
      <textarea
        className={QuickTaskStyles.quickTaskTextInput}
        style={{ height: `${offset}px` }}
        id={`quickTaskCheck_${id}`}
        value={description}
        onChange={descriptionChangeHandler}
        onInput={resizeHeight}
      ></textarea>
    </div>
  );
};

export default QuickTask;
