import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import QuickTasksStyle from "../styles/QuickTask.module.scss";
import QuickTask from "./QuickTask";

interface IQuickTasksProps {
  showNewRow: boolean;
}
export const QuickTasksQuery = gql`
  {
    quickTasks {
      id
      description
      done
    }
  }
`;

const QuickTasks = (props: IQuickTasksProps) => {
  const { showNewRow } = props;
  console.log(showNewRow);
  const { data, error, loading } = useQuery(QuickTasksQuery);
  useEffect(() => {}, []);
  if (error) {
    return <div>UPS it is an error</div>;
  }
  if (loading) {
    return <h1>LOADINF</h1>;
  }
  const quickTasks: Record<number, any> = data.quickTasks.reduce(
    (acc: any, item: any) => {
      acc[item.id] = item;
      return acc;
    },
    {}
  );
  let currentQuickTasks = () => {
    if (showNewRow) {
      quickTasks[0] = { id: "", description: "", done: false };
    }
    return Object.keys(quickTasks).map((qt: string) => (
      <QuickTask key={qt} {...quickTasks[+qt]} />
    ));
  };
  return (
    <div className={QuickTasksStyle.quickTasksBox}>{currentQuickTasks()}</div>
  );
};

export default QuickTasks;
