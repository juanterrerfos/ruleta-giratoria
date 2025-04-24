document.addEventListener('DOMContentLoaded', () => {
    const rouletteWheel = document.querySelector('.roulette-wheel');
    const spinButton = document.getElementById('spinButton');
    let isSpinning = false;
    let totalRotation = 0;

    spinButton.addEventListener('click', () => {
        if (isSpinning) return;
        
        isSpinning = true;
        spinButton.disabled = true;

        // Generar un número aleatorio de rotaciones (entre 15 y 18 vueltas completas)
        const randomRotations = Math.floor(Math.random() * 3) + 15;
        const randomAngle = Math.floor(Math.random() * 360);
        
        // Calcular la rotación final
        totalRotation += (randomRotations * 360) + randomAngle;
        
        // Aplicar la rotación
        rouletteWheel.style.transform = `rotate(${totalRotation}deg)`;
        
        // Habilitar el botón después de que termine la animación
        setTimeout(() => {
            isSpinning = false;
            spinButton.disabled = false;
        }, 3000);
    });
}); 