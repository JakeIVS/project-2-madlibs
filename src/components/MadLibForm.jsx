import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Divider, Form, Grid, Icon, Segment } from "semantic-ui-react";

function MadLibForm({ madLib, formData, setFormData, setFormArray, onRestart }) {
    const navigate = useNavigate()
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value});
    }
    function handleSubmit(e) {
        e.preventDefault()
        setFormArray(Object.values(formData))
        setFormData({})
        navigate('/selector/final', {replace: true})
    }
    function handleBack() {
        navigate('/selector', {replace: true})
    }
// Dynamically populate the form with the necessary fields for the chosen template
const formFields = madLib.blanks?.map(word=>{
    let wordType
    if (word.slice(0, word.length-2) === 'verbEd') {
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
        wordType = (word.charAt(0).toUpperCase()+word.slice(1)).slice(0, word.length-2)
    }
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