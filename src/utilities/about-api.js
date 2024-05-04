import sendRequest from "./send-request";
const BASE_URL = '/api/about';

export async function getAbout() {
  return sendRequest(BASE_URL);
}

export async function update(newData) {
  return sendRequest(BASE_URL, 'PUT', newData);
}