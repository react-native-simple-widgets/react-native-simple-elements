import * as React from "react";
import { storiesOf } from "@storybook/react";
import { View } from "react-native";
import Text, { Paragraph } from "react-native-simple-elements/components/Text";
import Dialog from "react-native-simple-elements/components/Dialog";
import Button from "react-native-simple-elements/components/Button";

const Example = (props) => {

    const [visible, setVisible] = React.useState(false);

    const hideDialog = () => {
        setVisible(false);
    };

    return (
        <View>
            <Text>Apple</Text>
            <Button
                onPress={() => setVisible(true)}
                >
                Hello
            </Button>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>This is simple dialog</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </View>
    );
}

storiesOf("Dialog", module)
    .add("Default", () => <Example />)
