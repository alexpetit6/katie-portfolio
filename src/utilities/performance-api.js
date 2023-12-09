import sendRequest from "./send-request";
const BASE_URL = '/api/performance';

export async function getPerformance() {
  return sendRequest(BASE_URL);
}

export async function addPhotos(formData) {
  return sendRequest(BASE_URL, 'POST', formData, true);
}

export async function deletePerfPhoto( formData ) {
  return sendRequest(BASE_URL, 'DELETE', formData);
}
