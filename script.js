/* ===========================================================
   JavaScript para Controle da Apresentação
   Autor: Revisado por Gemini Code Assist
   Projeto: GuarDIA — Pitch Centelha (2025)
   =========================================================== */

// --- VARIÁVEIS E CONSTANTES ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

/**
 * Atualiza a visibilidade dos slides, mostrando apenas o slide atual.
 */
function updateSlideVisibility() {
    slides.forEach((slide, i) => {
        // Usa 'flex' para o slide ativo e 'none' para os outros
        slide.style.display = (i === currentSlideIndex) ? "flex" : "none";
    });
}

/**
 * Avança para o próximo slide.
 */
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSlideVisibility();
}

/**
 * Volta para o slide anterior.
 */
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSlideVisibility();
}

/**
 * Alterna o modo de tela cheia (fullscreen).
 */
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
        document.exitFullscreen();
    }
}

// --- EVENT LISTENERS (OUVINTES DE EVENTOS) ---
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key.toLowerCase() === "f") toggleFullscreen();
});

// --- INICIALIZAÇÃO ---
// Garante que apenas o primeiro slide seja visível ao carregar a página.
updateSlideVisibility();