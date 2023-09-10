import {useEffect, useState} from 'react';
import {Logo} from '../../assets';
import {Container, Header, Footer, Main, Button, DateContainer, SidebarLeft} from './styles';
import {getAsronomicalPhoto} from '../../api/getAstronomicalPhoto';
import {type Astronomical} from '../../models/Astronomical';
import {formatDate} from '../../utils/formatter/date';
import {PencilSimple, Check, List, UserCircle} from 'phosphor-react';
import moment from 'moment';
import {Sidebar} from '../../components/sidebar';

export function Home() {
	const [astronomicalData, setAstronomicalData] = useState<Astronomical.PhotoData | undefined>(undefined);
	const [isEditDate, setIsEditDate] = useState(false);
	const [date, setDate] = useState('');
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getAsronomicalPhoto();

			setAstronomicalData(result);
		};

		fetchData();
	}, []);

	const currentDate = moment(date || astronomicalData?.date).subtract('day', 1).format('YYYY-MM-DD');

	const saveNewDate = async () => {
		setIsEditDate(false);
		setAstronomicalData(undefined);
		const result = await getAsronomicalPhoto(date);
		setAstronomicalData(result);
	};

	return (
		<Container>
			<Header><Button onClick={() => {
				setMenuOpen(!menuOpen);
			}}><List size={32} /></Button><Logo/><UserCircle size={32} /></Header>
			<Sidebar open={menuOpen} close={() => {
				setMenuOpen(false);
			}}/>
			{astronomicalData
			&& <Main>
				<div>
					<DateContainer>
						<span>Foto astronômica do dia
							{isEditDate
								? <><input type='date' value={date}
									onChange={(({target}) => {
										setDate(target.value);
									})}/><Button onClick={
									saveNewDate
								} title='Salvar data'>
									<Check size={20} />
								</Button>
								</>
								: <>
									<strong>
										{formatDate(new Date(currentDate))}
									</strong>
									<Button onClick={() => {
										setIsEditDate(true);
									}} title='Alterar data'>
										<PencilSimple size={20} />
									</Button>
								</>
							} </span>

					</DateContainer>

					<h1>{astronomicalData.title}</h1>

				</div>
				<img loading='eager' src={astronomicalData.url} alt={astronomicalData.title} />
				<div>
					<span>{astronomicalData.description}</span>
					<br />
					copyright: {astronomicalData.copyright}
				</div>
			</Main>
			}
			<Footer>
      Desenvolvido por <strong>Yuri Garrido</strong>
			</Footer>
		</Container>);
}
