import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { TextAdd } from "./TextAdd";
import { ToDoList } from "./ToDoList";

export const ToDoApp: FC = () => {
    return (
        <Box width="full" height="100svh" justifyContent="center" alignItems="center" display="flex">
            <Flex width="50%" minWidth="350px" height="full" direction="column" gap={5} paddingY="10%">
                <TextAdd />
                <ToDoList />
            </Flex>
        </Box>
    )
}