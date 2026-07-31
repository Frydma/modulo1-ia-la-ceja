// Initialize the icons used in the HTML
createIcons({
  icons: {
    Compass,
    BrainCircuit,
    BadgeCheck,
    GitBranch,
    Layers,
    MessageSquare,
    Palette,
    Video,
    Code2,
    Flask: FlaskConical, // Map the alias 'flask' to FlaskConical
    Cpu,
    Activity,
    Copy,
    Check,
    Layout
  }
});

// Expose the copy function globally to support the inline onclick handler in index.html
window.copyPromptToClipboard = function(id) {
  const contenidoPrompt = document.getElementById(id).innerText;
  
  navigator.clipboard.writeText(contenidoPrompt)
    .then(() => {
      const toast = document.getElementById("toast-notif");
      toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      toast.classList.add("opacity-100", "translate-y-0");

      setTimeout(() => {
        toast.classList.remove("opacity-100", "translate-y-0");
        toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      }, 3500);
    })
    .catch(err => {
      console.error('Error copying text to clipboard: ', err);
    });
};
lucide.createIcons();
