import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
	background: #9CC3D5FF;
	display: flex;
	justify-content: center;
	align-items: center;
	
	padding: 0 30px;
	height: 100vh;
	position: relative;
	z-index: 1;
	
	
		@media screen and (max-width: 768px) {
		align-self: flex-start;
		height: 750px;
	}
		@media screen and (max-width: 576px) {
		height: 600px;
		

	}

`

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	@media screen and (max-width: 576px) {
		top: 70px;
	}

	
`

export const VideoBg = styled.video`
	width: 100%;
	height: auto;
	-o-object-fit: cover;
	/* The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.*/
	object-fit: cover;
	background: #232a34;

    @media screen and (max-width: 576px) {
    	display:none;
	}
`

export const ImgBg = styled.img`
	display: none;
	@media screen and (max-width: 576px) {
		display: initial;
		margin-bottom: 0px;
		padding-botoom: 0px;
		width: 100%;
  		height: auto;


	}
`

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const HeroH1 = styled.h1`
	color: #000;
	font-size: 48px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 40px;
		align-self: flex-start
	}
	@media screen and (max-width: 576px) {
		font-size: 17px;
		text-align: center;
		align-self: flex-start;
		
	}

`

export const HeroP = styled.p`
	margin-top: 20px;
	color: #000;
	font-size: 24px;
	text-align: justify;
	line-height: 1.6;
	max-width: 1100px;

	@media screen and (max-width: 768px) {
		font-size: 24px;
		text-align: center;
	}
	@media screen and (max-width: 576px) {
		font-size: 15px;
		margin-bottom: 10px
	}
	
`

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`