import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import AlertDialog from "react-native-simple-elements/components/AlertDialog";
import Button from "react-native-simple-elements/components/Button";

const DefaultExample = (props) => {

    const [ visible, setVisible ] = React.useState(false);

    return (
        <>
            <Button
                onPress={() => setVisible(true)}
            >
                Open
            </Button>
            <AlertDialog
                visible={visible}
            >
                <Button
                    onPress={() => setVisible(false)}
                >
                    Close
                </Button>
            </AlertDialog>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("AlertDialog", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
