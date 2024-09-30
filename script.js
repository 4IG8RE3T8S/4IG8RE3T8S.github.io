function countWordsAndCharacters() {
    const inputText = document.getElementById('inputText').value;
    
    const wordCount = inputText.trim().split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;
    
    const charCount = inputText.length;

    document.getElementById('wordCount').textContent = 'จำนวนคำ: ' + wordCount;
    document.getElementById('charCount').textContent = 'จำนวนตัวอักษร: ' + charCount;
}
