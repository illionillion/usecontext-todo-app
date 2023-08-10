import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { TextAdd } from "./TextAdd";
import { ToDoList } from "./ToDoList";

export const ToDoApp: FC = () => {
    return (
        <Box width="full" height="100svh" justifyContent="center" alignItems="center" display="flex">
            <Flex direction="column">
                <TextAdd />
                <ToDoList />
            </Flex>
        </Box>
    )
}