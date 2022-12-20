import React from 'react';
import {Button} from '../ButtonElement';
import {
	InfoContainer,
	InfoWrapper3,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from './InfoElements';

const InfoSection3 = ({needed,lightBg, id, imgStart, topLine, lightText,headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, link, tittle}) => {
	return(
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper3>
						<Column1>
							<TextWrapper>
                                <h1>{tittle}</h1>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>							
							</TextWrapper>
						</Column1>
				</InfoWrapper3>
			</InfoContainer>
		</>
	);
}

export default InfoSection3;