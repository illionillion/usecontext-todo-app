import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { TextAdd } from "./TextAdd";
import { ToDoList } from "./ToDoList";
import { ToDoAppContainer, ToDoAppInner } from "./style";

export const ToDoApp: FC = () => {
    return (
        <Box css={ToDoAppContainer}>
            <Flex css={ToDoAppInner}>
                <TextAdd />
                <ToDoList />
            </Flex>
        </Box>
    )
}