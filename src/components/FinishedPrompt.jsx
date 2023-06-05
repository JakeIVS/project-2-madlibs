import { Container, Segment } from "semantic-ui-react"

function FinishedPrompt({ madLib }) {
    const promptInterpolate = `${madLib.template}`
    return(
        <Segment piled >
            <Container text>
                <h2>{madLib.name}</h2>
                <p>{promptInterpolate}</p>
            </Container>
        </Segment>
    )
}

export default FinishedPrompt