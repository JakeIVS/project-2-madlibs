import { useState } from "react"
import { Button, Container, Divider, Grid, Segment, Icon, Placeholder } from "semantic-ui-react"

function FinishedPrompt({ madLib, filledBlanks, onRestart }) { 
    const [saved, setSaved] = useState(false)
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
    function handleSave() {
        setSaved(true)
        fetch('http://localhost:3000/saved', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": madLib.name,
                "story": story
            })
        })
    }
    const unSavedBtn = (
        <Button primary animated='fade'>
            <Button.Content visible >Save Story</Button.Content>
            <Button.Content hidden onClick={handleSave}>
                <Icon name='download'/>
            </Button.Content>
        </Button>
    )
    const savedBtn = (
        <Button positive>
            Saved <Icon name="check circle" />
        </Button>
    )
    return(
        <Segment piled >
            <Grid columns={2}>
                <Grid.Column textAlign="left">
                    <Button secondary animated='fade' onClick={onRestart}>
                        <Button.Content visible>Restart</Button.Content>
                        <Button.Content hidden>
                            <Icon name="undo" />
                        </Button.Content>
                    </Button>
                </Grid.Column>
                <Grid.Column textAlign="right">
                    {saved ? savedBtn : unSavedBtn}
                </Grid.Column>
            </Grid>
            <Container text textAlign="center">
                <h2>{!!madLib.name ? madLib.name : "Loading Story"}</h2>
                <p>{!!madLib.template && filledBlanks !==[] ? story : 
                <Placeholder fluid>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                </Placeholder>}</p>
            </Container>
            <Divider/>
        </Segment>
    )
}

export default FinishedPrompt