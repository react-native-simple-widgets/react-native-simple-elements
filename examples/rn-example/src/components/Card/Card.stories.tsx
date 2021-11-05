import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Card, { CardContent } from "react-native-simple-elements/components/Card";
import Text from "react-native-simple-elements/components/Text";

const DefaultExample = (props) => {

    return (
        <>
            <Card>
                <CardContent>
                    <Text>Hello</Text>
                </CardContent>
            </Card>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("Card", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
