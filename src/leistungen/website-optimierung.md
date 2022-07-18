---
title: "Website Optimierung | MKT Webdesign"
pageTitle: Website Optimierung
description: Mit der Optimierung erhöht sich die Performance und die Sichtbarkeit der Website
img: /images/website-optimierung.jpg
altImg: "Optimierungen Hauptbild"
order: 3
page_cta:
  cta_heading: Bessern Sie Ihre Webpräsenz auf!
  cta_sub: Jetzt ein Angebot einholen!
  cta_button: Loslegen!
---

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/leistungen">Leistungen</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{pageTitle}}</li>
  </ol>
</nav>

<h1 class="heading-1 | text-primary">{{pageTitle}}</h1>

<aside class="toc">
  <div class="card">
    <div class="card-body">
              <h2><a class="" data-bs-toggle="collapse" href="#collapseTOC" role="button" aria-expanded="false" aria-controls="collapseTOC">Inhaltsverzeichnis 
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24" fill="currentColor" class="bi bi-chevron-expand" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/></svg></a></h2>
      <ul class="collapse" id="collapseTOC">
        <li><a href="#ein-grober-%C3%BCberblick-mit-lighthouse">Ein grober Überblick mit Lighthouse</a>
          <ul>
            <li><a href="#leistung-oder-performance">Leistung oder Performance</a>
              <ul>
                <li><a href="#messwerte">Messwerte</a></li>
              </ul>
            </li>
            <li><a href="#barrierefreiheit-oder-accessibility">Barrierefreiheit oder Accessibility</a></li>
            <li><a href="#best-practices">Best Practices</a></li>
            <li><a href="#seo">SEO</a></li>
            <li><a href="#fazit">Fazit</a></li>
          </ul>
        </li>
        <li><a href="#sichtbar-werden-durch-on-page-seo">Sichtbar werden durch On-Page SEO</a></li>
        <li><a href="#testen-und-aktualisieren">Testen und Aktualisieren</a></li>
      </ul>
    </div>
  </div>
</aside>

Bevor die Website veröffentlicht wird, wird noch überprüft, ob die Website schnell, zugänglich und sicher ist.

Um diese Eigenschaften zu “messen” wird primär das Tool Lighthouse verwendet.

<h2 id="ein-grober-überblick-mit-lighthouse">Ein grober Überblick mit Lighthouse</h2>

![Lighthouse Ergebnisse](/images/lighthouse-ergebnisse.jpg)

_Lighthouse Ergebnisse_

Lighthouse ist ein automatisiertes Tool von Google mit dem man die Qualität von Websites überprüfen kann. Die wichtigsten Kenngrößen sind dabei:

- Leistung/Performance
- Barrierefreiheit/Accessibility
- Best Practices
- SEO

Die Bewertung dieser Kenngrößen erfolgt in Prozenten.

Werte von 0-49 % werden in rot dargestellt und gelten als schlecht.

Werte von 50-89% werden in orange dargestellt. Diese Werte sind gut, aber es sind Verbesserungen nötig.

Werte von 90-100% werden in grün dargestellt und sollte das Ziel sein.

<h3 id="leistung-oder-performance">Leistung oder Performance</h3>

In diesem Test wird die Ladegeschwindigkeit der Website geprüft. Die Angabe erfolgt in Sekunden [s].

<h4 id="messwerte">Messwerte</h4>

![Messwerte für die Leistung](/images/lighthouse-leistung-messwerte.png)

_Messwerte für die Leistung_

- **First Contentful Paint (FCP)**

  FCP misst die Zeit, ab wann ein Text oder Bild zum ersten Mal sichtbar ist. Die Gewichtung für das Endresultat liegt bei 10%.

- **Speed Index**

  Der Speed Index beschreibt die Zeit, die benötigt, um den Inhalt der Website visuelle darzustellen. Die Gewichtung für das Endresultat liegt bei 10%.

- **Largest Contentful Paint (LCP)**

  LCP misst die Zeit, ab wann ein großer Text oder Bild sichtbar ist. Die Gewichtung für das Endresultat liegt bei 25%.

- **Time to Interactive (TTI)**

  TTI misst die Zeit, ab wann die Website vollständig interagierbar ist. Die Gewichtung für das Endresultat liegt bei 10%.

- **Total Blocking Time (TBT)**

  TBT beschreibt die Zeit zwischen FCP und TTI. Die Angabe erfolgt meistens in ms. Die Gewichtung für das Endresultat liegt bei 30%.

- **Cumulative Layout Shift (CLS)**

  CLS beschreibt die Bewegungen von Elementen innerhalb der Website. Die Gewichtung für das Endresultat liegt bei 15%.

---

Um die Performance der Website zu verbessern gibt es einige gängige Methoden. Diese Methoden bringen meistens den größten Effekt:

- Bilder komprimieren und/oder Bilder in neuen Formaten umwandeln (WebP und AVIF)
- Unnötiges Javascript und CSS reduzieren

Mit diesen Methoden sollte die Website im grünen Bereich sein.

Um auf die 100% zu kommen, benötigt man ein tieferes Verständnis zu den Messwerten. Dies ist mit einem größeren Zeitaufwand verbunden.

<h3 id="barrierefreiheit-oder-accessibility">Barrierefreiheit oder Accessibility</h3>

