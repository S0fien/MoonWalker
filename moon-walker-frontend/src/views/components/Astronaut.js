import {Text, Card, Spacer, Button, Image, Tag} from "@geist-ui/core";
import {Link} from "react-router-dom";
import Info from "@geist-ui/icons/info";
import astronautImage from '../../astronaut.png'

export const Astronaut = (props) => {
    const  { astronaut, manager } = props

    const handleDelete = () => {
        manager.deleteAstronaut(astronaut.id).then((res) => {
            alert(`${astronaut.firstname} ${astronaut.lastname} has been deleted.`)
            window.location.reload()
        }
        ).catch((err) => console.log(err))
    }
    return (
        <div key={astronaut.id}>
            {/*<Card shadow width={'100%'} style={{ maxHeight: 450 }} height={'450px'}>*/}
            <Card shadow width={'100%'} height={'450px'}>
                <Card.Content>
                    <Image src={astronautImage} width={'100%'} height={'125px'} draggable={false} />
                    <Text h5>{astronaut.firstname} {astronaut.lastname} ({astronaut.gender === 'female' ? '👩' : '🧑'})</Text>
                    <Text>🌎 {astronaut.country}</Text>
                    {astronaut.skills.map(skill =>
                            <Tag type='success' style={{ display: 'block' }}>{skill}</Tag>
                    )}
                    {/*<BeerTitle title={astronaut.name} />*/}
                    <Spacer h={1.5} />
                    {/*<Volume astronaut={astronaut} />*/}
                </Card.Content>
                {astronaut.isStatic ? (
                    <Text small>
                        Static value can
                        <br />
                        be edit or deleted
                        </Text>
                ) : (
                    <Card.Footer style={{ display: 'flex', flexFlow: 'column', width: '100%' }}>
                        <Link style={{ width: '100%' }} to={`/update/${astronaut.id}`}>
                            <Button style={{ width: '100%' }} auto type={'warning'}>
                                Update
                            </Button>
                        </Link>
                        <Button onClick={() => handleDelete()} style={{ width: '100%' }} auto type={'error'}>
                            Delete
                        </Button>
                    </Card.Footer>
                    )}
            </Card>
        </div>
    )
}
