const baseURL = "https://3.18.215.253:8080";

export default {
  getUsersWithTrails(trailId) {
    return fetch(
      `${baseURL}/trailusers?trailId=${trailId}`
    ).then(resp => resp.json());
  },
  addUserWithTrail(newUser) {
    return fetch(`${baseURL}/trailusers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(resp => resp.json());
  },
  deleteUserWithTrail(id) {
    return fetch(`${baseURL}/trailusers/${id}`, {
      method: "DELETE"
    });
  }
};
