import fs from "fs";

export const initPublicDir = () => {
  createDirectoryIfNotExists("./public");
  console.log("public directory initialized");
};

export const createDirectoryIfNotExists = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
};

export const deleteFileIfExists = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

/* const initBetaEvalDir = () => {
  if (!fs.existsSync("./public/uploads")) {
  }
};

 */

/* 

You are an AI evaluator for the Union Public Service Commission (UPSC) exam. Your task is to evaluate students' answer papers based on the given evaluation criteria. You will receive a JSON object containing questions with their respective numbers, text, model answers, marks, and word limits. Additionally, you will receive a student's answers for evaluation.

Your evaluation should include the following:

    - Attained Marks: Score the answer based on the provided criteria.
    - Feedback: Provide constructive feedback, highlighting strengths and areas for improvement.
Follow the evaluation criteria below:

1. Content & Relevance:
    - Does the answer properly address the question?
    - Logical structuring of points.
2. Clarity & Coherence:
    - Clear articulation of thoughts.
    - Well-structured introduction, body, and conclusion.
3. Use of Examples, Data & Case Studies:
    - Relevant examples, facts, and case studies enhance the answer.
4. Interdisciplinary Approach:
    - Connecting different subjects (e.g., history with polity, economics with environment).
5. Presentation & Handwriting:
    - Legibility matters, though marks are not directly deducted for bad handwriting.
6. Word Limit Adherence:
    - Exceeding or falling too short can lead to mark deduction.


Your response must strictly follow the JSON format below:
'''json
{
  "evaluated_answers": [
    {
      "question_number": 1,
      "question_text": "Explain the significance of Directive Principles of State Policy in the Indian Constitution.",
      "model_answer": "The Directive Principles of State Policy (DPSP) are guidelines for the state to establish a just society. Enshrined in Part IV of the Constitution, they aim to promote social and economic welfare. While not legally enforceable, they serve as a benchmark for governance...",
      "marks": 10,
      "word_limit": 250,
      "attained_marks": 8,
      "feedback": "The answer effectively covers the significance of DPSPs and their role in governance. However, including a case study or an example (e.g., Article 39(b) and (c)) would have strengthened the response."
    },
    {
      "question_number": 2,
      "question_text": "Discuss the impact of globalization on Indian agriculture.",
      "model_answer": "Globalization has significantly influenced Indian agriculture by increasing market access, promoting technology transfer, and affecting pricing mechanisms. However, it has also led to challenges such as dependence on multinational corporations, volatility in crop prices, and environmental concerns...",
      "marks": 15,
      "word_limit": 300,
      "attained_marks": 12,
      "feedback": "Good coverage of globalization’s impact on agriculture. The answer is well-structured and includes relevant points. Adding data/statistics (e.g., percentage of agricultural exports in GDP) would have further improved the analysis."
    }
  ]
}
'''









{
  "questions": [
    {
      "question_number": 1,
      "question_text": "Analyze the role of government schemes in fostering women's empowerment in India. Discuss the challenges that hinder their implementation.",
      "model_answer": "Government schemes like Beti Bachao Beti Padhao, Mahila E-Haat, and Sukanya Samriddhi Yojana have significantly enhanced women's empowerment by improving education, financial inclusion, and health awareness. These initiatives promote gender equality by building capacity through skill development and entrepreneurship opportunities. They also encourage social participation and independence, fostering a more equitable society. However, challenges such as entrenched patriarchal mindsets, social stigma, and traditional gender roles persist. Inadequate infrastructure, bureaucratic delays, and uneven implementation—especially in rural areas—limit the reach and impact of these programs. Additionally, limited awareness among target groups hampers their effectiveness. Overcoming these obstacles requires better policy implementation, increased grassroots-level sensitization, and robust monitoring systems to ensure that empowerment initiatives translate into tangible socio-economic progress.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 2,
      "question_text": "How has globalization influenced the traditional cultural values of India?",
      "model_answer": "Globalization has significantly influenced India's cultural landscape by introducing diverse ideas, lifestyles, and consumption patterns. Exposure to global media and digital communication has led to a fusion of Western and Indian cultural elements. Urban centers increasingly embrace modernity, individualism, and consumerism, while rural regions strive to preserve indigenous customs and traditions. This cultural exchange has spurred innovation in art, music, and cuisine, yet it has also raised concerns about cultural homogenization and the potential erosion of local practices. Traditional family structures and community bonds are evolving, with younger generations often favoring global perspectives. Despite these changes, India's pluralistic society continues to balance modern influences with deep-rooted traditions, ensuring that its rich cultural heritage remains intact even as new global trends emerge.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 3,
      "question_text": "Does climate change have an impact on the monsoonal pattern in India? Comment with examples and scientific evidence.",
      "model_answer": "Climate change has notably affected India's monsoonal patterns by altering the timing, intensity, and spatial distribution of rainfall. Scientific studies indicate a trend toward more extreme weather events, with erratic rainfall leading to both severe floods and prolonged droughts. For instance, recent delays in monsoon onset and uneven precipitation have disrupted agricultural cycles and strained water resources. Research from the Indian Institute of Tropical Meteorology links rising global temperatures to increased atmospheric moisture, intensifying rainfall events and unpredictability. Additionally, the warming Indian Ocean further contributes to monsoon variability. These changes have critical implications for agriculture, water management, and disaster preparedness. Although natural variability plays a role, the consistent trends observed over decades affirm that anthropogenic climate change is modifying traditional monsoonal behavior, thereby presenting significant challenges for food security and regional planning.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 4,
      "question_text": "Caste based discrimination continues to exist in modern times, despite rapid changes in socio-economic conditions since Independence. Analyze.",
      "model_answer": "Despite substantial socio-economic progress since Independence, caste-based discrimination remains deeply rooted in India. Modernization and urbanization have not eradicated longstanding social hierarchies and prejudices. In employment, education, and social interactions, implicit biases and systemic barriers still limit opportunities for lower-caste individuals. While affirmative action policies have improved access to education and government positions, subtle forms of exclusion persist in private and rural sectors. Political mobilization based on caste identities further reinforces these divisions, making it difficult to achieve complete social integration. Although legal frameworks exist to combat discrimination, enforcement gaps and societal inertia often undermine their effectiveness. Overcoming caste-based discrimination necessitates comprehensive reforms that include legal measures, economic opportunities, and a transformative shift in societal attitudes. Enhancing education, promoting inclusive policies, and fostering community dialogue are essential to bridge historical divides and create a more equitable society.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 5,
      "question_text": "What factors should be considered while setting up a semiconductor industry, along with examples, and what has been India's progress in semiconductor manufacturing?",
      "model_answer": "Establishing a semiconductor industry requires robust technological infrastructure, a skilled workforce, integrated supply chains, and supportive policies. Key considerations include investment in R&D, development of state-of-the-art fabrication facilities, and secure access to critical raw materials and high-precision equipment. Successful models from South Korea and Taiwan, which leveraged public-private partnerships and advanced manufacturing facilities, offer instructive examples. India's progress in semiconductor manufacturing has been gradual; initiatives such as the Make in India campaign and recent proposals for fabrication units demonstrate a growing commitment. However, challenges in technology transfer, significant capital requirements, and intense global competition persist. To accelerate growth, India must strengthen collaborations with international leaders, invest in technical education and research, and create a favorable regulatory environment. Such measures can help establish a competitive semiconductor sector, contributing substantially to technological advancement and economic growth.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 6,
      "question_text": "Discuss the causes and consequences of water scarcity in India. Highlight the role of water management strategies in addressing this issue.",
      "model_answer": "Water scarcity in India stems from a mix of natural and human-induced factors. Rapid population growth, urbanization, and industrial expansion have dramatically increased water demand, while over-extraction of groundwater and inefficient irrigation practices deplete available resources. Climate variability—including erratic monsoon patterns, prolonged droughts, and unpredictable rainfall—further aggravates water shortages. Additionally, poor water governance, inadequate infrastructure, and pollution of water bodies compound the crisis. The consequences are extensive: agriculture suffers from inadequate irrigation, leading to reduced crop yields, food insecurity, and lower farmer incomes. Urban centers face chronic shortages that affect daily life, health, and sanitation, while ecosystems endure stress from diminished river flows and wetland degradation. Social disparities widen as access to clean water becomes increasingly uneven. Effective water management strategies are crucial to mitigate these impacts. Integrated Water Resources Management (IWRM) promotes the coordinated development of water, land, and related resources, ensuring sustainable utilization. Techniques such as rainwater harvesting, watershed management, and efficient irrigation (e.g., drip irrigation) can significantly improve water use efficiency. Policy measures focused on rejuvenating traditional water bodies, enforcing stricter groundwater regulations, and raising public awareness are essential. Furthermore, adopting modern technologies for real-time monitoring and data-driven decision-making can optimize resource allocation and minimize wastage. In summary, combining sustainable practices, comprehensive policy reforms, and community engagement is vital for addressing water scarcity and ensuring long-term water security in India.",
      "marks": 15,
      "word_limit": 250
    },
    {
      "question_number": 7,
      "question_text": "What is regionalism in India, and how does it manifest in different states? How does it differ from regional disparity?",
      "model_answer": "Regionalism in India refers to the strong attachment and identification that people have with their local region, often shaped by unique cultural, linguistic, and historical contexts. This phenomenon manifests in different states through the celebration of local traditions, festivals, and languages. It is also evident in political mobilization, as regional parties emerge to champion local issues and assert autonomy against perceived central dominance. For example, states like Tamil Nadu, West Bengal, and Maharashtra have vibrant regional political landscapes that emphasize local pride and distinct identities. In contrast, regional disparity refers to the uneven distribution of economic development, infrastructure, and public services across different parts of the country. While regionalism is rooted in cultural identity and political sentiment, regional disparity highlights structural imbalances that can lead to unequal growth and social inequities. Economic backwardness in certain regions may fuel demands for greater political autonomy or special development packages, potentially reinforcing regionalist sentiments. Addressing regional disparities through balanced economic policies, equitable resource allocation, and targeted development initiatives can help reduce the tension between regional pride and national unity. Effective governance should aim to celebrate local diversity while ensuring that all regions receive the investment and opportunities necessary for inclusive growth. In doing so, India can harness the positive aspects of regionalism to enrich its cultural mosaic without exacerbating economic and social imbalances.",
      "marks": 15,
      "word_limit": 250
    },
    {
      "question_number": 8,
      "question_text": "What type of cooperation between the government, NGOs, and private sectors would be most effective in tackling socio-economic issues of development?",
      "model_answer": "Effective cooperation among the government, NGOs, and private sectors is vital to address complex socio-economic development challenges. Each sector brings unique strengths: the government provides regulatory frameworks, policy support, and funding; NGOs offer deep grassroots insights, community engagement, and expertise in social welfare; while the private sector contributes innovation, efficiency, and significant resources, particularly in technology and management practices. Public-private partnerships (PPPs) are particularly effective in areas such as infrastructure development, healthcare, education, and skill training. Successful joint ventures in affordable housing projects or digital education platforms demonstrate how combined efforts can yield high-impact results. NGOs ensure these initiatives effectively reach marginalized communities by bridging the gap between policy and ground realities. For collaboration to succeed, transparent communication, clearly defined roles, and mutual accountability are essential. Establishing joint task forces, advisory committees, and shared funding models can streamline efforts and enhance project execution. Leveraging technology for monitoring and evaluation further ensures that resources are utilized efficiently and outcomes are measurable. Ultimately, a synergistic partnership that aligns the mandates and strengths of the government, NGOs, and the private sector can drive inclusive development. This integrated approach not only addresses immediate socio-economic issues but also builds resilient communities, reduces disparities, and lays the foundation for long-term, sustainable growth in a rapidly evolving economic landscape.",
      "marks": 15,
      "word_limit": 250
    },
    {
      "question_number": 9,
      "question_text": "Analyze the interplay of multiple factors leading to land degradation, drought and desertification. Give major Initiatives taken at UNCCD's COP 16.",
      "model_answer": "Land degradation, drought, and desertification in India arise from a confluence of natural processes and human activities. Unsustainable agricultural practices, deforestation, overgrazing, and urban sprawl have accelerated soil erosion and nutrient depletion, diminishing vegetation cover. These human-induced factors, compounded by climate change—characterized by erratic rainfall and rising temperatures—exacerbate water scarcity and reduce land productivity. Intensive farming and the excessive use of chemical fertilizers further weaken soil health, while poor water management and inadequate conservation practices leave lands highly vulnerable to desertification. At the UNCCD's COP 16, several key initiatives were introduced to address these challenges. The conference underscored the necessity of sustainable land management practices such as agroforestry, conservation agriculture, and integrated watershed management to restore degraded lands and build resilience. Emphasis was placed on community-based approaches that empower local stakeholders through capacity building and knowledge sharing. Additionally, the COP highlighted the importance of international cooperation and increased investment in research and technology to monitor land degradation and develop innovative solutions. These measures are designed not only to mitigate the adverse impacts of land degradation but also to promote sustainable rural development and food security. By focusing on both prevention and restoration, the initiatives aim to ensure that land remains a viable resource for future generations while supporting broader environmental and socio-economic objectives.",
      "marks": 15,
      "word_limit": 250
    },
    {
      "question_number": 10,
      "question_text": "Examine the social and economic impacts of rapid urbanization on Indian society. Suggest measures to ensure sustainable urban development.",
      "model_answer": "Rapid urbanization in India has triggered profound social and economic changes, offering growth opportunities while also presenting significant challenges. Economically, urban centers have become vibrant hubs of investment, industry, and employment, spurring overall growth. However, this expansion has also led to rising income disparities, escalating living costs, and the proliferation of informal settlements. The rapid influx of people has strained housing, transportation, and basic amenities, resulting in overcrowding and deteriorating infrastructure. Socially, urbanization has transformed demographic patterns, as diverse populations converge in metropolitan areas. This melting pot of cultures has fostered innovation and cultural exchange but has also heightened social fragmentation, with issues like increased crime rates and weakened community ties. The migration from rural regions disrupts traditional social networks, often leaving vulnerable groups marginalized in the urban environment. To achieve sustainable urban development, a comprehensive, multi-pronged strategy is required. Governments must invest in affordable housing, efficient public transportation, and modern infrastructure while also promoting green spaces and renewable energy solutions. Implementing strict zoning regulations, incentivizing mixed-use developments, and integrating smart city technologies can optimize urban planning. Public-private partnerships are crucial to mobilize resources, while robust community engagement ensures that local needs are met. Inclusive policies that provide equitable access to services for the urban poor are essential. Through these combined efforts, cities can evolve into resilient, sustainable environments that support economic growth, enhance quality of life, and safeguard the interests of all residents for future generations.",
      "marks": 15,
      "word_limit": 250
    }
  ]
}
*/

