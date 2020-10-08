const baseURL = "https://3.18.215.253:8080";

export default {
    getAll() {
        return fetch(`${baseURL}/users`).then(resp => resp.json())
    },
    post(credentials) {
        return fetch(`${baseURL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials)
        }).then(resp => resp.json());
      }
}