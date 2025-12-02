document.addEventListener('DOMContentLoaded', function() {
    if (checkDate()) {
        initMuharremQuiz();
    }
});

function checkDate() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    return (currentMonth === 11 && (currentDay === 2 || currentDay === 7 || currentDay === 3));
}

function initMuharremQuiz() {
    const overlay = document.getElementById('birthday-quiz-overlay');
    const quizSteps = document.querySelectorAll('.quiz-step');
    const optionButtons = document.querySelectorAll('.option-btn');
    
    let currentStepIndex = 0;
    let confettiInterval;

    document.body.style.overflow = 'hidden';
    overlay.style.display = 'flex';

    const textElements = document.querySelectorAll('.intro-text, .final-text');
    textElements.forEach(el => {
        el.style.position = 'absolute';
        el.style.left = '0';
        el.style.top = '50%';
        el.style.width = '100%';
        el.style.textAlign = 'center';
        el.style.margin = '0';
        el.style.padding = '0';
        el.style.transform = 'translateY(-50%)'; 
    });

    setTimeout(() => {
        overlay.classList.add('visible');
    }, 100);

    function startBackgroundConfetti() { 
        if (confettiInterval) return; 
        
        const duration = 20 * 1000; 
        const animationEnd = Date.now() + duration; 
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10001 }; 

        function randomInRange(min, max) { return Math.random() * (max - min) + min; } 

        confettiInterval = setInterval(function () { 
            const timeLeft = animationEnd - Date.now(); 
            if (timeLeft <= 0) return clearInterval(confettiInterval); 
            
            const particleCount = 30 * (timeLeft / duration); 

            confetti({ 
                ...defaults, 
                particleCount, 
                origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
                colors: ['#FFD700', '#ffffff', '#00BFFF'],
                shapes: ['square', 'circle'] 
            }); 
        }, 250); 
    }

    function burstConfetti() { 
        confetti({ 
            particleCount: 100, 
            spread: 70, 
            origin: { y: 0.6 }, 
            zIndex: 10001,
            colors: ['#FFD700', '#ffffff']
        }); 
    }

    function shootMassiveConfetti() {
        const end = Date.now() + (5 * 1000);
        const colors = ['#FFD700', '#ffffff', '#00BFFF'];

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.6 },
                colors: colors,
                zIndex: 10002
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.6 },
                colors: colors,
                zIndex: 10002
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        setTimeout(burstConfetti, 500);
        setTimeout(burstConfetti, 1500);
        setTimeout(burstConfetti, 2500);
    }

    function showStep(index) { 
        quizSteps.forEach(step => step.classList.remove('active')); 
        if (quizSteps[index]) { 
            quizSteps[index].classList.add('active'); 
            currentStepIndex = index; 
        } 
    }

    function handleCorrectAnswer() { 
        burstConfetti();
        setTimeout(() => showStep(currentStepIndex + 1), 500); 
    }

    function handleWrongAnswer(button) { 
        button.classList.add('shake');
        button.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
        
        setTimeout(() => { 
            button.classList.remove('shake');
            button.style.backgroundColor = '';
        }, 500); 
    }

    optionButtons.forEach(button => { 
        button.addEventListener('click', () => { 
            const isCorrect = button.getAttribute('data-correct') === 'true'; 
            if (isCorrect) { 
                handleCorrectAnswer(); 
            } else { 
                handleWrongAnswer(button); 
            } 
        }); 
    });

    function runIntro() { 
        const text1 = document.getElementById('intro-text-1'); 
        const text2 = document.getElementById('intro-text-2'); 
        
        showStep(0);

        setTimeout(() => text1.classList.add('visible'), 500); 
        setTimeout(() => text1.style.opacity = '0', 2000); 

        setTimeout(() => { 
            text2.classList.add('visible'); 
            startBackgroundConfetti();
        }, 2500); 

        setTimeout(() => showStep(1), 4500);
    }

    const sliderThumb = document.getElementById('love-slider-thumb'); 
    const sliderTrack = document.getElementById('love-slider-track'); 
    let isDragging = false;

    function onDragStart(e) { 
        isDragging = true; 
        sliderThumb.style.cursor = 'grabbing'; 
        e.preventDefault();
    }

    function onDragMove(e) { 
        if (!isDragging) return; 
        
        const clientX = e.clientX || e.touches[0].clientX; 
        const trackRect = sliderTrack.getBoundingClientRect(); 
        let newX = clientX - trackRect.left; 

        if (newX < 0) newX = 0;
        if (newX > trackRect.width - 60) newX = trackRect.width - 60;

        sliderThumb.style.left = `${newX}px`; 

        if (newX >= trackRect.width - 70) { 
            isDragging = false; 
            handleSliderWin(); 
        } 
    }

    function onDragEnd(e) { 
        if (!isDragging) return; 
        isDragging = false; 
        sliderThumb.style.cursor = 'grab'; 

        sliderThumb.style.transition = 'left 0.3s ease'; 
        sliderThumb.style.left = '0px'; 
        setTimeout(() => { sliderThumb.style.transition = ''; }, 300); 
    }

    function handleSliderWin() { 
        document.removeEventListener('mousemove', onDragMove); 
        document.removeEventListener('mouseup', onDragEnd); 
        document.removeEventListener('touchmove', onDragMove); 
        document.removeEventListener('touchend', onDragEnd); 

        shootMassiveConfetti(); 
        
        setTimeout(() => showStep(7), 500);
        runFinalSequence(); 
    }

    sliderThumb.addEventListener('mousedown', onDragStart); 
    document.addEventListener('mousemove', onDragMove); 
    document.addEventListener('mouseup', onDragEnd); 

    sliderThumb.addEventListener('touchstart', onDragStart); 
    document.addEventListener('touchmove', onDragMove); 
    document.addEventListener('touchend', onDragEnd);

    function runFinalSequence() { 
        const final1 = document.getElementById('final-text-1'); 
        const final2 = document.getElementById('final-text-2'); 
        const final3 = document.getElementById('final-text-3'); 

        setTimeout(() => final1.classList.add('visible'), 500); 
        setTimeout(() => final1.style.opacity = '0', 2500); 

        setTimeout(() => final2.classList.add('visible'), 3000); 
        setTimeout(() => final2.style.opacity = '0', 5000); 
 
        setTimeout(() => final3.classList.add('visible'), 5500); 

        setTimeout(() => {
            overlay.style.opacity = '0';
            document.body.style.overflow = 'auto';
        }, 8000); 
        
        setTimeout(() => { 
            overlay.style.display = 'none'; 
            clearInterval(confettiInterval);
        }, 9000); 
    }

    runIntro();
}