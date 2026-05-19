export const isLoggedIn = () => {
  return !!localStorage.getItem("token") && !!localStorage.getItem("role");
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const setLogin = ({ token, role, user }) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");
};
