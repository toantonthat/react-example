export function authHeader() {
  let user = JSON.parse(localStorage.getItem("jwtToken"));

  if (user) {
    return { Authorization: "Bearer " + user.token };
  }
  return {};
}
