import fetch from 'isomorphic-fetch';
import Cookies from 'universal-cookie';

async function login(email, password) {
  const res = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const resJson = await res.json();
  if (res.status === 200) {
    const profile = resJson.user;
    localStorage.setItem('profile', JSON.stringify(profile));
    return profile;
  } else {
    return Promise.reject(resJson.error);
  }
}

function logout() {
  localStorage.removeItem('profile');
  const cookies = new Cookies();
  cookies.set('jwt', null, { path: '/' });
}

async function register(email, password) {
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const resJson = await res.json();
  if (res.status === 200) {
    const profile = resJson.user;
    localStorage.setItem('profile', JSON.stringify(profile));
    return profile;
  } else {
    return Promise.reject(resJson.error);
  }
}

export default {
  login,
  logout,
  register,
};
