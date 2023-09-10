/* eslint-disable @typescript-eslint/naming-convention */
import { type Astronomical } from '../models/Astronomical'
import { api } from './apiConfig'

type EstimatedDiameter = {
  kilometers: {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  meters: {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  miles: {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
  feet: {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
}

type RelativeVelocity = {
  kilometers_per_second: string
  kilometers_per_hour: string
  miles_per_hour: string
}

type MissDistance = {
  astronomical: string
  lunar: string
  kilometers: string
  miles: string
}

type CloseApproachData = {
  close_approach_date: string
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: RelativeVelocity
  miss_distance: MissDistance
  orbiting_body: string
}

type Neo = {
  links: {
    self: string
  }
  id: string
  neo_reference_id: string
  name: string
  nasa_jpl_url: string
  absolute_magnitude_h: number
  estimated_diameter: EstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: CloseApproachData[]
  is_sentry_object: boolean
}

type NeoResponse = {
  element_count: number
  links: {
    next: string
    previous: string
    self: string
  }
  near_earth_objects: Record<string, Neo[]>
}

type getAsteroidsParams = {
  start: string
  end: string
}

export const getAsteroids = async ({
  end,
  start,
}: getAsteroidsParams): Promise<Astronomical.Asteroids[]> => {
  const { data } = await api.get<NeoResponse>(
    `/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=AXVJpg3GpMpcU3Tz7koG3PwVfbC262bztpfIy0pI`,
  )

  const content = Object.entries(data.near_earth_objects).map(
    ([period, items]) => ({
      period,
      items: items.map((asteroid) => ({
        name: asteroid.name,
        imageUrl: asteroid.nasa_jpl_url,
        diameter:
          asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2),
        isPotentiallyHazardousAsteroid:
          asteroid.is_potentially_hazardous_asteroid,
        absoluteMagnitude: asteroid.absolute_magnitude_h,
      })),
    }),
  )

  return content.sort(
    (a, b) => new Date(b.period).getDate() - new Date(a.period).getDate(),
  )
}
