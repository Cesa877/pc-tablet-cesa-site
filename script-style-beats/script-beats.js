document.addEventListener("DOMContentLoaded", function() {
    const canvasVisualizer = document.getElementById('visualizer');
    const ctxVisualizer = canvasVisualizer.getContext('2d');
    canvasVisualizer.width = window.innerWidth;
    canvasVisualizer.height = window.innerHeight;

    const canvasParticles = document.getElementById('particles');
    const ctxParticles = canvasParticles.getContext('2d');
    canvasParticles.width = window.innerWidth;
    canvasParticles.height = window.innerHeight;

    const audios = document.querySelectorAll('audio');

    const particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvasParticles.width;
            this.y = Math.random() * canvasParticles.height;
            this.size = Math.random() * 3 + 1; // Particelle più piccole
            this.speedX = (Math.random() * 1.5 - 0.75) * 0.5; // Movimento più lento
            this.speedY = (Math.random() * 1.5 - 0.75) * 0.5; // Movimento più lento
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvasParticles.width || this.x < 0) {
                this.speedX = -this.speedX;
            }

            if (this.y > canvasParticles.height || this.y < 0) {
                this.speedY = -this.speedY;
            }
        }

        draw() {
            ctxParticles.fillStyle = 'rgba(255, 255, 255, 0.2)'; // Più trasparenti
            ctxParticles.beginPath();
            ctxParticles.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctxParticles.closePath();
            ctxParticles.fill();
        }
    }

    function createParticles() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    createParticles();

    function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
    }

    function animateParticles() {
        ctxParticles.clearRect(0, 0, canvasParticles.width, canvasParticles.height);
        handleParticles();
        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    audios.forEach((audio, index) => {
        audio.addEventListener('play', function() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const audioSource = audioContext.createMediaElementSource(audio);
            const analyzer = audioContext.createAnalyser();

            audioSource.connect(analyzer);
            analyzer.connect(audioContext.destination);
            analyzer.fftSize = 256;

            const bufferLength = analyzer.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            console.log("Audio play event triggered for", audio.id);

            function drawVisualizer() {
                ctxVisualizer.clearRect(0, 0, canvasVisualizer.width, canvasVisualizer.height);
                analyzer.getByteFrequencyData(dataArray);

                const barWidth = (canvasVisualizer.width / bufferLength) * 1.5; // Barre leggermente più strette
                let barHeight;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                    barHeight = dataArray[i] * 1.5; // Le barre arrivano più in alto

                    const gradient = ctxVisualizer.createLinearGradient(0, 0, 0, canvasVisualizer.height);
                    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Colore pieno alla base
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Colore dissolto in cima

                    ctxVisualizer.fillStyle = gradient;
                    ctxVisualizer.fillRect(x, canvasVisualizer.height - barHeight, barWidth, barHeight);

                    x += barWidth + 1;
                }

                requestAnimationFrame(drawVisualizer);
            }

            drawVisualizer();

            const titleElement = document.getElementById(`title${index + 1}`);

            function updateShadows() {
                analyzer.getByteFrequencyData(dataArray);

                // Consideriamo solo gli alti e i medi (escludiamo i bassi)
                const highAndMidData = dataArray.slice(bufferLength / 2);
                const lowData = dataArray.slice(0, bufferLength / 2);
                const maxHighAndMidValue = Math.max(...highAndMidData);
                const maxLowValue = Math.max(...lowData);

                titleElement.style.boxShadow = `0 0 ${maxHighAndMidValue / 20}px red, 0 0 ${maxHighAndMidValue / 10}px red`;

                requestAnimationFrame(updateShadows);
            }

            updateShadows();

            audio.addEventListener('pause', () => {
                console.log("Audio paused for", audio.id);
                ctxVisualizer.clearRect(0, 0, canvasVisualizer.width, canvasVisualizer.height);
                titleElement.style.boxShadow = '';

                particlesArray.forEach(particle => {
                    particle.speedX = (Math.random() * 1.5 - 0.75) * 0.5;
                    particle.speedY = (Math.random() * 1.5 - 0.75) * 0.5;
                });
            });

            audio.addEventListener('ended', () => {
                console.log("Audio ended for", audio.id);
                ctxVisualizer.clearRect(0, 0, canvasVisualizer.width, canvasVisualizer.height);
                titleElement.style.boxShadow = '';
                audio.currentTime = 0; // Resetta il minutaggio a 0

                particlesArray.forEach(particle => {
                    particle.speedX = (Math.random() * 1.5 - 0.75) * 0.5;
                    particle.speedY = (Math.random() * 1.5 - 0.75) * 0.5;
                });
            });

            function updateParticles() {
                analyzer.getByteFrequencyData(dataArray);

                const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

                particlesArray.forEach(particle => {
                    particle.x += (Math.random() - 0.5) * average * 0.05;
                    particle.y += (Math.random() - 0.5) * average * 0.05;

                    if (particle.x > canvasParticles.width || particle.x < 0) {
                        particle.x = Math.random() * canvasParticles.width;
                    }

                    if (particle.y > canvasParticles.height || particle.y < 0) {
                        particle.y = Math.random() * canvasParticles.height;
                    }
                });

                requestAnimationFrame(updateParticles);
            }

            updateParticles();
        });
    });
});
