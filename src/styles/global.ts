import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
    list-style-type:none;
    text-decoration:none;
}

body{
    width:100%;
    height:100%;

}

html,
body{
    
    font-size:100%;
    font-family:'Poppins', sans-serif;

}
`;

export default GlobalStyle;
