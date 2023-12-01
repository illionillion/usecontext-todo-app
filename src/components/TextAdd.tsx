import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, CloseButton, Input, InputGroup, InputRightElement, useDisclosure } from "@chakra-ui/react";
import { FC, FormEvent, useContext, useRef, useState } from "react";
import { todoContext } from "../context/theme";

export const TextAdd: FC = () => {

    const [todo, setTodo] = useState<string>("")
    const { currentIndex, todos, addTodo, clearTodo } = useContext(todoContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null)

    const handleInputClear = () => setTodo("")

    const handleTodoChange = (e: FormEvent<HTMLInputElement>) => {
        setTodo(e.currentTarget.value)
    }

    const handleExec = () => {
        onClose()
        clearTodo()
    }

    const handleDialogOpen = () => {
        if (todos.length === 0) return
        onOpen()
    }

    const handleAdd = () => {
        if (todo === "") return
        // ここでContext更新
        addTodo({
            isDone: false,
            todo: todo,
            index: currentIndex
        })
        setTodo("")
    }

    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                motionPreset='slideInBottom'
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            タスクのクリア
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            タスクをクリアしますか？
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={handleExec} ml={3}>
                                Clear
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            <Box>
                <InputGroup>
                    <Input value={todo} onInput={handleTodoChange} />
                    <InputRightElement width='9.0rem' gap={1} paddingX={1}>
                        <CloseButton onClick={handleInputClear} />
                        <Button h='1.75rem' size='sm' onClick={handleDialogOpen} colorScheme="red">
                            Clear
                        </Button>
                        <Button h='1.75rem' size='sm' onClick={handleAdd} colorScheme="green">
                            Add
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </>
    )
}