const axios = require("axios");

// const texts = {
//     uk: {
//         text1: "Твій вибір для видалення: 👇",
//     },
//     ru: {
//         text1: "Твой выбор для удаления: 👇",
//     },
//     en: {
//         text1: "Your choice to remove: 👇",
//     }
// };

const artEditSelectedPicture = async (params) => {
  const { chat_id, templateVars, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        //photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Photoshop-screenshot.JPG/1200px-Photoshop-screenshot.JPG",
        caption: `Картина\n${templateVars.name}\nОпис: ${templateVars.description}\nРозмір ${templateVars.height}х${templateVars.width}\nХудожник:${templateVars.nickname}\nHashtags: ${templateVars.hashtags}\n\nТвій вибір для РЕДАГУВАННЯ: 👆`,
        //caption: "Картина\n${templateVars.name}\nОпис:",
      }
    )
  ).data;
};

module.exports = {
    artEditSelectedPicture,
};
