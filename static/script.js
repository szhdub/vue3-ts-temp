// script.js
const tooltipTrigger = document.querySelector('.tooltip-trigger');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
tooltip.textContent = tooltipTrigger.getAttribute('data-tooltip');

tooltipTrigger.addEventListener('mouseover', () => {
    tooltip.classList.add('show');
    document.body.appendChild(tooltip);
});

tooltipTrigger.addEventListener('mouseout', () => {
    tooltip.classList.remove('show');
    document.body.removeChild(tooltip);
});
