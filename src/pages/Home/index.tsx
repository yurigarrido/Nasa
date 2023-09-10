import {useEffect, useState} from 'react';
import {Container, Main, DateContainer, Content, Card, Title, Description, Image, Date} from './styles';
import {getAsronomicalPhoto} from '../../api/getAstronomicalPhoto';
import {type Astronomical} from '../../models/Astronomical';
import {PencilSimple, Check} from 'phosphor-react';
import moment from 'moment';
import toast from 'react-hot-toast';
import {Button} from '../../components/button/styles';
import {ImageViewer} from '../../components/imageViewer';

export function Home() {
	const [astronomicalData, setAstronomicalData] = useState<Astronomical.PhotoData | undefined>(undefined);
	const [isEditDate, setIsEditDate] = useState(false);
	const [date, setDate] = useState('');
	const [openImageViewer, setOpenImageViewer] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const result = await getAsronomicalPhoto();

			setAstronomicalData(result);
			setIsLoading(false);
		};

		fetchData();
	}, []);

	const currentDate = moment(astronomicalData?.date).format('YYYY-MM-DD');

	const saveNewDate = async () => {
		if (moment(date).isAfter(moment(new Date()).subtract('day', 1))) {
			toast.error('select a date smaller than today');
			return;
		}

		if (moment(currentDate).isSame(moment(date))) {
			toast.error('select a date other than the current one');
			return;
		}

		setIsLoading(true);

		setIsEditDate(false);
		setAstronomicalData(undefined);
		const result = await getAsronomicalPhoto(date);
		setAstronomicalData(result);

		setIsLoading(false);
	};

	const handleExpandImage = () => {
		setOpenImageViewer(true);
	};

	const handleCloseExapandImage = () => {
		setOpenImageViewer(false);
	};

	return (
		<Container>
			{!isLoading && astronomicalData
				? <>
					<Main>
						<Content>
							<DateContainer>
								<span>Astronomical photo of the day {' '}
									{isEditDate
										? <>
											<input type='date' value={date}
												onChange={(({target}) => {
													setDate(moment(target.value).format('YYYY-MM-DD'));
												})}/> {' '} <Button css={{color: '$cardText'}} onClick={
												saveNewDate

											} title='Salvar data'>
												<Check size={20} />
											</Button>
										</>
										: <span>
											<strong>
												{moment(currentDate).format('LL')}
											</strong> {' '}
											<Button css={{color: '$cardText'}} onClick={() => {
												setIsEditDate(true);
											}} title='Alterar data'>
												<PencilSimple size={20} />
											</Button>
										</span>
									}
								</span>

							</DateContainer>

							<h1>{astronomicalData.title}</h1>

							<img loading='eager' title='click to expand' onClick={handleExpandImage} src={astronomicalData.url} alt={astronomicalData.title} />
							<div>
								<span>{astronomicalData.description}</span>
								<br />
					copyright: {astronomicalData.copyright}
							</div>
						</Content>
					</Main>
					<ImageViewer open={openImageViewer} close={handleCloseExapandImage} src={astronomicalData.url}/>
				</>

				:				(
					<Card>
						<Date/>
						<Title/>

						<Image/>

						<Description/>
					</Card>)
			}

		</Container>);
}
