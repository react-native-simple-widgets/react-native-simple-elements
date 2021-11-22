import * as React from "react";
// import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import Appbar, {
    AppbarAction,
    AppbarBackAction,
    AppbarContent,
    AppbarHeader,
} from "react-native-simple-elements/components/Appbar";
import Menu from "react-native-simple-elements/components/Menu";
import MenuIcon from "@mdi/svg/svg/menu.svg";
import ArchiveIcon from "@mdi/svg/svg/archive.svg";
import MailIcon from "@mdi/svg/svg/mail.svg";
import LabelIcon from "@mdi/svg/svg/label.svg";
import DeleteIcon from "@mdi/svg/svg/delete.svg";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const iphonelayout = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex",
    },
};

const AppbarHeaderExample = () => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <AppbarHeader
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
            }}
        >
            <AppbarBackAction
                // icon={MenuIcon}
                onPress={() => console.log('Pressed archive')}
            />
            <AppbarContent title="Title" />
            <AppbarAction icon={MailIcon} onPress={() => console.log('Pressed mail')} />
            <AppbarAction icon={LabelIcon} onPress={() => console.log('Pressed label')} />
            <AppbarAction
                icon={DeleteIcon}
                onPress={() => console.log('Pressed delete')}
            />
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <AppbarAction
                        icon={MenuIcon}
                        // color="white"
                        onPress={openMenu}
                    />
                }>
                <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="Option 1" />
                <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Option 2" />
                <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Option 3" disabled />
            </Menu>
        </AppbarHeader>
    );
}

const AppbarExample = () => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <>
            <Appbar style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
            }}>
                <AppbarAction
                    icon={ArchiveIcon}
                    onPress={() => console.log('Pressed archive')}
                />
                <AppbarAction icon={MailIcon} onPress={() => console.log('Pressed mail')} />
                <AppbarAction icon={LabelIcon} onPress={() => console.log('Pressed label')} />
                <AppbarAction
                    icon={DeleteIcon}
                    onPress={() => console.log('Pressed delete')}
                />
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <AppbarAction
                            icon={MenuIcon}
                            // color="white"
                            onPress={openMenu}
                        />
                    }>
                    <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="Option 1" />
                    <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Option 2" />
                    <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Option 3" disabled />
                </Menu>
            </Appbar>
        </>
    );
}

storiesOf("Appbar", module)
    .add("Default", () => {
        return (
            <AppbarExample />
        )
    })
    .add("Mobile View", () => {
        return (
            <AppbarHeaderExample />
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        }
    })
    .add("Appbar.Header", () => {
        return (
            <AppbarHeaderExample />
        )
    })
    .add("Playground", () => {
        return (
            <AppbarHeaderExample />
        )
    });
