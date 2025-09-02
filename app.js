// Mapping between Latin and Greek characters
const greekMap = {
    'a': 'α', 'b': 'β', 'c': 'ψ', 'd': 'δ', 'e': 'ε',
    'f': 'φ', 'g': 'γ', 'h': 'η', 'i': 'ι', 'j': 'ξ',
    'k': 'κ', 'l': 'λ', 'm': 'μ', 'n': 'ν', 'o': 'ο',
    'p': 'π', 'q': 'θ', 'r': 'ρ', 's': 'σ', 't': 'τ',
    'u': 'υ', 'v': 'ω', 'w': 'ώ', 'x': 'χ', 'y': 'ύ',
    'z': 'ζ',
    'A': 'Α', 'B': 'Β', 'C': 'Ψ', 'D': 'Δ', 'E': 'Ε',
    'F': 'Φ', 'G': 'Γ', 'H': 'Η', 'I': 'Ι', 'J': 'Ξ',
    'K': 'Κ', 'L': 'Λ', 'M': 'Μ', 'N': 'Ν', 'O': 'Ο',
    'P': 'Π', 'Q': 'Θ', 'R': 'Ρ', 'S': 'Σ', 'T': 'Τ',
    'U': 'Υ', 'V': 'Ω', 'W': 'Ώ', 'X': 'Χ', 'Y': 'Ύ',
    'Z': 'Ζ'
};

// Reverse mapping for recovery
const latinMap = {};
for (const [latin, greek] of Object.entries(greekMap)) {
    latinMap[greek] = latin;
}

function convertToFake() {
    const realPassword = document.getElementById('realPassword').value;
    let fakePassword = '';
    
    for (let char of realPassword) {
        fakePassword += greekMap[char] || char;
    }
    
    document.getElementById('fakePassword').innerText = fakePassword;
}

function recoverReal() {
    const fakePassword = document.getElementById('fakeInput').value;
    let realPassword = '';
    
    for (let char of fakePassword) {
        realPassword += latinMap[char] || char;
    }
    
    document.getElementById('realPasswordResult').innerText = realPassword;
}

function copyToClipboard() {
    const fakeText = document.getElementById('fakePassword').innerText;
    navigator.clipboard.writeText(fakeText).then(() => {
        alert('Fake password copied to clipboard!');
    });
}
