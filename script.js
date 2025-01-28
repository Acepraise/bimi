document.querySelector(".login").addEventListener("click", function() {
    alert("Login button clicked");
});
document.querySelector(".signup").addEventListener("click", function() {
    alert("Sign Up button clicked");
});

// Cursor movement script
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.05; // Slower movement
    cursorY += (mouseY - cursorY) * 0.05; // Slower movement
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
}

animateCursor();
