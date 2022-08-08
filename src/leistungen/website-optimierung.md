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
page_meta:
  metaDesc: description
  metaDescContent: Ihre Website soll von Natur aus schnell, sicher und zugänglich sein. Dafür werden von mir automatisierte Tests durchgeführt. Für ein gutes Ranking in den Suchmaschinen suche ich passende Keywords für Ihre Themen und analysiere ihre Website
  metaOgTitle: og:title
  metaOgTitleContent: Ihre Website soll von Natur aus schnell, sicher und zugänglich sein. Dafür werden von mir automatisierte Tests durchgeführt. Für ein gutes Ranking in den Suchmaschinen suche ich passende Keywords für Ihre Themen und analysiere ihre Website
  metaOgDesc: og:description
  metaOgDescContent: Ihre Website soll von Natur aus schnell, sicher und zugänglich sein. Dafür werden von mir automatisierte Tests durchgeführt. Für ein gutes Ranking in den Suchmaschinen suche ich passende Keywords für Ihre Themen und analysiere ihre Website
  metaOgImage: og:image
  metaOgImageContent: /images/ogDesc.jpg
  metaTwitterTitle: twitter:title
  metaTwitterTitleContent: Ihre Website soll von Natur aus schnell, sicher und zugänglich sein. Dafür werden von mir automatisierte Tests durchgeführt. Für ein gutes Ranking in den Suchmaschinen suche ich passende Keywords für Ihre Themen und analysiere ihre Website
  metaTwitterDesc: twitter:description
  metaTwitterDescContent: Ihre Website soll von Natur aus schnell, sicher und zugänglich sein. Dafür werden von mir automatisierte Tests durchgeführt. Für ein gutes Ranking in den Suchmaschinen suche ich passende Keywords für Ihre Themen und analysiere ihre Website
  metaTwitterImage: twitter:image
  metaTwitterImageContent: /images/ogDesc.jpg
  faviconIco: /images/favicon.ico
  webclip: /images/favicon-32x32.png
---

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/leistungen">Leistungen</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{pageTitle}}</li>
  </ol>
</nav>

<h1 class="heading-1 | text-primary| routeSkipHeading"><a
      href="#global-nav"
      id="skip-main"
      class="routeSkipLink"
      aria-label="Skip to global navigation"
    ></a>{{pageTitle}}</h1>

<div class="toc">
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
</div>

Bevor die Website veröffentlicht wird, wird noch überprüft, ob die Website schnell, zugänglich und sicher ist.

Um diese Eigenschaften zu “messen” wird primär das Tool Lighthouse verwendet.

<h2 style="position: relative;" id="ein-grober-überblick-mit-lighthouse"><a href="#ein-grober-überblick-mit-lighthouse" aria-label="Ein grober Überblick mit Lighthouse Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ein grober Überblick mit Lighthouse</h2>

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

<h3 style="position: relative;" id="leistung-oder-performance"><a href="#leistung-oder-performance" aria-label="Leistung oder Performance Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Leistung oder Performance</h3>

In diesem Test wird die Ladegeschwindigkeit der Website geprüft. Die Angabe erfolgt in Sekunden [s].

<h4 style="position: relative;" id="messwerte"><a href="#messwerte" aria-label="messwerte Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Messwerte</h4>

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

<h3 style="position: relative;" id="barrierefreiheit-oder-accessibility"><a href="#barrierefreiheit-oder-accessibility" aria-label="Barrierefreiheit oder Accessibility Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Barrierefreiheit oder Accessibility</h3>

Dieser Test beschreibt, wie barrierefrei eine Website ist. Von Barrierefreiheit im Web spricht man, wenn Menschen mit körperlichen Einschränkungen eine Website normal bedienen können. Zu den Einschränkungen gehören unter anderem: Blindheit, Sehbehinderung, Taubheit, motorisch Beeinträchtigungen oder Konzentrationsschwäche.

Es wird untersucht, ob der Farbkontrast zwischen dem Text und dem Hintergrund groß genug ist, um die Lesbarkeit zu gewähren. Die Website muss ohne Maus navigierbar sein.

