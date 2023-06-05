import { useState } from "react";
import { Button, Divider, Form, FormInput, Grid, Icon, Segment } from "semantic-ui-react";

function MadLibForm({ madLib }) {
    const [formData, setFormData] = useState({})
    // Dynamically populate the form with the necessary fields for the chosen template
    const formFields = madLib.blanks?.map(blank=>{
        return (
            <Form.Group widths={"equal"} >
                <Form.Input name={blank} type='text' placeholder={blank} />
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