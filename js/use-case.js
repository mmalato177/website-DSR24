/**
 * USE CASE PAGE SCRIPT
 * Handles dynamic content loading for customer story pages
 */

// Mock data structure - will be replaced with backend API calls
const useCasesData = {
    1: {
        id: 1,
        customerName: "Jane Doe",
        customerAge: 32,
        customerProfession: "Ärztin",
        customerLocation: "München",
        customerInfo: "32 Jahre, Ärztin aus München",
        accidentType: "Parkplatzunfall",
        resultType: "Vollständige Regulierung",
        accidentImage: "img/reviews/accident-1.jpg",
        customerPhoto: "img/image.png",
        dashcamVideo: null,
        mainQuote: "DSR24 hat mir geholfen, 2.500€ von der gegnerischen Versicherung zu erhalten!",
        situation: `
            <p>Es war ein ganz normaler Montag im Oktober 2025. Ich hatte gerade meine Schicht im Krankenhaus beendet und wollte nach Hause fahren. Als ich auf dem Parkplatz zu meinem Auto ging, sah ich bereits den Schaden: Ein anderes Fahrzeug hatte beim Rückwärtsfahren meine komplette Beifahrerseite beschädigt.</p>
            <p>Der Unfallverursacher hatte zwar einen Zettel hinterlassen, aber ich wusste nicht, wie ich weiter vorgehen sollte. Die Beschädigung war erheblich – die komplette Tür musste ausgetauscht werden, und auch der Kotflügel war stark beschädigt.</p>
        `,
        problem: `
            <p>Als berufstätige Ärztin mit langen Schichten hatte ich weder Zeit noch Nerven, mich mit Versicherungen, Werkstätten und Gutachtern herumzuschlagen. Die gegnerische Versicherung versuchte zunächst, nur einen Teil des Schadens zu übernehmen.</p>
            <p>Ich brauchte außerdem dringend ein Ersatzfahrzeug, da ich auf mein Auto angewiesen bin, um zur Arbeit zu kommen. Die organisatorischen Herausforderungen waren enorm.</p>
        `,
        solution: `
            <p>Ein Kollege empfahl mir DSR24. Bereits beim ersten Telefonat fühlte ich mich gut aufgehoben. Das Team erklärte mir genau, wie der Prozess ablaufen würde und dass für mich keinerlei Kosten entstehen.</p>
            <p>DSR24 übernahm die komplette Abwicklung:</p>
            <ul>
                <li>Organisation eines unabhängigen Gutachters, der den Schaden professionell dokumentierte</li>
                <li>Bereitstellung eines gleichwertigen Ersatzfahrzeugs innerhalb von 24 Stunden</li>
                <li>Kommunikation mit der gegnerischen Versicherung</li>
                <li>Vermittlung einer qualifizierten Partnerwerkstatt</li>
                <li>Durchsetzung meiner vollen Ansprüche, einschließlich Nutzungsausfall und Wertminderung</li>
            </ul>
            <p>Ich musste mich um nichts kümmern und konnte mich voll auf meine Arbeit konzentrieren.</p>
        `,
        result: `
            <p>Nach nur drei Wochen war mein Auto vollständig repariert und sah aus wie neu. Die gegnerische Versicherung übernahm alle Kosten in voller Höhe – insgesamt über 2.500€.</p>
            <p>Besonders beeindruckt hat mich, dass DSR24 auch die Wertminderung meines Fahrzeugs durchgesetzt hat, an die ich selbst gar nicht gedacht hatte. Das waren zusätzlich 400€.</p>
            <p>Der gesamte Prozess war für mich stressfrei und kostenlos. Ich kann DSR24 jedem weiterempfehlen, der nach einem Unfall professionelle Hilfe sucht!</p>
        `,
        services: [
            { icon: "fa-clipboard-check", name: "Gutachter" },
            { icon: "fa-car", name: "Leihwagen" },
            { icon: "fa-wrench", name: "Werkstatt" },
            { icon: "fa-balance-scale", name: "Rechtsberatung" }
        ],
        timeline: [
            { date: "Tag 1", title: "Erste Kontaktaufnahme", description: "Anruf bei DSR24 und Fallaufnahme" },
            { date: "Tag 2", title: "Gutachter & Leihwagen", description: "Gutachten erstellt, Ersatzfahrzeug übergeben" },
            { date: "Tag 3", title: "Reparatur beginnt", description: "Auto in der Partnerwerkstatt" },
            { date: "Tag 21", title: "Abschluss", description: "Auto repariert, volle Erstattung erhalten" }
        ]
    },
    2: {
        id: 2,
        customerName: "Michael Schmidt",
        customerAge: 45,
        customerProfession: "Ingenieur",
        customerLocation: "Berlin",
        customerInfo: "45 Jahre, Ingenieur aus Berlin",
        accidentType: "Auffahrunfall",
        resultType: "Anwalt & Gutachter inkl.",
        accidentImage: "img/reviews/accident-2.jpg",
        customerPhoto: "img/image.png",
        dashcamVideo: "video/dashcam-2.mp4",
        mainQuote: "Schnell, professionell und ohne Stress. Ich kann DSR24 wirklich empfehlen!",
        situation: `
            <p>Auf dem Weg zur Arbeit ereignete sich der Unfall: An einer roten Ampel wurde ich von hinten angefahren. Der Aufprall war heftig, und mein Fahrzeug wurde stark beschädigt.</p>
            <p>Zum Glück wurde niemand verletzt, aber mein Auto hatte einen erheblichen Heckschaden. Der Unfallverursacher gab die Schuld zu, aber seine Versicherung stellte sich zunächst quer.</p>
        `,
        problem: `
            <p>Die gegnerische Versicherung versuchte, mit einem niedrigen Angebot davonzukommen und wollte keinen unabhängigen Gutachter akzeptieren. Als technisch versierter Mensch wusste ich, dass der Schaden deutlich höher war als angeboten.</p>
            <p>Ich brauchte rechtliche Unterstützung, wollte aber nicht auf den Kosten sitzen bleiben.</p>
        `,
        solution: `
            <p>DSR24 stellte mir nicht nur einen Gutachter, sondern auch einen spezialisierten Anwalt zur Seite. Das Team koordinierte alles perfekt:</p>
            <ul>
                <li>Unabhängiges Gutachten mit detaillierter Schadensanalyse</li>
                <li>Anwaltliche Vertretung gegenüber der Versicherung</li>
                <li>Premium-Leihwagen während der Reparaturzeit</li>
                <li>Organisation der Reparatur in einer Markenwerkstatt</li>
            </ul>
        `,
        result: `
            <p>Dank der professionellen Unterstützung erhielt ich die volle Entschädigung von über 4.200€. Die Reparatur wurde fachgerecht durchgeführt, und ich hatte während der gesamten Zeit ein gleichwertiges Ersatzfahrzeug.</p>
            <p>Die gegnerische Versicherung musste alle Kosten tragen – ich hatte keinerlei Ausgaben. Der gesamte Prozess dauerte vier Wochen und verlief völlig reibungslos.</p>
        `,
        services: [
            { icon: "fa-gavel", name: "Anwalt" },
            { icon: "fa-clipboard-check", name: "Gutachter" },
            { icon: "fa-car", name: "Leihwagen" },
            { icon: "fa-wrench", name: "Werkstatt" }
        ],
        timeline: [
            { date: "Tag 1", title: "Sofortkontakt", description: "DSR24 kontaktiert, Fall dokumentiert" },
            { date: "Tag 2-3", title: "Expertise", description: "Gutachter und Anwalt eingeschaltet" },
            { date: "Tag 4", title: "Verhandlung", description: "Anwalt verhandelt mit Versicherung" },
            { date: "Tag 28", title: "Erfolg", description: "Volle Entschädigung und Reparatur abgeschlossen" }
        ]
    },
    3: {
        id: 3,
        customerName: "Sarah Müller",
        customerAge: 28,
        customerProfession: "Lehrerin",
        customerLocation: "Hamburg",
        customerInfo: "28 Jahre, Lehrerin aus Hamburg",
        accidentType: "Kreuzungsunfall",
        resultType: "Komplettservice",
        accidentImage: "img/reviews/accident-3.jpg",
        customerPhoto: "img/image.png",
        dashcamVideo: null,
        mainQuote: "DSR24 hat sich um alles gekümmert. Ich musste mich um nichts sorgen!",
        situation: `
            <p>An einer unübersichtlichen Kreuzung missachtete ein anderer Fahrer meine Vorfahrt und kollidierte mit meiner Fahrerseite. Der Schreck war groß, und ich war zunächst völlig überfordert.</p>
            <p>Die Polizei stellte die Schuld eindeutig fest, aber ich hatte keine Erfahrung mit Unfallabwicklung und wusste nicht, wo ich anfangen sollte.</p>
        `,
        problem: `
            <p>Als junge Lehrerin hatte ich weder Erfahrung noch Zeit für die komplexe Unfallabwicklung. Die vielen verschiedenen Ansprechpartner – Versicherung, Werkstatt, Gutachter – waren mir völlig fremd.</p>
            <p>Ich hatte Angst, Fehler zu machen und auf Kosten sitzen zu bleiben.</p>
        `,
        solution: `
            <p>Eine Freundin empfahl mir DSR24, und es war die beste Entscheidung. Von der ersten Minute an hatte ich einen persönlichen Ansprechpartner, der mir alles erklärte und jeden Schritt koordinierte.</p>
            <p>DSR24 übernahm buchstäblich alles – ich musste nur mein Auto abgeben und konnte mich auf meinen Beruf konzentrieren.</p>
        `,
        result: `
            <p>Nach drei Wochen war alles erledigt. Mein Auto wurde perfekt repariert, alle Kosten wurden von der gegnerischen Versicherung übernommen, und ich hatte nicht einen Cent Eigenanteil.</p>
            <p>Der Service war so professionell und stressfrei, dass ich DSR24 bereits mehreren Kollegen weiterempfohlen habe!</p>
        `,
        services: [
            { icon: "fa-clipboard-check", name: "Gutachter" },
            { icon: "fa-car", name: "Leihwagen" },
            { icon: "fa-wrench", name: "Werkstatt" },
            { icon: "fa-headset", name: "Persönlicher Betreuer" }
        ],
        timeline: [
            { date: "Tag 1", title: "Erstgespräch", description: "Ausführliche Beratung und Fallaufnahme" },
            { date: "Tag 2", title: "Alles organisiert", description: "Gutachter, Werkstatt, Leihwagen" },
            { date: "Tag 3-20", title: "Reparatur", description: "Professionelle Instandsetzung" },
            { date: "Tag 21", title: "Abschluss", description: "Auto übergeben, alles kostenlos" }
        ]
    }
};

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Get use case ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('id') || '1';

    // Load use case data
    loadUseCaseData(caseId);

    // Language switcher
    initLanguageSwitcher();
});

