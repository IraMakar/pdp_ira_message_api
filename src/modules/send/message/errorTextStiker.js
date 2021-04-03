const axios = require("axios");

const errorTextStiker = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendSticker`,
      {
        chat_id,
        sticker: "CAACAgEAAxkBAAEBEIdgYNGIXTFHCBE4WIS9uqcVmnHqnwACCwoAAr-MkARoxhdSMKniVR4E",
      }
    )
  ).data;
};

module.exports = {
    errorTextStiker,
};
