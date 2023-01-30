import styled from 'styled-components';

export const InfoContainer = styled.div`
	color: #fff;
	background: ${({lightBg}) => (lightBg ? '#9CC3D5FF' : '#010606')};

	@media screen and (max-width: 768px) {
		padding: 65px 0;

	}
	@media screen and (max-width: 576px) {
		padding: 0px 0;
		height: 2200px;	
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
	@media screen and (max-width:576px ) {
		height: 900px;
		
	}
`
export const ProjectTwoInfoWrapper = styled.div`
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
	@media screen and (max-width:576px ) {
		height: 900px;
		
	}
`
export const InfoWrapper3 = styled.div`
	display: grid;
	z-index: 1;
	height: auto;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding-top: 20px;
	justify-content: center;

`
export const InfoWrapper2 = styled.div`
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
	@media screen and (max-width:576px ) {
		height: 1350px;
		
	}

`
export const InfoRow = styled.div`

	display: grid;
	grid-auto-columns: minmax(auto, 3fr);
	align-items: center;
	grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1  col2'` : `'col2 col1 col1'`)};
	
	@media screen and (max-width: 768px) {
		align-self: flex-start;
	}	
	media screen and (max-width: 576px) {
		
		height: 1000px;

	}	
`

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;

	}
	@media screen and (max-width: 576px) {
		height: 100px;
		align-self: flex-start

	}	
		

`
export const Column12 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;

	}
	@media screen and (max-width: 576px) {
		height: auto;
		align-self: flex-start

	}	
		

`
export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
	@media screen and (max-width: 768px) {
		height: 300px;
		margin-bottom: 0px;

	}	
	@media screen and (max-width: 576px) {
		height: 100px;
		align-self: center

		

	}	
`
export const TextWrapper = styled.div`
	max-width: 100%;
	word-wrap: normal;
	padding-top: 0;
	padding-bottom: 25px;
	@media screen and (max-width: 576px) {
		padding-bottom: 0px;

	}	

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

	@media screen and (max-width: 576px) {
		font-size: 20px;
	}
`

export const ColoredHeading = styled.h1`
	margin-bottom: 24px;
	font-size: 40px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#010606')}
	background: #9CC3D5FF;
	@media screen and (max-width: 576px) {
		font-size: 20px;
	}
`

export const Heading2 = styled.h1`
	margin-bottom: 24px;
	font-size: 25px;
	
	line-height: 1.1;
	font-weight: 600;
	color: #5F4B8BFF;

	@media screen and (max-width: 576px) {
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
	@media screen and (max-width: 576px) {
		font-size: 18px;
		text-align: center;
		



	}	
`
export const Subtitle1 = styled.p`
	max-width: 100%;
	margin-bottom: 35px;
	font-size: 18px;
	font-weight: 500;
	line-height: 30px;
	text-align: justify;
	color: ${({darkText}) => (darkText ? '#010606' : '#fff')}
	@media screen and (max-width: 576px) {
		font-size: 18px;
		text-align: center;
		



	}	
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
export const Img2 = styled.img`
	width: 50%;
	margin: 0 0 10px 0;
	padding-right: 0;
	@media screen and (max-width: 768px) {
		
	}
`