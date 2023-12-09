import sendRequest from "./send-request";
const BASE_URL = '/api/resumes';

export async function updateResume(formData) {
  return sendRequest(BASE_URL, 'POST', formData, true);
}