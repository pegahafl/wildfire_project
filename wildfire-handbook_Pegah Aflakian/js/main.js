window.addEventListener("DOMContentLoaded", () => {
  // Accordion logic
  document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
      const body = button.nextElementSibling;
      const isVisible = body.style.display === "block";

      document.querySelectorAll(".accordion-body").forEach(el => el.style.display = "none");
      body.style.display = isVisible ? "none" : "block";
    });
  });

  // Chart.js fire month bar chart
  const chartCanvas = document.getElementById('fire-chart');
  if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mediterranean', 'California', 'Australia', 'Cerrado', 'African Savanna'],
        datasets: [{
          label: 'Peak Fire Month',
          data: [8, 9, 1.5, 8, 7],
          backgroundColor: ['#e67e22', '#d35400', '#f39c12', '#e74c3c', '#c0392b']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Month of Year (1 = Jan, 12 = Dec)'
            }
          }
        }
      }
    });
  }
});

  // 🎬 Background video sound
  const bgVideo = document.getElementById("bgVideo");
  if (bgVideo) {
    document.body.addEventListener("click", () => {
      bgVideo.muted = false;
      bgVideo.play();
    }, { once: true });
  }
});








document.querySelectorAll('.rank-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});
