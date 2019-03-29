import axios from "axios";

const url = `https://viking-times.herokuapp.com`;

export const GetArticles = async () => {
  try {
    let response = await axios.get(url + "/api/articles");
    const articles = response.data.articles;
    return articles;
  } catch (error) {
    console.error(error);
  }
};