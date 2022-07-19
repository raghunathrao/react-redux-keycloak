
export const token = () => {
    return localStorage.getItem("punch-admin-token");
  };
  
  export const setToken = token => {
    localStorage.setItem("punch-admin-token", token);
  };
  
  export const clear = () => {
    localStorage.clear();
  };
  
  export const setKeycloakJson = keycloak => {
    localStorage.setItem("keycloak-json", JSON.stringify(keycloak));
  }
  
  export const getKeyCloakJson = () => {
    return JSON.parse(localStorage.getItem("keycloak-json"));
  };
  