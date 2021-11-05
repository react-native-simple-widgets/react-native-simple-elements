import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import Menu, { Menu2 } from "react-native-simple-elements/components/Menu";
import Button from "react-native-simple-elements/components/Button";
import Divider from "react-native-simple-elements/components/Divider";
import HomeIcon from '@mdi/svg/svg/home.svg';

const MenuExample = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View
            style={{
                paddingTop: 50,
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>Show menu</Button>}
            >
                <Menu.Item onPress={() => { }} title="Item 1" icon={HomeIcon} />
                <Menu.Item onPress={() => { }} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Item 3" />
            </Menu>
        </View>
    );
};

const Menu2Example = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View
            style={{
                paddingTop: 50,
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <Menu2
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>Show menu</Button>}
            >
                <Menu.Item onPress={() => { }} title="Item 1" icon={HomeIcon} />
                <Menu.Item onPress={() => { }} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Item 3" />
            </Menu2>
        </View>
    );
};

const MenuAlignRightExample = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View
            style={{
                paddingTop: 50,
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>Show menu</Button>}
                alignRight={true}
            >
                <Menu.Item onPress={() => { }} title="Item 1" icon={HomeIcon} />
                <Menu.Item onPress={() => { }} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Item 3" />
            </Menu>
        </View>
    );
};

storiesOf("Menu", module)
    .add("Default", () => {
        return (
            <MenuExample />
        )
    })
    .add("Menu2", () => <Menu2Example />)
    .add("Align right", () => <MenuAlignRightExample />)
    .add("Playground", () => <Menu2Example />);
