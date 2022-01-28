import {Button, Card, Input, Text, Radio, Select} from "@geist-ui/core";
import {useEffect, useState} from "react";
import {skillsSelection} from "../../data/constants";
import Manager from "../../services/api/Manager";
import {useLocation, useNavigate} from "react-router-dom";

const manager = new Manager()

export const Form = (props) => {
    const navigate = useNavigate()
    const { action } = props
    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [gender, setGender] = useState('male')
    const [country, setCountry] = useState(null)
    const [age, setAge] = useState(null)
    const [skills, setSkills] = useState([])

    const setValues = (astronaut) => {
        setFirstname(astronaut.firstname)
        setLastname(astronaut.lastname)
        setGender(astronaut.gender)
        setCountry(astronaut.country)
        setAge(astronaut.age)
        setSkills([])
    }

    const handleForm = () => {
        if (skills.length !== 3) {
            alert('You must choose 3 skills for your new astronaut.')
            return false
        }
        const data = {
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            country: country,
            age: age,
            skills: skills
        }
        if (action === 'update') {
            manager.updateAstronaut(window.location.pathname.split('/').pop(), data).then((response) => {
                alert('Astronaut updated !')
                navigate('/')
            })
        } else {
            manager.createAstronaut(data).then((response) => {
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
                    <Input required name="firstname" maxLength={25} initialValue={firstname} onChange={(e) => setFirstname(e.target.value)} label="Firstname" placeholder="John..." />
                    <Input required name="lastname" maxLength={25} initialValue={lastname} onChange={(e) => setLastname(e.target.value)} label="Lastname" placeholder="Doe..." />
                    <Radio.Group useRow value={gender} onChange={(value) => setGender(value)}>
                        <Radio value="male">
                            <Text small>Male</Text>
                        </Radio>
                        <Radio value="female">
                            <Text small>Female</Text>
                        </Radio>
                    </Radio.Group>
                    <Input required name="country" maxLength={50} label="Country" onChange={(e) => setCountry(e.target.value)} initialValue={country} placeholder="France..." />
                    <Input required htmlType='number' min='18' name="age" initialValue={age} onChange={(e) => setAge(Number.parseInt(e.target.value))} label="Age" placeholder="30..." />
                    <Select placeholder="Skills" multiple width="200px" initialValue={skills} onChange={(e) => setSkills(e)}>
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
