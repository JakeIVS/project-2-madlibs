import Nav from "./Nav"
import { Segment, Divider } from "semantic-ui-react"

function Header() {
    return(
        <>
            <Segment raised padded >
                <h1>MadLibs</h1>
            <Divider horizontal>A Flatiron School Project by Jacob Ives</Divider>
            <Nav/>
            </Segment>
        </>
    )
}

export default Header