/**
 * Load use case data
 */
function loadUseCaseData(caseId) {
    // In production, this would be an API call
    // const data = await fetch(`/api/use-cases/${caseId}`).then(r => r.json());
    
    const data = useCasesData[caseId];

    if (!data) {
        showError();
        return;
    }

    // Populate page with data
    populateAccidentPhoto(data);
    populateCustomerCard(data);
    populateVideoSection(data);
    populateStorySection(data);
    populateServicesSection(data);
    populateTimelineSection(data);
    populateMoreStories(caseId);
}

/**
 * Populate accident photo in hero
 */
function populateAccidentPhoto(data) {
    const accidentImg = document.getElementById('accidentImage');
    accidentImg.src = data.accidentImage;
    accidentImg.alt = `Unfall ${data.customerName}`;
}

/**
 * Populate customer card (left side)
 */
function populateCustomerCard(data) {
    // Customer Photo
    const customerPhoto = document.getElementById('customerPhoto');
    customerPhoto.src = data.customerPhoto;
    customerPhoto.alt = data.customerName;

    // Customer Info
    document.getElementById('customerName').textContent = data.customerName;
    document.getElementById('customerInfo').textContent = data.customerInfo;
    
    // Tags
    const tagsContainer = document.getElementById('customerTags');
    tagsContainer.innerHTML = `
        <span class="badge">${data.accidentType}</span>
        <span class="badge">${data.resultType}</span>
    `;
    
    // Quote
    document.getElementById('mainQuote').textContent = data.mainQuote;
}

