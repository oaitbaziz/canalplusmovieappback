const axios = require("axios").default;

const getWeeklyTrending = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}${req.route.path}`,
      {
        params: {
          api_key: process.env.API_KEY,
          ...req.query,
        },
        // headers: req.headers,
      }
    );
    res
      .set("Cache-control", "public, max-age=300")
      .status(response.status)
      .json(response.data);
  } catch (error) {
    console.log(error.response);
    res.status(error?.response?.status || 500).json(error);
  }
};

const getSearchResults = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}${req.route.path}`,
      {
        params: {
          api_key: process.env.API_KEY,
          ...req.query,
        },
        // headers: req.headers,
      }
    );

    res
      .set("Cache-control", "public, max-age=300")
      .status(response.status)
      .json(response.data);
  } catch (error) {
    console.log(error.response);
    res.status(error?.response?.status || 500).json(error);
  }
};

const getDetails = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/${req.params.uri}/${req.params.id}`,
      {
        params: {
          api_key: process.env.API_KEY,
          ...req.query,
        },
        // headers: req.headers,
      }
    );
    res
      .set("Cache-control", "public, max-age=300")
      .status(response.status)
      .json(response.data);
  } catch (error) {
    console.log(error.response);
    res.status(error?.response?.status || 500).json(error);
  }
};

module.exports = {
  getWeeklyTrending,
  getSearchResults,
  getDetails,
};
