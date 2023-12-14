//! Importar archivos necesarios
import { useRef } from "react"

export default function TodoForm(props) {

    //? 2 - Hacer uso del useRef

    //? 3 - Crear una funcion para captar el valor del input

    return (

        <>

            <form className="todoList-form" action="">
                <div class="mb-3">
                    <input type="text" class="form-control todo-input" id="task" placeholder="Agregar tarea..." />
                </div>
                <button type="submit" class="btn btn-primary">Agregar</button>
            </form>

        </>

    )

}