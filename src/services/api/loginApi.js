import axios from 'axios';

const loginUser = async (userData) => {
  const url = `${process.env.REACT_APP_API_URL}/api/users/login`; 
  console.log("url",url);

  try {
    const response = await axios.post(url, userData);

    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
};

export default loginUser;
