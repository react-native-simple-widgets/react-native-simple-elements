import * as React from "react";
import { storiesOf } from "@storybook/react";
// import { text } from "@storybook/addon-knobs";
import Snackbar from "react-native-simple-elements/components/Snackbar";
import Text from "react-native-simple-elements/components/Text";
import Button from "react-native-simple-elements/components/Button";

storiesOf("Snackbar", module)
    .add("Default", () => {
        const [ searchKey, setSearchKey ] = React.useState(false);

        return (
            <>
                <Button
                    onPress={() => setSearchKey(true)}
                >
                    Open Snackbar
                </Button>
                <Snackbar
                    visible={searchKey}
                    onDismiss={() => {
                        setSearchKey(false);
                    }}
                >
                    <Text>Hello</Text>
                </Snackbar>
            </>
        )
    })
    .add("Playground", () => {
        const [ searchKey, setSearchKey ] = React.useState(false);

        return (
            <>
                <Snackbar
                    visible={searchKey}
                    onDismiss={() => {
                        setSearchKey(false);
                    }}
                >
                    <Text>Hello</Text>
                </Snackbar>
            </>
        )
    });
