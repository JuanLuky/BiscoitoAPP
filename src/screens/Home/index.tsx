import {
  AreaButtons,
  Buttons,
  Container,
  Images,
  TextButtons,
  BiscoitoProps,
} from "./style";

const img1 = require("../../assets/image/bis1.png");
const img2 = require("../../assets/image/bis2.png");

export function Home() {
  return (
    <Container>
      <Images source={img1}></Images>

      <AreaButtons>
        <Button type="primary"/>
      </AreaButtons>
    </Container>
  );
}

function Button({ type }: BiscoitoProps) {
  return (
    <>
      <Buttons activeOpacity={0.6} type={type}>
        <TextButtons type={type}>Quebrar Biscoito</TextButtons>
      </Buttons>
      <Buttons activeOpacity={0.6} type="secondary">
        <TextButtons type="secondary">Montar Biscoito</TextButtons>
      </Buttons>
    </>
  );
}
