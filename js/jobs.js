// Job Detail Modal
const jobModal = document.getElementById('jobModal');
const jobButtons = document.querySelectorAll('.btn-job-details');

// Job Content Data (can be expanded with real content)
const jobData = {
    '1': {
        title:"Web Designer",
        content: `
                <ul>
                    <li><strong>Unfallstelle absichern:</strong> Warnblinklicht einschalten, Warndreieck aufstellen, Warnweste anziehen</li>
                    <li><strong>Erste Hilfe leisten:</strong> Bei Verletzten sofort den Notruf (112) wählen und Erste Hilfe leisten</li>
                    <li><strong>Polizei informieren:</strong> Bei Personenschäden oder größeren Sachschäden die Polizei (110) rufen</li>
                    <li><strong>Daten austauschen:</strong> Namen, Adressen, Versicherungsdaten und Kennzeichen aller Beteiligten notieren</li>
                    <li><strong>Unfallstelle dokumentieren:</strong> Fotos von Fahrzeugen, Schäden und der Unfallsituation machen</li>
                    <li><strong>Zeugen sichern:</strong> Namen und Kontaktdaten von Unfallzeugen aufnehmen</li>
                    <li><strong>Versicherung informieren:</strong> Eigene Versicherung zeitnah über den Unfall informieren</li>
                    <li><strong>DSR24 kontaktieren:</strong> Wir kümmern uns um alles Weitere - Gutachten, Werkstatt, Anwalt</li>
                </ul>
                <p><strong>Wichtig:</strong> Unterschreiben Sie keine Schuldanerkenntnisse und treffen Sie keine Vereinbarungen ohne rechtliche Beratung!</p>
            `
    },
    '2': {
        title:"Frontend Developer",
        content: `
                <p><strong>Bei unverschuldetem Unfall:</strong></p>
                <ul>
                    <li>Die Haftpflichtversicherung des Unfallgegners zahlt alle Schäden</li>
                    <li>Reparaturkosten, Gutachterkosten, Mietwagen, Wertminderung</li>
                    <li>Auch Anwaltskosten werden übernommen</li>
                </ul>
                <p><strong>Bei Teilschuld oder Eigenschaden:</strong></p>
                <ul>
                    <li>Ihre eigene Kaskoversicherung (Voll- oder Teilkasko) kommt für Schäden auf</li>
                    <li>Je nach Tarif mit oder ohne Selbstbeteiligung</li>
                    <li>Beachten Sie mögliche Auswirkungen auf Ihren Schadenfreiheitsrabatt</li>
                </ul>
                <p><strong>DSR24 hilft:</strong> Wir klären die Schuldfrage und sorgen dafür, dass Sie alle Ihnen zustehenden Leistungen erhalten!</p>
            `
    },
    '3': { 
        title:"Web Developer",
        content: `
                <p><strong>So vermeiden Sie Probleme mit der Versicherung:</strong></p>
                <ul>
                    <li>Melden Sie den Schaden sofort Ihrer Versicherung</li>
                    <li>Dokumentieren Sie den Unfall gründlich (Fotos, Zeugenaussagen)</li>
                    <li>Geben Sie keine Schuldanerkenntnisse ab</li>
                    <li>Lassen Sie sich von DSR24 beraten und vertreten</li>
                </ul>
                <p><strong>Unser Service:</strong> Wir unterstützen Sie bei der Schadensabwicklung und sorgen dafür, dass Ihre Ansprüche durchgesetzt werden!</p>
            `
    },
    '4': {
        title:"Back-end Developer",
        content: `
                <p><strong>So vermeiden Sie Probleme mit der Versicherung:</strong></p>
                <ul>
                    <li>Melden Sie den Schaden sofort Ihrer Versicherung</li>
                    <li>Dokumentieren Sie den Unfall gründlich (Fotos, Zeugenaussagen)</li>
                    <li>Geben Sie keine Schuldanerkenntnisse ab</li>
                    <li>Lassen Sie sich von DSR24 beraten und vertreten</li>
                </ul>
                <p><strong>Unser Service:</strong> Wir unterstützen Sie bei der Schadensabwicklung und sorgen dafür, dass Ihre Ansprüche durchgesetzt werden!</p>
            `
    },
    '5': { 
        title:"Ux/UI Designer",
        content: `
                <p><strong>So vermeiden Sie Probleme mit der Versicherung:</strong></p>
                <ul>
                    <li>Melden Sie den Schaden sofort Ihrer Versicherung</li>
                    <li>Dokumentieren Sie den Unfall gründlich (Fotos, Zeugenaussagen)</li>
                    <li>Geben Sie keine Schuldanerkenntnisse ab</li>
                    <li>Lassen Sie sich von DSR24 beraten und vertreten</li>
                </ul>
                <p><strong>Unser Service:</strong> Wir unterstützen Sie bei der Schadensabwicklung und sorgen dafür, dass Ihre Ansprüche durchgesetzt werden!</p>
            `
    },
    '6': { 
        title:"Tester",
        content: `
                <p><strong>So vermeiden Sie Probleme mit der Versicherung:</strong></p>
                <ul>
                    <li>Melden Sie den Schaden sofort Ihrer Versicherung</li>
                    <li>Dokumentieren Sie den Unfall gründlich (Fotos, Zeugenaussagen)</li>
                    <li>Geben Sie keine Schuldanerkenntnisse ab</li>
                    <li>Lassen Sie sich von DSR24 beraten und vertreten</li>
                </ul>
                <p><strong>Unser Service:</strong> Wir unterstützen Sie bei der Schadensabwicklung und sorgen dafür, dass Ihre Ansprüche durchgesetzt werden!</p>
            `
    },
    '7': { 
        title:"Marketing Trainee",
        content: `
                <p><strong>So vermeiden Sie Probleme mit der Versicherung:</strong></p>
                <ul>
                    <li>Melden Sie den Schaden sofort Ihrer Versicherung</li>
                    <li>Dokumentieren Sie den Unfall gründlich (Fotos, Zeugenaussagen)</li>
                    <li>Geben Sie keine Schuldanerkenntnisse ab</li>
                    <li>Lassen Sie sich von DSR24 beraten und vertreten</li>
                </ul>
                <p><strong>Unser Service:</strong> Wir unterstützen Sie bei der Schadensabwicklung und sorgen dafür, dass Ihre Ansprüche durchgesetzt werden!</p>
            `
    },
    '8': { 
        title:"CEO",
        content: `
                <p><strong>So vermeiden Sie Probleme mit der Versicherung:</strong></p>
                <ul>
                    <li>Melden Sie den Schaden sofort Ihrer Versicherung</li>
                    <li>Dokumentieren Sie den Unfall gründlich (Fotos, Zeugenaussagen)</li>
                    <li>Geben Sie keine Schuldanerkenntnisse ab</li>
                    <li>Lassen Sie sich von DSR24 beraten und vertreten</li>
                </ul>
                <p><strong>Unser Service:</strong> Wir unterstützen Sie bei der Schadensabwicklung und sorgen dafür, dass Ihre Ansprüche durchgesetzt werden!</p>
            `
    },
    '9': { 
        title:"Security Guard",
        content: `
                <p><strong>So vermeiden Sie Probleme mit der Versicherung:</strong></p>
                <ul>
                    <li>Melden Sie den Schaden sofort Ihrer Versicherung</li>
                    <li>Dokumentieren Sie den Unfall gründlich (Fotos, Zeugenaussagen)</li>
                    <li>Geben Sie keine Schuldanerkenntnisse ab</li>
                    <li>Lassen Sie sich von DSR24 beraten und vertreten</li>
                </ul>
                <p><strong>Unser Service:</strong> Wir unterstützen Sie bei der Schadensabwicklung und sorgen dafür, dass Ihre Ansprüche durchgesetzt werden!</p>
            `
    },
};


