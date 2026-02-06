// FAQ Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // FAQ Search Functionality
    const searchInput = document.getElementById('faq-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const faqCards = document.querySelectorAll('#faq-grid .col-12');
    const noResults = document.getElementById('no-results');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            // Show/hide clear button
            if (searchTerm.length > 0) {
                clearSearchBtn.classList.add('active');
            } else {
                clearSearchBtn.classList.remove('active');
            }
            
            filterFAQs();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            searchInput.value = '';
            this.classList.remove('active');
            filterFAQs();
            searchInput.focus();
        });
    }

    // Category Filter Functionality
    const categoryButtons = document.querySelectorAll('.btn-category');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            filterFAQs();
        });
    });

    // Filter FAQs based on search and category
    function filterFAQs() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeCategory = document.querySelector('.btn-category.active');
        const selectedCategory = activeCategory ? activeCategory.dataset.category : 'all';
        
        let visibleCount = 0;
        
        faqCards.forEach(card => {
            const category = card.dataset.category;
            const title = card.querySelector('.faq-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.faq-description')?.textContent.toLowerCase() || '';
            
            const matchesSearch = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            
            if (matchesSearch && matchesCategory) {
                card.classList.remove('hidden');
                card.style.display = '';
                visibleCount++;
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }

    // FAQ Detail Modal
    const faqModal = document.getElementById('faqModal');
    const faqButtons = document.querySelectorAll('.btn-faq-details');
    
    // FAQ Content Data (can be expanded with real content)
    const faqData = {
        '1': {
            title: 'Was tun nach einem Unfall?',
            content: `
                <h3>Die wichtigsten Schritte nach einem Verkehrsunfall:</h3>
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
            title: 'Welche Versicherung zahlt?',
            content: `
                <h3>Zuständigkeit der Versicherungen:</h3>
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
            title: 'Brauche ich ein Gutachten?',
            content: `
                <h3>Wann ist ein Schadensgutachten erforderlich?</h3>
                <p><strong>Gutachten ist empfehlenswert bei:</strong></p>
                <ul>
                    <li>Schäden ab ca. 750-1000 Euro</li>
                    <li>Unklarer Schadenhöhe</li>
                    <li>Wenn Sie nicht der Unfallverursacher sind</li>
                    <li>Bei Wertminderungsansprüchen</li>
                    <li>Bei Totalschaden</li>
                </ul>
                <p><strong>Vorteile eines Gutachtens:</strong></p>
                <ul>
                    <li>Unabhängige Schadenfeststellung durch Sachverständigen</li>
                    <li>Rechtssichere Dokumentation</li>
                    <li>Basis für Schadensregulierung</li>
                    <li>Nachweis der Wertminderung</li>
                    <li>Die gegnerische Versicherung zahlt die Gutachterkosten</li>
                </ul>
                <p><strong>DSR24 organisiert:</strong> Wir vermitteln Ihnen einen qualifizierten Sachverständigen - kostenfrei für Sie!</p>
            `
        },
        '4': {
            title: 'Freie Werkstattwahl',
            content: `
                <h3>Ihr Recht auf freie Werkstattwahl</h3>
                <p><strong>Sie entscheiden, wo Ihr Fahrzeug repariert wird!</strong></p>
                <ul>
                    <li>Bei unverschuldetem Unfall haben Sie freie Werkstattwahl</li>
                    <li>Sie können eine Markenwerkstatt wählen</li>
                    <li>Die gegnerische Versicherung muss die Kosten tragen</li>
                    <li>Lassen Sie sich nicht zu einer bestimmten Werkstatt drängen</li>
                </ul>
                <p><strong>Vorteile einer Markenwerkstatt:</strong></p>
                <ul>
                    <li>Originalteile und werksgeschulte Mechaniker</li>
                    <li>Herstellergarantie bleibt erhalten</li>
                    <li>Fachgerechte Reparatur nach Herstellervorgaben</li>
                    <li>Werterhalt Ihres Fahrzeugs</li>
                </ul>
                <p><strong>DSR24 vermittelt:</strong> Wir arbeiten mit zertifizierten Partnerwerkstätten zusammen, die Qualität garantieren!</p>
            `
        },
        '5': {
            title: 'Unfallbericht richtig ausfüllen',
            content: `
                <h3>So dokumentieren Sie den Unfall korrekt</h3>
                <p><strong>Europäischer Unfallbericht - wichtige Punkte:</strong></p>
                <ul>
                    <li>Datum, Uhrzeit und Ort des Unfalls genau angeben</li>
                    <li>Fahrzeugdaten aller Beteiligten vollständig eintragen</li>
                    <li>Skizze der Unfallsituation zeichnen</li>
                    <li>Hergang des Unfalls sachlich beschreiben</li>
                    <li>Schäden an allen Fahrzeugen dokumentieren</li>
                    <li>Zeugen mit Kontaktdaten aufführen</li>
                </ul>
                <p><strong>Wichtige Hinweise:</strong></p>
                <ul>
                    <li>Nur Fakten angeben, keine Schuldzuweisungen</li>
                    <li>Nichts unterschreiben, was Sie nicht verstehen</li>
                    <li>Bei Unsicherheit: nur notwendigste Daten austauschen</li>
                    <li>Fotos von Unfallstelle und Schäden machen</li>
                </ul>
                <p><strong>DSR24 unterstützt:</strong> Wir helfen Ihnen bei der korrekten Dokumentation und übernehmen die Kommunikation mit den Versicherungen!</p>
            `
        },
        '6': {
            title: 'Anwaltskosten übernimmt wer?',
            content: `
                <h3>Kostenübernahme bei rechtlicher Unterstützung</h3>
                <p><strong>Bei unverschuldetem Unfall:</strong></p>
                <ul>
                    <li>Die gegnerische Haftpflichtversicherung zahlt Ihre Anwaltskosten</li>
                    <li>Sie haben Anspruch auf rechtliche Vertretung</li>
                    <li>Keine Kostenrisiko für Sie</li>
                    <li>Der Anwalt rechnet direkt mit der Versicherung ab</li>
                </ul>
                <p><strong>Bei Rechtsschutzversicherung:</strong></p>
                <ul>
                    <li>Ihre Rechtsschutzversicherung übernimmt die Kosten</li>
                    <li>Auch bei unklarer Schuldfrage</li>
                    <li>Prüfen Sie Ihren Versicherungsschutz</li>
                </ul>
                <p><strong>Wann ist ein Anwalt sinnvoll?</strong></p>
                <ul>
                    <li>Bei Personenschäden</li>
                    <li>Wenn die Versicherung nicht zahlen will</li>
                    <li>Bei Streit über die Schuldfrage</li>
                    <li>Bei hohen Schadensummen</li>
                </ul>
                <p><strong>DSR24 vermittelt:</strong> Wir arbeiten mit spezialisierten Verkehrsrechtsanwälten zusammen!</p>
            `
        },
        '7': {
            title: 'Mietwagenanspruch',
            content: `
                <h3>Wann steht Ihnen ein Ersatzfahrzeug zu?</h3>
                <p><strong>Grundsätzlich gilt:</strong></p>
                <ul>
                    <li>Bei unverschuldetem Unfall haben Sie Anspruch auf einen Mietwagen</li>
                    <li>Für die Dauer der Reparatur oder bis zur Wiederbeschaffung</li>
                    <li>Die gegnerische Versicherung muss die Kosten tragen</li>
                </ul>
                <p><strong>Umfang des Anspruchs:</strong></p>
                <ul>
                    <li>Vergleichbares Fahrzeug zur beschädigten Fahrzeugklasse</li>
                    <li>Mietwagen in angemessener Qualität</li>
                    <li>Keine Luxusklasse bei Kleinwagen</li>
                    <li>Regionale Mietwagenpreise sind maßgeblich</li>
                </ul>
                <p><strong>Alternative: Nutzungsausfallentschädigung</strong></p>
                <ul>
                    <li>Wenn Sie keinen Mietwagen nehmen möchten</li>
                    <li>Pauschale Entschädigung pro Tag</li>
                    <li>Abhängig von der Fahrzeugklasse</li>
                    <li>Meist 23-175 Euro pro Tag</li>
                </ul>
                <p><strong>DSR24 organisiert:</strong> Wir vermitteln Ihnen einen passenden Mietwagen zu günstigen Konditionen!</p>
            `
        },
        '8': {
            title: 'Gutachter oder Kostenvoranschlag?',
            content: `
                <h3>Die Unterschiede und wann was nötig ist</h3>
                <p><strong>Kostenvoranschlag (Werkstattgutachten):</strong></p>
                <ul>
                    <li>Bei kleineren Schäden bis ca. 750-1000 Euro</li>
                    <li>Schnelle Schadenschätzung durch Werkstatt</li>
                    <li>Meist ausreichend bei eindeutigen Schäden</li>
                    <li>Kostenlos von der Werkstatt erstellt</li>
                </ul>
                <p><strong>Schadensgutachten durch Sachverständigen:</strong></p>
                <ul>
                    <li>Bei Schäden ab ca. 750-1000 Euro</li>
                    <li>Unabhängige Begutachtung</li>
                    <li>Rechtssichere Dokumentation</li>
                    <li>Ermittlung von Wertminderung</li>
                    <li>Basis für Schadensregulierung bei Gericht</li>
                    <li>Bei unverschuldetem Unfall: Kosten trägt Gegner</li>
                </ul>
                <p><strong>Empfehlung:</strong></p>
                <ul>
                    <li>Bei Bagatellschäden: Kostenvoranschlag ausreichend</li>
                    <li>Bei höheren Schäden: Sachverständigengutachten empfohlen</li>
                    <li>Bei Unklarheiten: Lieber ein Gutachten mehr</li>
                </ul>
                <p><strong>DSR24 berät:</strong> Wir helfen Ihnen bei der richtigen Entscheidung und organisieren beides!</p>
            `
        },
        '9': {
            title: 'Totalschaden - was nun?',
            content: `
                <h3>Ihre Optionen bei wirtschaftlichem Totalschaden</h3>
                <p><strong>Was ist ein wirtschaftlicher Totalschaden?</strong></p>
                <ul>
                    <li>Reparaturkosten übersteigen den Wiederbeschaffungswert</li>
                    <li>Ab 130% des Fahrzeugwerts (mit Wertminderung)</li>
                    <li>Reparatur ist wirtschaftlich nicht sinnvoll</li>
                </ul>
                <p><strong>Ihre Optionen:</strong></p>
                <p><strong>1. Abrechnung auf Totalschadensbasis:</strong></p>
                <ul>
                    <li>Differenz zwischen Wiederbeschaffungswert und Restwert</li>
                    <li>Fahrzeug geht an Versicherung oder wird verkauft</li>
                    <li>Meist die wirtschaftlich beste Lösung</li>
                </ul>
                <p><strong>2. Reparatur auf eigenes Risiko:</strong></p>
                <ul>
                    <li>Nettoreparaturkosten bis max. Wiederbeschaffungswert</li>
                    <li>Fahrzeug bleibt bei Ihnen</li>
                    <li>Sie müssen Reparatur nachweisen</li>
                </ul>
                <p><strong>3. Fiktive Abrechnung:</strong></p>
                <ul>
                    <li>Auszahlung der Bruttoreparaturkosten bis zur Grenze</li>
                    <li>Fahrzeug bleibt bei Ihnen (auch unrepariert)</li>
                    <li>Kein Reparaturnachweis nötig</li>
                </ul>
                <p><strong>DSR24 berät:</strong> Wir berechnen alle Varianten und helfen Ihnen bei der optimalen Entscheidung!</p>
            `
        },
        '10': {
            title: 'Schmerzensgeld bei Verletzung',
            content: `
                <h3>Ansprüche bei Personenschäden</h3>
                <p><strong>Wann steht Schmerzensgeld zu?</strong></p>
                <ul>
                    <li>Bei körperlichen Verletzungen durch den Unfall</li>
                    <li>Bei seelischen Leiden (z.B. Trauma)</li>
                    <li>Auch bei "leichten" Verletzungen wie Schleudertrauma</li>
                    <li>Unabhängig von anderen Schadensersatzansprüchen</li>
                </ul>
                <p><strong>Höhe des Schmerzensgeldes:</strong></p>
                <ul>
                    <li>Abhängig von Art und Schwere der Verletzung</li>
                    <li>Dauer der Beeinträchtigung</li>
                    <li>Bleibende Schäden</li>
                    <li>Alter des Geschädigten</li>
                    <li>Vergleichbare Gerichtsurteile als Orientierung</li>
                </ul>
                <p><strong>Weitere Ansprüche bei Personenschäden:</strong></p>
                <ul>
                    <li>Behandlungskosten</li>
                    <li>Verdienstausfall</li>
                    <li>Haushaltführungsschaden</li>
                    <li>Fahrtkosten zu Ärzten</li>
                    <li>Zukunftsschäden bei Dauerschäden</li>
                </ul>
                <p><strong>Wichtig:</strong></p>
                <ul>
                    <li>Alle ärztlichen Behandlungen dokumentieren</li>
                    <li>Atteste und Befunde aufbewahren</li>
                    <li>Keine voreiligen Vergleiche unterschreiben</li>
                </ul>
                <p><strong>DSR24 vermittelt:</strong> Spezialisierte Anwälte für Personenschäden setzen Ihre Ansprüche durch!</p>
            `
        },
        '11': {
            title: 'Reparaturdauer',
            content: `
                <h3>Wie lange dauert eine Schadenreparatur?</h3>
                <p><strong>Durchschnittliche Reparaturzeiten:</strong></p>
                <ul>
                    <li><strong>Kleinere Schäden (Kratzer, Dellen):</strong> 1-3 Tage</li>
                    <li><strong>Mittlere Schäden (Blechschäden, Lackierung):</strong> 1-2 Wochen</li>
                    <li><strong>Größere Schäden (Rahmen, Airbag):</strong> 2-4 Wochen</li>
                    <li><strong>Schwere Schäden (Totalschaden):</strong> 4-8 Wochen oder länger</li>
                </ul>
                <p><strong>Faktoren, die die Dauer beeinflussen:</strong></p>
                <ul>
                    <li>Verfügbarkeit von Ersatzteilen</li>
                    <li>Komplexität des Schadens</li>
                    <li>Auslastung der Werkstatt</li>
                    <li>Lieferzeiten bei Sonderteilen</li>
                    <li>Eventuell notwendige Freigaben der Versicherung</li>
                </ul>
                <p><strong>Ihr Mietwagenanspruch:</strong></p>
                <ul>
                    <li>Für die gesamte Reparaturdauer</li>
                    <li>Plus angemessene Standzeit in der Werkstatt</li>
                    <li>Bei Verzögerungen: längerer Anspruch möglich</li>
                </ul>
                <p><strong>DSR24 koordiniert:</strong> Wir sorgen für schnelle Terminvergabe und überwachen die Reparatur!</p>
            `
        },
        '12': {
            title: 'Schadenfreiheitsrabatt',
            content: `
                <h3>Auswirkungen eines Unfalls auf Ihre SF-Klasse</h3>
                <p><strong>Was ist der Schadenfreiheitsrabatt (SF-Klasse)?</strong></p>
                <ul>
                    <li>Rabattsystem der Kaskoversicherung</li>
                    <li>Belohnung für unfallfreies Fahren</li>
                    <li>Höhere SF-Klasse = niedrigerer Beitrag</li>
                    <li>Bei Schaden: Rückstufung möglich</li>
                </ul>
                <p><strong>Wann wird die SF-Klasse nicht beeinflusst?</strong></p>
                <ul>
                    <li>Wenn die gegnerische Versicherung zahlt (unverschuldeter Unfall)</li>
                    <li>Bei Glasschäden (meist in Teilkasko)</li>
                    <li>Bei Wildunfällen</li>
                    <li>Bei Naturereignissen (Sturm, Hagel)</li>
                </ul>
                <p><strong>Rückstufung bei Kaskoschaden:</strong></p>
                <ul>
                    <li>Teilkasko: meist keine Rückstufung</li>
                    <li>Vollkasko: Rückstufung um mehrere Klassen</li>
                    <li>Genaue Staffelung abhängig vom Tarif</li>
                </ul>
                <p><strong>Hochstufungsschutz:</strong></p>
                <ul>
                    <li>Manche Tarife bieten Schutz vor Rückstufung</li>
                    <li>Ein Schaden pro Jahr ohne Rückstufung</li>
                    <li>Gegen Aufpreis buchbar</li>
                </ul>
                <p><strong>Tipp:</strong></p>
                <ul>
                    <li>Bei kleinen Schäden: Kosten-Nutzen-Rechnung machen</li>
                    <li>Manchmal günstiger, selbst zu zahlen</li>
                    <li>Rückstufungskosten können höher sein als Schaden</li>
                </ul>
                <p><strong>DSR24 rechnet:</strong> Wir helfen Ihnen bei der Entscheidung - Versicherung oder Selbstzahlung!</p>
            `
        }
    };

    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqId = this.dataset.faqId;
            const data = faqData[faqId];
            
            if (data && faqModal) {
                const modalTitle = faqModal.querySelector('#faqModalLabel');
                const modalContent = faqModal.querySelector('#faq-content');
                
                if (modalTitle) modalTitle.textContent = data.title;
                if (modalContent) {
                    const safeFragment = window.dsrSanitizeFragment
                        ? window.dsrSanitizeFragment(data.content)
                        : document.createTextNode(data.content);
                    modalContent.replaceChildren(safeFragment);
                }
                
                // Show modal
                const bsModal = new bootstrap.Modal(faqModal);
                bsModal.show();
            }
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#faqModal') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

});
