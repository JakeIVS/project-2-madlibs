import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Container, Divider, Form, Header, Icon, Popup, Segment } from "semantic-ui-react"

function NewTemplateForm() {
    const navigate = useNavigate()
    //set necessary states
    const [storyName, setStoryName] = useState("")
    const [storySegments, setStorySegments] = useState({seg1: ''})
    const [blanks, setBlanks] = useState({blank1: 'end'})
    const blankArray = Object.values(blanks)
    const segmentArray = Object.values(storySegments)
    const [submitted, setSubmitted] = useState(false)
    // create a splash screen that shows up when a template is submitted
    const submittedScreen = (
        <Container>
            <Header color="grey" as="h1">Submitted!</Header>
            <Icon name="check circle outline" color="green" size="massive"/>
            <Divider />
            <Button size="massive" animated="vertical">
                <Button.Content visible >Return</Button.Content>
                <Button.Content hidden>
                    <Icon name="reply" />
                </Button.Content>
            </Button>
        </Container>
    )

    function handleReturn() {
        setSubmitted(false)
        navigate('/selector', {replace: true})
    }
    
    //set story name using form data
    function handleNameChange(e) {
        setStoryName(e.target.value)
    }
    //posts template to json and shows splash screen on submit
    function handleSubmit(e) {
        // remove the "end" item from the blanks array
        let neededBlanks = blankArray.filter(value=>value!=='end')
        // format the strings in the segments array to put spaces where they are needed
        // this should re-format both the beginning and the end of the string
        let backFormattedSegments = segmentArray.map(seg=>{
            if (seg.slice(seg.length-1) !== " ") {
                return seg+" "
            }
            return seg
        })
        let formattedSegments = backFormattedSegments.map(seg=>{
            if (seg.slice(0,1) !== " ") {
                return " "+seg
            }
            return seg
        })
        console.log(storyName)
        console.log(neededBlanks.length, neededBlanks)
        console.log(segmentArray.length, segmentArray)
        console.log(formattedSegments.length, formattedSegments)
        // fetch("http://localhost:3000/templates", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'accepts': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "name": storyName,
        //         "blanks": neededBlanks,
        //         "template": segmentArray
        //     })
        // })
        setStoryName('')
        setBlanks({blank1: 'end'})
        setStorySegments({seg1: ''})
        setSubmitted(true)
    }
    //reset forms when clear button is clicked
    function handleClear(e){
        setStoryName('')
        setBlanks({blank1: "end"})
        setStorySegments({seg1: ''})
    }

    console.log(blankArray)
    //create a form input to for each new story segment and blank word.
    //when form is updated with a new blank word, it should then create
    //new form fields for the next part of the story 
    const formFields = blankArray.map(value=>{ 
        let count = (blankArray.indexOf(value)+1)
        let segmentName = "seg"+ count
        let blankName = "blank"+ count
        let nextCount = count + 1
     //set dropdown options for words
        const options = [
            {key:"end", value:"end", text: '-End-'},
            {key:"adj", value:`adj-${count}`, text: 'Adjective'},
            {key:"noun", value:`noun-${count}`, text: 'Noun'},
            {key:"nounPlural", value:`nounPlural-${count}`, text: 'Plural Noun'},
            {key:"verb", value:`verb-${count}`, text: 'Verb'},
            {key:"verbIng", value:`verbIng-${count}`, text: 'Verb ending in -ing'},
            {key:"verbEd", value:`verbEd-${count}`, text: 'Verb ending in -ed'},
            {key:"adverb", value:`adverb-${count}`, text: 'Adverb'},
            {key:"adverbLy", value:`adverbLy-${count}`, text: 'Adverb ending in -ly'},
            {key:"name", value:`name-${count}`, text: 'Name'}
        ]

        //set form change functions for story field and blank menu for each generated field group
        function handleStoryChange(e) {
            let story = e.target.value
            setStorySegments({...storySegments, [segmentName]: story})
        }
        function handleDropdownChange(value) {
            setBlanks({...blanks, [blankName]: value})
        }
        function handleNext() {
            let nextBlankName = "blank"+nextCount
            let nextSegmentName = "seg"+nextCount
            setBlanks({...blanks, [nextBlankName]: "end"})
            setStorySegments({...storySegments, [nextSegmentName]: ""})
        }
        return(
            <Form.Group key={count} widths="equal">
                <Form.Input type="text" 
                name={segmentName} 
                placeholder={value === blankArray[0] ? "Start your story..." : "Remember to include any punctuation needed after the previous blank"} 
                value={storySegments[segmentName]} 
                onChange={handleStoryChange}/>
                <Form.Select width={4} 
                name={blankName} 
                options={options} 
                defaultValue={options[0].value} 
                value={ value }
                closeOnChange 
                onChange={(e, { value })=>handleDropdownChange(value)} />
                <Button type="button" onClick={handleNext}>Next</Button>
            </Form.Group>
        )
    })
    return(
        <Segment piled>
                <Button size="small" fluid animated="vertical">
                    <Button.Content visible >Return</Button.Content>
                    <Button.Content hidden>
                        <Icon name="reply" />
                    </Button.Content>
                </Button>
                <Header as="h1">New Template</Header>

                <Divider horizontal>Create your own MadLibs Story</Divider>
                <Form>
                    <Form.Input label="Name" type="text" size="massive" placeholder="Enter a name for your new story..." value={storyName} onChange={handleNameChange} />
                    <Divider horizontal>Write your story here</Divider>
                    {formFields}
                    <Button.Group>
                        <Button secondary type="reset" onClick={handleClear}>Clear</Button>
                        <Button.Or />
                        <Popup
                        size="huge"
                        content="Saved!"
                        on="click"
                        trigger={<Button type="submit" primary onClick={handleSubmit}>Save</Button>}
                        />
                    </Button.Group>
                </Form>
        </Segment>
    )
}

export default NewTemplateForm