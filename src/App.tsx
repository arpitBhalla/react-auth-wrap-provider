import React from "react";
import { Box } from "./components/Box";
import styled from "styled-components";
import { useDimensions } from "./hooks/useDimensions";
import { DefaultIndex, IndexContext } from "./context/IndexContext";
import { IndexType } from "./types/IndexType";
import { SIZE } from "./core/constants";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
`;

function App() {
  const { height, width } = useDimensions();
  const [state, setState] = React.useState(DefaultIndex);

  const maxRows = React.useMemo(() => Math.floor(width / SIZE), [width]);
  const maxColumn = React.useMemo(() => Math.floor(height / SIZE), [height]);

  const updateCell = React.useCallback(
    ({ x: row, y: column }: IndexType) => {
      if (row && column && row !== maxRows - 1 && column !== maxColumn - 1) {
        // random direction
        const direction = Math.floor(Math.random() * 100 - 50) % 2;
        // non boundary cells
        setState({ x: row + direction, y: column + +!direction });
      } else if (row >= maxRows - 1) {
        // rightmost column
        setState({ x: row - 1, y: column });
      } else {
        // leftmost column
        setState({ x: row + 1, y: column });
      }
    },
    [maxColumn, maxRows]
  );

  return (
    <IndexContext.Provider
      value={{
        state,
        updateCell,
      }}
    >
      <Container>
        {Array.from({ length: maxColumn }).map((_, i) =>
          Array.from({ length: maxRows }).map((_, j) => (
            <Box key={maxColumn * i + maxRows * j} x={j} y={i} />
          ))
        )}
      </Container>
    </IndexContext.Provider>
  );
}

export default App;
