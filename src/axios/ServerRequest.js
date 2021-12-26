import API, {BASE_URL} from "./Api";

export const userLogin = async (email, password) => { 
    const body = {
      email: email,
      password: password,
    };
    return await API({
      method: 'POST',
      url: 'admin/login',
      data: body,
    }).then(res => {
      return res;
    });
};

  
export const wareHouseLists = async() => {
  return await API({
    method: 'get',
    url: 'admin/warehouse'
  }).then(res => {
      return res.data.data;
  });
};






