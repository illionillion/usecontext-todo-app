import { css } from "@emotion/react";

export const ToDoAppContainer = css`
  width: 100%;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoAppInner = css`
  width: 50%;
  min-width: 350px;
  height: 100%;
  flex-direction: column;
  padding-block: 10%;
  gap: 1.25rem;
`;
