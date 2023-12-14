//! Importar archivos necesarios

export default function TodoItem(props) {

    //? 2 - Crear funcion para eliminar tarea

        //! Preguntar si desea eliminar o no

    return (

        <>

            <li>
                {/* //! Si la tarea esta completa cambiarle el diseño */}
                <div>
                    <input type="checkbox" name="check" id="check" />
                    <button>❌</button>
                </div>
            </li>

        </>

    )

}