const questionData = {
    fundraising: [
        "What’s the size of the round?",
        "What’s the allocation of the funds?",
        // Add more questions here
    ],
    history: [
        "When the company was incorporated?",
        "When was the first commercial invoice/revenue?",
        "When do you plan to exit?",
    ],
    exit: [
	"When do you plan to exit?",
	"Who could be a potential buyer?",
	"There are many similar solutions on the market, so why would anyone take your company?",
	"We do not see what could drive the growth of the business so that we would have a 30x increase in the valuation on the exit?",
	"What is the potential exit for investors?",
	"When are you ready for the exit and are you planning any more rounds?",
	"What is important for a potential buyer?",
	"How to make an exit if so far nobody has succeeded in this segment?",
	"How do you plan to grow your company to reach XYZ valuation (usually x30 from the current round)?",
	// Add more questions here
                ],
            
};

function displayQuestions() {
    const topicSelect = document.getElementById("topicSelect");
    const questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = ""; // Clear previous questions

    const selectedTopic = topicSelect.value;
    if (!selectedTopic) return; // No topic selected

    const questions = questionData[selectedTopic];
    questions.forEach((question, index) => {
        const questionElement = document.createElement("p");
        questionElement.textContent = `${index + 1}. ${question}`;
        questionContainer.appendChild(questionElement);
    });
}
