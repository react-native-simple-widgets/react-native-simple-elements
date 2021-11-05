import * as React from "react";
import { storiesOf } from "@storybook/react";
import { AlertDialogWithRef } from "react-native-simple-elements/components/AlertDialog";
import Button from "react-native-simple-elements/components/Button";

const DefaultExample = (props) => {

    const alertDialogRef = React.useRef<any>();

    return (
        <>
            <Button
                onPress={() => alertDialogRef.current.open({})}
            >
                Open
            </Button>
            <AlertDialogWithRef
                dismissable={true}
                innerRef={alertDialogRef}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                }}
                contentStyle={{
                    width: 420,
                    maxWidth: "100%",
                }}
            />
        </>
    );
};

const ConfirmModalExample = (props) => {

    const alertDialogRef = React.useRef<any>();

    return (
        <>
            <Button
                onPress={() => alertDialogRef.current.open({})}
            >
                Open
            </Button>
            <AlertDialogWithRef
                mode="confirm"
                innerRef={alertDialogRef}
                message="Please confirm"
                contentContainerStyle={{
                    paddingHorizontal: 16,
                }}
                contentStyle={{
                    width: 420,
                    maxWidth: "100%",
                }}
            />
        </>
    );
};

const ErrorModalExample = (props) => {

    const alertDialogRef = React.useRef<any>();

    return (
        <>
            <Button
                onPress={() => alertDialogRef.current.open({})}
            >
                Open
            </Button>
            <AlertDialogWithRef
                mode="error"
                innerRef={alertDialogRef}
                message="Have error"
                contentContainerStyle={{
                    paddingHorizontal: 16,
                }}
                contentStyle={{
                    width: 420,
                    maxWidth: "100%",
                }}
            />
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
    .add("ConfirmModal", () => <ConfirmModalExample />)
    .add("ErrorModal", () => <ErrorModalExample />)
    .add("Playground", () => <PlaygroundExample />);
