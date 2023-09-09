import { api } from "./apiConfig";

export const getAsronomicalPhoto = async () => {
  try {
    const data = await api.get("/planetary/apod")
    console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }
}