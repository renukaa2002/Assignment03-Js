function submitFeedback() {
    var feedback = document.getElementById("feedbackInput").value;
    alert("Feedback submitted: " + feedback);
}

function openNewPage() {
    window.open("newpage.html");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});