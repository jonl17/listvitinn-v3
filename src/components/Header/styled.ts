import styled, { css } from "styled-components"
import { breakpoints } from "~/shared/constants"
import { Open } from "~/types"

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: var(--smallPad);
  display: grid;
  grid-template-columns: var(--boxSize) auto;
  box-sizing: border-box;
  padding: 0 var(--mediumPad);
  z-index: 8;
  width: 100%;
  border-bottom: 1px solid gray;
  background: white;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 var(--smallestPad);
  }
  .pages-wrap {
    display: flex;
    align-items: center;
    position: absolute;
    right: var(--mediumPad);
    height: 100%;
    p {
      margin-left: var(--mediumPad);
    }
     
    @media (max-width: ${breakpoints.mobile}) {
      height: 100vh;
      width: 0%;
      pointer-events: none;
      overflow: hidden;
      
      transition: .1s;
      position: fixed;
      top: 0;
      right: 0;
      background: var(--white);
      flex-direction: column;
      justify-content: center;
      p {
        opacity: 0;
        font-size: 2em;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        margin-left: 0;
      }
      ${(props: Open) => props.open && css`
        width: 100%;
        pointer-events: all;
        p {
          opacity: 1;
          transition: .2s;
        }
      `};
    }
  }


`