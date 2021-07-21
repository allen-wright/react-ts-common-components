type TypeEnum = 'number' | 'password' | 'text';

type InputProps = {
  children: string,
  className?: string,
  error?: string,
  label: string,
  name: string,
  onChange: VoidFunction,
  placeholder?: string,
  type: TypeEnum,
  value: string
}

function FormInput({
  className,
  label,
  name,
  onChange,
  type
}: InputProps) {
  return(
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={className}
        id={name}
        name={name}
        onChange={onChange}
        type={type}

      />
    </>
  )
}

export default FormInput;