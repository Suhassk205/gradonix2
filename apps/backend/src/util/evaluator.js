import fs from "fs";
import { parentPort } from "worker_threads";
import { uploadFile } from "../service/google/storage.js";

parentPort.on("message", async (title) => {
  try {
    // 1) analyze question paper(using antropic api)
    // 2) analyze answer paper(using antropic api)
    // 3) get students answer(using google vision api)
    //    a) upload answer paper to google cloud storage
    const answerPaperurl =
      `./public/eval/${title}/A/` +
      fs.readdirSync(`./public/eval/${title}/A`)[0];
    fs.writeFileSync(
      `./public/eval/${title}/eval.json`,
      JSON.stringify(
        {
          status: "Analysing Answer Paper",
        },
        null,
        "\t"
      )
    );

    const uploadAnsPaperToGS = await uploadFile(
      answerPaperurl,
      answerPaperurl,
      "application/pdf"
    );
    console.log(uploadAnsPaperToGS);

    //    b) feed the answer paper to google vision api
    console.log("worker is done");

    parentPort.postMessage("done");
  } catch (error) {
    parentPort.postMessage(`error: ${error.message}`);
  }
});

const test = async () => {
  console.log("test");
};
