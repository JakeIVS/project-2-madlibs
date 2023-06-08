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
    const navigate = useNavigate()
    const [templates, setTemplates] = useState([])

    // initial fetch of template data
    useEffect(()=>{
        fetch('http://localhost:3000/templates')
    },[])

    function selectFormat(e) {
        fetch(`http://localhost:3000/templates/${e.target.id}`)
        .then(r=>r.json())
        .then(data=>setMadLib(data))
        setFormData({})
        navigate('/selector/form', {replace: true})
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
                    <Button secondary animated="fade">
                        <Button.Content visible>New Template</Button.Content>
                        <Button.Content hidden>
                            <Icon name="file text" />
                        </Button.Content>
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider/>
                <Button id='1' size='massive' circular primary fluid onClick={selectFormat} >Fortune Cookies</Button>
                <Divider horizontal>or</Divider>
                <Button id='2' size='massive' circular primary fluid onClick={selectFormat}>Edgar Allen Poe</Button>
                <Divider horizontal>or</Divider>
                <Button id='3' size='massive' circular primary fluid onClick={selectFormat}>Spider-Man</Button>
        </Segment>
    )
}

export default Selector