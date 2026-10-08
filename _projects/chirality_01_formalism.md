---
layout: page
permalink: /chirality/formalism/
title: Geometric mechanisms
description: general formalism
img: /assets/img/chirality_formalism.png
importance: 1
category: chirality and spin-polarization in photoionization
# toc:
#   sidebar: left
---

$$
\newcommand{\fullvec}[1]{\boldsymbol{\vec{#1}}}
\newcommand{\unitvec}[1]{\boldsymbol{\hat{#1}}}
$$

We consider one-photon ionization of randomly oriented chiral molecules via circularly polarized light. The light field is described as  
$$
\begin{align}
\fullvec{E}^{L}=\frac{E_\omega^L}{\sqrt{2}}(\unitvec{x}^L+i\xi\unitvec{y}^L),
\end{align}
$$
where, $$\xi=\pm1$$ is a dichroic parameter characterizing the direction of rotation of the light polarization vector. The superscript 'L' will be used to denote quantities defined in the laboratory frame while quantities without a superscript are understood to be defined in the molecular frame. Upon ionization, the photoelectron is ejected in the direction of $$\unitvec{k}^L$$ with its spin measured parallel to $$\unitvec{s}^L$$. The general description for such a process has been previously considered by Cherepkov
{% cite cherepkov1983 --file references --style american-physics-society %}, and showed that the momentum- and spin-resolved photoionization yield $$ W^L(\unitvec{k}^L,\unitvec{s}^L) $$ can be fully characterized by ten independent parameters, i.e., 
$$
\begin{align}
	W^{L}(\unitvec{k}^{L},\unitvec{s}^{L})= \dfrac{\sigma_{\text{cross}}}{8\pi} & \left\{ 1 - \dfrac{\beta}{2} \left[3(\unitvec{k}^L\cdot\unitvec{\Xi}^L)^{2}-1\right] + A (\unitvec{s}^L\cdot\unitvec{\Xi}^L) - \eta (\unitvec{\Xi}^L\cdot\unitvec{s}^L\times\unitvec{k}^L)(\unitvec{k}^L\cdot\unitvec{\Xi}^L) \right. \nonumber \\
	%
	&- \gamma \left[\frac{3}{2}(\unitvec{k}^L\cdot\unitvec{s}^L)(\unitvec{k}^L\cdot\unitvec{\Xi}^L)-\frac{1}{2}(\unitvec{s}^L\cdot\unitvec{\Xi}^L)\right] + D (\unitvec{k}^L \cdot \unitvec{\Xi}^L) + C (\unitvec{\Xi}^L\cdot\unitvec{s}^L\times\unitvec{k}^L)   \nonumber \\
	%
	&+ \left. B_1 (\unitvec{k}^L \cdot \unitvec{s}^L) + B_2 (\unitvec{k}^L \cdot \unitvec{\Xi}^L) (\unitvec{s}^L \cdot \unitvec{\Xi}^L) + B_3 (\unitvec{k}^L\cdot\unitvec{\Xi}^L)^{2}(\unitvec{k}^L\cdot\unitvec{s}^L) \right\},
\end{align}
$$ 
where, $$\unitvec{\Xi}^L=\xi\unitvec{z}^L$$. Among these, the parameters $$ \{ D, C, B_1, B_2, B_3 \} $$ only non-zero for chiral molecules. Meanwhile the rest are non-zero for both chiral non-chiral molecules which have been studied theoretically and experimentally by several authors {% cite cherepkov1983 chandra1989photoelectron chandra1989photoelectronTd cherepkov1991comment schonhense1984spin heinzmann1981spin --file references --style american-physics-society %} 



<div style="display:flex; flex-wrap:wrap; gap:1.5rem 2rem; align-items:center;" markdown="1">
<div style="flex:2 1 16rem; min-width:0; overflow-x:auto;" markdown="1">

$$
\begin{align}
\sigma_{\text{cross}} &= 2 \, A_{0,0,0,0} \\[1.2ex]
\beta &= -\sqrt{5} \, \frac{A_{2,0,0,0}}{A_{0,0,0,0}} \\[1.2ex]
A &= \sqrt{3} \, \frac{A_{0,0,1,0}}{A_{0,0,0,0}} \\[1.2ex]
\eta &= i\frac{3\sqrt{5}}{2} \, \frac{A_{2,-1,1,1}-A_{2,1,1,-1}}{A_{0,0,0,0}} \\[1.2ex]
\gamma &= -\sqrt{15} \, \frac{A_{2,0,1,0}}{A_{0,0,0,0}}
\end{align}
$$

</div>
<div style="flex:3 1 20rem; min-width:0; overflow-x:auto;" markdown="1">

$$
\begin{align}
D &= \sqrt{3} \, \frac{A_{1,0,0,0}}{A_{0,0,0,0}} \\[1.2ex]
C &= -i \frac{3}{2} \, \frac{A_{1,-1,1,1}-A_{1,1,1,-1}}{A_{0,0,0,0}} \\[1.2ex]
B_1 &= -\dfrac{3}{2} \left[\dfrac{(A_{1,-1,1,1}+A_{1,1,1,-1})+\sqrt{\frac{7}{3}}A_{3,0,1,0}}{A_{0,0,0,0}}\right] \\[1.2ex]
B_2 &= \dfrac{3A_{1,0,1,0} + \frac{3}{2}(A_{1,-1,1,1}+A_{1,1,1,-1}) - \sqrt{21}A_{3,0,1,0}}{A_{0,0,0,0}} \\[1.2ex]
B_3 &= \frac{5\sqrt{21}}{2} \, \frac{A_{3,0,1,0}}{A_{0,0,0,0}}
\end{align}
$$

</div>
</div>

$$
\begin{align}
A_{L,M_{L},S,M_{S}}= & \dfrac{4\pi \sqrt{2\pi}}{3}  |E_\omega^L|^{2}  \sum(-1)^{m_{2}'+\xi'-\xi+\mu_{2}'-1/2} (2J+1) \sqrt{\frac{(2\ell_1+1)(2\ell_2+1)(2L+1)}{4\pi}} \nonumber \\
&\times 
\begin{pmatrix}
	\ell_{2} & \ell_{1} & L\\
	0 & 0 & 0
\end{pmatrix}
\begin{pmatrix}
	\ell_{2} & \ell_{1} & L\\
	m_{2}' & -m_{1}' & M_{L}'
\end{pmatrix} 
\begin{pmatrix}
	1 & 1 & J\\
	\xi'' & -\xi' & -M_{J}'
\end{pmatrix}
\begin{pmatrix}
	1 & 1 & J\\
	\xi & -\xi & 0
\end{pmatrix} \nonumber \\
&\times 
\begin{pmatrix}
	\frac{1}{2} & \frac{1}{2} & S\\
	\mu_{2}' & -\mu_{1}' & M_{S}'
\end{pmatrix}
\begin{pmatrix}
	L & S & J\\
	M_{L}' & M_{S}' & M_{J}'
\end{pmatrix}
\begin{pmatrix}
	L & S & J\\
	-M_{L} & -M_{S} & 0
\end{pmatrix}
(D_{\xi'}^{\ell_1,m_1',\mu_1'})^* D_{\xi''}^{\ell_2,m_2',\mu_2'},
\end{align}

$$





<details class="research-references-dropdown">
  <summary><strong>References</strong></summary>

  <div class="research-references">
    {% bibliography --file references --cited_in_order --style american-physics-society --group_by none --template bib_plain %}
  </div>
</details>

<script src="{{ '/assets/js/cite-merge.js' | relative_url }}"></script>

[^avg]: This is the content of the first footnote. It appears at the bottom of the page, with a ↩ link back to the text.