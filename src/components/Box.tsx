import React from "react";
import styled from "styled-components";
import { IndexType } from "../types/IndexType";
import { useIndex } from "../hooks/useIndex";
import { generateColor } from "../utils/generateColor";
import { SIZE } from "../core/constants";

type DivType = {
  backgroundColor?: string;
};

const Div = styled.div<DivType>`
  display: block;
  width: ${SIZE}px;
  height: ${SIZE}px;
  background-color: ${(props) => props.backgroundColor};
`;

export const Box = React.memo(({ x, y }: IndexType): JSX.Element => {
  const { state, updateCell } = useIndex();
  const [color, setColor] = React.useState(generateColor());

  React.useEffect(() => {
    if (state?.x === x && state?.y === y) {
      setColor(generateColor());
    }
  }, [state, x, y]);

  const handleClick = React.useCallback((): void => {
    setColor(generateColor());
    updateCell?.({ x, y });
  }, [updateCell, x, y]);

  return (
    <Div id={x + color + y} onClick={handleClick} backgroundColor={color} />
  );
});
