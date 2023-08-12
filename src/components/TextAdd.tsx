import { Box, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FC, FormEvent, useContext, useState } from "react";
import { todoContext } from "../context/theme";

export const TextAdd: FC = () => {

    const [todo, setTodo] = useState<string>("")
    const {currentIndex, addTodo } = useContext(todoContext)

    const handleTodoChange = (e: FormEvent<HTMLInputElement>) => {
        setTodo(e.currentTarget.value)
    }

    const handleAdd = () => {
        if(todo === "") return
        // ここでContext更新
        addTodo({
            isDone: false,
            todo: todo,
            index: currentIndex
        })
        setTodo("")
    }

    return (
        <Box>
            <InputGroup>
                <Input value={todo} onInput={handleTodoChange} />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleAdd}>
                        Add
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}