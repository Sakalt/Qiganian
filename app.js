document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const wordList = document.getElementById('word-list');

    // 辞書データを表示
    function displayWords(words) {
        wordList.innerHTML = '';
        words.forEach(word => {
            const wordCard = document.createElement('div');
            wordCard.className = 'word-card';

            wordCard.innerHTML = `
                <h2>${TranslatedWord.TranslatedWord}</h2>
                <p><strong>発音:</strong> ${word.pronunciation}</p>
                <p><strong>品詞:</strong> ${word.partOfSpeech}</p>
                <p><strong>意味:</strong> ${word.meaning}</p>
                <div class="example">
                    <p><strong>例文:</strong> ${word.example}</p>
                </div>
            `;

            wordList.appendChild(wordCard);
        });
    }

    // 検索機能
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredWords = dictionary.filter(word =>
            word.word.toLowerCase().includes(query) ||
            word.pronunciation.toLowerCase().includes(query) ||
            word.meaning.toLowerCase().includes(query)
        );
        displayWords(filteredWords);
    });

    // 初期表示
    displayWords(dictionary);
});
