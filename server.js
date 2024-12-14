const { OpenAI } = require("openai"); 


const openai = new OpenAI({
  apiKey: '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',  // Replace with your actual OpenAI API key
});

async function generateCompletion() {
  try {
    // Send request to OpenAI for a chat completion
    const completion = await openai.chat.completions.create({
      model: "gpt-4",  // Corrected model name
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: "Write a haiku about recursion in programming.",
        },
      ],
    });

    // Log the response message (haiku)
    console.log(completion.choices[0].message.content);
  } catch (error) {
    // Handle any errors
    console.error("Error occurred:", error);
  }
}

// Call the function to get the completion
generateCompletion();
