import {Form} from "../components/Form";

export const FormContainer = (props) => {
    const {action} = props
    return (
        <div>
            <Form action={action}/>
        </div>
    )
}
