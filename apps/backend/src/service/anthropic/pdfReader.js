import fs from "fs";

import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const questionToJson = async (path, title) => {
  try {
    const BSF = fs.readFileSync(path, { encoding: "base64" });
    const jsonSchema = {
      is_valid_question_paper: true,
      questions: [
        {
          question_number: 1,
          question_text: "this is a sample question 1 ?",
          marks: 10,
          word_limit: 100,
        },
        {
          question_number: 2,
          question_text: "this is a sample question 2 ?",
          marks: 20,
          word_limit: 200,
        },
      ],
    };
    const prompt = `You are an Exam evaluator for the Union Public Service Commission (UPSC) exam. Your primary task is to evaluate students' answer papers. You will be provided with the actual question paper, consisting of subjective questions, extract all the questions from the question paper. Your response should map each question with its respective details in a structured JSON format as given below. Ensure that the JSON output is well-structured, correctly formatted
    
        Reference JSON Schema for output:
        ${JSON.stringify(jsonSchema, null, "\t")}

        Refernce JSON guide:
        - is_valid_question_paper: true or false, check if the give pdf document can be accepted as question paper, or weather it has valid questions or not.
        - questions : array of questions length equivalent to number of question in give pdf document.
        - questions[x].question_number : it is a serial number of the question.
        - questions[x].question_text : the extracted question itself.
        - questions[x].marks: the corresponding marks for that question.
        - questions[x].word_limit: the corresponding word limit for that question.if it is not found set as 100 - 250 accordingly by refering to marks.

        !important: respond only in JSON format.

    `;
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2048,
      temperature: 0.2,
      top_p: 0.97,
      messages: [
        {
          content: [
            {
              type: "document",
              source: {
                media_type: "application/pdf",
                type: "base64",
                data: BSF,
              },
            },
            {
              type: "text",
              text: prompt,
            },
          ],
          role: "user",
        },
      ],
    });
    if (!response.content[0].text) {
      return false;
    }
    fs.writeFileSync(
      `./public/eval/${title}/Qmap.json`,
      response.content[0].text
    );
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const modelToJson = async (path, title) => {
  try {
    const BSF = fs.readFileSync(path, { encoding: "base64" });
    const jsonSchema = {
      is_valid_model_answer: true,
      model_answers: [
        {
          question_number: 1,
          model_answer: "this is a sample model answer 1 ?",
        },
        {
          question_number: 2,
          model_answer: "this is a sample model answer 2 ?",
        },
      ],
    };
    const prompt = `You are an Exam evaluator for the Union Public Service Commission (UPSC) exam. Your primary task is to evaluate students' answer papers. You will be provided with the model answer paper, consisting of model answers, extract all the model answers from the model answer paper. Your response should map each model answer with its respective details in a structured JSON format as given below. Ensure that the JSON output is well-structured, correctly formatted.
    
        Reference JSON Schema for output:
        ${JSON.stringify(jsonSchema, null, "\t")}

        Refernce JSON guide:
        - is_valid_model_answer: true or false, check if the give pdf document can be accepted as model answer paper, or weather it has valid model answers or not.
        - model_answers : array of model answers length equivalent to number of model answers in give pdf document.
        - model_answers[x].question_number : it is a serial number of the question or model answer.
        - model_answers[x].model_answer : the extracted model answer itself.

        !important: respond only in JSON format.
    `;
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2048,
      temperature: 0.2,
      top_p: 0.97,
      messages: [
        {
          content: [
            {
              type: "document",
              source: {
                media_type: "application/pdf",
                type: "base64",
                data: BSF,
              },
            },
            {
              type: "text",
              text: prompt,
            },
          ],
          role: "user",
        },
      ],
    });
    if (!response.content[0].text) {
      return false;
    }
    fs.writeFileSync(
      `./public/eval/${title}/Mmap.json`,
      response.content[0].text
    );
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

/* export const answerToJson = async (path, title) => {
  try {
    const BSF = fs.readFileSync(path, { encoding: "base64" });
    const jsonSchema = {
      is_valid_answer: true,
      answers: [
        {
          question_number: 1,
          model_answer: "this is a sample model answer 1 ?",
        },
        {
          question_number: 2,
          model_answer: "this is a sample model answer 2 ?",
        },
      ],
    };
} */

