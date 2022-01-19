import { createGlobalStyle } from 'styled-components';
import { Colors } from './base/Colors';

const Normalize = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        color: ${Colors.dark}
    }
`;

export default Normalize;
