/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react"

export const HelloWorld: FC = () => {
  const containerStyle = css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  
  const pStyle = css`
    color: #0000cd;
    font-weight: bold;
    font-size: 20px;
  `

  return (
    <div css={containerStyle}>
      <p css={pStyle}>Hello World</p>
    </div>
  )
}