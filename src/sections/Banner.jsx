/** @jsxImportSource theme-ui */
import { Container, Box, Heading, Text, Button } from 'theme-ui'

const styles = {
	banner: {
		fontFamily: "'DM Sans', sans-serif",
		pt: ['100px', '110px'],
		pb: [2, 0, 2, 0, 5],
		position: 'relative',
		zIndex: 2,
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
			</Container>
		</section>
	)
}

export default Banner
