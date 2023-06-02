import { useEffect, useState } from "react";
import { 
    Segment,
    Divider,
    Grid,
    Button,
    Icon
} from "semantic-ui-react";

function Nav(){
    return(
        <Segment>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Button secondary animated='fade' >
                        <Button.Content visible>Begin New</Button.Content>
                        <Button.Content hidden>
                            <Icon name='angle double right'/>
                        </Button.Content>
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button secondary animated='fade'>
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