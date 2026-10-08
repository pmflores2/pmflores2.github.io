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

We consider one-photon ionization of randomly oriented chiral molecules via circularly polarized light. The light field is described as  
$$
\begin{align}
\fullvec{E}^{L}=\frac{E_\omega^L}{\sqrt{2}}(\unitvec{x}^L+i\xi\unitvec{y}^L),
\end{align}
$$
where, $$\xi=\pm1$$ is a dichroic parameter characterizing the direction of rotation of the light polarization vector. The superscript 'L' will be used to denote quantities defined in the laboratory frame while quantities with superscript 'M' denotes the molecular frame quantities. Moreover, vectors definded in the molecular frame are rotated to the laboratory frame via the Euler rotaton matrix $$R_\rho$$, i.e., $$ \fullvec{A}^L = R_\rho \fullvec{A}^M $$. 

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

Upon ionization, the photoelectron is ejected in the direction of $$\unitvec{k}^L$$ with its spin measured parallel to $$\unitvec{s}^L$$. The general description for such a process has been previously considered by Cherepkov
{% cite cherepkov1983 --file references --style american-physics-society %}, and showed that the momentum- and spin-resolved photoionization yield $$ W^L(\unitvec{k}^L,\unitvec{s}^L) $$ can be fully characterized by ten independent parameters, i.e., 

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

where, $$\unitvec{\Xi}^L=\xi\unitvec{z}^L$$ is the direction of photon spin. The parameters $$\{\beta, A, \eta, \gamma \}$$ are non-zero for both atoms and molecules, and the explicit form for the atomic case are provided in Ref. {% cite cherepkov1981theory --file references --style american-physics-society %}. Meanwhile, the parameters $$\{D,C,B_1,B_2,B_3\}$$ are only non-zero for chiral molecules. Moreover, the contribution of the parameters $$\{ A, \gamma, D , C \}$$ vanishes for linearly polarized light. Cherepkov and colleagues have also calculated spin polarization in various atoms shedding light on  dynamical origins of coefficients $$\{A, \gamma\}$$  and observed excellent agreement of their calculations with the experiments; see book chapter for pertinent references {% cite book1983advances --file references --style american-physics-society %} as well as Refs. {% cite chandra1989photoelectron chandra1989photoelectronTd cherepkov1991comment schonhense1984spin heinzmann1981spin --file references --style american-physics-society %}.


