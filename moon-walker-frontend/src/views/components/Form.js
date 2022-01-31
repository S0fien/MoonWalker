import {Button, Card, Input, Text, Radio, Select} from "@geist-ui/core";
import {useEffect, useState} from "react";
import {skillsSelection} from "../../data/constants";
import Manager from "../../services/api/Manager";
import {useLocation, useNavigate} from "react-router-dom";

const manager = new Manager()

export const Form = (props) => {
    const navigate = useNavigate()
    const { action } = props
    const initialState = {
        firstname: null,
        lastname: null,
        gender: 'male',
        country: null,
        age: null,
        skills: []
    }
    const [state, setState] = useState(initialState)

    const setValues = (astronaut) => {
        setState(astronaut)
    }

    const handleForm = () => {
        if (state.skills.length !== 3) {
            alert('You must choose 3 skills for your new astronaut.')
            return false
        }
        if (action === 'update') {
            manager.updateAstronaut(window.location.pathname.split('/').pop(), state).then(() => {
                alert('Astronaut updated !')
                navigate('/')
            })
        } else {
            manager.createAstronaut(state).then((response) => {
                alert('New astronaut created !')
                navigate('/')
            })
        }
    }
    useEffect(() => {
        if (action === 'update') {
            manager.getAstronaut(window.location.pathname.split('/').pop()).then((result) => {
                setValues(result)
            }).catch((err) => console.log(err))
        }
    }, [])
    return (
        <Card>
            <Text h3>Add a new astronaut</Text>
            <form id='form'>
                <Card.Content style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }} className='formContainer'>
                    <Input required name="firstname" maxLength={25} initialValue={state.firstname} onChange={(e) => setState({
                            ...state,
                            firstname: e.target.value
                        },
                    )} label="Firstname" placeholder="John..." />
                    <Input required name="lastname" maxLength={25} initialValue={state.lastname} onChange={(e) => setState({
                            ...state,
                            lastname: e.target.value
                        },
                    )} label="Lastname" placeholder="Doe..." />
                    <Radio.Group useRow value={state.gender} onChange={(value) => setState({
                            ...state,
                            gender: value
                        },
                    )}>
                        <Radio value="male">
                            <Text small>Male</Text>
                        </Radio>
                        <Radio value="female">
                            <Text small>Female</Text>
                        </Radio>
                    </Radio.Group>
                    <Input required name="country" maxLength={50} label="Country" onChange={(e) => setState({
                            ...state,
                            country: e.target.value
                        },
                    )} initialValue={state.country} placeholder="France..." />
                    <Input required htmlType='number' min='18' name="age" initialValue={state.age} onChange={(e) => setState({
                            ...state,
                            age: (Number.parseInt(e.target.value))
                        },
                    )} label="Age" placeholder="30..." />
                    <Select placeholder="Skills" multiple width="200px" initialValue={state.skills} onChange={(e) => setState({
                            ...state,
                            skills: e
                        },
                    )}>
                        {skillsSelection.map((skill, index) =>
                            <Select.Option key={index} value={skill}>{skill}</Select.Option>
                        )}
                    </Select>
                </Card.Content>
                <Card.Footer>
                    <Button htmlType='submit' onClick={(e) =>{
                        let form = document.getElementById('form')
                        if (form.reportValidity()) {
                            e.preventDefault()
                            e.stopPropagation()
                            handleForm()
                        }
                    }} style={{ margin: 'auto', width: '50%' }}>Send form</Button>
                </Card.Footer>
            </form>
        </Card>
    )
}
