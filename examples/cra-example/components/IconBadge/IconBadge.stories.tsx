import * as React from "react";
import { Text, View } from "react-native";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { SvgIcon } from "react-native-simple-elements/components/Icon";
import IconBadge from "react-native-simple-elements/components/IconBadge";
import AccountIcon from "@mdi/svg/svg/account.svg";

storiesOf("IconBadge", module)
    .addDecorator(withKnobs)
    .add("IconBadge", () => {
        const color = text("color", "#ffff00");
        const size = number("size", 24);
        const outline = boolean("outline", false);
        const [ badgeCount, ] = React.useState(1);

        return (
            <View style={{ width: "24px", height: "24px" }}>
                <IconBadge
                    MainElement={
                        <SvgIcon
                            icon={AccountIcon}
                            color={color}
                            size={size}
                            outline={outline}
                        />
                    }
                    BadgeElement={
                        <Text style={{color:'#FFFFFF'}}>{badgeCount}</Text>
                    }
                    IconBadgeStyle={{
                        width: 16,
                        height: 16,
                        right: -8,
                        backgroundColor: '#FF00EE'
                    }}
                    Hidden={badgeCount==0}
                />
            </View>
        )
    })
