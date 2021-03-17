const axios = require("axios");

const artActionsPostPictureDoneStiker = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendSticker`,
      {
        chat_id,
        sticker: "CAACAgIAAxkBAALvEmBEnfE6cIjLyOZYOVzZ0VC9DaVgAAL5JwAC6VUFGPqGgNIIYu3qHgQ",
      }
    )
  ).data;
};

module.exports = {
    artActionsPostPictureDoneStiker,
};
