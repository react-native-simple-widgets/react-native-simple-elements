import * as React from "react";
import { View, Button, Text, Dimensions } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
// import { action } from '@storybook/addon-actions';
import Modal, { Modalbk, FullscreenModal, BottomSheetModalbk, BottomSheetModal } from "react-native-simple-elements/components/Modal";
import Portal from "react-native-simple-elements/components/Portal";
import Surface from "react-native-simple-elements/components/Surface";

const WindowHeight = Dimensions.get("window").height;
// const onPressFn = action("onPress");

const ModalExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                title="Click"
                onPress={() => toggleModal()}
            />
            <Portal>
                <Modalbk
                    visible={isModalVisible}
                    onDismiss={() => setIsModalVisible(false)}
                    // onSwipeComplete={() => setIsModalVisible(false)}
                    // swipeDirection="left"
                >
                    <Text>Hello</Text>
                    <Button title="Hide modal" onPress={toggleModal} />
                </Modalbk>
            </Portal>
        </View>
    );
};

const BottomSheetModalExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                title="Click"
                onPress={() => toggleModal()}
            />
            <BottomSheetModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
            >
                <Text>Hello</Text>
                <Button title="Hide modal" onPress={toggleModal} />
            </BottomSheetModal>
        </View>
    );
};

const BottomSheetModabklExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                title="Click"
                onPress={() => toggleModal()}
            />
            <Portal>
                <BottomSheetModalbk
                    visible={isModalVisible}
                    onDismiss={() => setIsModalVisible(false)}
                    // onSwipeComplete={() => setIsModalVisible(false)}
                    // swipeDirection="left"
                >
                    <Text>Hello</Text>
                    <Button title="Hide modal" onPress={toggleModal} />
                </BottomSheetModalbk>
            </Portal>
        </View>
    );
};

const BottomSheetModal3lExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                title="Click"
                onPress={() => toggleModal()}
            />
            <Modal
                visible={isModalVisible}
                onDismiss={() => setIsModalVisible(false)}
                animationType="slide"
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
            >
                <Surface>
                    <View>
                        <Text>Hello</Text>
                        <Button title="Hide modal" onPress={() => setIsModalVisible(false)} />
                    </View>
                </Surface>
            </Modal>
        </View>
    );
};

const ConfirmModalExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                title="Click"
                onPress={() => toggleModal()}
            />
            <Modal
                visible={isModalVisible}
                onDismiss={() => setIsModalVisible(false)}
                animationType="fade"
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
                contentContainerStyle={{
                    height: WindowHeight,
                    justifyContent: "center",
                    paddingHorizontal: 16,
                }}
                openDuration={100}
            >
                <Surface>
                    <View>
                        <Text>Hello</Text>
                        <Button title="Hide modal" onPress={() => setIsModalVisible(false)} />
                    </View>
                </Surface>
            </Modal>
        </View>
    );
};

const ModalFullscreenExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                title="Click"
                onPress={() => toggleModal()}
            />
            <FullscreenModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
                // coverScreen={true}
                // style={{ margin: 0 }}
            >
                <View style={{flex: 1}}>
                    <Text>Hello</Text>
                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </FullscreenModal>
        </View>
    );
};

storiesOf("Modal", module)
    .addDecorator(withKnobs)
    .add("Default", () => (<ModalExample />))
    .add("BottomSheet Modal", () => (<BottomSheetModalExample />))
    .add("BottomSheet Modalbk", () => (<BottomSheetModabklExample />))
    .add("BottomSheet Modal3", () => (<BottomSheetModal3lExample />))
    .add("ConfirmModal", () => (<ConfirmModalExample />))
    .add("Default fullscreen", () => (<ModalFullscreenExample />));
