---
layout: page
# permalink: /chirality/formalism/
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
\newcommand{\tj}[6]{\begin{pmatrix}#1 & #2 & #3\\ #4 & #5 & #6\end{pmatrix}}
$$

<div class="paper-highlight" style="margin:1rem 0; padding:0.6rem 0.9rem; border:1px solid var(--global-divider-color, #dee2e6); border-left:4px solid var(--global-theme-color, #b509ac); border-radius:0.4rem; background:var(--global-card-bg-color, rgba(128,128,128,0.06)); font-size:0.85rem; line-height:1.4;">
  <div style="font-size:0.65rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--global-theme-color, #b509ac); font-weight:600; margin-bottom:0.15rem;">
   This post describes the paper
  </div>
  <div style="font-size:0.95rem; font-weight:600; line-height:1.3; margin-bottom:0.2rem;">
    Geometric mechanisms enabling spin- and enantio-sensitive observables in one-photon ionization of chiral molecules
  </div>
  <div style="margin-bottom:0.15rem;">
    <u>P. C. M. Flores</u>, S. Carlström, S. Patchkovskii, M. Ivanov, A. F. Ordonez, O. Smirnova
  </div>
  <div>
    <em>Phys. Rev. A</em> <strong>114</strong>, 013110 (2026)
    &nbsp;·&nbsp;
    <a href="https://journals.aps.org/pra/abstract/10.1103/cqqs-77rg" target="_blank" rel="noopener" style="color:var(--global-theme-color, #b509ac); font-weight:600;">Read the paper &rarr;</a>
  </div>
  <div style="margin-top:0.5rem; padding-top:0.5rem; border-top:1px solid var(--global-divider-color, #dee2e6);">
    <div style="font-size:0.65rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--global-theme-color, #b509ac); font-weight:600; margin-bottom:0.1rem;">
      Key insights
    </div>
    <ul style="margin:0; padding-left:1.1rem;">
      <li>Spin- and enantio-sensitive observables in one-photon ionization of randomly oriented chiral molecules arise purely from the electric-dipole interaction.</li>
      <li>They are governed by the geometric properties of the photoionization dipoles in real space and in spin space.</li>
      <li>All allowed spin- and momentum-resolved observables reduce to moments of three pseudovectors, emphasizing their fundamental geometric origin and the universality of the mechanism identified here.</li>
    </ul>
  </div>
</div>


<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Introduction:</summary>

<div markdown="1" style="border: 1px solid var(--global-divider-color); border-left: 4px solid var(--global-theme-color); border-radius: 6px; background-color: var(--global-card-bg-color); padding: 0.8rem 1.2rem; margin: 1rem 0;">

Chiral molecules are molecules which exists in two forms, called *enantiomers* (R and S), that are non-superimposable mirror images of each other, similar to one's left and right hands. The two enantiomers are identical in every way except for its handedness, e.g., same atoms, same bonds, same molecular weight. However, they behave differently when interacting with something that is also chiral such as circularly polarized light - its electric field vector traces a corkscrew as it propagates. Here, we consider **one-photon ionization of gas-phase chiral molecules via circularly polarized light** to obtain spin-polarized enantio-sensitive observables within the electric dipole interaction.

<u>The goal of this post is to provide a general explainer of the corresponding journal article.</u>

</div>

</details>


<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Setup and Definitions:</summary>

<div markdown="1" style="border: 1px solid var(--global-divider-color); border-left: 4px solid var(--global-theme-color); border-radius: 6px; background-color: var(--global-card-bg-color); padding: 0.8rem 1.2rem; margin: 1rem 0;">

The light field is
$$
\begin{align}
\fullvec{E}^{L}=\frac{E_\omega^L}{\sqrt{2}}(\unitvec{x}^L+i\xi\unitvec{y}^L),
\end{align}
$$
where $$\xi=\pm1$$ is a dichroic parameter characterizing the direction of rotation of the light polarization vector. The superscript 'L' denotes quantities in the laboratory frame, and the superscript 'M' denotes quantities in the molecular frame. The molecular frame is where the molecule's properties are simplest, since they do not depend on how the molecule is oriented with respect to the lab. Meanwhile, the lab frame is where the light and the detectors are. A vector is rotated from the molecular frame to the laboratory frame via the Euler rotation matrix $$R_\rho$$,
$$
\begin{align}
\fullvec{A}^L = R_\rho \fullvec{A}^M ,
\end{align}
$$
where, $$\rho$$ labels the orientation of the molecule. In a gas, every $$\rho$$ occurs with equal probability, so at the end we average over all of them.

Upon ionization, the photoelectron is ejected in the direction of $$\unitvec{k}^L$$ with its spin measured parallel to $$\unitvec{s}^L$$. Three lab-frame directions therefore define the whole experiment: the photon spin $$\unitvec{\Xi}^L=\xi\unitvec{z}^L$$, the electron direction $$\unitvec{k}^L$$, and the detected spin direction $$\unitvec{s}^L$$.

<div style="text-align:center;">
{% include figure.liquid
   path="assets/img/chirality/setup_circ.jpg"
   class="img-fluid rounded"
   width="30%"
   max-width="26rem"
   zoomable=true
   alt="Geometry of one-photon ionization by circularly polarized light"
   caption="<strong>Figure 1.</strong> Specification of coordinates in the laboratory frame. The light field propagates along \(\unitvec{z}\). The unit vector \(\unitvec{\Xi}=\xi\unitvec{z}\) (solid red) is the direction of photon spin, where \(\xi=\pm1\) is a dichroic parameter characterizing the direction of rotation of the light polarization vector. Upon ionization, the photoelectron is ejected in the direction of \(\unitvec{k}\) (solid green) with its spin measured parallel to \(\unitvec{s}\) (solid blue)." %}
</div>

</div>

</details>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Photoionization yield:</summary>

<div markdown="1" style="border: 1px solid var(--global-divider-color); border-left: 4px solid var(--global-theme-color); border-radius: 6px; background-color: var(--global-card-bg-color); padding: 0.8rem 1.2rem; margin: 1rem 0;">

The relevant quantity quantity to calculate is the momentum- and spin-resolved yield $$W^L(\unitvec{k}^L,\unitvec{s}^L)$$, i.e., the probability to find an electron going along $$\unitvec{k}^L$$ with spin along $$\unitvec{s}^L$$. This was considered by Cherepkov {% cite cherepkov1983 --file references --style american-physics-society %}, who showed that, for randomly oriented molecules, it can be fully characterized by ten independent parameters:

$$
\begin{equation}
\label{eq:kinematic}
\begin{aligned}
W^{L}(\unitvec{k}^{L},\unitvec{s}^{L})
={}& \frac{\sigma_{\text{cross}}}{8\pi}\Bigg\{
1-\frac{\beta}{2}\left[3(\unitvec{k}^L\cdot\unitvec{\Xi}^L)^2-1\right] \\
&+ A(\unitvec{s}^L\cdot\unitvec{\Xi}^L) \\
&- \eta(\unitvec{\Xi}^L\cdot\unitvec{s}^L\times\unitvec{k}^L)
   (\unitvec{k}^L\cdot\unitvec{\Xi}^L) \\
&- \gamma\left[\frac{3}{2}(\unitvec{k}^L\cdot\unitvec{s}^L)
   (\unitvec{k}^L\cdot\unitvec{\Xi}^L)
   -\frac{1}{2}(\unitvec{s}^L\cdot\unitvec{\Xi}^L)\right] \\
&+ D(\unitvec{k}^L\cdot\unitvec{\Xi}^L)
   + C(\unitvec{\Xi}^L\cdot\unitvec{s}^L\times\unitvec{k}^L) \\
&+ B_1(\unitvec{k}^L\cdot\unitvec{s}^L) \\
&+ B_2(\unitvec{k}^L\cdot\unitvec{\Xi}^L)
   (\unitvec{s}^L\cdot\unitvec{\Xi}^L) \\
&+ B_3(\unitvec{k}^L\cdot\unitvec{\Xi}^L)^2
   (\unitvec{k}^L\cdot\unitvec{s}^L)
\Bigg\}.
\end{aligned}
\end{equation}
$$

After performing orientation averaging, the molecule no longer has a preferred direction left. The yield will then only depend on the three lab vectors $$\unitvec{k}^L$$, $$\unitvec{s}^L$$, $$\unitvec{\Xi}^L$$, and only through rotationally invariant combinations of them, i.e., dot products and the triple product. Only ten combinations survive, and each comes with a coefficient: $$\{\sigma_{\text{cross}},\beta,A,\eta,\gamma,D,C,B_1,B_2,B_3\}$$.

Under spatial inversion, the photoelectron momentum $$\unitvec{k}$$, being a polar vector, changes sign, whereas the electron spin $$\unitvec{s}$$ and photon spin $$\unitvec{\Xi}$$, being axial vectors, remain unchanged. Consequently, scalar products between polar and axial vectors are pseudoscalars, which change sign under spatial inversion, e.g., 
- $$(\unitvec{k}\cdot\unitvec{\Xi})$$ is a pseudoscalar, so the term multiplying $$D$$ can only survive if the molecule is chiral.
- $$(\unitvec{s}\cdot\unitvec{\Xi})$$ is an ordinary scalar, so the term multiplying $$A$$ is allowed for any molecule, even an atom.

This distinction allows us to identify which contributions to the photoionization yield are sensitive to molecular handedness. The ten parameters in $$W^L(\unitvec{k}^L,\unitvec{s}^L)$$ can thereby be summarized to have the following

<div class="research-centered-table" markdown="1">

| Parameter | Lab-invariant | Enantio-sensitive? | Dichroic? |
|---|---|---|---|
| $$\sigma_{\text{cross}}$$ | total yield | no | no |
| $$\beta$$ | $$(\unitvec{k}\cdot\unitvec{\Xi})^2$$ | no | no |
| $$A$$ | $$\unitvec{s}\cdot\unitvec{\Xi}$$ | no | **yes** |
| $$\eta$$ | $$(\unitvec{\Xi}\cdot\unitvec{s}\times\unitvec{k})(\unitvec{k}\cdot\unitvec{\Xi})$$ | no | no |
| $$\gamma$$ | $$(\unitvec{k}\cdot\unitvec{s})(\unitvec{k}\cdot\unitvec{\Xi})$$ and $$(\unitvec{s}\cdot\unitvec{\Xi})$$ | no | **yes** |
| $$D$$ | $$\unitvec{k}\cdot\unitvec{\Xi}$$ | **yes** | **yes** |
| $$C$$ | $$\unitvec{\Xi}\cdot\unitvec{s}\times\unitvec{k}$$ | **yes** | **yes** |
| $$B_1$$ | $$\unitvec{k}\cdot\unitvec{s}$$ | **yes** | no |
| $$B_2$$ | $$(\unitvec{k}\cdot\unitvec{\Xi})(\unitvec{s}\cdot\unitvec{\Xi})$$ | **yes** | no |
| $$B_3$$ | $$(\unitvec{k}\cdot\unitvec{\Xi})^2(\unitvec{k}\cdot\unitvec{s})$$ | **yes** | no |

</div>

<!-- This is the origin of the statements that $$\{\beta, A, \eta, \gamma\}$$ are non-zero for both atoms and molecules, that $$\{D,C,B_1,B_2,B_3\}$$ are non-zero only for chiral molecules, and that $$\{A,\gamma,D,C\}$$ vanish for linearly polarized light. The explicit form of the atomic parameters is given in Ref. {% cite cherepkov1981theory --file references --style american-physics-society %}.  -->
Cherepkov and colleagues have also calculated spin polarization in various atoms, shedding light on the dynamical origin of $$\{A,\gamma\}$$, and observed excellent agreement with experiments; see the book chapter {% cite book1983advances --file references --style american-physics-society %} and Refs. {% cite chandra1989photoelectron chandra1989photoelectronTd cherepkov1991comment schonhense1984spin heinzmann1981spin --file references --style american-physics-society %}.

<!-- > Symmetry tells us **which** parameters are allowed. It does not tell us **how large** they are. That requires the dynamics, i.e. the molecule's actual response. -->

</div>

</details>


<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Photoionization parameters:</summary>

<div markdown="1" style="border: 1px solid var(--global-divider-color); border-left: 4px solid var(--global-theme-color); border-radius: 6px; background-color: var(--global-card-bg-color); padding: 0.8rem 1.2rem; margin: 1rem 0;">

The standard procedure to calculate the ten parameters is to perform a partial-wave expansion of the outgoing electron, labeled by the angular momentum $$\ell$$ and its projection $$m$$, and by the spin projection $$\mu=\pm1/2$$. The ten parameters are fixed by amplitudes $$A_{L,M_L,S,M_S}$$, where $$L$$ is the angular rank in the direction of the electron and $$S\in\{0,1\}$$ the rank in spin space (rank 0: no spin dependence, rank 1: net spin polarization).

<div style="display:flex; flex-wrap:wrap; gap:1.5rem 2rem; align-items:center; overflow-x:auto;" markdown="1">
<div style="flex:2 1 16rem; min-width:0;" markdown="1">
$$
\begin{aligned}
\sigma_{\text{cross}} &= 2\,A_{0,0,0,0}\\[1.2ex]
\beta &= -\sqrt{5}\,\frac{A_{2,0,0,0}}{A_{0,0,0,0}}\\[1.2ex]
A &= \sqrt{3}\,\frac{A_{0,0,1,0}}{A_{0,0,0,0}}\\[1.2ex]
\eta &= i\frac{3\sqrt{5}}{2}\,\frac{A_{2,-1,1,1}-A_{2,1,1,-1}}{A_{0,0,0,0}}\\[1.2ex]
\gamma &= -\sqrt{15}\,\frac{A_{2,0,1,0}}{A_{0,0,0,0}}
\end{aligned}
$$
</div>
<div style="flex:3 1 20rem; min-width:0;" markdown="1">
$$
\begin{aligned}
D &= \sqrt{3}\,\frac{A_{1,0,0,0}}{A_{0,0,0,0}}\\[1.2ex]
C &= -i\frac{3}{2}\,\frac{A_{1,-1,1,1}-A_{1,1,1,-1}}{A_{0,0,0,0}}\\[1.2ex]
B_1 &= -\frac{3}{2}\left[\frac{(A_{1,-1,1,1}+A_{1,1,1,-1})+\sqrt{\tfrac{7}{3}}\,A_{3,0,1,0}}{A_{0,0,0,0}}\right]\\[1.2ex]
B_2 &= \frac{3A_{1,0,1,0}+\tfrac{3}{2}(A_{1,-1,1,1}+A_{1,1,1,-1})-\sqrt{21}\,A_{3,0,1,0}}{A_{0,0,0,0}}\\[1.2ex]
B_3 &= \frac{5\sqrt{21}}{2}\,\frac{A_{3,0,1,0}}{A_{0,0,0,0}}
\end{aligned}
$$
</div>
</div>

The full expression for $$A_{L,M_L,S,M_S}$$ is
$$
\begin{equation}
\begin{aligned}
A_{L,M_L,S,M_S} ={}& \frac{4\pi\sqrt{2\pi}}{3}\,|E_\omega^L|^{2}\sum(-1)^{m_2'+\xi'-\xi+\mu_2'-1/2}(2J+1)
 \sqrt{\frac{(2\ell_1+1)(2\ell_2+1)(2L+1)}{4\pi}}\\
&\times \tj{\ell_2}{\ell_1}{L}{0}{0}{0}\,
        \tj{\ell_2}{\ell_1}{L}{m_2'}{-m_1'}{M_L'}\,
        \tj{1}{1}{J}{\xi''}{-\xi'}{-M_J'}\,
        \tj{1}{1}{J}{\xi}{-\xi}{0}\\
&\times \tj{\tfrac12}{\tfrac12}{S}{\mu_2'}{-\mu_1'}{M_S'}\,
        \tj{L}{S}{J}{M_L'}{M_S'}{M_J'}\,
        \tj{L}{S}{J}{-M_L}{-M_S}{0}\,
        \big(D_{\xi'}^{\ell_1,m_1',\mu_1'}\big)^{*}D_{\xi''}^{\ell_2,m_2',\mu_2'},
\end{aligned}
\end{equation}
$$
where, $$D_{\xi'}^{\ell,m',\mu'} = \langle I \varphi_{I,\ell,m',\mu'}^{(-)} \vert rY_{\xi'} \vert \psi_i \rangle$$ is the reduced transition dipole matrix element. Here, $$I$$ denotes the ion channel, and $$\varphi_{I,\ell,m',\mu'}^{(-)}$$ is the partial wave expansion of the photoelectron with spin projection $$\mu=\pm1/2$$ along the molecular $$z$$-axis.

</div>

<!-- How to read this: each bracket $$\tj{\cdot}{\cdot}{\cdot}{\cdot}{\cdot}{\cdot}$$ is a Wigner 3j symbol, which is the bookkeeping device of angular momentum coupling. Roughly speaking,

- the symbols with $$\ell_1,\ell_2$$ combine two partial waves into an angular pattern of rank $$L$$ (the interference of two waves is what builds a directional pattern);
- the symbols with $$1,1,J$$ combine two dipole components into a rank-$$J$$ object (for the molecule) and the light polarization into a rank-$$J$$ object (for the lab);
- the symbol with $$\tfrac12,\tfrac12,S$$ does the same for the spin;
- the last two symbols with $$L,S,J$$ glue everything together, and the orientation average is what forces the molecular and the laboratory rank-$$J$$ objects to match. -->

> This framework is formally complete and gives a **kinematic** picture of spin-resolved photoionization. But it tells us nothing about *why* a given parameter is large or small, or why it flips sign between enantiomers. **The dynamical origin of the enantio-sensitivity remains hidden** behind a sum over partial waves, with dozens of angular-momentum symbols.

</details>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">The 3 pseudovectors:</summary>

<div markdown="1" style="border: 1px solid var(--global-divider-color); border-left: 4px solid var(--global-theme-color); border-radius: 6px; background-color: var(--global-card-bg-color); padding: 0.8rem 1.2rem; margin: 1rem 0;">

The main idea of our approach is to **not** invoke any partial-wave expansion of the scattering wavefunction $$\Psi_{I,\fullvec{k}^M,\mu^M}^{(-)}$$. Instead we work directly with the spin-resolved transition dipole
$$
\begin{align}
\fullvec{D}_{\fullvec{k}^M,\mu^M}^M = \langle I \Psi_{I,\fullvec{k}^M,\mu^M}^{(-)} \vert \fullvec{d}^M \vert \psi_i \rangle .
\end{align}
$$
For brevity, we will drop the superscript 'M' and only keep the superscript 'L' in the succeeding expressions. Quantities without any superscript are implied to be defined in the molecular frame. 
<!-- , $$\fullvec{D}_{\fullvec{k},\mu}$$ is a **complex vector with three components**, one for each axis $$x,y,z$$. Its meaning is simple: it is the molecule's answer to the question *"if I want to release an electron with momentum $$\fullvec{k}$$ and spin $$\mu$$, how well does light polarized along each axis do the job?"* If the light has polarization vector $$\fullvec{E}$$, the amplitude to ionize is $$\fullvec{E}\cdot\fullvec{D}_{\fullvec{k},\mu}$$. -->

Using perturbation theory, the full spinor electron wave-function at the end of the ionizing pulse for one-photon ionization is
$$
\begin{equation}		
    |\psi\rangle=|\psi_{o}\rangle+
		\sum_{I,\mu^L}
		%\int\mathrm{d}k
		\int\mathrm{d}\Theta_k\, c_{I,\fullvec{k},\mu^L}
		|I\Psi_{I,\fullvec{k}^M,\mu^L}^{(-)}\rangle , %|\chi_{\mu^M}\rangle ,
    \label{eq:psi}
\end{equation}
$$
$$
\begin{equation}
    c_{I,\fullvec{k},\mu^L} =
    i\left( \fullvec{D}_{I,\fullvec{k},\mu^L}^L\cdot\fullvec{E}^L \right) = i \sum_{\mu} \mathscr{D}^{1/2*}_{\mu^L,\mu} \left( \fullvec{D}_{I,\fullvec{k},\mu}^L\cdot\fullvec{E}^L \right),
\end{equation}
$$
$$
\begin{equation}
\fullvec{D}_{I,\fullvec{k},\mu}^L=\langle I\Psi_{I,\fullvec{k},\mu}^{(-)}|\fullvec{d}^L|\psi_0\rangle
\end{equation}
$$
wherein, we rotated the photoelectron's spin function from the molecular to laboratory frame frame via the Wigner D-matrix $$ \mathscr{D}^{1/2*}_{\mu^L,\mu} $$. The photoionization yield $$W^L(\unitvec{k}^L,\unitvec{s}^L)$$ is then obtained by taking the average of the spin-projection operator $$\mathbb{\unitvec{P}}_{\unitvec{s}^{L}}$$ and averaging over all molecular orientation $$\rho$$: 
$$
\begin{align}
W(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L) = \int d\rho \sum_{\mu,\nu} \left( \fullvec{D}_{I,\fullvec{k},\nu}^L\cdot\fullvec{E}^L \right) \left(\dfrac{\delta_{\nu,\mu}+\boldsymbol{\hat{s}}^{L}\cdot\boldsymbol{\hat{\sigma}}_{\nu,\mu}^{L}}{2}\right) \left( \fullvec{D}_{I,\fullvec{k},\mu}^{L*}\cdot\fullvec{E}^{L*} \right) 
\end{align}
$$
In essence the factor 
$$
\begin{equation}
	\left(\dfrac{\delta_{\nu,\mu}+\boldsymbol{\hat{s}}^{L}\cdot\boldsymbol{\hat{\sigma}}_{\nu,\mu}^{L}}{2}\right) = \sum_{\mu^L,\nu^L} \mathscr{D}_{\nu^{L},\nu}^{1/2*}\left(\dfrac{\mathbb{I}+\boldsymbol{\hat{s}}^{L}\cdot\boldsymbol{\hat{\sigma}}^{L}}{2}\right)\mathscr{D}_{\mu^{L},\mu}^{1/2}
\end{equation}
$$
rotates the photoelectron spin from molecular z-axis to laboratory z-axis then projects it to the arbitrary spin-detection axis $$\boldsymbol{\hat{s}}^{L}$$.

Separating the dichroic and non-dichroic components of $$W(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L)$$, we then obtain
$$
\begin{equation}
W(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L) = W_{0}(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L) + W_{\xi}(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L) = \sum A_{L,M_L,L_S,M_S} Y_{L,M_L}(\unitvec{k}^L) Y_{L_S,M_S}(\unitvec{s}^L)
\label{eq:yield}
\end{equation}
$$  
$$
\begin{align}
W_{0}(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L) = \dfrac{|E_\omega^L|^2}{4} \sum_{\mu,\nu} \int d\rho & \left[ \left( \fullvec{D}_{I,\fullvec{k},\mu}^{L*}\cdot\unitvec{x}^L\right)\left( \fullvec{D}_{I,\fullvec{k},\nu}^{L} \cdot \unitvec{x}^L \right) + \left( \fullvec{D}_{I,\fullvec{k},\mu}^{L*}\cdot\unitvec{y}^L\right)\left( \fullvec{D}_{I,\fullvec{k},\nu}^{L} \cdot \unitvec{y}^L \right) \right] \nonumber \\
&\left(\delta_{\nu,\mu}+\boldsymbol{\hat{s}}^{L}\cdot\boldsymbol{\hat{\sigma}}_{\nu,\mu}^{L}\right)
\end{align}
$$
$$
\begin{equation}
W_{\xi}(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L) = \dfrac{|E_\omega^L|^2}{4} \sum_{\mu,\nu} \int d\rho \left[ \left( i \fullvec{D}_{I,\fullvec{k},\mu}^{L*}\times \fullvec{D}_{I,\fullvec{k},\nu}^{L}\right) \cdot \unitvec{\Xi}^L \right] \left(\delta_{\nu,\mu}+\boldsymbol{\hat{s}}^{L}\cdot\boldsymbol{\hat{\sigma}}_{\nu,\mu}^{L}\right)
\end{equation}
$$
where, $$\unitvec{\Xi}^L=-i\fullvec{E}^{L*}\times\fullvec{E}^L=\xi\unitvec{z}^L$$. The right-hand side of Eq. \eqref{eq:yield} is the multipolar expansion of the yield. The coefficients $$A_{L,M_L,L_S,M_S}$$ now encode any information about the molecule, through the transition dipoles $$\fullvec{D}_{I,\fullvec{k},\nu}$$ and ionizing field $$\fullvec{E}^L$$. 

Upon performing orientation averaging $$\int d\rho$$, and using the identities {% cite andrews1977three --file references --style american-physics-society %}:
$$
\begin{align}
\int d\rho\,(\fullvec{a}^L\!\cdot\fullvec{r}^L)(\fullvec{b}^L\!\cdot\fullvec{s}^L) &= \tfrac{1}{3}\,(\fullvec{a}^M\cdot\fullvec{b}^M)\,(\fullvec{r}^L\cdot\fullvec{s}^L),\\
\int d\rho\,(\fullvec{a}^L\!\cdot\fullvec{r}^L)(\fullvec{b}^L\!\cdot\fullvec{s}^L)(\fullvec{c}^L\!\cdot\fullvec{t}^L) &= \tfrac{1}{6}\,(\fullvec{a}^M\cdot\fullvec{b}^M\times\fullvec{c}^M)\,(\fullvec{r}^L\cdot\fullvec{s}^L\times\fullvec{t}^L).
\end{align}
$$
the coefficients $$A_{L,M_L,L_S,M_S}$$ will factorize into molecular and laboratory rotational invariants. By inspection, we find that the non-dichroic component, $$W_{0}(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L)$$ will have molecular invariants that involve dot products between the photoionization dipoles while the dichroic component $$W_{\xi}(\boldsymbol{\hat{k}}^L,\boldsymbol{\hat{s}}^L)$$ will have molecular invariants that involve cross products. From this, we introduce two pseudovectors from the photoionization dipoles in spin space and in real-space:
$$
\begin{align}
\left(\vec{\mathbb{B}}_{\fullvec{k}}\right)_{\mu,\nu} &= i\,\fullvec{D}^{*}_{\fullvec{k},\mu}\times\fullvec{D}_{\fullvec{k},\nu}
\end{align}
$$
$$
\begin{align}
\fullvec{S}_{\fullvec{k}} &= \sum_{\mu,\nu}\left(\fullvec{D}^{*}_{\fullvec{k},\mu}\cdot\fullvec{D}_{\fullvec{k},\nu}\right)\hat{\boldsymbol{\sigma}}_{\nu,\mu}
\end{align}
$$
The third vector that we can naturally introduce is the asymmetry vector
$$
\begin{align}
\left(\vec{\mathbb{K}}_{\fullvec{k}}\right)_{\mu,\nu} &= \fullvec{D}^{*}_{\fullvec{k},\mu}\left(\unitvec{k}\cdot\fullvec{D}_{\fullvec{k},\nu}\right).
\end{align}
$$ 

which corresponds to the remaining terms in coefficients $$A_{L,M_L,S,M_S}\neq 0$$ upon performing orientation averaging.

- **$$\vec{\mathbb{B}}_{\fullvec{k}}$$:** A complex vector $$\fullvec{D}=\fullvec{a}+i\fullvec{b}$$ traces out an ellipse, and $$i\fullvec{D}^{*}\times\fullvec{D}=-2\,\fullvec{a}\times\fullvec{b}$$ is the normal of that ellipse: it points along the axis about which the dipole "rotates", and vanishes when the dipole simply oscillates along a line. Circularly polarized light also rotates, so this is the quantity that decides which handedness of light ionizes the molecule better. This is why it appears only in $$W_\xi$$. It is a $$2\times 2$$ matrix in spin space: the diagonal entries are the spin-up and spin-down propensities, and the off-diagonal entries encode the coherence between them.

- **$$\fullvec{S}_{\fullvec{k}}$$:** Built from the dot product, it is the Bloch vector of the spin state of electrons emitted along $$\unitvec{k}$$ (the same object used for a two-level system): it points along their average spin.

- **$$\vec{\mathbb{K}}_{\fullvec{k}}$$:** It keeps only the part of the dipole along the emission direction, so it measures how the emission direction singles out a direction relative to the dipole. Its trace gives $$\sum_\mu \vert\unitvec{k}\cdot\fullvec{D}_{\fullvec{k},\mu}\vert^2$$, which is what sets the asymmetry parameter $$\beta$$.

Explicitly evaluating the coefficients $$A_{L,M_L,S,M_S}$$ by performing the orientation averaging, we obtain compact expressions for the photoionization parameters that highlights their dynamical origin:
<div class="dynamic-equations" style="display:flex; flex-wrap:nowrap; gap:1rem; align-items:flex-start; width:100%;">
<div style="flex:0 0 40%; min-width:0;font-size:0.95em;" markdown="1">
$$
\begin{aligned}
\sigma_{\text{cross}} &= \frac{1}{3} S_0 \left| \fullvec{E}^L \right|^2 \\[1.5ex]
\beta &= -\dfrac{1}{2} + \frac{3}{2S_0} \int d\Theta_k \, \text{Tr} \left( \unitvec{k} \cdot \vec{\mathbb{K}}_{\fullvec{k}} \right) \\[1.5ex]
A &= \dfrac{1}{2 S_0} \int d\Theta_k \, \text{Tr} \left( \unitvec{\sigma} \cdot \vec{\mathbb{B}}_{\fullvec{k}} \right) \\[1.5ex]
\eta &= \frac{3}{2S_0} \int d\Theta_k \, \text{Re}\left[ \unitvec{k} \cdot \text{Tr} \left( \unitvec{\sigma} \times \vec{\mathbb{K}}_{\fullvec{k}} \right) \right]
\end{aligned}
$$
</div>
<div style="flex:1 1 60%; min-width:0; font-size:0.95em;" markdown="1">
$$
\begin{aligned}
\gamma &= \frac{1}{2S_o} \int d\Theta_k \, \text{Tr} \left[ \left( \unitvec{k} \times \unitvec{\sigma} \right) \cdot \left( \unitvec{k} \times \vec{\mathbb{B}}_{\fullvec{k}} \right) - 2 \left( \unitvec{k} \cdot \unitvec{\sigma} \right) \left( \unitvec{k} \cdot \vec{\mathbb{B}}_{\fullvec{k}} \right) \right] \\[1.5ex]
D &= \dfrac{3}{2 S_0} \int d\Theta_k \left[ \unitvec{k} \cdot \text{Tr} \left( \vec{\mathbb{B}}_{\fullvec{k}} \right) \right] \\[1.5ex]
C &= \dfrac{3}{4 S_0} \int d\Theta_k \left[ \unitvec{k} \cdot \text{Tr} \left( \unitvec{\sigma} \times \vec{\mathbb{B}}_{\fullvec{k}} \right) \right] \\[1.5ex]
B_1 &= \dfrac{3}{4S_0} \int d\Theta_k \, \left\{ \left( \unitvec{k} \cdot \fullvec{S}_{\fullvec{k}} \right) + \text{Tr}\left[ \left(\unitvec{k}\cdot\unitvec{\sigma}\right) \left( \unitvec{k}\cdot\vec{\mathbb{K}}_{\fullvec{k}} \right) \right] \right\}
\end{aligned}
$$
</div>
</div>

<div style="width:100%; text-align:center;font-size:0.95em;" markdown="1">
$$
\begin{aligned}
B_2 &= -\dfrac{3}{2S_0} \int d\Theta_k \, \text{Tr} \left\{ \text{Re}\left[ \left( \unitvec{k} \times \unitvec{\sigma} \right) \cdot \left( \unitvec{k} \times \vec{\mathbb{K}} \right) \right] \right\} \\[1.5ex]
B_3 &= \dfrac{3}{4S_0} \int d\Theta_k \, \left\{ \left( \unitvec{k} \cdot \fullvec{S}_{\fullvec{k}} \right) + \text{Tr} \left\{ 2 \text{Re}\left[ \left( \unitvec{k} \times \unitvec{\sigma} \right) \cdot \left( \unitvec{k} \times \vec{\mathbb{K}} \right) \right] -3 \left(\unitvec{k}\cdot\unitvec{\sigma}\right) \left( \unitvec{k}\cdot\vec{\mathbb{K}}_{\fullvec{k}} \right) \right\} \right\}
\end{aligned}
$$
</div>
where the trace is performed in spin space, and
$$
S_0 =  \sum_{\mu} \int d\Theta_k \, \left| \fullvec{D}_{\fullvec{k},\mu} \right|^2
$$
denotes the total yield. From this, we find that:
- $$\vec{\mathbb{B}}_{\fullvec{k}}$$ drives $$\{A,\gamma,D,C\}$$, the **dichroic** parts of the yield $$W^L(\unitvec{k}^L,\unitvec{s}^L)$$. It therefore appears only for light with a fixed polarization plane, e.g. circularly and elliptically polarized light.
- $$\fullvec{S}_{\fullvec{k}}$$ and $$\vec{\mathbb{K}}_{\fullvec{k}}$$ drive the **non-dichroic** part, and are present for arbitrary light fields.
- $$\vec{\mathbb{B}}_{\fullvec{k}}$$ never appears together with $$\fullvec{S}_{\fullvec{k}}$$ or $$\vec{\mathbb{K}}_{\fullvec{k}}$$.

</div>

</details>



<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Physical picture:</summary>

<div markdown="1" style="border: 1px solid var(--global-divider-color); border-left: 4px solid var(--global-theme-color); border-radius: 6px; background-color: var(--global-card-bg-color); padding: 0.8rem 1.2rem; margin: 1rem 0;">

The three pseudovectors have a physical meaning:

| pseudovector | name | what it encodes |
|---|---|---|
| $$\vec{\mathbb{B}}_{\fullvec{k}}$$ | spin-resolved propensity field | which circular polarization the molecule prefers, for each emission direction and spin; the spin-space extension of the geometric propensity field of spinless systems {% cite ordonez2018generalized ordonez_propensity_2019 ordonez2022geometric ordonez2023geometric ordonez2026geometry roos2026geometry --file references --style american-physics-society %} |
| $$\fullvec{S}_{\fullvec{k}}$$ | photoionization Bloch vector | the spin polarization of the electrons emitted along $$\fullvec{k}$$; it is obtained by a partial trace over the spatial continuum states and degenerate ion channels, then orientation averaging |
| $$\vec{\mathbb{K}}_{\fullvec{k}}$$ | asymmetry pseudovector | how much the dipole points along the emission direction, which sets $$\beta$$ |

Two of them are **intrinsic** spin-resolved quantities, since they are determined by the spin-resolved transition dipoles alone. The third ingredient is **extrinsic**: it is the directional bias introduced by the well-defined direction of the light polarization, which is what the orientation average projects onto.


The dynamical origin of the enantio-sensitivity of the parameters $$\{ D, C, B_1, B_2, B_3 \}$$ is now physically transparent. For opposite enantiomers $$R$$ and $$S$$, the transition dipoles are related by $$\fullvec{D}_{\fullvec{k},\mu}^{(R)}=-\fullvec{D}_{-\fullvec{k},\mu}^{(S)}$$, which implies the following relations
$$
\begin{align}
\vec{\mathbb{B}}_{\fullvec{k}}^{(R)} = \vec{\mathbb{B}}_{-\fullvec{k}}^{(S)},\qquad
\fullvec{S}_{\fullvec{k}}^{(R)} = \fullvec{S}_{-\fullvec{k}}^{(S)},\qquad
\vec{\mathbb{K}}_{\fullvec{k}}^{(R)} = -\vec{\mathbb{K}}_{-\fullvec{k}}^{(S)}.
\end{align}
$$
To illustrate, consider the parameter $$C$$:
$$
\begin{align}
C^{(R)} =& \dfrac{3}{4 S_0} \int d\Theta_k \left[ \unitvec{k} \cdot \text{Tr} \left( \unitvec{\sigma} \times \vec{\mathbb{B}}_{-\fullvec{k}}^{(S)} \right) \right] \nonumber \\
=& -\dfrac{3}{4 S_0} \int d\Theta_k \left[ \unitvec{k} \cdot \text{Tr} \left( \unitvec{\sigma} \times \vec{\mathbb{B}}_{\fullvec{k}}^{(S)} \right) \right] =-C^{(S)}
\end{align}
$$
wherein we relabeled $$\fullvec{k}\to-\fullvec{k}$$ in the integral, and the factor $$\unitvec{k}$$ acquires a negative sign. This is exactly how a pseudoscalar behaves: it flips sign when we change enantiomer. Similarly, for the non-enantiosensitive parameter $$A$$,
$$
\begin{align}
A^{(R)} = \dfrac{1}{2 S_0} \int d\Theta_k \, \text{Tr} \left( \unitvec{\sigma} \cdot \vec{\mathbb{B}}_{-\fullvec{k}}^{(S)} \right) = A^{(S)} .
\end{align}
$$
There is no explicit $$\unitvec{k}$$ in front, so nothing flips sign.

We thus see that the strength of each enantio-sensitive parameter $$\{D,C,B_1,B_2,B_3\}$$ is the **flux, through the surface of the energy shell** $$d\unitvec{\Theta}_k=d\Theta_k\unitvec{k}$$, of an effective vector field built from $$\{\vec{\mathbb{B}}_{\fullvec{k}},\fullvec{S}_{\fullvec{k}},\vec{\mathbb{K}}_{\fullvec{k}}\}$$. This gives compact expressions and an intuitive picture of what determines the size of the spin- and enantio-sensitive observables.

</div>

</details>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Outlook:</summary>

<div markdown="1" style="border: 1px solid var(--global-divider-color); border-left: 4px solid var(--global-theme-color); border-radius: 6px; background-color: var(--global-card-bg-color); padding: 0.8rem 1.2rem; margin: 1rem 0;">

The approach can be readily generalized to photoexcitation, multiphoton processes, and arbitrary field polarizations. Regardless of the specific driving conditions, the resulting spin- and enantio-sensitive observables are still controlled by the same three pseudovectors, underscoring their universal role as the primary generators of chirality-induced spin asymmetries, and emphasizing their fundamental geometric origin and the universality of the mechanism identified here.

</div>

</details>


<details class="research-references-dropdown">
  <summary><strong>References</strong></summary>

  <div class="research-references">
    {% bibliography --file references --cited_in_order --style american-physics-society --group_by none --template bib_plain %}
  </div>
</details>

<script src="{{ '/assets/js/cite-merge.js' | relative_url }}"></script>
