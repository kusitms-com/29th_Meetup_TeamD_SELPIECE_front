import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
}
input, textarea {
	-moz-user-select: auto;
	-webkit-user-select: auto;
	-ms-user-select: auto;
	user-select: auto;
}
input:focus {
  outline: none;
}
button {
	border: none;
	background: none;
	padding: 0;
	cursor: pointer;
}
a{
  text-decoration: none;
  color: inherit;
}
svg, image {
	display: block;
}
`;

export const SectionContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const moveDown = keyframes`
  50% {
    transform: translateY(-20px);
  }`;

export const moveUp = keyframes`
  50% {
    transform: translateY(20px);
  }`;

export const moveRight = keyframes`
  50% {
    transform: translateX(20px);
  }`;

export const moveLeft = keyframes`
  50% {
    transform: translateX(-20px);
  }`;
