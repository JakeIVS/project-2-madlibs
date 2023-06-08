import { useNavigate } from "react-router-dom"
import { Header, Icon, Container, Divider, Button, Segment } from "semantic-ui-react"
// Create a splash screen that appears after you successfully submit a new template
function Submitted() {
    const navigate = useNavigate()
    // return to template selector
    function handleReturn() {
        navigate('/selector', {replace: true})
    }
    return(
        <Segment piled>
            <Container>
                <Header color="grey" as="h1">Submitted!</Header>
                <Icon name="check circle outline" color="green" size="massive"/>
                <Divider />
                <Button size="massive" animated="vertical" onClick={handleReturn}>
                    <Button.Content visible >Return</Button.Content>
                    <Button.Content hidden>
                        <Icon name="reply" />
                    </Button.Content>
                </Button>
            </Container>
        </Segment>
    )
}

export default Submitted