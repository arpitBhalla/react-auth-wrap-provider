import React from "react";
import { Box } from "./components/Box";
import styled from "styled-components";
import { useDimensions } from "./hooks/useDimensions";
import { DefaultIndex, IndexContext } from "./context/IndexContext";
import { IndexType } from "./types/IndexType";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
`;

function App() {
  const { height, width } = useDimensions();
  const [state, setState] = React.useState(DefaultIndex);
  const maxRows = React.useMemo(() => Math.floor(width / 80), [width]);
  const maxColumn = React.useMemo(() => Math.floor(height / 80), [height]);

  const updateCell = React.useCallback(
    ({ x: row, y: column }: IndexType) => {
      const direction = Math.floor(Math.random() * 100 - 50) % 2;
      if (row && column && row !== maxRows - 1 && column !== maxColumn - 1) {
        setState({ x: row + direction, y: column + +!direction });
      } else if (row >= maxRows - 1) {
        setState({ x: row - 1, y: column });
      } else {
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
