import styled from 'styled-components';

export const InfoContainer = styled.div`
	color: #fff;
	background: ${({lightBg}) => (lightBg ? '#9CC3D5FF' : '#010606')};

	@media screen and (max-width: 768px) {
		padding: 65px 0;

	}
`

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 700px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding-top: 20px;
	justify-content: center;
	@media screen and (max-width:768px ) {
		height: 1100px;
	}
`

export const InfoRow = styled.div`

	display: grid;
	grid-auto-columns: minmax(auto, 3fr);

	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1  col2'` : `'col1 col2'`)};
	
	@media screen and (max-width: 768px) {
		grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}


	}	
`

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
	

`
export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
	@media screen and (max-width: 768px) {
		height: 300px;

	}	
`
export const TextWrapper = styled.div`
	max-width: 100%;
	word-wrap: normal;
	padding-top: 0;
	padding-bottom: 25px;
`

export const TopLine = styled.p`
	color: #0063B2FF;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 0px;

`
export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 40px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#010606')}

	@media screen and (max-width: 480px) {
		font-size: 20px;
	}
`
export const Subtitle = styled.p`
	max-width: 100%;
	margin-bottom: 35px;
	font-size: 18px;
	font-weight: 500;
	line-height: 24px;
	text-align: justify;
	color: ${({darkText}) => (darkText ? '#010606' : '#fff')}
`

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%
`

export const Img = styled.img`
	width: 100%
	margin: 0 0 10px 0;
	padding-right: 0;
	@media screen and (max-width: 768px) {
		
	}
`