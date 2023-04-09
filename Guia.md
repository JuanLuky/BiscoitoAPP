import { css } from 'styled-components';
import styled from 'styled-components/native';


export type BiscoitoProps = {
    type: 'primary' | 'secondary',
}


export const Buttons = styled.TouchableOpacity<BiscoitoProps>`

    Condicional usada para mudar a cor da bordar

    border: 2px solid ${({ theme, type }) => type === 'primary' ? theme.COLORS.border_color_100 : theme.COLORS.border_color_200};

    Caso queira fazer uma condicional para estilizar um elemento especifico, usa o css do styled!

    ${({type, theme}) => type === 'primary' && css `
        border: 2px solid ${({theme}) => theme.COLORS.border_color_100}
    `};
`;
