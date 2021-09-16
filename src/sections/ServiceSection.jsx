/** @jsxImportSource theme-ui */
import React, { useState } from 'react'
import { keyframes } from '@emotion/react'
import {
	jsx,
	Container,
	Box,
	Grid,
	Text,
	Heading,
	Button,
	Image,
} from 'theme-ui'

import ServiceThumb from '../assets/service-thumb.jpg'
import shapePattern from '../assets/shape-pattern1.png'

import Smart from '../assets/services/smart.svg'
import Secure from '../assets/services/secure.svg'
import TextFeature from '../components/TextFeature'

const data = {
	subTitle: 'our services',
	title: 'Business Goals Achieved with Design',
	features: [
		{
			id: 1,
			imgSrc: Smart,
			altText: 'Smart Features',
			title: 'Smart Features',
			text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
		},
		{
			id: 2,
			imgSrc: Secure,
			altText: 'Secure Contents',
			title: 'Secure Contents',
			text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
		},
	],
}

const styles = {
	coreFeature: {
		py: [0, null, null, 2, null, 7],
		position: 'relative',
	},
	containerBox: {
		display: 'flex',
		alignItems: ['flex-start', null, null, 'center'],
		justifyContent: ['flex-start', null, null, 'space-between'],
		flexDirection: ['column', null, null, 'row'],
		pb: [0, null, null, null, null, 7],
	},
	thumbnail: {
		mr: ['auto', null, null, 6, 60, 85],
		order: [2, null, null, 0],
		ml: ['auto', null, null, 0],
		display: 'inline-flex',
		position: 'relative',
		'> img': {
			position: 'relative',
			zIndex: 1,
			height: [310, 'auto'],
		},
	},
	shapeBox: {
		position: 'absolute',
		bottom: -68,
		left: -160,
		zIndex: -1,
		display: ['none', null, null, null, null, 'inline-block'],
	},

	contentBox: {
		width: ['100%', null, null, 315, 390, 450, null, 500],
		flexShrink: 0,
		mb: [7, null, 60, 0],
		textAlign: ['center', null, null, 'left'],
	},
	grid: {
		pr: [2, 0, null, null, 6, '70px'],
		pl: [2, 0],
		pt: [2, null, null, null, 3],
		mx: 'auto',
		width: ['100%', 370, 420, '100%'],
		gridGap: ['35px 0', null, null, null, '50px 0'],
		gridTemplateColumns: ['repeat(1,1fr)'],
	},
	card: {
		display: 'flex',
		alignItems: 'flex-start',
		transition: 'all 0.3s',
	},

	icon: {
		width: ['45px', null, null, null, '55px'],
		height: 'auto',
		flexShrink: 0,
		mr: [3, null, null, null, 4],
	},
	wrapper: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'left',
		mt: '-5px',
		title: {
			fontSize: 3,
			color: 'heading_secondary',
			lineHeight: 1.4,
			fontWeight: 700,
			mb: [2, null, 3, 2, 3],
		},

		subTitle: {
			fontSize: [1, null, null, '14px', 1],
			fontWeight: 400,
			lineHeight: 1.9,
		},
	},
}

const ServiceSection = () => {
	const [videoOpen, setVideoOpen] = useState(false)

	const handleClick = (e) => {
		e.preventDefault()
		setVideoOpen(true)
	}
	return (
		<section sx={{ variant: 'section.services' }}>
			<Container sx={styles.containerBox}>
				<Box sx={styles.thumbnail}>
					<Image src={ServiceThumb} alt='thumbnail' />
					<Box sx={styles.shapeBox}>
						<Image src={shapePattern} alt='Shape' />
					</Box>
				</Box>
				<Box sx={styles.contentBox}>
					<TextFeature subTitle={data.subTitle} title={data.title} />
					<Grid sx={styles.grid}>
						{data.features.map((feature) => (
							<Box sx={styles.card} key={feature.id}>
								<Image
									src={feature.imgSrc}
									alt={feature.altText}
									sx={styles.icon}
								/>
								<Box sx={styles.wrapper}>
									<Heading sx={styles.wrapper.title}>{feature.title}</Heading>
									<Text sx={styles.wrapper.subTitle}>{feature.text}</Text>
								</Box>
							</Box>
						))}
					</Grid>
				</Box>
			</Container>
		</section>
	)
}

export default ServiceSection
