const axios = require("axios");


const artAdvertisingSelectedPicture = async (params) => {
  const { chat_id, templateVars, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        //photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Photoshop-screenshot.JPG/1200px-Photoshop-screenshot.JPG",
        caption: `Картина\n${templateVars.name}\nОпис: ${templateVars.description}\nРозмір ${templateVars.height}х${templateVars.width}\nХудожник:${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        //caption: "Картина\n${templateVars.name}\nОпис:",
      }
    )
  ).data;
};

module.exports = {
  artAdvertisingSelectedPicture,
};
