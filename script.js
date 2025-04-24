document.addEventListener('DOMContentLoaded', () => {
    const rouletteWheel = document.querySelector('.roulette-wheel');
    const spinButton = document.getElementById('spinButton');
    let isSpinning = false;
    let currentRotation = 0;

    spinButton.addEventListener('click', () => {
        if (isSpinning) return;
        
        isSpinning = true;
        spinButton.disabled = true;

        // Generar un número aleatorio de rotaciones (entre 8 y 12 vueltas completas)
        const randomRotations = Math.floor(Math.random() * 4) + 8;
        const randomAngle = Math.floor(Math.random() * 360);
        
        // Calcular la rotación final
        const finalRotation = currentRotation + (randomRotations * 360) + randomAngle;
        
        // Aplicar la rotación
        rouletteWheel.style.transform = `rotate(${finalRotation}deg)`;
        
        // Actualizar la rotación actual
        currentRotation = finalRotation % 360;
        
        // Habilitar el botón después de que termine la animación
        setTimeout(() => {
            isSpinning = false;
            spinButton.disabled = false;
        }, 5000); // 5 segundos, que coincide con la duración de la transición CSS
    });
}); 