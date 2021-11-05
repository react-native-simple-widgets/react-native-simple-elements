import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Dialog, { DialogContent } from "react-native-simple-elements/components/Dialog";
import Text from "react-native-simple-elements/components/Text";
import Button from "react-native-simple-elements/components/Button";
import Portal from "react-native-simple-elements/components/Portal";

const DefaultExample = (props) => {

    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <Button
                onPress={() => {
                    setVisible(true);
                }}
            >
                Open
            </Button>
            <Portal>
                <Dialog
                    visible={visible}
                    onDismiss={() => {
                        // do something
                        setVisible(false);
                    }}
                >
                    <DialogContent>
                        <Text>Hello</Text>
                        <Button
                            onPress={() => {
                                setVisible(false);
                            }}
                        >
                            Dismis
                        </Button>
                    </DialogContent>
                </Dialog>
            </Portal>
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("Dialog", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
