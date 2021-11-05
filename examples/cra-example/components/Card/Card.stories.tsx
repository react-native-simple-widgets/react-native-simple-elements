
import * as React from 'react';
import { Text } from "react-native";
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Card from 'react-native-simple-elements/components/Card';
import { Title, Paragraph } from 'react-native-simple-elements/components/Text';
import Button from 'react-native-simple-elements/components/Button';
import { AvatarImage } from 'react-native-simple-elements/components/Avatar';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const LeftContent = (props: any) => <AvatarImage size={24} source={{ uri: "https://via.placeholder.com/350x150" }} />

const CardExample = () => (
    <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
);

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Default', () => <CardExample />)
    .add('Mobile View', () => {

        return (
            <CardExample />
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })
    .add('Playground', () => <CardExample />);
