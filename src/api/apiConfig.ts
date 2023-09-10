/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

const baseURL = 'https://api.nasa.gov/';

export const api = axios.create({
	baseURL,
});
