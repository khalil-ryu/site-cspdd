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
    Img2,
} from './InfoElements';
import Radium, { StyleRoot } from 'radium';

const mystyle = {
    display : "flex",
    justifyContent: "center",
    '@media screen and (max-width: 576px)': {
        marginTop: '700px',
      },
}
const InfoSection4 = ({needed,lightBg, id, imgStart, topLine, lightText,headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, link, tittle}) => {
	return(
		<>
            <StyleRoot>
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
                    <div style={mystyle}>
                        <Img2 src={img} ></Img2>
                    </div>
			</InfoContainer>
            </StyleRoot>

		</>
	);
}

export default InfoSection4;