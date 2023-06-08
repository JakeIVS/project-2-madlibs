import { Item, List } from "semantic-ui-react"

function StoryListItem({ item, onPreview }) {
    // Use the beginning of the story string to create a preview
    const storyPreview = item.story.slice(0,40)+'...'
    return(
        <List.Item onClick={()=>onPreview(item.id)}>
            <List.Icon name="chevron circle right" />
            <List.Content>
                <List.Header as="h4" >{item.name}</List.Header>
                <List.Description>
                    {storyPreview}
                </List.Description>
            </List.Content>
        </List.Item> 
    )
}

export default StoryListItem