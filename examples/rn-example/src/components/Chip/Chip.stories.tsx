import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Chip from "react-native-simple-elements/components/Chip";

const DefaultExample = (props) => {

    return (
        <>
            <Chip
            >
                Hello
            </Chip>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("Chip", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
