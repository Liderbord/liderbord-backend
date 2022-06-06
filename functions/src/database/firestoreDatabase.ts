import { Firestore } from "@google-cloud/firestore";

class Database {
  firestore: Firestore;
  constructor() {
    this.firestore = new Firestore({
      projectId: "liderbord-v2",
      timestampsInSnapshots: true,
      // NOTE: Don't hardcode your project credentials here.
      // If you have to, export the following to your shell:
      //   GOOGLE_APPLICATION_CREDENTIALS=<path>
      // keyFilename: '/cred/cloud-functions-firestore-000000000000.json',
    });
  }
  Firestore = require("@google-cloud/firestore");
  // Use your project ID here
  PROJECTID = "[YOUR_PROJECT_ID]";
  COLLECTION_NAME = "cloud-functions-firestore";

  async saveLiderord(): Promise<void> {
    return this.firestore
      .collection("COLLECTION_NAME")
      .doc("id")
      .delete()
      .then(() => {
        return Response.status(200).send({ status: "ok" });
      })
      .catch((err) => {
        console.error(err);
        return res.status(404).send({
          error: "unable to delete",
          err,
        });
      });
  }
}
