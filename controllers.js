const axios = require("axios").default;

const getWeeklyTrending = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}${req.route.path}`,
      {
        params: {
          api_key: process.env.API_KEY,
        },
      }
    );
    res
      .set("Cache-control", "public, max-age=300")
      .status(response.status)
      .json(response.data);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const getSearchResults = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}${req.route.path}`,
      {
        params: {
          api_key: process.env.API_KEY,
          query: req.query.query,
        },
      }
    );

    res
      .set("Cache-control", "public, max-age=300")
      .status(response.status)
      .json(response.data);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const getDetails = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/${req.params.uri}/${req.params.id}`,
      {
        params: {
          api_key: process.env.API_KEY,
          append_to_response: "videos",
        },
      }
    );
    res
      .set("Cache-control", "public, max-age=300")
      .status(response.status)
      .json(response.data);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = {
  getWeeklyTrending,
  getSearchResults,
  getDetails,
};