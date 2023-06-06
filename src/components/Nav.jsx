import { 
    Segment,
    Divider,
    Grid,
    Button,
    Icon
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Nav(){
    const navigate = useNavigate()
    function handleBegin() {
        navigate("/selector", {replace: true})
    }
    return(
        <Segment padded="very">
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <Button secondary size="huge" animated='fade' onClick={handleBegin} >
                        <Button.Content visible>Begin New</Button.Content>
                        <Button.Content hidden>
                            <Icon name='angle double right'/>
                        </Button.Content>
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button secondary size="huge" animated='fade'>
                        <Button.Content visible>View Saved</Button.Content>
                        <Button.Content hidden>
                            <Icon name='download' />
                        </Button.Content>
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider> 
        </Segment>
    )
}

export default Nav