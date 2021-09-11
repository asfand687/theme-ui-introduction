/** @jsxImportSource theme-ui */
import { Container, Box, Heading, Text, Button, Image } from 'theme-ui'
import BannerImg from '../assets/banner-thumb.png'
import ShapeLeft from '../assets/shape-left.png'
import ShapeRight from '../assets/shape-right.png'

const styles = {
	banner: {
		fontFamily: "'DM Sans', sans-serif",
		pt: ['140px', '145px', '155px', '180px', '215px'],
		pb: [2, 0, 2, 0, 5],
		position: 'relative',
		zIndex: 2,
		'&::before': {
			position: 'absolute',
			content: '""',
			bottom: 6,
			left: 0,
			height: '100%',
			width: '100%',
			zIndex: -1,
			backgroundImage: `url(${ShapeLeft})`,
			backgroundRepeat: `no-repeat`,
			backgroundPosition: 'bottom left',
			backgroundSize: '36%',
		},
		'&::after': {
			position: 'absolute',
			content: '""',
			bottom: '40px',
			right: 0,
			height: '100%',
			width: '100%',
			zIndex: -1,
			backgroundImage: `url(${ShapeRight})`,
			backgroundRepeat: `no-repeat`,
			backgroundPosition: 'bottom right',
			backgroundSize: '32%',
		},
		container: {
			minHeight: 'inherit',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
		contentBox: {
			width: ['100%', null, null, '57%', '60%'],
			mx: 'auto',
			px: ['2rem', '4rem'],
			textAlign: 'center',
			mb: ['40px', null, null, null, 7],
		},
		imageBox: {
			justifyContent: 'center',
			textAlign: 'center',
			display: 'inline-flex',
			mb: [0, null, -6, '-40px', -3],
			img: {
				position: 'relative',
				height: [245, 'auto'],
			},
		},
	},
}

const Banner = () => {
	return (
		<section sx={styles.banner} id='home'>
			<Container sx={styles.banner.container}>
				<Box sx={styles.banner.contentBox}>
					<Heading as='h1' variant='heroPrimary'>
						Top Quality Digital Products to Explore
					</Heading>
					<Text as='p' variant='heroSecondary'>
						Check out out website to find great software products and deals. If
						you need a website or a web application, this is the place to go.
					</Text>
					<Button variant='primary'>Explore</Button>
				</Box>
				<Box sx={styles.banner.imageBox}>
					<Image src={BannerImg} alt='banner' />
				</Box>
			</Container>
		</section>
	)
}

export default Banner
