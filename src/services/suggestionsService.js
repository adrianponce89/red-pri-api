import fetch from 'isomorphic-fetch';

async function getSuggestions() {
  const res = await fetch('/api/suggestions', {
    method: 'GET',
  });
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

export default {
  getSuggestions,
};
