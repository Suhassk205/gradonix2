import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: "plasma-raceway-448414-k2",
  keyFilename: "./src/service/google/g-sa.json",
});
const cloudStorage = storage.bucket("gs://grad-v0");
export const uploadFile = async (from, to, contentType) => {
  try {
    const options = {
      destination: to,
      metadata: {
        contentType,
      },
    };

    const result = await cloudStorage.upload(from, options);
    console.log(result[0]);

    return result[0].metadata.mediaLink;
  } catch (error) {
    console.log(error);
    return null;
  }
};
