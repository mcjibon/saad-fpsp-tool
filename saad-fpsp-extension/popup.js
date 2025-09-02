const greekMap = {
    'a': 'α', 'b': 'β', 'c': 'ψ', 'd': 'δ', 'e': 'ε',
    'f': 'φ', 'g': 'γ', 'h': 'η', 'i': 'ι', 'j': 'ξ',
    'k': 'κ', 'l': 'λ', 'm': 'μ', 'n': 'ν', 'o': 'ο',
    'p': 'π', 'q': 'θ', 'r': 'ρ', 's': 'σ', 't': 'τ',
    'u': 'υ', 'v': 'ω', 'w': 'ώ', 'x': 'χ', 'y': 'ύ',
    'z': 'ζ'
};

document.getElementById('convert').addEventListener('click', () => {
    const realPassword = document.getElementById('realPassword').value;
    let fakePassword = '';
    
    for (let char of realPassword) {
        fakePassword += greekMap[char] || char;
    }
    
    document.getElementById('result').innerHTML = `
        <p><strong>Fake Password:</strong> ${fakePassword}</p>
        <button id="copy">Copy</button>
        <button id="fill">Auto-Fill on Facebook</button>
    `;
    
    document.getElementById('copy').addEventListener('click', () => {
        navigator.clipboard.writeText(fakePassword);
    });
    
    document.getElementById('fill').addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "fillPassword",
                password: fakePassword
            });
        });
    });
});
