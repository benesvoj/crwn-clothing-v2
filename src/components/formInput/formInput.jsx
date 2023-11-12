import './formInput.styles'
import {FormInputLabel, Group, Input} from "./formInput.styles";

export const FormInput = ({label, ...otherProps}) => {

    return (
        <Group>
            <Input {...otherProps}/>
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            )}
        </Group>
    )

}