/**
 * Populate video section (if exists)
 */
function populateVideoSection(data) {
    const videoSection = document.getElementById('videoSection');
    const dashcamVideo = document.getElementById('dashcamVideo');
    
    if (data.dashcamVideo) {
        videoSection.style.display = 'block';
        dashcamVideo.querySelector('source').src = data.dashcamVideo;
        dashcamVideo.load();
    } else {
        videoSection.style.display = 'none';
    }
}

/**
 * Populate story section
 */
function populateStorySection(data) {
    document.getElementById('situationContent').innerHTML = data.situation;
    document.getElementById('problemContent').innerHTML = data.problem;
    document.getElementById('solutionContent').innerHTML = data.solution;
    document.getElementById('resultContent').innerHTML = data.result;
}

/**
 * Populate services section
 */
function populateServicesSection(data) {
    const servicesContainer = document.getElementById('servicesList');
    servicesContainer.innerHTML = data.services.map(service => `
        <div class="service-item">
            <i class="fas ${service.icon}"></i>
            <span>${service.name}</span>
        </div>
    `).join('');
}

/**
 * Populate timeline section
 */
function populateTimelineSection(data) {
    const timelineContainer = document.getElementById('timelineContent');
    timelineContainer.innerHTML = data.timeline.map((item, index) => `
        <div class="timeline-item ${index < data.timeline.length - 1 ? 'completed' : ''}">
            <div class="timeline-marker"></div>
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-desc">${item.description}</div>
        </div>
    `).join('');
}

