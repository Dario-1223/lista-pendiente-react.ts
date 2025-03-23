import { Tarea } from "./Tarea"
type ListaTareas = {
    ListaTareas: string[]
    borrarTarea: (index:number) => void
}

export const ListaTareas = ({ListaTareas, borrarTarea}: ListaTareas) => {
  return (
    <div className="taskList">
        {ListaTareas.map((tarea,index) => (
            <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
        )
        )}

    </div>
  )
}