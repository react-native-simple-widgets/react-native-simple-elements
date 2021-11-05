import * as React from "react";
import { render } from "../../testUtils";
import Text from "../../Text";

describe("<Text />", () => {

    test("should render children", () => {
        const tree = render(
            <Text>
                Test
            </Text>
        );

        expect(tree).toMatchSnapshot();
    });
});
