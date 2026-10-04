// Scroll to blogs
function scrollToBlogs() {
    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });
}


// Blog content
const blogs = {

    1: {
        title: "The Future of Artificial Intelligence: How AI Is Changing Our Daily Lives",

        content:
            "Artificial Intelligence, commonly known as AI, is one of the " +
            "fastest-growing technologies in the world. AI enables computers " +
            "and machines to perform tasks that normally require human intelligence. " +
            "Today, AI is present in many parts of our daily lives, including " +
            "smartphones, online shopping, navigation, entertainment and education. " +
            "As AI continues to develop, it may become an even more important " +
            "part of the way we live and work."
    },

    2: {
        title: "How Artificial Intelligence Is Changing Education",

        content:
            "Artificial Intelligence is transforming the way students learn. " +
            "AI-based tools can help explain difficult concepts, create practice " +
            "questions, summarize information and provide learning support. " +
            "Teachers can also use technology to organize educational content " +
            "and understand learning patterns. However, students should use AI " +
            "as a learning support tool and develop their own understanding."
    },

    3: {
        title: "The Role of AI in Modern Healthcare",

        content:
            "AI is becoming increasingly useful in healthcare. It can help " +
            "analyze large amounts of information, support medical research " +
            "and identify patterns in data. AI-based systems can assist " +
            "healthcare professionals with various tasks. Human expertise " +
            "and responsible use of technology remain important when using AI."
    },

    4: {
        title: "What Does the Future of AI Look Like?",

        content:
            "The future of Artificial Intelligence may bring new developments " +
            "in transportation, education, healthcare, communication and workplaces. " +
            "AI may help automate repetitive tasks and provide new tools for " +
            "people and businesses. As the technology develops, responsible and " +
            "ethical use of AI will remain important."
    }

};


// Display blog
function showBlog(number) {

    document.getElementById("modalTitle").innerText =
        blogs[number].title;

    document.getElementById("modalContent").innerText =
        blogs[number].content;

    document.getElementById("blogModal").style.display = "block";
}


// Close blog
function closeBlog() {

    document.getElementById("blogModal").style.display = "none";

}


// Close modal when clicking outside it
window.onclick = function(event) {

    const modal = document.getElementById("blogModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};


// Contact form
function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").innerText =
        "Thank you, " + name + "! Your message has been submitted.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}