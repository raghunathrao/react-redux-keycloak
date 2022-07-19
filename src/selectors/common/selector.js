export const loading = state => {
    return state.loading;
};

export const getMessage = state => {
    return state.message;
};


export const getCreatedBy = keycloak => {
    return  keycloak.tokenParsed &&  keycloak.tokenParsed.preferred_username;
  };
  
export const getUpdatedby = keycloak => {
  return keycloak.tokenParsed && keycloak.tokenParsed.preferred_username;
};