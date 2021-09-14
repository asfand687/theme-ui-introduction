import { Container, Grid } from 'theme-ui'
import SectionHeader from '../components/SectionHeader'

const KeyFeatures = () => {
	return (
		<section sx={{ variant: 'section.KeyFeature' }} id='feature'>
			<Container>
				<SectionHeader
					slogan='Whats the function?'
					title='Meet the feature of our product'
				/>
			</Container>
		</section>
	)
}

export default KeyFeatures
