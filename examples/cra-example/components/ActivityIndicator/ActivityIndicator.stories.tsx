import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import styled from "styled-components/native";
import styled2 from "styled-components";
import * as Colors from 'react-native-simple-elements/components/theme/colors';
import ActivityIndicator from 'react-native-simple-elements/components/ActivityIndicator';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const Container = styled.View({
    // backgroundColor: Colors.red800,
})

storiesOf('ActivityIndicator', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Container
        >
            <ActivityIndicator
            />
        </Container>
    ))
    .add('Mobile View', () => (
        <ActivityIndicator
            animating={true} color={Colors.red800}
        />
    ), {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })
    .add('Playground', () => {
        const color = select("color", Colors, Colors.yellow100);
        const size = select("size", { small: "small", large: "large" }, "small");

        return (
            <ActivityIndicator
                animating={true}
                color={color}
                size={size}
            />
        )
    });
