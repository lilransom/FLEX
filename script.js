document.getElementById("userForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const formData = {
        hobbies: document.getElementById("hobbies").value,
        achievements: document.getElementById("achievements").value,
        essay: document.getElementById("essay").value,
        email: document.getElementById("email").value
    };

    const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
});
