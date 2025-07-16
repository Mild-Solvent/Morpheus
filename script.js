// Particle Background Effect
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = 15 + Math.random() * 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Matrix Rain Effect
function createMatrixRain() {
  const matrixRain = document.querySelector(".matrix-rain");
  if (!matrixRain) return;

  const characters = "01";
  const columnCount = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement("div");
    column.style.position = "absolute";
    column.style.left = i * 20 + "px";
    column.style.top = "0";
    column.style.width = "20px";
    column.style.height = "100%";
    column.style.overflow = "hidden";

    const text = document.createElement("div");
    text.style.color = "#00ff00";
    text.style.fontSize = "20px";
    text.style.fontFamily = "monospace";
    text.style.lineHeight = "20px";
    text.style.opacity = "0.8";
    text.style.animation = `matrixFall ${
      5 + Math.random() * 10
    }s linear infinite`;
    text.style.animationDelay = Math.random() * 5 + "s";

    let content = "";
    for (let j = 0; j < 100; j++) {
      content +=
        characters[Math.floor(Math.random() * characters.length)] + "<br>";
    }
    text.innerHTML = content;

    column.appendChild(text);
    matrixRain.appendChild(column);
  }
}

// Add matrix fall animation
const style = document.createElement("style");
style.textContent = `
    @keyframes matrixFall {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(100%);
        }
    }
`;
document.head.appendChild(style);

// Falling Pills Effect
function createFallingPills() {
  const container = document.querySelector(".falling-pills");
  if (!container) return;

  setInterval(() => {
    const pill = document.createElement("div");
    pill.className = "falling-pill " + (Math.random() > 0.5 ? "red" : "blue");
    pill.style.left = Math.random() * 100 + "%";
    pill.style.animationDuration = 5 + Math.random() * 5 + "s";
    container.appendChild(pill);

    // Remove pill after animation
    setTimeout(() => {
      pill.remove();
    }, 10000);
  }, 500);
}

// Terminal Simulator
class TerminalSimulator {
  constructor() {
    this.output = document.getElementById("terminal-output");
    this.input = document.getElementById("terminal-input");
    this.commands = {
      help: "Available commands: help, whoami, system, hack, clear, matrix, morpheus",
      whoami: "You are Neo, the chosen one.",
      system:
        "Linux morpheus 5.15.0-matrix #1 SMP x86_64 GNU/Linux\nProcessor: Neural Interface mk7\nMemory: ∞ GB\nReality: Simulated",
      hack: "Initiating hack sequence...\nAccessing mainframe...\nBypass detected! Security breach!\n[ACCESS GRANTED]",
      clear: "CLEAR",
      matrix:
        "Wake up, Neo...\nThe Matrix has you...\nFollow the white rabbit.",
      morpheus:
        "This is your last chance. After this, there is no turning back.",
    };

    this.init();
  }

  init() {
    this.addLine("Welcome to Morpheus Terminal v1.0");
    this.addLine('Type "help" for available commands');
    this.addLine("");

    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.executeCommand(this.input.value);
        this.input.value = "";
      }
    });
  }

  addLine(text) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.textContent = text;
    this.output.appendChild(line);
    this.output.scrollTop = this.output.scrollHeight;
  }

  executeCommand(cmd) {
    const command = cmd.trim().toLowerCase();
    this.addLine("morpheus@matrix:~$ " + cmd);

    if (command === "clear") {
      this.output.innerHTML = "";
      return;
    }

    if (this.commands[command]) {
      const output = this.commands[command];
      output.split("\n").forEach((line) => this.addLine(line));
    } else if (command === "") {
      // Empty command, do nothing
    } else {
      this.addLine(`Command not found: ${command}`);
      this.addLine('Type "help" for available commands');
    }

    this.addLine("");
  }
}

// Stripe Integration
function initStripe() {
  const stripeButton = document.getElementById("stripeButton");
  if (stripeButton) {
    stripeButton.addEventListener("click", () => {
      // Your actual Stripe Payment Link
      const stripePaymentLink = "https://buy.stripe.com/test_aFa9AV3wjapug5h3y25ZC01";
      
      // Open Stripe checkout in a new tab
      window.open(stripePaymentLink, '_blank');
    });
  }
}

// Button Click Particle Burst
function createParticleBurst(x, y) {
  const burst = document.createElement("div");
  burst.style.position = "fixed";
  burst.style.left = x + "px";
  burst.style.top = y + "px";
  burst.style.pointerEvents = "none";
  burst.style.zIndex = "9999";
  document.body.appendChild(burst);

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.background = "#00ff00";
    particle.style.boxShadow = "0 0 10px #00ff00";
    particle.style.borderRadius = "50%";

    const angle = (Math.PI * 2 * i) / 20;
    const velocity = 50 + Math.random() * 100;

    particle.style.animation = `particleBurst 1s ease-out forwards`;
    particle.style.setProperty("--tx", Math.cos(angle) * velocity + "px");
    particle.style.setProperty("--ty", Math.sin(angle) * velocity + "px");

    burst.appendChild(particle);
  }

  setTimeout(() => burst.remove(), 1000);
}

// Add particle burst animation
const burstStyle = document.createElement("style");
burstStyle.textContent = `
    @keyframes particleBurst {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(burstStyle);

// Add particle burst to all buttons
document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "BUTTON" ||
    e.target.classList.contains("docs-button")
  ) {
    createParticleBurst(e.clientX, e.clientY);
  }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Glitch effect on hover
document.querySelectorAll(".glitch").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.animation = "glitch 0.5s infinite";
  });

  element.addEventListener("mouseleave", () => {
    element.style.animation = "glitch 2s infinite";
  });
});

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  createMatrixRain();
  createFallingPills();
  new TerminalSimulator();
  initStripe();

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease-out";
    observer.observe(section);
  });
});

// Mobile menu toggle (if needed)
function createMobileMenu() {
  const nav = document.querySelector(".main-nav");
  const menuButton = document.createElement("button");
  menuButton.className = "mobile-menu-toggle";
  menuButton.innerHTML = "<span></span><span></span><span></span>";
  menuButton.style.display = "none";

  // Add styles for mobile menu button
  const mobileStyle = document.createElement("style");
  mobileStyle.textContent = `
        .mobile-menu-toggle {
            display: none;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
        }
        
        .mobile-menu-toggle span {
            display: block;
            width: 25px;
            height: 2px;
            background: var(--matrix-green);
            margin: 5px 0;
            transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block !important;
            }
        }
    `;
  document.head.appendChild(mobileStyle);

  nav.appendChild(menuButton);

  menuButton.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  });
}

createMobileMenu();