/**
 * Populate more stories section
 */
function populateMoreStories(currentId) {
    const container = document.getElementById('moreStoriesContent');
    const otherStories = Object.values(useCasesData)
        .filter(story => story.id != currentId)
        .slice(0, 3);

    container.innerHTML = otherStories.map(story => `
        <div class="col-md-6 col-lg-4">
            <a href="use-case.html?id=${story.id}" class="more-story-card">
                <img src="${story.accidentImage}" alt="${story.customerName}" class="more-story-image">
                <div class="more-story-content">
                    <h5 class="more-story-name">${story.customerName}</h5>
                    <p class="more-story-preview">"${story.mainQuote.substring(0, 80)}..."</p>
                    <div class="more-story-cta">
                        Geschichte lesen <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

/**
 * Show error message
 */
function showError() {
    const mainContent = document.querySelector('.use-case-main');
    mainContent.innerHTML = `
        <div class="container py-5">
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Kundengeschichte nicht gefunden</h3>
                <p>Die angeforderte Geschichte existiert nicht.</p>
                <a href="index.html#reviews" class="btn btn-warning mt-3">
                    Zurück zu Kundenstimmen
                </a>
            </div>
        </div>
    `;
}

/**
 * Initialize language switcher
 */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const lang = this.dataset.lang;
            if (typeof i18n !== 'undefined' && i18n.changeLanguage) {
                i18n.changeLanguage(lang);
            }
        });
    });
}
