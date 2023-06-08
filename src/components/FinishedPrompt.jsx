import { useState } from "react"
import { Button, Container, Divider, Grid, Segment, Icon, Placeholder } from "semantic-ui-react"

function FinishedPrompt({ madLib, filledBlanks, onRestart }) { 
    // set state to show whether template is saved or not
    const [saved, setSaved] = useState(false)
    let story // create a blank variable to store the story as
    if (!!madLib.template && filledBlanks !== []) {//define the story variable only if there is data to do so in madLib.template and filledBlank variable
        let template = madLib.template
        let combinedArray = [] //create empty array to push values from our two arrays into
        // make a for loop that will iterate through our two arrays and push alternating values from the two into the combinedArray array
        let i, l = Math.min(template.length, filledBlanks.length)
        for (i=0; i < l; i++) {
            combinedArray.push(template[i], filledBlanks[i])
        }
        combinedArray.push(template[template.length-1])
        story = combinedArray?.join('') // turns combinedArray into a string once all values have been pushed to it in the correct order
    }
    function handleSave() { // posts the current story into the 'saved' array in our database
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
    const unSavedBtn = ( //sets button style and functionality before the template is saved
        <Button primary animated='fade'>
            <Button.Content visible >Save Story</Button.Content>
            <Button.Content hidden onClick={handleSave}>
                <Icon name='download'/>
            </Button.Content>
        </Button>
    )
    const savedBtn = ( // sets button style and functionality after the template has been saved
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
                <p>{!!madLib.template && filledBlanks !==[] ? story : //create placeholders in case no template has been selected yet
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