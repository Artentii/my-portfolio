function InputFieldComponent(props) {
    return (
        <input type={props.type.type} id={props.type.id} name={props.type.name}
               className="shadow appearance-none border-2 border-gray rounded w-full text-gray leading-tight
                            px-4 py-4 focus:outline-none focus:shadow-outline"
               placeholder={props.type.placeholder}

        />
    )
}

export default InputFieldComponent