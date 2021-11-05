import * as React from "react";
import { fireEvent, render } from "../../testUtils";
import Button from "../../Button";

describe("<Button />", () => {
    const setup = () => {
        const utils = render(
            <Button>
                Test
            </Button>
        );
        return { ...utils };
    };

    test("should render children", () => {
        const { getByText } = setup();
        expect(getByText(/test/i)).toBeDefined();
    });

    test("should onPress called", () => {
        const spyOnPress = jest.fn();
        const { getByA11yRole } = render(
            <Button
                onPress={spyOnPress}
            >
                Test
            </Button>
        );

        fireEvent(getByA11yRole ("button"), "press");

        expect(spyOnPress).toBeCalled();
    });
});
