import { 
    Segment,
    Button,
    Divider 
} from "semantic-ui-react";

function Selector({ setMadLib }){
    function selectFormat(e) {
        fetch(`http://localhost:3000/templates/${e.target.id}`)
        .then(r=>r.json())
        .then(data=>setMadLib(data))
    }
    return(
        <Segment stacked padded='very'>
            <h2>Choose a Template</h2>
            <Segment>
                <Button id='1' size='massive' circular primary fluid onClick={selectFormat} >Fortune Cookies</Button>
                <Divider horizontal>or</Divider>
                <Button id='2' size='massive' circular primary fluid onClick={selectFormat}>Edgar Allen Poe</Button>
                <Divider horizontal>or</Divider>
                <Button id='3' size='massive' circular primary fluid onClick={selectFormat}>Spider-Man</Button>
            </Segment>
        </Segment>
    )
}

export default Selector