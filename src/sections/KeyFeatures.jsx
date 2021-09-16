import { Container, Grid } from 'theme-ui'
import SectionHeader from '../components/SectionHeader'
import Performance from '../assets/key-feature/performance.svg'
import Partnership from '../assets/key-feature/partnership.svg'
import Subscription from '../assets/key-feature/subscription.svg'
import Support from '../assets/key-feature/support.svg'
import FeatureCardColumn from '../components/FeatureCardColumn'

const data = [
	{
		id: 1,
		imgSrc: Performance,
		altText: 'Fast Performance',
		title: 'Fast Performance',
		text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
	},
	{
		id: 2,
		imgSrc: Partnership,
		altText: 'Partnership deal',
		title: 'Partnership deal',
		text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
	},
	{
		id: 3,
		imgSrc: Subscription,
		altText: 'Pro Subscription',
		title: 'Pro Subscription',
		text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
	},
	{
		id: 4,
		imgSrc: Support,
		altText: 'Customer Support',
		title: 'Customer Support',
		text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
	},
]

const styles = {
	grid: {
		width: ['100%', '80%', '80%', '80%', '100%'],
		mx: 'auto',
		gridGap: ['35px 0', '40px 40px', '50px 60px', '50px 40px', '55px 90px'],
		gridTemplateColumns: [
			'repeat(1,1fr)',
			null,
			'repeat(2,1fr)',
			null,
			'repeat(4,1fr)',
		],
	},
}

const KeyFeatures = () => {
	return (
		<section sx={{ variant: 'section.KeyFeature' }} id='feature'>
			<Container>
				<SectionHeader
					slogan='Whats the function?'
					title='Meet the feature of our product'
				/>
				<Grid sx={styles.grid}>
					{data.map((item) => (
						<FeatureCardColumn
							key={item.id}
							src={item.imgSrc}
							altText={item.altText}
							title={item.title}
							text={item.text}
						/>
					))}
				</Grid>
			</Container>
		</section>
	)
}

export default KeyFeatures
