import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    Segment,
    Button,
    Divider,
    Header, 
    Grid,
    Icon
} from "semantic-ui-react";

function Selector({ setMadLib, setFormData, onReturn }){
    // set needed states and navigate constant
    const navigate = useNavigate()
    const [templates, setTemplates] = useState([])

    // initial fetch of template data
    useEffect(()=>{
        fetch('http://localhost:3000/templates')
        .then(r=>r.json())
        .then(data=>setTemplates(data))
    },[])
    //populate container with buttons to select which template to use
    const buttonField = templates.map(template=>{
        return(
            <>
            {template.id === 1 ? null: <Divider horizontal>or</Divider> }
            <Button id={template.id} key={template.id} size='massive' circular primary fluid onClick={selectFormat} >{template.name}</Button>
            </>
        )
    })
    // sets the madlib state to the data from whichever template was selected
    // also clears out formData incase anything was left over in the state from last use
    function selectFormat(e) {
        fetch(`http://localhost:3000/templates/${e.target.id}`)
        .then(r=>r.json())
        .then(data=>setMadLib(data))
        setFormData({})
        navigate('/selector/form', {replace: true})
    }
    // navigates to the form to create a new template
    function handleNew() {
        navigate("/createnew", {replace: true})
    }
    return(
        <Segment stacked padded='very'>
            <Grid columns={3}>
                <Grid.Column textAlign="left" >
                    <Button secondary animated='fade' onClick={onReturn}>
                        <Button.Content visible>Back</Button.Content>
                        <Button.Content hidden>
                            <Icon name="angle left" />
                        </Button.Content>
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h1">Select Template</Header>
                </Grid.Column>
                <Grid.Column textAlign="right">
                    <Button secondary animated="fade" onClick={handleNew}>
                        <Button.Content visible>New Template</Button.Content>
                        <Button.Content hidden>
                            <Icon name="file text" />
                        </Button.Content>
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider/>
            {buttonField}
        </Segment>
    )
}

export default Selector