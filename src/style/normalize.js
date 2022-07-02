import { createGlobalStyle } from 'styled-components';
import { Colors } from './base/Colors';

const Normalize = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        max-width: 1200px;
        margin: auto;
        padding: 0;
        color: ${Colors.dark};
        background-color: ${Colors.light};
    }

    :focus-visible { outline: none; }
`;

export default Normalize;
