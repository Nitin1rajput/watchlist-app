const API_BASE_URL = 'http://www.omdbapi.com';
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const ApiService = {
  get: async (endpoint, search) => {
    try {
      const params = new URLSearchParams(search);
      console.log(process.env);
      const response = await fetch(
        `${API_BASE_URL}${endpoint}?apikey=${API_KEY}&${params}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle error
      console.error('Error fetching data: ', error);
      throw error;
    }
  },
};

export default ApiService;
