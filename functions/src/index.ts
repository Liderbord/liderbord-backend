import * as functions from "firebase-functions";
import Service from "./service/service";
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const createLiderbord = functions.https.onRequest(
  (request, response) => {
    functions.logger.info("Liderbord Created!", { structuredData: true });
    response.send(
      Service.createLiderbord({
        topic: "liderbord1",
        tags: ["tag1", "tag2", "tag3"],
      })
    );
  }
);
