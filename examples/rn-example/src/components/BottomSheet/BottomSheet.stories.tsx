import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Button from "react-native-simple-elements/components/Button";
import Text, { Title } from "react-native-simple-elements/components/Text";
import BottomSheet, { BottomSheetWithRef } from "react-native-simple-elements/components/BottomSheet";
import Surface from "react-native-simple-elements/components/Surface";
import { boolean, withKnobs } from "@storybook/addon-knobs";

const DefaultExample = () => {
    const [ visible, setVisible ] = React.useState(false);

    return (
        <View>
            <Button
                onPress={() => setVisible(true)}
            >
                Open
            </Button>
            <BottomSheet
                animationType={"none"}
                visible={visible}
            >
                <Surface>
                    <Title>Title</Title>
                    <Text>Message</Text>
                    <Text>Text</Text>
                    <Button
                        onPress={() => setVisible(false)}
                    >
                        Close
                    </Button>
                </Surface>
            </BottomSheet>
        </View>
    );
};

const WithRefExample = () => {
    const bottomSheetRef = React.useRef(null);

    return (
        <View>
            <Button
                onPress={() => bottomSheetRef.current.open()}
            >
                Open
            </Button>
            <BottomSheetWithRef
                innerRef={bottomSheetRef}
            >
                <Surface>
                    <Title>Title</Title>
                    <Text>Message</Text>
                    <Text>Text</Text>
                    <Button
                        onPress={() => bottomSheetRef.current.close()}
                    >
                        Close
                    </Button>
                </Surface>
            </BottomSheetWithRef>
        </View>
    );
};

const PlaygroundExample = () => {
    const [ visible, setVisible ] = React.useState(false);
    const dismissable = boolean("dismissable", false);

    return (
        <View>
            <Button
                onPress={() => setVisible(true)}
            >
                Open
            </Button>
            <BottomSheet
                animationType={"none"}
                visible={visible}
                dismissable={dismissable}
                onDismiss={() => {
                    setVisible(false);
                }}
            >
                <Surface>
                    <Title>Title</Title>
                    <Text>Message</Text>
                    <Text>Text</Text>
                    <Button
                        onPress={() => setVisible(false)}
                    >
                        Close
                    </Button>
                </Surface>
            </BottomSheet>
        </View>
    );
};

storiesOf("BottomSheet", module)
    .addDecorator(withKnobs())
    .add("Default", () => <DefaultExample />)
    .add("with innerRef", () => <WithRefExample />)
    .add("Playground", () => <PlaygroundExample />);
