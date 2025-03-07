import fs from "fs";
import { SERVER_URL } from "../config/env.config.js";
import { evaluate } from "../service/anthropic/pdfReader.js";
import { isValidUsername } from "../util/authCredValidator.js";
import { deleteFileIfExists } from "../util/fileHandler.js";

export const listEvals = async (req, res) => {
  try {
    const evallist = fs.readdirSync("./public/eval");
    let resList = [];
    evallist.forEach((item) => {
      const fileJson = JSON.parse(
        fs.readFileSync(`./public/eval/${item}/eval.json`)
      );
      resList.push({
        title: item,
        status: fileJson.status,
      });
    });

    return res.status(200).json({ success: true, resData: { resList } });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const newEvaluation = async (req, res) => {
  try {
    let { title } = req.body;
    const files = req.files;
    // validate title
    if (!title) {
      deleteTheNewFiles(files);
      return res.status(400).json({
        resData: { success: false, error: { title: "Title is required" } },
      });
    }
    let validTit = isValidUsername(title);
    if (Object.keys(validTit).length > 0) {
      deleteTheNewFiles(files);
      return res.status(400).json({
        resData: { success: false, error: { title: "Title is invalid" } },
      });
    }
    const dirTitleExist = fs.existsSync(`./public/eval/${title}`);
    if (dirTitleExist) {
      deleteTheNewFiles(files);
      return res.status(400).json({
        resData: { success: false, error: { title: "Title already exist" } },
      });
    }

    // validate files

    let resError = {};

    if (!files.Q || files.Q.length == 0) {
      resError = {
        ...resError,
        question: "Question Paper is required",
      };
    }
    if (!files.A || files.A.length == 0) {
      resError = {
        ...resError,
        answer: "Answer Paper is required",
      };
    }
    if (!files.M || files.M.length == 0) {
      resError = {
        ...resError,
        model: "Model Paper is required",
      };
    }
    if (Object.keys(resError).length > 0) {
      deleteTheNewFiles(files);
      return res.status(200).json({
        resData: { success: false, error: resError },
      });
    }

    if (files.Q[0].size > 15728640) {
      resError = {
        ...resError,
        question: "File is too large [ < 15MB]",
      };
    }
    if (files.A[0].size > 15728640) {
      resError = {
        ...resError,
        answer: "File is too large [ < 15MB]",
      };
    }
    if (files.M[0].size > 15728640) {
      resError = {
        ...resError,
        model: "File is too large [ < 15MB]",
      };
    }
    if (Object.keys(resError).length > 0) {
      deleteTheNewFiles(files);
      return res.status(200).json({
        resData: { success: false, error: resError },
      });
    }
    title = title.toLowerCase();
    // save files to /public/eval/{title}/{type}
    for (let file in files) {
      file = files[file][0];
      let oldDir = `${file.destination}${file.filename}`;
      let newDir = `./public/eval/${title}/${file.fieldname}`;
      fs.mkdirSync(newDir, { recursive: true });
      fs.copyFileSync(oldDir, newDir + "/" + file.originalname);
    }
    deleteTheNewFiles(files);
    // create /public/eval/{title}/eval.json
    fs.writeFileSync(
      `./public/eval/${title}/eval.json`,
      JSON.stringify(
        {
          status: "Queued",
          question: {
            location: `./public/eval/${title}/Q/${files.Q[0].originalname}`,
            publicURL: `${SERVER_URL}/eval/${title}/Q/${files.Q[0].originalname}`,
            size: files.Q[0].size,
          },
          answer: {
            location: `./public/eval/${title}/A/${files.A[0].originalname}`,
            publicURL: `${SERVER_URL}/eval/${title}/A/${files.A[0].originalname}`,
            size: files.A[0].size,
          },
          model: {
            location: `./public/eval/${title}/M/${files.M[0].originalname}`,
            publicURL: `${SERVER_URL}/eval/${title}/M/${files.M[0].originalname}`,
            size: files.M[0].size,
          },
          action: "Evaluate",
        },
        null,
        "\t"
      )
    );

    return res.status(200).json({ success: true, resRoute: "/beta/dashboard" });
  } catch (error) {
    return res.status(500).json({ resErrMsg: error.message });
  }
};

export const evalGetDetailView = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res
        .status(200)
        .json({ success: false, resRoute: "/beta/dashboard" });
    }

    if (!fs.existsSync(`./public/eval/${title}/eval.json`)) {
      return res
        .status(200)
        .json({ success: false, resRoute: "/beta/dashboard" });
    }
    const data = JSON.parse(
      fs.readFileSync(`./public/eval/${title}/eval.json`, "utf-8")
    );
    return res.status(200).json({ success: true, resData: { details: data } });
  } catch (error) {
    return res.status(500).json({ resErrMsg: error.message });
  }
};

