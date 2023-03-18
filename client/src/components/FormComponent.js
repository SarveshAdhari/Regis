import './FormComponent.css'

const FormComponent = ({label, type, name, placeholder, handleChange}) => {
  return (
    <div className='form-comp'>
        <label>
          {label}  
        </label>

        <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        />
    </div>
  )
}
export default FormComponent