// const { TranslationServiceClient } = require("@google-cloud/translate");
// // Instantiates a client
// const translationClient = new TranslationServiceClient();

// const projectId = "private-english-mentor-367820";
// const location = "global";
// const text = "Hello, world!";
// async function translateText() {
//   // Construct request
//   const request = {
//     parent: `projects/${projectId}/locations/${location}`,
//     contents: [text],
//     mimeType: "text/plain", // mime types: text/plain, text/html
//     sourceLanguageCode: "en",
//     targetLanguageCode: "es",
//   };

//   // Run request
//   const [response] = await translationClient.translateText(request);

//   for (const translation of response.translations) {
//     console.log(`Translation: ${translation.translatedText}`);
//   }
// }
// translateText();
// // translateFn = async (word) => {
// //   const encodedParams = qs.stringify({
// //     q: word,
// //     target: "he",
// //     source: "en",
// //   });
// //   const options = {
// //     method: "POST",
// //     url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
// //     headers: {
// //       "content-type": "application/x-www-form-urlencoded",
// //       "Accept-Encoding": "application/gzip",
// //       "X-RapidAPI-Key": "f6ff2e74acmshb1c9379680efb34p138e42jsndfb855c45d68",
// //       "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
// //     },
// //     data: encodedParams,
// //   };

// //   try {
// //     console.log("trns1");
// //     const response = await axios.request(options);
// //     console.log("trns2");
// //     console.log(response);
// //     //return response.data.data.translations[0].translatedText;
// //   } catch (e) {
// //     console.log(e);
// //   }
// // };

// module.exports = translateText;
