import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import useDebounce from "src/hooks/useDebounce";
import styled from "styled-components";
import NewCheckbox from "./NewCheckbox";
import { QuickTasksQuery } from "./QuickTasks";

const QuickTaskContainer = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: ${(props) => `${props.height}px`};
`;

const Textarea = styled.textarea<{ done: boolean; height: number }>`
  position: absolute;
  top: 0;
  left: 25px;
  right: 0;
  font-family: "PT Serif", serif;
  border: none;
  outline: 0;
  margin-left: 0.2rem;
  width: 80%;
  resize: none;
  overflow: hidden;
  word-break: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  -ms-word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  height: ${(props) => `${props.height}px`};
`;

interface IQuickTaskProps {
  id: string;
  description: string;
  done: boolean;
}
const CREATE_QUICK_TASK = gql`
  mutation createOneQuickTask($data: QuickTaskCreateInput!) {
    createOneQuickTask(data: $data) {
      id
      description
      done
    }
  }
`;

const UPDATE_QUICK_TASK = gql`
  mutation updateOneQuickTask(
    $data: QuickTaskUpdateInput!
    $where: QuickTaskWhereUniqueInput!
  ) {
    updateOneQuickTask(data: $data, where: $where) {
      id
      description
      done
    }
  }
`;

const QuickTask = (props: Partial<IQuickTaskProps>) => {
  const { id, description: _description, done } = props;
  const [description, setDescription] = useState<string>("");
  const [offset, setOffset] = useState<number>(5);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const debouncedValue = useDebounce<string>(description, 1000);
  const resizeHeight = (e: React.FormEvent<HTMLInputElement> | {} = {}) => {
    let fullId;
    if (!Object.keys(e).length) {
      fullId = `quickTaskCheck_${id}`;
    } else {
      fullId = (
        (e as React.FormEvent<HTMLInputElement>).target as HTMLInputElement
      ).id as string;
    }

    let textArea = document.getElementById(fullId);
    if (!textArea) return;
    setOffset(textArea!.scrollHeight);
  };

  const [
    createOneQuickTask,
    { data: dataCreated, loading: loadingCreated, error: errorCreated },
  ] = useMutation(CREATE_QUICK_TASK, {
    refetchQueries: [QuickTasksQuery, "quickTasks"],
  });
  //

  const [
    updateOneQuickTask,
    { data: dataUpdated, loading: loadingUpdated, error: errorUpdated },
  ] = useMutation(UPDATE_QUICK_TASK);

  const createQuickTask = (description: string) => {
    if (!description) return;

    createOneQuickTask({
      variables: { data: { description, done: false } },
    });
  };

  const updateQuickTask = (id: number, { description, done }: any) => {
    updateOneQuickTask({
      variables: {
        data: { description: { set: description }, done: { set: done } },
        where: { id },
      },
    });
  };

  if (errorCreated) {
    console.log(JSON.stringify(errorCreated, null, 2));
  }
  if (errorUpdated) {
    console.log(JSON.stringify(errorUpdated, null, 2));
  }

  const descriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    if (!id) return;
    updateQuickTask(+id, { description: e.target.value, done: done });
  };
  useEffect(() => {
    if (!_description) {
      textareaRef.current?.focus();
    }
    setDescription(_description ?? "");
    setTimeout(() => {
      resizeHeight();
    }, 0);
    // eslint-disable-next-line
  }, [_description]);
  useEffect(() => {
    if (!id) {
      createQuickTask(debouncedValue);
      setDescription("");
    }
    // eslint-disable-next-line
  }, [debouncedValue]);
  const setDoneHandler = () => {
    if (!id) return;
    updateQuickTask(+id, { description: _description, done: !done });
  };
  return (
    <QuickTaskContainer
      height={offset}
      // style={{ height: `${offset}px` }}
    >
      <label>
        <NewCheckbox checked={done ?? false} onClick={setDoneHandler} />
        <Textarea
          done={done ?? false}
          height={offset}
          ref={textareaRef}
          // style={{ height: `${offset}px` }}
          id={`quickTaskCheck_${id}`}
          value={description}
          onChange={descriptionChangeHandler}
          onInput={resizeHeight}
        ></Textarea>
      </label>
    </QuickTaskContainer>
  );
};

export default React.memo(QuickTask);
