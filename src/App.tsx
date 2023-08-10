import { FC } from "react"
import { ToDoApp } from "./components/ToDoApp"
import { useTodoContext, todoContext } from "./context/theme"

const App: FC = () => {

  const ctx = useTodoContext()

  return (
    <todoContext.Provider value={ctx}>
      <ToDoApp />
    </todoContext.Provider>
  )
}

export default App
