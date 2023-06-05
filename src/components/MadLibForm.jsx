import { useState } from "react";
import { Button, Divider, Form, FormInput, Grid, Icon, Segment } from "semantic-ui-react";

function MadLibForm({ madLib, formData, setFormData, formArray, setFormArray }) {
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value});
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
    } else if (word.slice(0, word.length-2) === 'advLy') {
        wordType = 'Adverb ending in -ly'
    } else if (word.slice(0, word.length-2) === 'adj') {
        wordType = 'Adjective'
    } else {
        wordType = (word.charAt(0).toUpperCase()+word.slice(1)).slice(0, word.length-2)
    }
        return (
            <Form.Group widths={"equal"} onChange={handleChange} key={word}>
                <Form.Input name={word} type='text' placeholder={wordType} />
                <Button icon circular >
                    <Icon name="random" />
                </Button>
            </Form.Group>
        )
    })
    return (
        <Segment piled padded='very' >
            <h2>{madLib.name}</h2>
            <Divider horizontal>Fill in the words below</Divider>
                <Form>
                    {formFields}
                </Form>
        </Segment>
    )
}

export default MadLibForm