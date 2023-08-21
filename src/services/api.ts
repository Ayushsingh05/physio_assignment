import axios from "axios";

const apiUrl = "https://myphysio.digitaldarwin.in/api/login_v1";

export const login = async (username: string, password: string) => {
  const payload = {
    uid: username,
    password: password,
    blocked: 0,
  };
  try {
    const response = await axios.post(apiUrl, {
      payload: btoa(JSON.stringify(payload)),
    });

    const decryptedResponse = JSON.parse(atob(response.data.response));
    return decryptedResponse;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
};
