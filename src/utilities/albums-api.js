import sendRequest from "./send-request";
const BASE_URL = '/api/albums';

export async function getAlbums() {
  return sendRequest(BASE_URL);
}

export async function albumDetail(id) {
  console.log('detail')
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function create(formData) {
  return sendRequest(BASE_URL, 'POST', formData, true);
}

export async function deleteAlbum(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function deletePhoto(id, formData) {
  console.log('delete photo')
  return sendRequest(`${BASE_URL}/photo/${id}`, 'DELETE', formData);
}

export async function update(id, newData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', newData, true);
}