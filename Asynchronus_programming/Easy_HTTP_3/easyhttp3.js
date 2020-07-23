/**
 * EasyHttp Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @license MIT
 *
 **/
class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    return response.json();
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async delete(url) {
    const response = await fetch(url, {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return 'User deleted...';
  }
}
