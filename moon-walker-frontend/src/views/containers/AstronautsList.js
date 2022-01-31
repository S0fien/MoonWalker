import {Grid, Spacer} from "@geist-ui/core";
import {Astronaut} from "../components/Astronaut";
import {useEffect, useState} from "react";
import Manager from "../../services/api/Manager";
import {staticValues} from "../../data/constants";

const manager = new Manager()

export const AstronautsList = () => {
    const [astronauts, setAstronauts] = useState([])

    useEffect(() => {
        manager.getAllAstronauts()
            .then((astronauts) =>{
                setAstronauts(astronauts)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <Spacer h={2} />
            <Grid.Container gap={3} justify={'center'}>
                {staticValues.length > 0 && staticValues.map((astronaut) =>
                    <Grid>
                        <Astronaut manager={manager} astronaut={astronaut} />
                    </Grid>
                )}
                {astronauts.length > 0 && astronauts.map((astronaut) =>
                    <Grid>
                        <Astronaut manager={manager} astronaut={astronaut} />
                    </Grid>
                )}
            </Grid.Container>
        </div>
    )
}
