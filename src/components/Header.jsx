import { Segment, Divider } from "semantic-ui-react"

function Header() {
    return(
        <>
            <Segment raised >
                <h1>MadLibs</h1>
            <Divider horizontal>A Flatiron School Project by Jacob Ives</Divider>
            </Segment>
        </>
    )
}

export default Header