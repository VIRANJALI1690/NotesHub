function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
  }

  function showPDF(subject) {
    const pdfMap = {
      html: "html.pdf",
      css: "css.pdf",
      js: "js.pdf",
      dsa: "dsa.pdf",
      python: "python.pdf",
      java: "java.pdf",
      ai: "ai.pdf"
    };

    const titles = {
      html: "HTML Notes",
      css: "CSS Notes",
      js: "JavaScript Notes",
      dsa: "DSA Notes",
      python: "Python Notes",
      java: "Java Notes",
      ai: "AI Notes"
    };

    const embed = document.getElementById("pdfEmbed");
    const title = document.getElementById("pdfTitle");
    const viewer = document.getElementById("pdfViewer");
    const downloadLink = document.getElementById("downloadLink");

    const pdfFile = pdfMap[subject];

    embed.src = `${pdfFile}#page=1`;
    title.textContent = titles[subject];
    viewer.style.display = "block";
    downloadLink.href = pdfFile;
  }

  function viewPDF() {
    const embed = document.getElementById("pdfEmbed");
    window.open(embed.src.replace("#page=1", ""), "_blank");
  }
