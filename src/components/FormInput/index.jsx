import {StyledInput} from './styles'

// eslint-disable-next-line react/prop-types
export default function FormInput({ type, id, name, className, value, onChange, required }) {
    return(
        <StyledInput
            type={type} 
            id={id} 
            name={name} 
            className={className} 
            value={value} 
            onChange={onChange} 
            required={required} 
        />
    )
}