Dieser Test beschreibt, wie barrierefrei eine Website ist. Von Barrierefreiheit im Web spricht man, wenn Menschen mit körperlichen Einschränkungen eine Website normal bedienen können. Zu den Einschränkungen gehören unter anderem: Blindheit, Sehbehinderung, Taubheit, motorisch Beeinträchtigungen oder Konzentrationsschwäche.

Es wird untersucht, ob der Farbkontrast zwischen dem Text und dem Hintergrund groß genug ist, um die Lesbarkeit zu gewähren. Die Website muss ohne Maus navigierbar sein.

Bilder sollten mit einem Alt-Text versehen sein. Dieser Text hilft Menschen mit Sehbehinderungen. Solche Menschen navigieren die Website mit einem Screenreader. Screenreader lesen den Alt-Text vor, da diese Programme keine Bilder sehen können. Der Alt-Text sollte daher das Bild gut genug beschreiben.

Unterschriften sollten auch als Headings (HTML-Element für Überschriften) definiert werden. Viele Elemente, wie Button, Navigationen, Footer oder Formen besitzen passende HTML Elemente. Bei dem Test wird darauf geachtet, dass die richtigen HTML Elemente verwendet wurden.

Das Ziel bei diesem Test sollte 100% sein.

<h3 id="best-practices">Best Practices</h3>

Hier werden hauptsächlich die technischen Aspekte der Website getestet.

Zu den technischen Aspekte gehören: SSL-Zertifikat, sichere Javascript-Bibliotheken, keine Fehler im Browser etc.

Auch hier sollte der Test zwischen 90% und 100% sein.

<h3 id="seo">SEO</h3>

Ein erfolgreicher Test bei diesem Kennwert gewährt kein gutes Ranking bei den Suchmaschinen. Dieser Test testet lediglich die Grundlagen vom technischen und On-Page SEO.

Es wird geprüft, ob ein Meta-Titel und eine Meta-Beschreibung vorhanden sind. Meta-Title und Meta-Beschreibung erscheinen auf der Suchmaschine und geben den Nutzer nähere Informationen zu der Website.

Zudem wird überprüft, ob alle Links einen beschriebenen Text haben und gecrawlt werden können. Suchmaschinen navigieren durch eine Website durch die Links auf der Website (Crawling). Durch eine Beschreibung des Linkes wird der Inhalt besser verstanden.

Ebenfalls wichtig sind die Alt-Texte bei den Bilder. Alt-Texte sind nicht nur gut für die Barrierefreiheit, sondern auch für die Suchmaschinen. Suchmaschinen sind lediglich Bots, die durch die Websites crawlen. Die sind noch nicht in der Lage Bilder zu erkennen, daher verwenden sie die Alt-Text, um die Bilder zu “verstehen”.

Der Alt-Text sollte daher das Bild so gut wie möglich beschreiben.

Das Ziel bei diesem Test sollte 100% sein.

<h3 id="fazit">Fazit</h3>

Beim Entwicklen Ihrer Website überprüfe ich die Website regelmäßig mit dem Lighthouse Tool. Gute Ergebnisse liefern den Grundbaustein für eine schnelle, barrierefreie und sichere Website.

<h2 id="sichtbar-werden-durch-on-page-seo">Sichtbar werden durch On-Page SEO</h2>

Für ein gutes Ranking ist natürlich auch der Inhalt relevant. Der Inhalt muss relevant für den Nutzer sein. Dadurch erkennt eine Suchmaschine, dass die Website von Wert ist.

Passende Keywords werden untersucht und in den Texten eingepflegt.

Es werden sogenannte Long-Tail Keywords verwendet. Long-Tail Keywords sind Suchanfragen, die länger als ein bis zwei Wörter sind. Diese Keywords sind zudem präziser auf die jeweilige Zielgruppe zugeschnitten.

Abnehmen (Short-Tail) ⇒ Abnehmen am Bauch Übungen für Frauen (Long-Tail)

![Short Tail vs Long Tail](/images/long-tail-vs-short-tail.jpg)

_Short Tail vs Long Tail_

Durch die Nutzung von solchen Keywords ist die Konkurrenz geringer und das Suchvolumen noch hoch genug, um Seitenaufrufe auf die Website zu generieren.

<h2 id="testen-und-aktualisieren">Testen und Aktualisieren</h2>

Die Suchmaschine Optimierung und das Design der Website ist ein konstanter Prozess. Mit einer einmaligen Inhaltserstellung kann kein gutes Ranking auf der Suchmaschine gewährleistet sein. Daher ist es wichtig die Website zu analysieren und diese Stück für Stück zu verbessern.

Für die Analyse wird Google Analytics verwendet. Dort ist sichtbar, wieviele Besucher oder Besucherinnen die Website innerhalb eines Zeitraumes hat.

Es wird analysiert, wie lang die Besucher auf der Website waren und wieviele davon zu Kunden wurden (Conversionsrate). Es können noch viele weitere Faktoren untersucht werden.

Natürlich werden auch die Inhalte analysiert und angepasst.

Wie beim Design entscheidet der Nutzer, ob die Website ein Erfolg oder ein Fehlschlag ist. Den Nutzer oder die Nutzerin so gut wie möglich zu verstehen, lässt sich “nur” durch Testen und Aktualisieren der Website ermöglichen.

![Design und Test Kreislauf](/images/design-und-test-Loop.jpg)

_Design und Test Kreislauf_

<p class="mt-5">
<a href="/leistungen" class="text-dark | btn-second">Zurück zu den Leistungen</a>
</p>