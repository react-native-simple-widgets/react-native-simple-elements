import * as React from "react";
import { storiesOf } from "@storybook/react";
import Drawer, { DrawerContext } from "react-native-simple-elements/components/Drawer";
import Button from "react-native-simple-elements/components/Button";
import { ContainerFluid } from "react-native-simple-elements/components/Container";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const DrawerExample = (props) => {

    const { drawerIsOpen, setDrawerIsOpen } = React.useContext(DrawerContext);

    return (
        <>
            <Button
                onPress={() => setDrawerIsOpen(!drawerIsOpen)}
            >
                Toggle Drawer
            </Button>
            <ContainerFluid
                position="relative"
                height="100%"
            >
                <Drawer>
                    <Drawer.Item label="Item 1" />
                </Drawer>
            </ContainerFluid>
        </>
    );
};

storiesOf("Drawer", module)
    .add("Default", () => {
        return (
            <DrawerExample
            />
        )
    })
    .add("Mobile View", () => {
        return (
            <DrawerExample
            />
        )
    }, { viewport: { ...viewportParams, defaultViewport: "iphonex" }})
    .add("Playground", () => {
        return (
            <DrawerExample
            />
        )
    });
