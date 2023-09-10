import { type Astronomical } from '../../models/Astronomical'
import { Container } from './styles'

type CardProps = {
  asteroid: Astronomical.NeoAsteroid
}

export const Card = ({ asteroid }: CardProps) => (
  <Container>
    <div>
      <h2> Asteroid {asteroid.name}</h2>

      <p>
        {asteroid.isPotentiallyHazardousAsteroid &&
          'is potentially hazardous asteroid '}
      </p>
      <p>estimated maximum diameter: {asteroid.diameter} meters</p>
      <p>absolute magnitude: {asteroid.absoluteMagnitude}</p>
      <img src={asteroid.imageUrl} alt={asteroid.name} />
    </div>
  </Container>
)
