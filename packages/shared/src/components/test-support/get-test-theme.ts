import { PaletteType } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { Overrides } from '@material-ui/core/styles/overrides';

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
