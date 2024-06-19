import axios from 'axios';

const registerUser = async (userData) => {
  const url = `${process.env.REACT_APP_API_URL}/api/register`; 
  console.log("url",url);

  try {
    const response = await axios.post(url, userData);

    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
};

export default registerUser;