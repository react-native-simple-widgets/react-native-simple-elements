import * as React from "react";
import { StyleSheet, View } from "react-native";
import color from "color";
import TouchableRipple from "../TouchableRipple/TouchableRipple";
import { $RemoveChildren } from "../types";
import { DefaultTheme, ThemeContext } from "styled-components";
import { SvgIcon } from "../Icon";
import MinusIcon from "@mdi/svg/svg/minus.svg";
import CheckIcon from "@mdi/svg/svg/check.svg";

type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Status of checkbox.
     */
    status: "checked" | "unchecked" | "indeterminate";
    /**
     * Whether checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Custom color for checkbox.
     */
    color?: string;
    /**
     * @optional
     */
    theme?: DefaultTheme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};

/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
const CheckboxIOS = ({
    status,
    disabled,
    onPress,
    testID,
    ...rest
}: Props) => {
    const theme = React.useContext(ThemeContext);
    const checked = status === "checked";
    const indeterminate = status === "indeterminate";

    const checkedColor = disabled
        ? theme.colors.disabled
        : rest.color || theme.colors.accent;

    let rippleColor;

    if (disabled) {
        rippleColor = color(theme.colors.text).alpha(0.16).rgb().string();
    } else {
        rippleColor = color(checkedColor).fade(0.32).rgb().string();
    }

    const icon = indeterminate ? MinusIcon : CheckIcon;

    return (
        <TouchableRipple
            {...rest}
            borderless
            rippleColor={rippleColor}
            onPress={onPress}
            disabled={disabled}
            // accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
            // accessibilityComponentType="button"
            accessibilityRole="checkbox"
            accessibilityState={{ disabled, checked }}
            accessibilityLiveRegion="polite"
            style={styles.container}
            testID={testID}
        >
            <View style={{ opacity: indeterminate || checked ? 1 : 0 }}>
                <SvgIcon
                    icon={icon}
                    size={24}
                    color={checkedColor}
                    // direction="ltr"
                />
            </View>
        </TouchableRipple>
    );
};

CheckboxIOS.displayName = "Checkbox.IOS";

const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
        padding: 6,
    },
});

export default CheckboxIOS;

// @component-docs ignore-next-line
const CheckboxIOSWithTheme = CheckboxIOS;
// @component-docs ignore-next-line
export { CheckboxIOSWithTheme as CheckboxIOS };