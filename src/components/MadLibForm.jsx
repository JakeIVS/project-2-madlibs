import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Divider, Form, Grid, Icon, Segment } from "semantic-ui-react";

function MadLibForm({ madLib, formData, setFormData, setFormArray, onRestart }) {
    const navigate = useNavigate()
    // set controlled components for the form, passing in the formData state from App.jsx
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value});
    }
    // on submit, do 3 things:
    // - take the data in formData and turn it into an array of values, which is the format needed to compile our completed story
    // - clear formData to reset the form fields
    // - navigate to the completed story component
    function handleSubmit(e) {
        e.preventDefault()
        setFormArray(Object.values(formData))
        setFormData({})
        navigate('/selector/final', {replace: true})
    }
    // navigate back to previous page
    function handleBack() {
        navigate('/selector', {replace: true})
    }
// Dynamically populate the form with the necessary fields for the chosen template
const formFields = madLib.blanks?.map(word=>{
    let wordType
    if (word.slice(0, word.length-2) === 'verbEd') { //set wordType to normal english based on the blanks data from our template
        wordType = 'Verb ending in -ed'
    } else if (word.slice(0, word.length-2) === 'verbIng') {
        wordType = 'Verb ending in -ing'
    } else if (word.slice(0, word.length-2) === 'nounPlural') {
        wordType = 'Plural Noun'
    } else if (word.slice(0, word.length-2) === 'adverbLy') {
        wordType = 'Adverb ending in -ly'
    } else if (word.slice(0, word.length-2) === 'adj') {
        wordType = 'Adjective'
    } else {
        wordType = (word.charAt(0).toUpperCase()+word.slice(1)).slice(0, word.length-2) // general formatting rule for any case that doesn't fall into those stated above
    }
        // for each blank, return a form input to type in a word and a randomize button. Placeholder text should say what the word type needed for the blank is.
        return ( 
            <Form.Group widths={"equal"} onChange={handleChange} key={word} value={formData} >
                <Form.Input 
                name={word} 
                type='text' 
                placeholder={wordType} />
                <Button icon circular >
                    <Icon name="random" />
                </Button>
            </Form.Group>
        )
    })
    return (
        <Segment piled padded='very' >
            <Container >
                <Grid columns={2}>
                    <Grid.Column textAlign="left">
                        <Button secondary animated='fade' onClick={handleBack}>
                            <Button.Content visible>Back</Button.Content>
                            <Button.Content hidden>
                                <Icon name="angle left" />
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                    <Grid.Column textAlign="right">                
                        <Button secondary animated='fade' onClick={onRestart}>
                            <Button.Content visible>Restart</Button.Content>
                            <Button.Content hidden>
                                <Icon name="undo" />
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid>

            </Container>
            <h2>{madLib.name}</h2>
            <Divider horizontal>Fill in the words below</Divider>
            <Segment>
                <Form>
                    {formFields}
                    <Button type="submit" secondary onClick={handleSubmit}>Submit</Button>
                </Form>
            </Segment>
        </Segment>
    )
}

export default MadLibForm