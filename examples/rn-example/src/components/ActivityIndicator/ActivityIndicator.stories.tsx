import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import ActivityIndicator from "react-native-simple-elements/components/ActivityIndicator";
import { boolean, number, select, withKnobs } from "@storybook/addon-knobs";
import Color from "color";
import * as colornames from "color-name";

const DefaultExample = (props) => {

    return (
        <>
            <ActivityIndicator
            />
        </>
    );
};

const PlaygroundExample = (props) => {

    const animating = boolean("animating", true);
    const color = select("color", colornames, colornames.green);
    const size = number("size", 24);

    return (
        <>
            <ActivityIndicator
                animating={animating}
                color={Color.rgb(color).hex()}
                size={size}
            />
        </>
    );
};

storiesOf("ActivityIndicator", module)
    .addDecorator(withKnobs())
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
