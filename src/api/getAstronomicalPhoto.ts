import { type Astronomical } from '../models/Astronomical'
import { api } from './apiConfig'

type AstronomicalData = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export const getAsronomicalPhoto = async (
  date?: string,
): Promise<Astronomical.PhotoData> => {
  const { data } = await api.get<AstronomicalData>(
    '/planetary/apod?api_key=AXVJpg3GpMpcU3Tz7koG3PwVfbC262bztpfIy0pI',
    { params: { date: date || undefined } },
  )

  const formattedData = {
    title: data.title,
    url: data.url,
    description: data.explanation,
    copyright: data.copyright,
    date: data.date,
  }
  return formattedData
}
