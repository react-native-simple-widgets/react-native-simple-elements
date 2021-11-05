import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Surface from 'react-native-simple-elements/components/Surface';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Text from 'react-native-simple-elements/components/Text';

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

storiesOf('Surface', module)
    .add('Default', () => (
        <Surface
        >
            <Text>Text</Text>
        </Surface>
    ))
    .add('Mobile View', () => (
        <Surface
        >
            <Text>Text</Text>
        </Surface>
    ), {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })
    .add('Playground', () => (
        <Surface
        >
            <Text>Text</Text>
        </Surface>
    ));