export const evaluate = async (Qpath, Mpath, Apath, title) => {
  try {
    if (
      !fs.existsSync(Qpath) ||
      !fs.existsSync(Mpath) ||
      !fs.existsSync(Apath) ||
      !fs.existsSync(`./public/eval/${title}/eval.json`)
    ) {
      return false;
    }
    const b64Q = fs.readFileSync(Qpath, { encoding: "base64" });
    const b64M = fs.readFileSync(Mpath, { encoding: "base64" });
    const b64A = fs.readFileSync(Apath, { encoding: "base64" });

    const expectedOutput = {
      evaluationSummary: {
        totalMarks: "<integer>",
        totalPossibleMarks: "<integer>",
        percentage: "<decimal to one place>",
      },
      questionWiseBreakdown: [
        {
          questionNumber: "<integer>",
          questionText: "<full question text>",
          maximumMarks: "<integer>",
          marksAwarded: "<integer>",
          confidenceLevel: "high|medium|low",
          justification: "<concise explanation for marks awarded>",
          keywords: ["<keyword1>", "<keyword2>", "<keyword3>"],
          illegibleContent: true | false,
          illegibleSections: ["<section description>"],
        },
        // Additional questions...
      ],
      strengthsAndWeaknesses: {
        strengths: ["<strength1>", "<strength2>", "<strength3>", "<strength4>"],
        weaknesses: [
          "<weakness1>",
          "<weakness2>",
          "<weakness3>",
          "<weakness4>",
        ],
      },
      evaluatorNotes: "<overall assessment and recommendations>",
    };

    const prompt = `You are an expert UPSC exam evaluator with deep knowledge of Civil Services examination standards. Analyze these three documents meticulously:
        1. UPSC QUESTION PAPER (typed): [First PDF content]
        2. UPSC OFFICIAL MODEL ANSWER PAPER (typed): [Second PDF content] 
        3. STUDENT ANSWER PAPER (handwritten): [Third PDF content]

      SYSTEMATIC EVALUATION PROCESS:
        1. Extract and analyze all content from each document
        2. For each question in the UPSC paper:
          a. Identify the question type (MCQ/descriptive/case study) and marks alloted for it
          b. Locate the corresponding official answer from model answer paper
          c. Extract the candidate's response from the student answer paper
          d. Apply UPSC marking scheme as given in question paper or model answer paper
          e. Assess for relevant keywords, concepts, and analytical depth
          f. Check for proper structure in descriptive answers (introduction, body, conclusion)

      HANDWRITTEN RESPONSE GUIDELINES:
        - Assign confidence level (high/medium/low) for each handwritten response
        - Mark unclear text as [unclear]
        - For completely illegible sections, mark as [illegible]
        - Pay special attention to technical terms, proper nouns, and Indian language terms
        - For maps, diagrams, and illustrations, evaluate content accuracy separately

      UPSC-SPECIFIC REQUIREMENTS:
        - Evaluate papers using topic-specific expertise
        - Apply negative marking for incorrect MCQs as per UPSC rules
        - Assess answers for factual accuracy and conceptual understanding
        - Check for balanced perspectives on policy questions
        - Evaluate current affairs knowledge against official sources

      OUTPUT FORMAT:
        - Structure evaluation strictly according to this schema:
            ${JSON.stringify(expectedOutput, null, "\t")}
        - Include section-wise and question-wise marks breakdown
        - Provide specific justification for marks deduction
        - Calculate final score per UPSC scoring guidelines
        - Note any exceptional strengths or weaknesses in the answer script
        
        !important: respond only in json format.`;

    const prompt2 = `You are an expert UPSC examiner tasked with precise evaluation. Analyze these three documents:
        1. UPSC QUESTION PAPER (typed): [First PDF content]
        2. UPSC MARKING SCHEME (typed): [Second PDF content] 
        3. CANDIDATE ANSWER SCRIPT (handwritten): [Third PDF content]

      Your task is to produce a structured, detailed strict evaluation following EXACTLY this JSON schema with no deviations:

        ${JSON.stringify(expectedOutput, null, "\t")}

      SYSTEMATIC EVALUATION PROCESS:
        1. Extract and analyze all content from each document
        2. For each question in the UPSC paper:
          a. Identify the question type (MCQ/descriptive/case study) and marks alloted for it
          b. Locate the corresponding official answer from model answer paper
          c. Extract the candidate's response from the student answer paper
          d. Apply UPSC marking scheme as given in question paper or model answer paper
          e. Assess for relevant keywords, concepts, and analytical depth
          f. Check for proper structure in descriptive answers (introduction, body, conclusion)

      HANDWRITTEN RESPONSE GUIDELINES:
        - Assign confidence level (high/medium/low) for each handwritten response.
        - Mark unclear text as [unclear].
        - For completely illegible sections, mark as [illegible].
        - Pay special attention to technical terms, proper nouns, and Indian language terms.
        - For maps, diagrams, and illustrations, evaluate content accuracy separately.

      UPSC-SPECIFIC REQUIREMENTS:
        - Evaluate papers using topic-specific expertise
        - Assess answers for factual accuracy and conceptual understanding
        - Check for balanced perspectives on policy questions
        - Evaluate current affairs knowledge against official sources
        - Try to award marks for each question so that it is as close as half of the total marks.
        - deduct marks for illegible content, unclear content, and incorrect answers according to UPSC rules.

      CRITICAL INSTRUCTIONS:
        1. Evaluate EACH question individually - do not group questions (like "4-10")
        2. Always provide complete "questionWiseBreakdown" for EVERY question
        3. Include "illegibleSections" ONLY when "illegibleContent" is true
        4. Ensure all question numbers match exactly with the question paper
        5. The final JSON must be properly formatted with no extra fields or commentary
        6. Your ENTIRE response must be valid JSON only - no introductory text, no explanations

      Remember: Your output must be PURE JSON that matches the schema exactly. No narrative text before or after.`;

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 8192,
      temperature: 0.1,
      top_p: 1.0,
      messages: [
        {
          content: [
            {
              type: "document",
              source: {
                media_type: "application/pdf",
                type: "base64",
                data: b64Q,
              },
            },
            {
              type: "document",
              source: {
                media_type: "application/pdf",
                type: "base64",
                data: b64M,
              },
            },
            {
              type: "document",
              source: {
                media_type: "application/pdf",
                type: "base64",
                data: b64A,
              },
            },
            {
              type: "text",
              text: prompt2,
            },
          ],
          role: "user",
        },
      ],
    });
    console.log(response);
    if (!response.content[0].text) {
      return false;
    }

    fs.writeFileSync(
      `./public/eval/${title}/result.json`,
      response.content[0].text
    );
    let evalJson = JSON.parse(
      fs.readFileSync(`./public/eval/${title}/eval.json`, "utf-8")
    );
    evalJson.status = "Evaluated";
    evalJson.action = "Result";
    fs.writeFileSync(
      `./public/eval/${title}/eval.json`,
      JSON.stringify(evalJson, null, "\t")
    );
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
