import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Snackbar from "react-native-simple-elements/components/Snackbar";
import Text from "react-native-simple-elements/components/Text";
import Button from "react-native-simple-elements/components/Button";

const DefaultExample = (props) => {

    const [ visible, setVisible ] = React.useState(false);

    return (
        <>
            <Button
                onPress={() => {
                    setVisible(true);
                }}
            >
                Open
            </Button>
            <Snackbar
                visible={visible}
                onDismiss={() => {
                    // do something
                    setVisible(false);
                }}
            >
                <Text>Hello</Text>
            </Snackbar>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("Snackbar", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
