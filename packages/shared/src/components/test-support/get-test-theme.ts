import { PaletteType } from 'material-ui';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import createMuiTheme, { Theme } from 'material-ui/styles/createMuiTheme';
import { PaletteOptions } from 'material-ui/styles/createPalette';
import { Overrides } from 'material-ui/styles/overrides';

const paletteType: PaletteType = 'light';

const overrides: Overrides = {
    MuiButton: {
        root: {
            // Button text should not be all upper case
            textTransform: 'none'
        }
    }
};

export function getTestTheme(): Theme {
    const palette: PaletteOptions = {
        primary: {
            main: blue[500]
        },
        secondary: {
            main: pink.A400
        },
        error: {
            main: red.A400
        },
        type: paletteType
    };
    return createMuiTheme({ palette, overrides });
}
