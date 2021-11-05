import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text, {
    Caption,
    Headline,
    Paragraph,
    Subheading,
    Title,
} from 'react-native-simple-elements/components/Text';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

storiesOf('Text', module)
    .add('Default', () => {

        return (
            <>
                <Caption>
                    Caption
                </Caption>
                <Headline>
                    Headline
                </Headline>
                <Paragraph>
                    Paragraph
                </Paragraph>
                <Subheading>
                    Subheading
                </Subheading>
                <Text>
                    Text
                </Text>
                <Title>
                    Title
                </Title>
            </>
        )
    })
    .add('Mobile View', () => {

        return (
            <>
                <Caption>
                    Caption
                </Caption>
                <Headline>
                    Headline
                </Headline>
                <Paragraph>
                    Paragraph
                </Paragraph>
                <Subheading>
                    Subheading
                </Subheading>
                <Text>
                    Text
                </Text>
                <Title>
                    Title
                </Title>
            </>
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        }
    })
    .add('Playground', () => {

        return (
            <>
                <Caption>
                    Caption
                </Caption>
                <Headline>
                    Headline
                </Headline>
                <Paragraph>
                    Paragraph
                </Paragraph>
                <Subheading>
                    Subheading
                </Subheading>
                <Text>
                    Text
                </Text>
                <Title>
                    Title
                </Title>
            </>
        )
    });
