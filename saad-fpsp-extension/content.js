chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fillPassword") {
        const passwordField = document.querySelector('input[type="password"]');
        if (passwordField) {
            passwordField.value = request.password;
        }
    }
});