The ten parameters in Eq. \eqref{eq:kinematic} are fixed by the amplitudes $$A_{L,M_L,S,M_S}$$:
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
which can be expressed in terms of the reduced transition dipole matrix element $$D_{\xi'}^{\ell,m',\mu'} = \langle I \varphi_{I,\ell,m',\mu'}^{(-)} | rY_{\xi'} | \psi_i \rangle$$:
<div style="overflow-x:auto;" markdown="1">
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
        \big(D_{\xi'}^{\ell_1,m_1',\mu_1'}\big)^{*}D_{\xi''}^{\ell_2,m_2',\mu_2'}
\end{aligned}
\end{equation}
$$
</div>
Here, $$I$$ denotes the ion channel, and $$\varphi_{I,\ell,m',\mu'}^{(-)}$$ is the partial wave expansion of the photoelectron with spin projection $$\mu=\pm 1/2$$ along the molecular $$z$$-axis. **While this framework is formally complete and provides a kinematic picture of spin-resolved photoionization, the dynamical properties and origin of the enantio-sensitive remain hidden.**

<p>
  We have found that the dynamical origin of these parameters arises from three pseudovectors, two of which are from intrinsic spin-resolved quantities which are quantified by the spin-resolved transition dipoles
  \(
  \fullvec{D}_{\fullvec{k}^M,\mu^M}^M
  = \langle I \Psi_{I,\fullvec{k}^M,\mu^M}^{(-)}
  | \fullvec{d}^M | \psi_o \rangle
  \),
  and the third is and extrinsic mechanism which is the directional bias that is introduced by the well-defined direction of light polarization. The main idea of the approach is to not invoke any partial wave expansion on the scattering wavefunction \(\Psi_{I,\fullvec{k}^M,\mu^M}^{(-)}\) to obtain compact analytic expression that reveal how the geometry of the pseudovector fields maps onto the spin- and enantio-sensitive observables.  
</p>

These three pseudovectors are:
$$
\begin{align}
\left( \vec{\mathbb{B}}_{\fullvec{k}} \right)_{\mu,\nu} = i \fullvec{D}_{\fullvec{k},\mu}^{*} \times \fullvec{D}_{\fullvec{k},\nu},
\label{eq:SR-Bfield}
\end{align}
$$
$$
\begin{align}
\fullvec{S}_{\fullvec{k}} = \sum_{\mu,\nu} \left( \fullvec{D}_{\fullvec{k},\mu}^{*} \cdot \fullvec{D}_{\fullvec{k},\nu} \right) \unitvec{\sigma}_{\nu,\mu}
\label{eq:bloch}
\end{align}
$$
$$
\begin{align}
\left( \vec{\mathbb{K}}_{\fullvec{k}} \right)_{\mu,\nu} =  \fullvec{D}_{\fullvec{k},\mu}^{*} \left( \unitvec{k} \cdot \fullvec{D}_{\fullvec{k},\nu}  \right)
\label{eq:asymmetry}
\end{align}
$$
where, $$\unitvec{\sigma}$$ is the vector of Pauli spin matrices. Moreover, we dropped the superscript 'M' since all quantitites are defined in the molecular frame. This now allows us to express the photoionization parameters as multipolar moments of these pseudovectors with respect to the momentum $$\unitvec{k}^M$$ and spin operator $$\unitvec{\sigma}^M$$, i.e., 
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
where, the trace is performed in spin-space, and 
$$
S_0 =  \sum_{\mu} \int d\Theta_k \, \left| \fullvec{D}_{\fullvec{k},\mu} \right|^2
$$
denotes the total yield. Notice that $$\vec{\mathbb{B}}_{\fullvec{k}}$$ does not appear with either $$\fullvec{S}_{\fullvec{k}}$$ or $$\vec{\mathbb{K}}_{\fullvec{k}}$$. Additionally, $$\vec{\mathbb{B}}_{\fullvec{k}}$$ drives the parameters $$\{ A, \gamma, D, C \}$$ which are the dicrhoic parts of the yield $$W^L(\unitvec{k}^L,\unitvec{s}^L)$$, while $$\fullvec{S}_{\fullvec{k}}$$ and $$\vec{\mathbb{K}}_{\fullvec{k}}$$ drives the non-dicrhoic part [see Eq. \eqref{eq:kinematic}]. Thus, $$\vec{\mathbb{B}}_{\fullvec{k}}$$ will only appear for light fields with a fixed polarization plane, e.g. circular and elliptically polarized light, while $$\fullvec{S}_{\fullvec{k}}$$ and $$\vec{\mathbb{K}}_{\fullvec{k}}$$ for arbitrary light fields.

The pseudovector $$\vec{\mathbb{B}}_{\fullvec{k}}$$ is referred to as the spin-resolved propensity field as it encodes the photoionization propensity rules. It is a matrix in spin space, and serves as the natural extension of the geometric propensity field for spinless systems {% cite ordonez2018generalized ordonez_propensity_2019 ordonez2022geometric ordonez2023geometric ordonez2026geometry roos2026geometry --file references --style american-physics-society %}. The pseudovector $$\fullvec{S}_{\fullvec{k}}$$ is referred to as the momentum-resolved photoionization Bloch vector. Mathematically, it is obtained by performing a partial trace over the spatial contiuum states and degenerate ion channels, then performing orientation averaging over random molecular orientations. Last, we refer to the quantity $$\vec{\mathbb{K}}_{\fullvec{k}}$$ as an asymmetry pseudovector since it appears in the asymmetry parameter $$\beta$$ for momentum-resolved photoionization.  

The dynamical origin of the enantio-sensitivity of the parameters $$\{ D, C, B_1, B_2, B_3 \}$$ is now physically transparent. For opposite enantiomers $$R$$ and $$S$$, the transition dipoles are related as $$\fullvec{D}_{\fullvec{k},\mu}^{(R)}=-\fullvec{D}_{-\fullvec{k},\mu}^{(S)}$$ which implies the following relations: 
$$
\begin{align}
\vec{\mathbb{B}}_{\fullvec{k}}^{(R)} = \vec{\mathbb{B}}_{-\fullvec{k}}^{(S)}
\end{align}
$$
$$
\begin{align}
\fullvec{S}_{\fullvec{k}}^{(R)} = \fullvec{S}_{-\fullvec{k}}^{(S)}
\end{align}
$$
$$
\begin{align}
\vec{\mathbb{K}}_{\fullvec{k}}^{(R)} = -\vec{\mathbb{K}}_{-\fullvec{k}}^{(S)}
\end{align}
$$
To illustrate, consider the parameter $$C$$ as follows
$$
\begin{align}
C^{(R)} =& \dfrac{3}{4 S_0} \int d\Theta_k \left[ \unitvec{k} \cdot \text{Tr} \left(  \unitvec{\sigma} \times \vec{\mathbb{B}}_{-\fullvec{k}}^{(S)} \right) \right] \nonumber \\
=& -\dfrac{3}{4 S_0} \int d\Theta_k \left[ \unitvec{k} \cdot \text{Tr} \left(  \unitvec{\sigma} \times \vec{\mathbb{B}}_{\fullvec{k}}^{(S)} \right) \right] =-C^{(S)}
\end{align}
$$
which exactly behaves as a pseudoscalar that changes sign upon changing enantiomer. Similarly, consider the non-enantiosensitive parameter $$A$$, 
$$
\begin{align}
A^{(R)} = \dfrac{1}{2 S_0} \int d\Theta_k \, \text{Tr} \left( \unitvec{\sigma} \cdot \vec{\mathbb{B}}_{-\fullvec{k}}^{(S)} \right) = A^{(S)}
\end{align}
$$
Thus, the pseudoscalar that characterizes the strength of the enantio-sensitivity of the parameters $$\{ D, C, B_1, B_2, B_3 \}$$ is equivalent to the flux through the surface of the the energy shell, $$d\unitvec{\Theta}_k=d\Theta_k\unitvec{k}$$ by an effective vector field involving the pseudovectors $$\{ \vec{\mathbb{B}}_{\fullvec{k}} , \fullvec{S}_{\fullvec{k}}, \vec{\mathbb{K}}_{\fullvec{k}} \}$$. Our results provide compact expressions for these observables which provide an intuitive picture on what determines the strength of these spin- and enantio-sensitive observables. The approach can be readily generalized to photoexcitation, multiphoton processes, and arbitrary field polarizations. Regardless of the specific driving conditions, the resulting spin- and enantio-sensitive observables are still controlled by the same three pseudovectors, underscoring their universal role as the primary generators of chirality-induced spin asymmetries, emphasizing their fundamental geometric origin and the universality of the mechanism identified here.



<details class="research-references-dropdown">
  <summary><strong>References</strong></summary>

  <div class="research-references">
    {% bibliography --file references --cited_in_order --style american-physics-society --group_by none --template bib_plain %}
  </div>
</details>

<script src="{{ '/assets/js/cite-merge.js' | relative_url }}"></script>