const jobs = {
  "web-designer": {
    title: "Web Designer",
    location: "Germany · Full time",
    description: "We are looking for a creative Web Designer to join our team.",
    requirements: [
      "Strong UI/UX skills",
      "HTML, CSS, Figma",
      "Attention to detail"
    ]
  },
  "frontend-developer": {
    title: "Front-end Developer",
    location: "Remote",
    description: "Join our frontend team working with modern technologies.",
    requirements: [
      "JavaScript / React",
      "REST APIs",
      "Git experience"
    ]
  },
  "web-developer": {
    title: "Web Developer",
    location: "Germany · Full time",
    description: "We are looking for a skilled Web Developer to build our platform.",
    requirements: [
      "Full-stack development",
      "Node.js, Express",
      "Database management"
    ]
  },
  "backend-developer": {
    title: "Back-end Developer",
    location: "Remote",
    description: "Join our backend team working with modern technologies.",
    requirements: [
      "Node.js / Express",
      "Database management",
      "API development"
    ]
    },
    "marketing-trainee": {
    title: "Marketing Trainee",
    location: "Germany · Full time",
    description: "Kickstart your marketing career with us as a trainee.",
    requirements: [
      "Passion for marketing",
      "Strong communication skills",
      "Eagerness to learn"
    ]
  },
  "analyst": {
    title: "Analyst",
    location: "Germany · Full time",
    description: "We are looking for a data-driven Analyst to join our team.",
    requirements: [
      "Data analysis skills",
      "Experience with SQL and Excel",
      "Critical thinking"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const jobId = params.get("id");

  // if job not found, stop
  if (!jobs[jobId]) return;

  // select your DOM elements
  const titleEl = document.getElementById("job-title");
  const locationEl = document.getElementById("job-location");
  const descEl = document.getElementById("job-description");
  const reqList = document.getElementById("job-requirements");

  // populate content
  if (titleEl) titleEl.textContent = jobs[jobId].title;
  if (locationEl) locationEl.textContent = jobs[jobId].location;
  if (descEl) descEl.textContent = jobs[jobId].description;

  if (reqList) {
    reqList.innerHTML = ""; // safety
    jobs[jobId].requirements.forEach(r => {
      const li = document.createElement("li");
      li.textContent = r;
      reqList.appendChild(li);
    });
  }
});


