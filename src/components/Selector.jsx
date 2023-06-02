import { 
    Segment,
    Button,
    Divider 
} from "semantic-ui-react";

function Selector(){
    return(
        <Segment piled>
            <h2>Choose a Template</h2>
            <Segment>
                <Button size='massive' circular primary fluid>Fortune Cookies</Button>
                <Divider horizontal>or</Divider>
                <Button size='massive' circular primary fluid>The Raven</Button>
                <Divider horizontal>or</Divider>
                <Button size='massive' circular primary fluid>A secret third option ;)</Button>
            </Segment>
        </Segment>
    )
}

export default Selector