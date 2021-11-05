import * as React from 'react';
import { Button, Text, View } from "react-native";
import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { BottomSheetWithRef } from 'react-native-simple-elements/components/BottomSheet';

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const iphonexViewport = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex"
    }
}

const DefaultExample = () => {
    const _standardRef = React.useRef<any>();

    return (
        <View>
            <Button
                title={"Open"}
                onPress={() => _standardRef.current?.open({
                    onConfirm: () => {
                        alert("Hello");
                    }
                })}
            />
            <BottomSheetWithRef
                innerRef={_standardRef}
                title={"Title"}
            >
                <Text>Text</Text>
            </BottomSheetWithRef>
        </View>
    )
}

const MobileViewExample = () => {
    const _standardRef = React.createRef<any>();

    return (
        <View>
            <Button
                title={"Open"}
                onPress={() => _standardRef.current?.open()}
            />
            <BottomSheetWithRef
                innerRef={_standardRef}
                title={"Title"}
                // closeOnDragDown={true}
                // dragFromTopOnly={true}
            >
                <Text>Text</Text>
            </BottomSheetWithRef>
        </View>
    )
}

const PlaygroundExample = () => {
    const _standardRef = React.createRef<any>();

    return (
        <View>
            <Button
                title={"Open"}
                onPress={() => _standardRef.current?.open()}
            />
            <BottomSheetWithRef
                innerRef={_standardRef}
                title={"Title"}
            >
                <Text>Text</Text>
            </BottomSheetWithRef>
        </View>
    )
}

storiesOf('BottomSheet', module)
    .add('Default', () => <DefaultExample />)
    .add('Mobile View', () => <MobileViewExample />, iphonexViewport)
    .add('Playground', () => <PlaygroundExample />);
