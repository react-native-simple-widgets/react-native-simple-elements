import * as React from 'react';
import { View } from "react-native";
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Modal, {
    AlertModal,
    LeftNavModal,
    BottomSheetModal,
    FullscreenModal,
    Modalbk,
} from 'react-native-simple-elements/components/Modal';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Surface from 'react-native-simple-elements/components/Surface';
import Text from 'react-native-simple-elements/components/Text';
import Button from 'react-native-simple-elements/components/Button';

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const viewportIPhoneX = {
    viewport: { ...viewportParams, defaultViewport: "iphonex" },
};

const onPressFn = action("onPress");

const ModalExample = () => {
    const [ visible, setVisible ] = React.useState(false);
    const modalRef = React.useRef(null);

    React.useImperativeHandle(modalRef, () => ({
        open: () => {
            setVisible(true);
        },
        close: () => {
            setVisible(false);
        }
    }));

    const _handleDismiss = () => {
        modalRef.current.close();
    };

    return (
        <View>
            <Button
                onPress={() => {
                    modalRef.current.open();
                }}
            >
                Click
            </Button>
            <Modal
                visible={visible}
                onDismiss={_handleDismiss}
                // onBackdropPress={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
            >
                <Text>Hello</Text>
                <Button
                    onPress={() => {
                        modalRef.current.close();
                    }}
                >
                    Hide modal
                </Button>
            </Modal>
        </View>
    )
}

const MobileViewExample = () => {
    const [ visible, setVisible ] = React.useState(false);
    const modalRef = React.useRef(null);

    React.useImperativeHandle(modalRef, () => ({
        open: () => {
            setVisible(true);
        },
        close: () => {
            setVisible(false);
        }
    }));

    const _handleDismiss = () => {
        modalRef.current.close();
    };

    return (
        <View>
            <Button
                onPress={() => {
                    modalRef.current.open();
                }}
            >
                Click
            </Button>
            <Modal
                visible={visible}
                onDismiss={_handleDismiss}
                // onBackdropPress={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
            >
                <Text>Hello</Text>
                <Button
                    onPress={() => {
                        modalRef.current.close();
                    }}
                >
                    Hide modal
                </Button>
            </Modal>
        </View>
    )
}

const ModalbkExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                onPress={() => toggleModal()}
            >
                Click
            </Button>
            <Modalbk
                visible={isModalVisible}
                onDismiss={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
                // style={{ margin: 0 }}
                // height={120}
            >
                <Surface
                    style={{
                        flex: 1,
                        paddingVertical: 15,
                        paddingHorizontal: 15,
                    }}
                >
                    <Text>Hello</Text>
                    <Button
                        onPress={toggleModal}
                    >
                        Hide modal
                    </Button>
                </Surface>
            </Modalbk>
        </View>
    )
};

const AlertModalExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                onPress={() => toggleModal()}
            >
                Click
            </Button>
            <AlertModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
                // style={{ margin: 0 }}
                // height={120}
            >
                <Surface
                    style={{
                        // flex: 1,
                        paddingVertical: 15,
                        paddingHorizontal: 15,
                    }}
                >
                    <Text>Hello</Text>
                    <Button
                        onPress={toggleModal}
                    >
                        Hide modal
                    </Button>
                </Surface>
            </AlertModal>
        </View>
    )
}

const LeftNavModalExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                onPress={() => toggleModal()}
            >
                Click
            </Button>
            <LeftNavModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
                // style={{ margin: 0 }}
            >
                <Surface
                    style={{
                        // flex: 1,
                        paddingVertical: 15,
                        paddingHorizontal: 15,
                        flexWrap: "nowrap",
                        overflow: "hidden",
                        // whiteSpace: "nowrap",
                    }}
                >
                    <Text numberOfLines={1}>Hello</Text>
                    <Button
                        onPress={toggleModal}
                    >
                        Hide modal
                    </Button>
                </Surface>
            </LeftNavModal>
        </View>
    )
}

const BottomSheetModalExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                onPress={() => toggleModal()}
            >
                Click
            </Button>
            <BottomSheetModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
                // style={{ margin: 0 }}
                height={120}
            >
                <Surface
                    style={{
                        // flex: 1,
                        paddingVertical: 15,
                        paddingHorizontal: 15,
                    }}
                >
                    <Text>Hello</Text>
                    <Button
                        onPress={toggleModal}
                    >
                        Hide modal
                    </Button>
                </Surface>
            </BottomSheetModal>
        </View>
    )
}

const FullscreenModalExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                onPress={() => toggleModal()}
            >
                Click
            </Button>
            <FullscreenModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
                // style={{ margin: 0 }}
                // height={120}
                animationType={"slide"}
            >
                <Surface
                    style={{
                        // flex: 1,
                        paddingVertical: 15,
                        paddingHorizontal: 15,
                    }}
                >
                    <Text>Hello</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            onPress={toggleModal}
                        >
                            Hide modal
                        </Button>
                    </View>
                </Surface>
            </FullscreenModal>
        </View>
    )
}

const PlaygroundExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                onPress={() => toggleModal()}
            >
                Click
            </Button>
            <Modal
                visible={isModalVisible}
                // onBackdropPress={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
            >
                <Text>Hello</Text>
                <Button
                    onPress={toggleModal}
                >
                    Hide modal
                </Button>
            </Modal>
        </View>
    )
}

storiesOf('Modal', module)
    .addDecorator(withKnobs)
    .add('Default', () => (<ModalExample />))
    .add("Mobile View", () => (<MobileViewExample />), viewportIPhoneX)
    .add("Modalbk", () => (<ModalbkExample />))
    .add('Alert Modal', () => (<AlertModalExample />))
    .add('LeftNav Modal', () => (<LeftNavModalExample />))
    .add('BottomSheet Modal', () => (<BottomSheetModalExample />))
    .add('Fullscreen Modal', () => <FullscreenModalExample />, viewportIPhoneX)
    .add('Playground', () => (<PlaygroundExample />))
