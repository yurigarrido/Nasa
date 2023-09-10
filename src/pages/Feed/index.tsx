import {useEffect, useState} from 'react';
import {getAsteroids} from '../../api/getAsteroids';
import {type Astronomical} from '../../models/Astronomical';
import moment from 'moment';
import {Card} from '../../components/card';
import {Conatainer, Container, FeedTitle, List, Period} from './styles';
import {formatDate} from '../../utils/formatter/date';
import {ArrowBendDownRight, DotsSix} from 'phosphor-react';

export const Feed = () => {
	const [asteroisData, setAsteroidData] = useState<Astronomical.Asteroids[] | undefined>(undefined);

	const startDate = moment().subtract('day', 1).format('YYYY-MM-DD');
	const endDate = moment().subtract('day', 7).format('YYYY-MM-DD');

	useEffect(() => {
		const fetchData = async () => {
			const result = await getAsteroids({
				start: startDate,
				end: endDate,
			});

			setAsteroidData(result);
		};

		fetchData();
	}, []);

	console.log(asteroisData);

	return (
		<Container>
			<FeedTitle>See the asterols that passed by here last week</FeedTitle>
			{asteroisData?.map(asteorid => (
				<div key={asteorid.period}>
					<Period> {formatDate(new Date(asteorid.period))}</Period>
			    <List>
				    {asteorid.items.map(item => <Card asteroid={item} key={item.imageUrl}/>)}
			    </List>
		    </div>
			),
			)}
		</Container>
	);
};

