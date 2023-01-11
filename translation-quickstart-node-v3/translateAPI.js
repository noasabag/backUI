const { TranslationServiceClient } = require("@google-cloud/translate");

const translationClient = new TranslationServiceClient();

const projectId = "private-english-mentor-367820";
const location = "global";

async function translateText(word) {
  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [word],
    mimeType: "text/plain", // mime types: text/plain, text/html
    sourceLanguageCode: "en",
    targetLanguageCode: "he",
  };

  // Run request
  const [response] = await translationClient.translateText(request);
  return response.translations[0].translatedText;
  // for (const translation of response.translations) {
  //   console.log(`Translation: ${translation.translatedText}`);
  // }
}
module.exports = translateText;
