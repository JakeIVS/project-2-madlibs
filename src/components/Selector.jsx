import { 
    Segment,
    Button,
    Divider 
} from "semantic-ui-react";

function Selector(){
    return(
        <Segment stacked padded='very'>
            <h2>Choose a Template</h2>
            <Segment>
                <Button size='massive' circular primary fluid>Fortune Cookies</Button>
                <Divider horizontal>or</Divider>
                <Button size='massive' circular primary fluid>Edgar Allen Poe</Button>
                <Divider horizontal>or</Divider>
                <Button size='massive' circular primary fluid>Spider-Man</Button>
            </Segment>
        </Segment>
    )
}

export default Selector