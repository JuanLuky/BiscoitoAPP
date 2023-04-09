import { css } from 'styled-components';
import styled from 'styled-components/native';


export type BiscoitoProps = {
    type: 'primary' | 'secondary',
}


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
`;

export const Images = styled.Image`
    width: 300px;
    height: 330px;
    padding: 10px;
    margin-bottom: 50px;
    object-fit: contain;
`;

export const AreaButtons = styled.View`
    gap: 20px;
`;
export const Buttons = styled.TouchableOpacity<BiscoitoProps>`
    color: aliceblue;
    padding: 10px 30px;
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.COLORS.border_color_100};
    
    ${({type}) => type === 'secondary' && css`
        border: 2px solid ${({theme}) => theme.COLORS.border_color_200};
    `};
`;

export const TextButtons = styled.Text<BiscoitoProps>`
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.border_color_100};

    ${({type}) => type === 'secondary' && css`
        color: ${({theme}) => theme.COLORS.border_color_200};
    `};
`;