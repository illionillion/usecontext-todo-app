import { FC, useContext } from "react";
import { todoContext } from "../context/theme";
import { List } from "@chakra-ui/react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList: FC = () => {
    const { todos } = useContext(todoContext)
    return (
        <List>
            {todos.map((item) => (
                <ToDoItem key={item.index} index={item.index} todo={item.todo} isDone={item.isDone} />
            ))}
        </List>
    )
}