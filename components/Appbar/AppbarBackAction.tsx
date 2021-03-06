import * as React from "react";
import type { $Omit } from "../types";
import AppbarAction from "./AppbarAction";
// import AppbarBackIcon from './AppbarBackIcon';
import type { StyleProp, ViewStyle } from "react-native";
import ArrowLeftIcon from "@mdi/svg/svg/arrow-left.svg";

type Props = $Omit<
    React.ComponentPropsWithoutRef<typeof AppbarAction>,
    "icon"
> & {
    /**
     *  Custom color for back icon.
     */
    color?: string;
    /**
     * Name of the icon to show.
     */
    icon?: React.ReactElement;
    /**
     * Optional icon size.
     */
    size?: number;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};

/**
 * A component used to display a back button in the appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import Appbar from 'react-native-simple-elements/components/Appbar';
 *
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarBackAction = ({ icon, accessibilityLabel = "Back", ...rest }: Props) => (
    <AppbarAction
        accessibilityLabel={accessibilityLabel}
        {...rest}
        // icon={AppbarBackIcon}
        icon={icon ? icon : ArrowLeftIcon}
    />
);

AppbarBackAction.displayName = "Appbar.BackAction";

export default AppbarBackAction;
