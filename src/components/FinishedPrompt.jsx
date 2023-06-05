import { Container, Segment } from "semantic-ui-react"

function FinishedPrompt({ madLib, filledBlanks }) { 
    let story
    if (!!madLib.template && filledBlanks !== []) {
        let template = madLib.template
        let combinedArray = []
        let i, l = Math.min(template.length, filledBlanks.length)
        for (i=0; i < l; i++) {
            combinedArray.push(template[i], filledBlanks[i])
        }
        combinedArray.push(template[template.length-1])
        story = combinedArray?.join('')
    }
    return(
        <Segment piled >
            <Container text>
                <h2>{madLib.name}</h2>
                <p>{!!madLib.template && filledBlanks !==[] ? story : 'Loading...'}</p>
            </Container>
        </Segment>
    )
}

export default FinishedPrompt