document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    console.log('Elements found:', { searchInput, searchButton });

    function redirectToChat() {
        console.log('Redirecting to chat');
        window.location.href = 'https://bimi.budgit.org/chat';
    }

    if (searchButton) {
        searchButton.addEventListener('click', redirectToChat);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            console.log('Key pressed:', event.key);
            if (event.key === 'Enter') {
                redirectToChat();
            }
        });
    }
});
onclick
