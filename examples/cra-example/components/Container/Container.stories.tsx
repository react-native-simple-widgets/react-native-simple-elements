import * as React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react";
import Container, { Row, Column, ContainerFluid, AbsoluteView } from "react-native-simple-elements/components/Container";
import * as colors from "react-native-simple-elements/components/theme/colors";

const AbsoluteViewExample = () => {

    return (
        <View
        style={{
            width: 500,
            height: 300,
        }}
        >
            <View
                style={{
                    width: 500,
                    height: 300,
                }}
            >
                <Text>Hello from Column 1</Text>
            </View>
            <AbsoluteView
                style={{
                    backgroundColor: colors.orange500,
                }}
            >
                <Text>Hello from Column 2</Text>
            </AbsoluteView>
        </View>
    )
}

storiesOf("Container", module)
    .add("Default", () => {
        return (
            <View
                style={{ display: "flex" }}
            >
                <Container
                    style={{ alignSelf: "center" }}
                >
                    <Text>Hello</Text>
                </Container>
                <ContainerFluid
                    style={{ alignSelf: "center" }}
                >
                    <Text>Hello</Text>
                </ContainerFluid>
                <Row size={12}>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            First Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            Second Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            First Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            Second Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            First Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            Second Column
                        </Text>
                    </Column>
                </Row>
                <Row size={12}>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            First Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            Second Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            First Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            Second Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            First Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            Second Column
                        </Text>
                    </Column>
                </Row>
            </View>
        )
    })
    .add("Row", () => {

        return (
            <ContainerFluid>
                <Row>
                    <Column sm={12}>
                        <Text>Hello from row 1</Text>
                    </Column>
                </Row>
                <Row>
                    <Column sm={12}>
                        <Text>Hello from row 2</Text>
                    </Column>
                </Row>
            </ContainerFluid>
        )
    })
    .add("Column", () => {

        return (
            <Row>
                <Column sm={12} md={6} lg={6}>
                    <Text>Hello from Column 1</Text>
                </Column>
                <Column sm={12} md={6} lg={6}>
                    <Text>Hello from Column 2</Text>
                </Column>
            </Row>
        )
    })
    .add("AbsoluteView", () => <AbsoluteViewExample />)
