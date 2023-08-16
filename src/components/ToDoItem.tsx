import { Button, Flex, Input, ListItem } from "@chakra-ui/react";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { TodoType, todoContext } from "../context/theme";

interface ToDoItemProps {
    index: number
    todo: string
    isDone: boolean
}

export const ToDoItem: FC<ToDoItemProps> = ({ index, todo, isDone }) => {

    const [todoState, setTodoState] = useState<TodoType>({index:index, todo: todo, isDone: isDone })
    const { updateTodo, removeTodo } = useContext(todoContext)
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleTodoChange = () => {
        if (inputRef.current) {
            
            setTodoState(prev => ({
                isDone: prev.isDone,
                todo: inputRef.current!.value,
                index: prev.index
            }))
        }
    }

    const handleIsDoneChange = () => {
        setTodoState(prev => ({
            isDone: !prev.isDone,
            todo: prev.todo,
            index: prev.index
        }))
    }

    const handleRemove = () => {
        removeTodo(index)
    }

    useEffect(() => {
        updateTodo(index, todoState)
    }, [todoState])

    return (
        <ListItem marginBottom={5}>
            <Flex>
                <Input value={todoState.todo} onInput={handleTodoChange} ref={inputRef} />
                <Button onClick={handleIsDoneChange}>{todoState.isDone ? "完了" : "未完了"}</Button>
                <Button onClick={handleRemove} colorScheme="red">削除</Button>
            </Flex>
        </ListItem>
    )
}