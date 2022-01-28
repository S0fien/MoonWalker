import { NavLink } from "react-router-dom";
import {Divider, Spacer, Text} from "@geist-ui/core";

export const Header = (props) => {
    return (
        <div>
            <Spacer h={2} />
            <NavLink className={({ isActive }) => isActive? "active": ''} to="/"><Text h1>🚀 MoonWalker</Text></NavLink>
            <Text h4>Discover and manage space travelers</Text>
            <Spacer h={1} />
            <NavLink className={({ isActive }) => isActive? "active": ''} to="/add">
                <Text>➕ Add a new astronaut</Text>
            </NavLink>
            <Spacer h={1} />
            <Divider />
        </div>
    )
}
