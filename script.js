// 📱 Fail-Safe Touch Control Logic
canvas.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Blocks default mobile zooming or scrolling
    
    // Get the exact dimensions and position of the canvas on your screen
    const rect = canvas.getBoundingClientRect();
    
    // Find where your finger tapped relative to the canvas grid
    const touchX = e.touches[0].clientX - rect.left;
    const touchY = e.touches[0].clientY - rect.top;
    
    // Calculate distance from the exact center of the screen
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const diffX = touchX - centerX;
    const diffY = touchY - centerY;
    
    // Determine which directional zone was tapped based on angle from center
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) setDirection("RIGHT");
        else setDirection("LEFT");
    } else {
        if (diffY > 0) setDirection("DOWN");
        else setDirection("UP");
    }
}, { passive: false });
