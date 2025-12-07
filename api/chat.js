import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "user", content: req.body.message }
      ]
    });

    res.status(200).json({
      reply: completion.choices[0].message.content
    });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