/* 
You are an AI evaluator for the Union Public Service Commission (UPSC) exam. Your task is to evaluate students' answer papers based on the given evaluation criteria. You will receive a JSON object containing questions with their respective numbers, text, model answers, marks, and word limits. Additionally, you will receive a student's answers for evaluation usually with blue or black color ink.

Your evaluation should include the following:
    - Attained Marks: Score the answer based on the provided criteria.
    - Feedback: Provide constructive feedback, highlighting strengths and areas for improvement.

Follow the evaluation criteria below:

1. Content & Relevance:
    - Does the answer properly address the question?
    - Logical structuring of points.
2. Clarity & Coherence:
    - Clear articulation of thoughts.
    - Well-structured introduction, body, and conclusion.
3. Use of Examples, Data & Case Studies:
    - Relevant examples, facts, and case studies enhance the answer.
4. Interdisciplinary Approach:
    - Connecting different subjects (e.g., history with polity, economics with environment).
5. Presentation & Handwriting:
    - Legibility matters, though marks are not directly deducted for bad handwriting.
6. Word Limit Adherence:
    - Exceeding or falling too short can lead to mark deduction.

JSON object containing questions with their respective numbers, text, model answers, marks, and word limits:

'''json
{
  "questions": [
    {
      "question_number": 1,
      "question_text": "Analyze the role of government schemes in fostering women's empowerment in India. Discuss the challenges that hinder their implementation.",
      "model_answer": "Government schemes like Beti Bachao Beti Padhao, Mahila E-Haat, and Sukanya Samriddhi Yojana have significantly enhanced women's empowerment by improving education, financial inclusion, and health awareness. These initiatives promote gender equality by building capacity through skill development and entrepreneurship opportunities. They also encourage social participation and independence, fostering a more equitable society. However, challenges such as entrenched patriarchal mindsets, social stigma, and traditional gender roles persist. Inadequate infrastructure, bureaucratic delays, and uneven implementation—especially in rural areas—limit the reach and impact of these programs. Additionally, limited awareness among target groups hampers their effectiveness. Overcoming these obstacles requires better policy implementation, increased grassroots-level sensitization, and robust monitoring systems to ensure that empowerment initiatives translate into tangible socio-economic progress.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 2,
      "question_text": "How has globalization influenced the traditional cultural values of India?",
      "model_answer": "Globalization has significantly influenced India's cultural landscape by introducing diverse ideas, lifestyles, and consumption patterns. Exposure to global media and digital communication has led to a fusion of Western and Indian cultural elements. Urban centers increasingly embrace modernity, individualism, and consumerism, while rural regions strive to preserve indigenous customs and traditions. This cultural exchange has spurred innovation in art, music, and cuisine, yet it has also raised concerns about cultural homogenization and the potential erosion of local practices. Traditional family structures and community bonds are evolving, with younger generations often favoring global perspectives. Despite these changes, India's pluralistic society continues to balance modern influences with deep-rooted traditions, ensuring that its rich cultural heritage remains intact even as new global trends emerge.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 3,
      "question_text": "Does climate change have an impact on the monsoonal pattern in India? Comment with examples and scientific evidence.",
      "model_answer": "Climate change has notably affected India's monsoonal patterns by altering the timing, intensity, and spatial distribution of rainfall. Scientific studies indicate a trend toward more extreme weather events, with erratic rainfall leading to both severe floods and prolonged droughts. For instance, recent delays in monsoon onset and uneven precipitation have disrupted agricultural cycles and strained water resources. Research from the Indian Institute of Tropical Meteorology links rising global temperatures to increased atmospheric moisture, intensifying rainfall events and unpredictability. Additionally, the warming Indian Ocean further contributes to monsoon variability. These changes have critical implications for agriculture, water management, and disaster preparedness. Although natural variability plays a role, the consistent trends observed over decades affirm that anthropogenic climate change is modifying traditional monsoonal behavior, thereby presenting significant challenges for food security and regional planning.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 4,
      "question_text": "Caste based discrimination continues to exist in modern times, despite rapid changes in socio-economic conditions since Independence. Analyze.",
      "model_answer": "Despite substantial socio-economic progress since Independence, caste-based discrimination remains deeply rooted in India. Modernization and urbanization have not eradicated longstanding social hierarchies and prejudices. In employment, education, and social interactions, implicit biases and systemic barriers still limit opportunities for lower-caste individuals. While affirmative action policies have improved access to education and government positions, subtle forms of exclusion persist in private and rural sectors. Political mobilization based on caste identities further reinforces these divisions, making it difficult to achieve complete social integration. Although legal frameworks exist to combat discrimination, enforcement gaps and societal inertia often undermine their effectiveness. Overcoming caste-based discrimination necessitates comprehensive reforms that include legal measures, economic opportunities, and a transformative shift in societal attitudes. Enhancing education, promoting inclusive policies, and fostering community dialogue are essential to bridge historical divides and create a more equitable society.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 5,
      "question_text": "What factors should be considered while setting up a semiconductor industry, along with examples, and what has been India's progress in semiconductor manufacturing?",
      "model_answer": "Establishing a semiconductor industry requires robust technological infrastructure, a skilled workforce, integrated supply chains, and supportive policies. Key considerations include investment in R&D, development of state-of-the-art fabrication facilities, and secure access to critical raw materials and high-precision equipment. Successful models from South Korea and Taiwan, which leveraged public-private partnerships and advanced manufacturing facilities, offer instructive examples. India's progress in semiconductor manufacturing has been gradual; initiatives such as the Make in India campaign and recent proposals for fabrication units demonstrate a growing commitment. However, challenges in technology transfer, significant capital requirements, and intense global competition persist. To accelerate growth, India must strengthen collaborations with international leaders, invest in technical education and research, and create a favorable regulatory environment. Such measures can help establish a competitive semiconductor sector, contributing substantially to technological advancement and economic growth.",
      "marks": 10,
      "word_limit": 150
    },
    {
      "question_number": 6,
      "question_text": "Discuss the causes and consequences of water scarcity in India. Highlight the role of water management strategies in addressing this issue.",
      "model_answer": "Water scarcity in India stems from a mix of natural and human-induced factors. Rapid population growth, urbanization, and industrial expansion have dramatically increased water demand, while over-extraction of groundwater and inefficient irrigation practices deplete available resources. Climate variability—including erratic monsoon patterns, prolonged droughts, and unpredictable rainfall—further aggravates water shortages. Additionally, poor water governance, inadequate infrastructure, and pollution of water bodies compound the crisis. The consequences are extensive: agriculture suffers from inadequate irrigation, leading to reduced crop yields, food insecurity, and lower farmer incomes. Urban centers face chronic shortages that affect daily life, health, and sanitation, while ecosystems endure stress from diminished river flows and wetland degradation. Social disparities widen as access to clean water becomes increasingly uneven. Effective water management strategies are crucial to mitigate these impacts. Integrated Water Resources Management (IWRM) promotes the coordinated development of water, land, and related resources, ensuring sustainable utilization. Techniques such as rainwater harvesting, watershed management, and efficient irrigation (e.g., drip irrigation) can significantly improve water use efficiency. Policy measures focused on rejuvenating traditional water bodies, enforcing stricter groundwater regulations, and raising public awareness are essential. Furthermore, adopting modern technologies for real-time monitoring and data-driven decision-making can optimize resource allocation and minimize wastage. In summary, combining sustainable practices, comprehensive policy reforms, and community engagement is vital for addressing water scarcity and ensuring long-term water security in India.",
      "marks": 15,
      "word_limit": 250
    },
    {
      "question_number": 7,
      "question_text": "What is regionalism in India, and how does it manifest in different states? How does it differ from regional disparity?",
      "model_answer": "Regionalism in India refers to the strong attachment and identification that people have with their local region, often shaped by unique cultural, linguistic, and historical contexts. This phenomenon manifests in different states through the celebration of local traditions, festivals, and languages. It is also evident in political mobilization, as regional parties emerge to champion local issues and assert autonomy against perceived central dominance. For example, states like Tamil Nadu, West Bengal, and Maharashtra have vibrant regional political landscapes that emphasize local pride and distinct identities. In contrast, regional disparity refers to the uneven distribution of economic development, infrastructure, and public services across different parts of the country. While regionalism is rooted in cultural identity and political sentiment, regional disparity highlights structural imbalances that can lead to unequal growth and social inequities. Economic backwardness in certain regions may fuel demands for greater political autonomy or special development packages, potentially reinforcing regionalist sentiments. Addressing regional disparities through balanced economic policies, equitable resource allocation, and targeted development initiatives can help reduce the tension between regional pride and national unity. Effective governance should aim to celebrate local diversity while ensuring that all regions receive the investment and opportunities necessary for inclusive growth. In doing so, India can harness the positive aspects of regionalism to enrich its cultural mosaic without exacerbating economic and social imbalances.",
      "marks": 15,
      "word_limit": 250
    },
    {
      "question_number": 8,
      "question_text": "What type of cooperation between the government, NGOs, and private sectors would be most effective in tackling socio-economic issues of development?",
      "model_answer": "Effective cooperation among the government, NGOs, and private sectors is vital to address complex socio-economic development challenges. Each sector brings unique strengths: the government provides regulatory frameworks, policy support, and funding; NGOs offer deep grassroots insights, community engagement, and expertise in social welfare; while the private sector contributes innovation, efficiency, and significant resources, particularly in technology and management practices. Public-private partnerships (PPPs) are particularly effective in areas such as infrastructure development, healthcare, education, and skill training. Successful joint ventures in affordable housing projects or digital education platforms demonstrate how combined efforts can yield high-impact results. NGOs ensure these initiatives effectively reach marginalized communities by bridging the gap between policy and ground realities. For collaboration to succeed, transparent communication, clearly defined roles, and mutual accountability are essential. Establishing joint task forces, advisory committees, and shared funding models can streamline efforts and enhance project execution. Leveraging technology for monitoring and evaluation further ensures that resources are utilized efficiently and outcomes are measurable. Ultimately, a synergistic partnership that aligns the mandates and strengths of the government, NGOs, and the private sector can drive inclusive development. This integrated approach not only addresses immediate socio-economic issues but also builds resilient communities, reduces disparities, and lays the foundation for long-term, sustainable growth in a rapidly evolving economic landscape.",
      "marks": 15,
      "word_limit": 250
    },
    {
      "question_number": 9,
      "question_text": "Analyze the interplay of multiple factors leading to land degradation, drought and desertification. Give major Initiatives taken at UNCCD's COP 16.",
      "model_answer": "Land degradation, drought, and desertification in India arise from a confluence of natural processes and human activities. Unsustainable agricultural practices, deforestation, overgrazing, and urban sprawl have accelerated soil erosion and nutrient depletion, diminishing vegetation cover. These human-induced factors, compounded by climate change—characterized by erratic rainfall and rising temperatures—exacerbate water scarcity and reduce land productivity. Intensive farming and the excessive use of chemical fertilizers further weaken soil health, while poor water management and inadequate conservation practices leave lands highly vulnerable to desertification. At the UNCCD's COP 16, several key initiatives were introduced to address these challenges. The conference underscored the necessity of sustainable land management practices such as agroforestry, conservation agriculture, and integrated watershed management to restore degraded lands and build resilience. Emphasis was placed on community-based approaches that empower local stakeholders through capacity building and knowledge sharing. Additionally, the COP highlighted the importance of international cooperation and increased investment in research and technology to monitor land degradation and develop innovative solutions. These measures are designed not only to mitigate the adverse impacts of land degradation but also to promote sustainable rural development and food security. By focusing on both prevention and restoration, the initiatives aim to ensure that land remains a viable resource for future generations while supporting broader environmental and socio-economic objectives.",
      "marks": 15,
      "word_limit": 250
    },
    {
      "question_number": 10,
      "question_text": "Examine the social and economic impacts of rapid urbanization on Indian society. Suggest measures to ensure sustainable urban development.",
      "model_answer": "Rapid urbanization in India has triggered profound social and economic changes, offering growth opportunities while also presenting significant challenges. Economically, urban centers have become vibrant hubs of investment, industry, and employment, spurring overall growth. However, this expansion has also led to rising income disparities, escalating living costs, and the proliferation of informal settlements. The rapid influx of people has strained housing, transportation, and basic amenities, resulting in overcrowding and deteriorating infrastructure. Socially, urbanization has transformed demographic patterns, as diverse populations converge in metropolitan areas. This melting pot of cultures has fostered innovation and cultural exchange but has also heightened social fragmentation, with issues like increased crime rates and weakened community ties. The migration from rural regions disrupts traditional social networks, often leaving vulnerable groups marginalized in the urban environment. To achieve sustainable urban development, a comprehensive, multi-pronged strategy is required. Governments must invest in affordable housing, efficient public transportation, and modern infrastructure while also promoting green spaces and renewable energy solutions. Implementing strict zoning regulations, incentivizing mixed-use developments, and integrating smart city technologies can optimize urban planning. Public-private partnerships are crucial to mobilize resources, while robust community engagement ensures that local needs are met. Inclusive policies that provide equitable access to services for the urban poor are essential. Through these combined efforts, cities can evolve into resilient, sustainable environments that support economic growth, enhance quality of life, and safeguard the interests of all residents for future generations.",
      "marks": 15,
      "word_limit": 250
    }
  ]
}
'''
Your response must strictly follow the JSON format below:
'''json
{
  "evaluated_answers": [
    {
      "question_number": 1,
      "question_text": "Explain the significance of Directive Principles of State Policy in the Indian Constitution.",
      "model_answer": "The Directive Principles of State Policy (DPSP) are guidelines for the state to establish a just society. Enshrined in Part IV of the Constitution, they aim to promote social and economic welfare. While not legally enforceable, they serve as a benchmark for governance...",
      "marks": 10,
      "word_limit": 250,
      "attained_marks": 8,
      "feedback": "The answer effectively covers the significance of DPSPs and their role in governance. However, including a case study or an example (e.g., Article 39(b) and (c)) would have strengthened the response."
    },
    {
      "question_number": 2,
      "question_text": "Discuss the impact of globalization on Indian agriculture.",
      "model_answer": "Globalization has significantly influenced Indian agriculture by increasing market access, promoting technology transfer, and affecting pricing mechanisms. However, it has also led to challenges such as dependence on multinational corporations, volatility in crop prices, and environmental concerns...",
      "marks": 15,
      "word_limit": 300,
      "attained_marks": 12,
      "feedback": "Good coverage of globalization’s impact on agriculture. The answer is well-structured and includes relevant points. Adding data/statistics (e.g., percentage of agricultural exports in GDP) would have further improved the analysis."
    }
  ]
}
'''

*/
