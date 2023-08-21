import http from "../http-common";

export const logout = () => {
  localStorage.removeItem("token");
};

class DataService {
  getDashboardAccess(token: any) {
    return http.get(`api/dashboard`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  login(data: any) {
    return http.post("api/login_v1", data);
  }
}

export default new DataService();
