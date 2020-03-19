const baseURL = "http://localhost:5002";

export default {
  getAll() {
    return fetch(`${baseURL}/trails`).then(resp => resp.json());
  },
  // This qs parameter is saying find and return any whose 'key = {value}'
  getSomeTrails(zipcode) {
    return fetch(`${baseURL}/trails?zipcode=${zipcode}`).then(resp => resp.json());
  },
  // I believe we'll use this to post a new trail user to a specific trail.
  post(newTrailUser) {
    return fetch(`${baseURL}/trails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrailUser)
    }).then(resp => resp.json());
  }
};