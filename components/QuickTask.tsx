import React, { useEffect, useState } from "react";
import QuickTaskStyles from "../styles/QuickTask.module.scss";

interface IQuickTaskProps {
  id: string;
  description: string;
  done: boolean;
}
// standart number of chars per 128px width;
const originCharsPerWidth = [14, 128];
const QuickTask = (props: IQuickTaskProps) => {
  const { id, description: d, done } = props;
  const [description, setDescription] = useState<string>("");
  const [offset, setOffset] = useState<number>(5);
  const [rows, setRows] = useState(1);
  const getRows = (width: number, length: number) => {
    const charsPerDynamicWidth =
      (originCharsPerWidth[0] * width) / originCharsPerWidth[1];
    const rows = Math.ceil(length / charsPerDynamicWidth);
    console.log(rows);
    return rows;
  };
  const resizeHeight = (e: React.FormEvent<HTMLInputElement> | {} = {}) => {
    let fullId;
    if (!Object.keys(e).length) {
      fullId = `quickTaskCheck_${id}`;
    } else {
      fullId = e.target.id as string;
    }

    let textArea = document.getElementById(fullId);
    const rows = getRows(textArea!.scrollWidth, textArea!.innerHTML.length);
    setOffset(textArea!.scrollHeight);
    setRows(rows);
    console.log(rows);
    // textArea.closest(".quickTaskRow").style.height = `${
    //   textArea.scrollHeight + 5
    // }px`;
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
        rows={rows}
        id={`quickTaskCheck_${id}`}
        value={description}
        onChange={descriptionChangeHandler}
        onInput={resizeHeight}
      ></textarea>
    </div>
  );
};

export default QuickTask;
