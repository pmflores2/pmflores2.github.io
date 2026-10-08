---
layout: page
permalink: /conferences/
title: conferences
description: list of conferences and workshops attended
nav: true
nav_order: 3
---

<style>
  .conf-toolbar {
    display: flex; flex-wrap: wrap; gap: .5rem;
    align-items: center; justify-content: space-between;
    margin: 1rem 0 1.5rem;
  }
  .conf-filters { display: flex; flex-wrap: wrap; gap: .4rem; }
  .conf-chip, .conf-ctrl {
    border: 1px solid var(--global-divider-color);
    background: transparent; color: var(--global-text-color);
    border-radius: 999px; padding: .2rem .8rem;
    font-size: .85rem; cursor: pointer; transition: all .15s;
  }
  .conf-chip:hover, .conf-ctrl:hover { border-color: var(--global-theme-color); color: var(--global-theme-color); }
  .conf-chip.active { background: var(--global-theme-color); border-color: var(--global-theme-color); color: #fff; }
  .conf-ctrl { border-radius: 6px; }

  details.conf-year {
    border: 1px solid var(--global-divider-color);
    border-radius: 10px; margin-bottom: .75rem;
    background: var(--global-card-bg-color, transparent);
    overflow: hidden;
  }
  details.conf-year[hidden], li.conf[hidden] { display: none; }
  details.conf-year > summary {
    list-style: none; cursor: pointer;
    display: flex; align-items: center; gap: .75rem;
    padding: .75rem 1rem; user-select: none;
  }
  details.conf-year > summary::-webkit-details-marker { display: none; }
  details.conf-year > summary::before {
    content: ""; width: .5rem; height: .5rem;
    border-right: 2px solid var(--global-theme-color);
    border-bottom: 2px solid var(--global-theme-color);
    transform: rotate(-45deg); transition: transform .2s;
  }
  details.conf-year[open] > summary::before { transform: rotate(45deg); }
  details.conf-year > summary:hover { background: rgba(127,127,127,.08); }
  .conf-year-label { font-size: 1.25rem; font-weight: 600; color: var(--global-theme-color); }
  .conf-count {
    margin-left: auto; font-size: .8rem; padding: .05rem .6rem;
    border-radius: 999px; background: rgba(127,127,127,.15);
    color: var(--global-text-color-light);
  }

  ul.conf-items { list-style: none; margin: 0; padding: 0 1rem .5rem; }
  li.conf {
    display: flex; gap: 1rem; padding: .75rem 0;
    border-top: 1px solid var(--global-divider-color);
  }
  .conf-date {
    flex: 0 0 8rem;
    font-size: .95rem;
    line-height: 1.55;
    color: var(--global-text-color);
    font-weight: 500;
    padding-top: .15rem;
  }
  .conf-body { flex: 1; min-width: 0; }
  .conf-title { font-weight: 600; }
  .conf-venue {
    font-size: .98rem;
    line-height: 1.55;
    color: var(--global-text-color);
    opacity: 0.92;
    margin-top: .25rem;
  }
  .conf-badge {
    display: inline-block; font-size: .7rem; font-weight: 600;
    letter-spacing: .04em; text-transform: uppercase;
    padding: .1rem .5rem; margin-right: .4rem; border-radius: 4px;
    vertical-align: middle; border: 1px solid currentColor;
  }
  .conf-badge.talk { color: #2e7d6b; }
  .conf-badge.poster { color: #c2701a; }
  .conf-badge.participant { color: #6b6bb5; }
  .conf-badge.virtual { color: var(--global-text-color-light); margin-left: .3rem; margin-right: 0; }

  @media (max-width: 576px) {
    li.conf { flex-direction: column; gap: .15rem; }
    .conf-date { flex-basis: auto; }
  }
</style>

<div class="conf-toolbar">
  <div class="conf-filters" role="group" aria-label="Filter by type">
    <button class="conf-chip active" data-filter="all">All</button>
    <button class="conf-chip" data-filter="talk">Talks</button>
    <button class="conf-chip" data-filter="poster">Posters</button>
    <button class="conf-chip" data-filter="participant">Participant</button>
  </div>
  <div>
    <button class="conf-ctrl" id="conf-expand">Expand all</button>
    <button class="conf-ctrl" id="conf-collapse">Collapse all</button>
  </div>
</div>

<div id="conf-list">

<details class="conf-year" open>
  <summary><span class="conf-year-label">2026</span><span class="conf-count">4</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="talk">
      <span class="conf-date">Jun 22 – 26</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://eventos.ucm.es/137959/detail/stereodynamics-2026.html">Stereodynamics 2026</a>
        <div class="conf-venue">Aula Magna, Facultad de Ciencias Químicas, Universidad Complutense de Madrid, Madrid, Spain 🇪🇸</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date">Jun 7 – 12</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://www.grc.org/multiphoton-processes-conference/2026/">Multiphoton Processes (Gordon Research Conference)</a>
        <div class="conf-venue">Stonehill College, Easton, Massachusetts, USA 🇺🇸</div>
      </div>
    </li>
    <li class="conf" data-type="talk">
      <span class="conf-date">Jun 6 – 7</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://www.grc.org/multiphoton-processes-grs-conference/2026/">Multiphoton Processes (Gordon Research Seminar)</a>
        <div class="conf-venue">Stonehill College, Easton, Massachusetts, USA 🇺🇸</div>
      </div>
    </li>
    <li class="conf" data-type="talk">
      <span class="conf-date">Mar 1 – 6</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://mainz26.dpg-tagungen.de/">DPG Spring Meeting of the Atomic, Molecular, Quantum Optics and Photonics Section</a>
        <div class="conf-venue">Johannes Gutenberg University Mainz, Mainz, Germany 🇩🇪</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2025</span><span class="conf-count">8</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="poster">
      <span class="conf-date">Sep 2 – 5</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://www.atom.uni-frankfurt.de/elch2025/index.html">Conference on Extreme Light and Chiral Molecular Systems</a>
        <div class="conf-venue">Campus Center, Universität Kassel, Kassel, Germany 🇩🇪</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date">Jul 29 – Aug 5</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://www.icpeac2025.jp/">34th International Conference on Photonic, Electronic and Atomic Collisions</a>
        <div class="conf-venue">Sapporo Convention Center, Sapporo, Japan 🇯🇵</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date">Jul 6 – 11</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://attox.se/">10th International Conference on Attosecond Science and Technology</a>
        <div class="conf-venue">The Loop and Stadshallen, Lund, Sweden 🇸🇪</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date">Jun 30 – Jul 4</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://ecamp15.org/">15th European Conference on Atoms Molecules and Photons</a>
        <div class="conf-venue">Congress Innsbruck, Innsbruck, Austria 🇦🇹</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date">Jun 22 – 27</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://indico.elettra.eu/event/44/">16th Femtochemistry Conference</a>
        <div class="conf-venue">Savoia Excelsior Palace, Trieste, Italy 🇮🇹</div>
      </div>
    </li>
    <li class="conf" data-type="talk">
      <span class="conf-date">May 26 – 30</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://lpage.ch.rachip.com/light-matter-interaction-focusing-on-polariton-chemistry-and-physics/">Light-Matter Interaction: Focusing on Polariton Chemistry and Physics</a>
        <div class="conf-venue">Cultural Centre "Jules Pascin" – the Synagogue, Vidin, Bulgaria 🇧🇬</div>
      </div>
    </li>
    <li class="conf" data-type="talk">
      <span class="conf-date">Mar 31 – Apr 4</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://goettingen25.dpg-tagungen.de/">DPG Spring Meeting of the Matter and Cosmos Section</a>
        <div class="conf-venue">Zentrales Hörsaalgebäude, Universität Göttingen, Göttingen, Germany 🇩🇪</div>
      </div>
    </li>
    <li class="conf" data-type="talk">
      <span class="conf-date">Mar 9 – 14</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://bonn25.dpg-tagungen.de/">DPG Spring Meeting of the Atomic, Molecular, Quantum Optics and Photonics Section</a>
        <div class="conf-venue">Hörsaalzentrum, Universität Bonn, Bonn, Germany 🇩🇪</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2024</span><span class="conf-count">3</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="talk">
      <span class="conf-date">Sep 10 – 13</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="http://quantum.physics.sk/tiqt2024/#">Time in Quantum Theory</a>
        <div class="conf-venue">Smolenice Castle, Smolenice, Slovakia 🇸🇰</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date">Jul 15 – 19</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://www.up2024.org/">23rd International Conference on Ultrafast Phenomena</a>
        <div class="conf-venue">World Trade Center Barcelona, Barcelona, Spain 🇪🇸</div>
      </div>
    </li>
    <li class="conf" data-type="participant">
      <span class="conf-date">May 27 – 31</span>
      <div class="conf-body">
        <span class="conf-badge participant">Participant</span>
        <a class="conf-title" href="https://www.cecam.org/workshop-details/costzcam-school-on-new-computational-methods-for-attosecond-molecular-processes-1338">COST/ZCAM School on New Computational Methods for Attosecond Molecular Processes</a>
        <div class="conf-venue">Universidad de Zaragoza, Zaragoza, Spain 🇪🇸</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2022</span><span class="conf-count">2</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="poster">
      <span class="conf-date">Sep 22 – 23</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <span class="conf-title">10th ASTHRDP Graduate Scholars' Conference</span>
        <div class="conf-venue">University of the Philippines Diliman, Quezon City, Philippines 🇵🇭</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date">Sep 19 – 23</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://tqt2022conference.wordpress.com/">Time in Quantum Theory</a>
        <div class="conf-venue">TU Wien, Vienna, Austria 🇦🇹</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2021</span><span class="conf-count">3</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="participant">
      <span class="conf-date">Jun 14 – 18</span>
      <div class="conf-body">
        <span class="conf-badge participant">Participant</span>
        <a class="conf-title" href="https://events.perimeterinstitute.ca/event/6/">Quantizing Time</a>
        <span class="conf-badge virtual">Virtual</span>
        <div class="conf-venue">Perimeter Institute, Waterloo, Canada 🇨🇦</div>
      </div>
    </li>
    <li class="conf" data-type="participant">
      <span class="conf-date">Apr 12 – 23</span>
      <div class="conf-body">
        <span class="conf-badge participant">Participant</span>
        <a class="conf-title" href="https://comp-quant-2021.sciencesconf.org/">7th Les Houches School in Computational Physics: Dynamics of Complex Quantum Systems, from Theory to Computation</a>
        <span class="conf-badge virtual">Virtual</span>
        <div class="conf-venue">École de Physique des Houches, Les Houches, France 🇫🇷</div>
      </div>
    </li>
    <li class="conf" data-type="participant">
      <span class="conf-date">Mar 8 – 10</span>
      <div class="conf-body">
        <span class="conf-badge participant">Participant</span>
        <a class="conf-title" href="https://indico.ictp.it/event/9504/">Conference on Time Crystals</a>
        <span class="conf-badge virtual">Virtual</span>
        <div class="conf-venue">Abdus Salam ICTP, Trieste, Italy 🇮🇹</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2019</span><span class="conf-count">4</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="poster">
      <span class="conf-date">Nov 4 – 8</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <span class="conf-title">ICTP Asian Network School and Workshop on Complex Condensed Matter Systems</span>
        <div class="conf-venue">University of the Philippines Diliman, Quezon City, Philippines 🇵🇭</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date"></span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <span class="conf-title">2nd Annual Graduate Students Research Conference</span>
        <div class="conf-venue">College of Science, University of the Philippines Diliman, Quezon City, Philippines 🇵🇭</div>
      </div>
    </li>
    <li class="conf" data-type="talk">
      <span class="conf-date">May 29 – Jun 1</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://spp-online.org/spp2019/">37th Samahang Pisika ng Pilipinas International Physics Conference and Annual Meeting</a>
        <div class="conf-venue">Tagbilaran, Bohol, Philippines 🇵🇭</div>
      </div>
    </li>
    <li class="conf" data-type="poster">
      <span class="conf-date">Jan 28 – 31</span>
      <div class="conf-body">
        <span class="conf-badge poster">Poster</span>
        <a class="conf-title" href="https://conferences.weizmann.ac.il/TFQM19/time-and-fundamentals-quantum-mechanics">Time and Fundamentals of Quantum Mechanics</a>
        <div class="conf-venue">David Lopatie Conference Centre, Weizmann Institute of Science, Rehovot, Israel 🇮🇱</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2018</span><span class="conf-count">1</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="talk">
      <span class="conf-date">Jun 6 – 9</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://spp-online.org/spp2018/">36th Samahang Pisika ng Pilipinas International Physics Conference and Annual Meeting</a>
        <div class="conf-venue">Citystate Asturias Hotel Palawan, Puerto Princesa, Philippines 🇵🇭</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2017</span><span class="conf-count">2</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="talk">
      <span class="conf-date">Jun 7 – 10</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://spp-online.org/spp2017/">35th Samahang Pisika ng Pilipinas International Physics Conference and Annual Meeting</a>
        <div class="conf-venue">Cebu, Philippines 🇵🇭</div>
      </div>
    </li>
    <li class="conf" data-type="talk">
      <span class="conf-date">Jan 4 – 7</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://www.msuiit.edu.ph/announcements/detail.php?id=1063">8th Jagna International Workshop: Structure, Functions and Dynamics from nm to Gm</a>
        <div class="conf-venue">Jagna, Bohol, Philippines 🇵🇭</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2016</span><span class="conf-count">1</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="talk">
      <span class="conf-date">Aug 18 – 21</span>
      <div class="conf-body">
        <span class="conf-badge talk">Talk</span>
        <a class="conf-title" href="https://samahangpisikangpilipinas.blogspot.com/2016/08/the-34-th-spp-physics-conference-and.html">34th Samahang Pisika ng Pilipinas International Physics Conference and Annual Meeting</a>
        <div class="conf-venue">University of the Philippines Visayas, Philippines 🇵🇭</div>
      </div>
    </li>
  </ul>
</details>

<details class="conf-year">
  <summary><span class="conf-year-label">2015</span><span class="conf-count">1</span></summary>
  <ul class="conf-items">
    <li class="conf" data-type="participant">
      <span class="conf-date">Mar 31 – Apr 8</span>
      <div class="conf-body">
        <span class="conf-badge participant">Participant</span>
        <span class="conf-title">CERN School Philippines</span>
        <div class="conf-venue">University of the Philippines Diliman, Quezon City, Philippines 🇵🇭</div>
      </div>
    </li>
  </ul>
</details>

</div>

<script>
  (function () {
    var groups = document.querySelectorAll('#conf-list details.conf-year');
    var chips = document.querySelectorAll('.conf-chip');

    function applyFilter(type) {
      groups.forEach(function (g) {
        var shown = 0;
        g.querySelectorAll('li.conf').forEach(function (li) {
          var ok = type === 'all' || li.dataset.type === type;
          li.hidden = !ok;
          if (ok) shown++;
        });
        g.hidden = shown === 0;
        g.querySelector('.conf-count').textContent = shown;
        // when filtering, open the groups that have matches
        if (type !== 'all' && shown > 0) g.open = true;
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        applyFilter(chip.dataset.filter);
      });
    });

    document.getElementById('conf-expand').addEventListener('click', function () {
      groups.forEach(function (g) { g.open = true; });
    });
    document.getElementById('conf-collapse').addEventListener('click', function () {
      groups.forEach(function (g) { g.open = false; });
    });
  })();
</script>
