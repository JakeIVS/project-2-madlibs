import { useState } from "react";
import { Button, Container,  Grid, Header, List, Placeholder, Segment } from "semantic-ui-react";
import StoryListItem from "./StoryListItem";

function SavedList({ list, onRestart }) {
    const [story, setStory] = useState({})
    function handlePreview(id) {
        fetch(`http://localhost:3000/saved/${id}`)
        .then(r=>r.json())
        .then(data=>setStory(data))
    }
    let listStories = list?.map(item=>{
        return <StoryListItem item={item} key={item.id} onPreview={handlePreview}/>
    })
    return (
        <>
        <Button floated="right" onClick={onRestart}>Back</Button>
        <Grid columns="equal">
            <Grid.Column width={7}>
        <Segment textAlign="left">
            <List selection>
                {listStories}
            </List>
        </Segment>
            </Grid.Column>
            <Grid.Column width={9}>
                <Segment piled>
                    {/* If no story is selected, show a placeholder paragraph in the story window */}
                    {!story.id ? 
                    <Placeholder>
                        <Placeholder.Header as="h2">
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                 : 
                    <Container fluid text>
                        <Header as="h2">{story.name}</Header>
                        <p>{story.story}</p>
                    </Container> }
                </Segment>
            </Grid.Column>
        </Grid>
        </>
    )
}

export default SavedList