Bilder sollten mit einem Alt-Text versehen sein. Dieser Text hilft Menschen mit Sehbehinderungen. Solche Menschen navigieren die Website mit einem Screenreader. Screenreader lesen den Alt-Text vor, da diese Programme keine Bilder sehen können. Der Alt-Text sollte daher das Bild gut genug beschreiben.

Unterschriften sollten auch als Headings (HTML-Element für Überschriften) definiert werden. Viele Elemente, wie Button, Navigationen, Footer oder Formen besitzen passende HTML Elemente. Bei dem Test wird darauf geachtet, dass die richtigen HTML Elemente verwendet wurden.

Das Ziel bei diesem Test sollte 100% sein.

<h3 style="position: relative;" id="best-practices"><a href="#best-practices" aria-label="Best Practices Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Best Practices</h3>

Hier werden hauptsächlich die technischen Aspekte der Website getestet.

Zu den technischen Aspekte gehören: SSL-Zertifikat, sichere Javascript-Bibliotheken, keine Fehler im Browser etc.

Auch hier sollte der Test zwischen 90% und 100% sein.

<h3 style="position: relative;" id="seo"><a href="#seo" aria-label="seo Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SEO</h3>

Ein erfolgreicher Test bei diesem Kennwert gewährt kein gutes Ranking bei den Suchmaschinen. Dieser Test testet lediglich die Grundlagen vom technischen und On-Page SEO.

Es wird geprüft, ob ein Meta-Titel und eine Meta-Beschreibung vorhanden sind. Meta-Title und Meta-Beschreibung erscheinen auf der Suchmaschine und geben den Nutzer nähere Informationen zu der Website.

Zudem wird überprüft, ob alle Links einen beschriebenen Text haben und gecrawlt werden können. Suchmaschinen navigieren durch eine Website durch die Links auf der Website (Crawling). Durch eine Beschreibung des Linkes wird der Inhalt besser verstanden.

Ebenfalls wichtig sind die Alt-Texte bei den Bilder. Alt-Texte sind nicht nur gut für die Barrierefreiheit, sondern auch für die Suchmaschinen. Suchmaschinen sind lediglich Bots, die durch die Websites crawlen. Die sind noch nicht in der Lage Bilder zu erkennen, daher verwenden sie die Alt-Text, um die Bilder zu “verstehen”.

Der Alt-Text sollte daher das Bild so gut wie möglich beschreiben.

Das Ziel bei diesem Test sollte 100% sein.

<h3 style="position: relative;" id="fazit"><a href="#fazit" aria-label="fazit Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fazit</h3>

Beim Entwicklen Ihrer Website überprüfe ich die Website regelmäßig mit dem Lighthouse Tool. Gute Ergebnisse liefern den Grundbaustein für eine schnelle, barrierefreie und sichere Website.

<h2 style="position: relative;" id="sichtbar-werden-durch-on-page-seo"><a href="#sichtbar-werden-durch-on-page-seo" aria-label="Sichtbar werden durch On-Page SEO Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sichtbar werden durch On-Page SEO</h2>

Für ein gutes Ranking ist natürlich auch der Inhalt relevant. Der Inhalt muss relevant für den Nutzer sein. Dadurch erkennt eine Suchmaschine, dass die Website von Wert ist.

Passende Keywords werden untersucht und in den Texten eingepflegt.

Es werden sogenannte Long-Tail Keywords verwendet. Long-Tail Keywords sind Suchanfragen, die länger als ein bis zwei Wörter sind. Diese Keywords sind zudem präziser auf die jeweilige Zielgruppe zugeschnitten.

Abnehmen (Short-Tail) ⇒ Abnehmen am Bauch Übungen für Frauen (Long-Tail)

![Short Tail vs Long Tail](/images/long-tail-vs-short-tail.jpg)

_Short Tail vs Long Tail_

Durch die Nutzung von solchen Keywords ist die Konkurrenz geringer und das Suchvolumen noch hoch genug, um Seitenaufrufe auf die Website zu generieren.

<h2 style="position: relative;" id="testen-und-aktualisieren"><a href="#testen-und-aktualisieren" aria-label="Testen und Aktualisieren Permalink" class="blog-header-link before"><svg aria-hidden="true" focusable="false" height="20" version="1.1" viewbox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testen und Aktualisieren</h2>

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
