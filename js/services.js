function sendMessage(event) {
    event.preventDefault();

    const apiKey = "2002290755:AAGmal2L5dJup484i_rjhIdgNZ62uV96HKs";
    const chatId = "-1001588885379";

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const phoneErrorMessageElement = document.getElementById("phoneErrorMessage1");

    if (!phone.match(/\d{10}/)) {
        phoneErrorMessageElement.style.display = "block";
        phoneErrorMessageElement.innerHTML = "Неправильно введений телефон!";
        return;
    } else {
        phoneErrorMessageElement.style.display = "none";
    }

    async function postData() {
        await fetch(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "chat_id": chatId,
                "text": `Ім'я - ${name}, телефон - ${phone}`,
            })
        });
    };

    postData().then(() => {
        document.location.href = "/thanks.html"
    });
}