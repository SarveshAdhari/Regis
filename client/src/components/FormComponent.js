import './FormComponent.css'

const FormComponent = ({label, type, name, placeholder}) => {
  return (
    <div className='form-comp'>
        <label>
          {label}  
        </label>

        <input
        type={type}
        name={name}
        placeholder={placeholder}
        // onChange={}
        />
    </div>
  )
}
export default FormComponent