/* export const evalAnalyzeQ = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !fs.existsSync(`./public/eval/${title}/eval.json`)) {
      return res
        .status(200)
        .json({ success: false, resRoute: "/beta/dashboard" });
    }

    const evaljson = JSON.parse(
      fs.readFileSync(`./public/eval/${title}/eval.json`, "utf-8")
    );
    if (evaljson.question.disabled) {
      res.status(200).json({
        success: false,
        resData: {
          error: {
            question: "disabled",
          },
        },
      });
    }

    const st = await questionToJson(evaljson.question.location, title);

    return res.status(200).json({ success: true, resData: { st } });
  } catch (error) {
    return res.status(500).json({ resErrMsg: error.message });
  }
}; */

export const evaluateTest = async (req, res) => {
  res.setTimeout(100000, () => {
    return res.status(500).json({ resErrMsg: "Timeout" });
  });
  try {
    let { title } = req.body;
    title = title.toLowerCase();

    if (!title || !fs.existsSync(`./public/eval/${title}/eval.json`)) {
      return res
        .status(200)
        .json({ success: false, resRoute: "/beta/dashboard" });
    }

    const evaljson = JSON.parse(
      fs.readFileSync(`./public/eval/${title}/eval.json`, "utf-8")
    );

    const st = await evaluate(
      evaljson.question.location,
      evaljson.model.location,
      evaljson.answer.location,
      title
    );
    if (!st) {
      res.status(200).json({
        success: false,
        resData: {
          error: { general: "Fail to evaluate, by anthropic" },
        },
      });
    }

    const returnData = JSON.parse(
      fs.readFileSync(`./public/eval/${title}/eval.json`, "utf-8")
    );

    return res
      .status(200)
      .json({ success: true, resData: { details: returnData } });
  } catch (error) {
    return res.status(500).json({ resErrMsg: error.message });
  }
};

export const evalResult = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !fs.existsSync(`./public/eval/${title}/result.json`)) {
      return res
        .status(200)
        .json({ success: false, resRoute: "/beta/dashboard" });
    }
    const data = JSON.parse(
      fs.readFileSync(`./public/eval/${title}/result.json`, "utf-8")
    );
    return res.status(200).json({ success: true, resData: { result: data } });
  } catch (error) {
    return res.status(500).json({ resErrMsg: error.message });
  }
};

const deleteTheNewFiles = (files) => {
  for (let file in files) {
    const dir = `${files[file][0].destination}${files[file][0].filename}`;
    deleteFileIfExists(dir);
  }
};

/* const temp = async () => {
  const answerPaperurl = `./public/eval/${title}/A/${files.A[0].originalname}`;

  // upload answer paper to GCS
  const uploadAnsPaperToGCS = await uploadFile(
    answerPaperurl,
    answerPaperurl,
    "application/pdf"
  );

  if (!uploadAnsPaperToGCS) {
    return res.status(200).json({
      success: false,
      error: "Failed to upload answer paper to GCS",
    });
  }

  // feed answer paper to google vision api

  const gcsSourceUri = `gs://grad-v0/public/`;
  const gcsDestinationUri = `gs://grad-v0/public/eval/${title}/A/`;

  await GVision(gcsSourceUri, gcsDestinationUri);
}; */

/* const GVision = async (from, to) => {
  const inputConfig = {
    // Supported mime_types are: 'application/pdf' and 'image/tiff'
    mimeType: "application/pdf",
    gcsSource: {
      uri: from,
    },
  };
  const outputConfig = {
    gcsDestination: {
      uri: to,
    },
  };
  const features = [{ type: "DOCUMENT_TEXT_DETECTION" }];
  const request = {
    requests: [
      {
        inputConfig: inputConfig,
        features: features,
        outputConfig: outputConfig,
      },
    ],
  };

  const [operation] = await gvcli.asyncBatchAnnotateFiles(request);
  const [filesResponse] = await operation.promise();
  const destinationUri =
    filesResponse.responses[0].outputConfig.gcsDestination.uri;
  console.log("Json saved to: " + destinationUri);
  return destinationUri;
}; */
