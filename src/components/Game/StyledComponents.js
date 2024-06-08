import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .titlePara{
    margin: 5px;
  }

  .rulesImage{
    width: 500px;
  }

  .flex-row{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .flex-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .topIcons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    margin-bottom: 60px;
  }

  .popUp{
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon{
    width: 100px;
    height: 100px;
    margin: 20px;
  }

  .close{
    align-self: flex-end;
    background-color: transparant;
    border: none;
    padding: 10px;
    margin: 0px;
  }

  .iconButton{
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
  }
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
  color: white;
  font-family: Roboto;
`
export const Rules = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  outline: none;
  align-self: flex-end;
  margin-right: 50px;
  font-weight: bold;
  font-family: Roboto;
`
export const ScoreContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  padding: 10px;
  border: 2px solid white;
  border-radius: 8px;
  align-items: center;
`
export const RPS = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScorePara = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: white;
  border-radius: 8px;
  color: black;
  padding: 0px 40px;
`
export const Score = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0px;
  font-family: Roboto;
`
export const GamePlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
