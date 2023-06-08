import { 
    Segment,
    Divider,
    Grid,
    Button,
    Icon
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Nav({ setList }){
    const navigate = useNavigate()
    // make a function for each button that routes to the desired component
    function handleBegin() {
        navigate("/selector", {replace: true})
    }
    function handleView() {
        fetch('http://localhost:3000/saved')
        .then(r=>r.json())
        .then(data=>setList(data))
        navigate('/saved', {replace: true})
    }
    return(
        // Use grid rows to space the buttons out better
        <Grid columns={1} textAlign="center">
            <Grid.Row stretched></Grid.Row>
            <Grid.Row stretched></Grid.Row>
            <Grid.Row stretched></Grid.Row>
            <Grid.Row stretched></Grid.Row>
            <Grid.Row stretched></Grid.Row>
            <Grid.Row stretched>
                <Button.Group size="massive" >
                    <Button primary animated='fade' onClick={handleBegin} >
                        <Button.Content visible>Begin New</Button.Content>
                        <Button.Content hidden>
                            <Icon name='angle double right'/>
                        </Button.Content>
                    </Button>
                    <Button.Or />
                    <Button secondary animated='fade' onClick={handleView}>
                        <Button.Content visible>View Saved</Button.Content>
                        <Button.Content hidden>
                            <Icon name='download' />
                        </Button.Content>
                    </Button>

                </Button.Group>
            </Grid.Row>
        </Grid>
    )
}

export default Nav