document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        this.querySelector('.dropdown-content').classList.toggle('show');
      });
    });
  
    const questions = [
      "What is BIMI?",
      "How does BIMI work?",
      "What are the benefits of using BIMI?",
      "How can I access BIMI services?",
      "Is BIMI secure?"
    ];
  
    const answers = [
      "BIMI stands for Brand Indicators for Message Identification.",
      "BIMI works by displaying your brand logo next to your email messages.",
      "The benefits include increased brand recognition and trust.",
      "You can access BIMI services through our official website.",
      "Yes, BIMI is designed with security in mind."
    ];
  
    function getRandomQA() {
      const randomIndex = Math.floor(Math.random() * questions.length);
      return {
        question: questions[randomIndex],
        answer: answers[randomIndex]
      };
    }
  
    const qaContent = document.getElementById('qa-content');
  
    function displayRandomQA() {
      const qa = getRandomQA();
      qaContent.innerHTML = `<p><strong>Q:</strong> ${qa.question}</p><p><strong>A:</strong> ${qa.answer}</p>`;
    }
  
    // Generate a random Q&A on page load
    displayRandomQA();
  
    // Generate a random Q&A every 5 seconds
    setInterval(displayRandomQA, 5000);
  
    const revealSection = document.querySelector('.reveal-section');
    const revealText = document.querySelector('.reveal-text');
  
    window.addEventListener('scroll', function() {
      const sectionTop = revealSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight && sectionTop > 0) {
        revealSection.classList.add('revealed');
      } else {
        revealSection.classList.remove('revealed');
      }
  
      const scrollPosition = window.scrollY;
      const zoomOutEffect = 1 - (scrollPosition / 1000);
      const zoomInEffect = 1 + (scrollPosition / 1000);
      revealSection.style.transform = `scale(${zoomOutEffect})`;
      revealText.style.transform = `scale(${zoomInEffect})`;
    });
  });
  