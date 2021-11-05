import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Badge from "react-native-simple-elements/components/Badge";

const DefaultExample = (props) => {

    return (
        <>
            <Badge
                visible={true}
            >
                3
            </Badge>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("Badge", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
