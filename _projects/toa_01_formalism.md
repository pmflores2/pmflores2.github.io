---
layout: page
# permalink: /chirality/compass/
title: Operator construction
description: general formalism
img: /assets/img/toa_formalism.png
importance: 1
category: time-of-arrival operators
---

<div class="paper-highlight" style="margin:1rem 0; padding:0.6rem 0.9rem; border:1px solid var(--global-divider-color, #dee2e6); border-left:4px solid var(--global-theme-color, #b509ac); border-radius:0.4rem; background:var(--global-card-bg-color, rgba(128,128,128,0.06)); font-size:0.85rem; line-height:1.4;">
  <div style="font-size:0.65rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--global-theme-color, #b509ac); font-weight:600; margin-bottom:0.15rem;">
   This post describes the papers
  </div>

  <div>
    <div style="font-size:0.95rem; font-weight:600; line-height:1.3; margin-bottom:0.2rem;">
      Shouldn’t there be an antithesis to quantization?
    </div>
    <div style="margin-bottom:0.15rem;">
      E. A. Galapon
    </div>
    <div>
      <em>J. Math. Phys.</em> <strong>45</strong>, 3180–3215 (2004)
      &nbsp;·&nbsp;
      <a href="https://pubs.aip.org/aip/jmp/article/45/8/3180/231303/Shouldn-t-there-be-an-antithesis-to-quantization" target="_blank" rel="noopener" style="color:var(--global-theme-color, #b509ac); font-weight:600;">Read the paper &rarr;</a>
    </div>
  </div>

  <div style="margin-top:0.55rem; padding-top:0.55rem; border-top:1px solid var(--global-divider-color, #dee2e6);">
    <div style="font-size:0.95rem; font-weight:600; line-height:1.3; margin-bottom:0.2rem;">
      Quantizations of the classical time of arrival and their dynamics
    </div>
    <div style="margin-bottom:0.15rem;">
      J. J. Magadan, E. A. Galapon
    </div>
    <div>
      <em>Ann. Phys.</em> <strong>397</strong>, 278-302 (2018)
      &nbsp;·&nbsp;
      <a href="https://www.sciencedirect.com/science/article/pii/S0003491618302173" target="_blank" rel="noopener" style="color:var(--global-theme-color, #b509ac); font-weight:600;">Read the paper &rarr;</a>
    </div>
  </div>

  <div style="margin-top:0.55rem; padding-top:0.55rem; border-top:1px solid var(--global-divider-color, #dee2e6);">
    <div style="font-size:0.95rem; font-weight:600; line-height:1.3; margin-bottom:0.2rem;">
      Quantum corrections to the Weyl quantization of the classical time of arrival
    </div>
    <div style="margin-bottom:0.15rem;">
      D.A. Pablico, E. A. Galapon
    </div>
    <div>
      <em>Eur. Phys. J. Plus</em> <strong>138</strong>, 153 (2023)
      &nbsp;·&nbsp;
      <a href="https://link.springer.com/article/10.1140/epjp/s13360-023-03774-z#article-info" target="_blank" rel="noopener" style="color:var(--global-theme-color, #b509ac); font-weight:600;">Read the paper &rarr;</a>
    </div>
  </div>

  <div style="margin-top:0.55rem; padding-top:0.55rem; border-top:1px solid var(--global-divider-color, #dee2e6);">
    <div style="font-size:0.95rem; font-weight:600; line-height:1.3; margin-bottom:0.2rem;">
      Instantaneous tunneling time within the theory of time-of-arrival operators
    </div>
    <div style="margin-bottom:0.15rem;">
      <u>P. C. M. Flores</u>, D.A. Pablico, E. A. Galapon
    </div>
    <div>
      <em>Phys. Rev. A</em> <strong>110</strong>, 062223 (2024)
      &nbsp;·&nbsp;
      <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.110.062223" target="_blank" rel="noopener" style="color:var(--global-theme-color, #b509ac); font-weight:600;">Read the paper &rarr;</a>
    </div>
  </div>

  <div style="margin-top:0.5rem; padding-top:0.5rem; border-top:1px solid var(--global-divider-color, #dee2e6);">
    <div style="font-size:0.65rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--global-theme-color, #b509ac); font-weight:600; margin-bottom:0.1rem;">
      Key insights
    </div>
    <ul style="margin:0; padding-left:1.1rem;">
      <li>Quantum mechanics treats time as a parameter, and Pauli's theorem was long taken to forbid a time operator conjugate to the Hamiltonian. Galapon disproved the theorem, which opens an avenue to explore a time-of-arrival (TOA) operator. However, it is non-trivial to construct the domain in which such an operator is self-adjoint, so in this work we do not impose self-adjointness.</li>
      <li>Such an operator is fixed by a single function, the <em>time kernel factor</em> \(T(q,q')\), so constructing a TOA-operator means constructing \(T(q,q')\).</li>
      <li>There are two routes. <strong>Canonical quantization</strong> of the classical TOA gives a whole family of operators, one for each Hermitian ordering rule, all obtained by deforming the Weyl-ordered one. <strong>Supraquantization</strong> instead imposes the time-energy commutation relation directly, which gives a partial differential equation for \(T(q,q')\) whose solution is the Weyl-ordered result plus quantum corrections that vanish for potentials of at most quadratic order.</li>
    </ul>
  </div>

</div>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Introduction</summary>

<div class="research-box" markdown="1">

Quantum mechanics treats time only as a parameter that governs the evolution of the system, in the same way that we use time in Newton's equations of motion to calculate the position of a particle after a specific interval has elapsed. This parametric treatment becomes problematic when we consider the time of arrival (TOA) of a particle. Classically, the TOA is obtained by inverting the particle's equation of motion. In the von Neumann formulation of quantum mechanics, however, observables are self-adjoint operators and time is not among them, so there is no canonical way to ask "when does a particle arrive?"

The demotion of time to a parameter is mainly due to Pauli's theorem, which states that there is no self-adjoint time operator that is canonically conjugate to a semi-bounded system Hamiltonian {% cite pauli1933handbuch --file references --style american-physics-society %}. However, Pauli's proof was only formal, i.e. without regard to the domains of the operators involved and to the validity of the operations leading to his conclusion. Galapon has shown that Pauli made some implicit assumptions and that these were inconsistent, which disproves the theorem {% cite galapon2002pauli galapon2002self --file references --style american-physics-society %}. This opens an avenue to still consider the TOA as an observable in standard quantum mechanics {% cite bender2012matrix galapon2006theory galapon2004shouldn galapon2009theory galapon2008quantum galapon2004confined galapon2005confined sombillo2012quantum galapon2005transition muga2000arrival egusquiza1999free galapon2009quantum flores2016synchronizing flores2019quantum galapon2018quantizations pablico2020quantum galapon2012only dias2017space ximenes2018comparing --file references --style american-physics-society %}.

"Canonically conjugate" means that the time operator $$\mathsf{\hat{T}}$$ and the Hamiltonian $$\mathsf{\hat{H}}$$ satisfy the time-energy canonical commutation relation (TE-CCR), $$[\mathsf{\hat{H}},\mathsf{\hat{T}}]=i\hbar$$. Since Pauli's theorem fails, such operators are not forbidden. The difficulty, however, is that it is non-trivial to construct the domain in which a given TOA-operator is self-adjoint. In our investigations we thereby do not impose self-adjointness. We construct the operator through its kernel on a space of test functions, where it is Hermitian, and leave the characterization of its self-adjoint domain aside.

<u>The goal of this post is to provide a general explainer on the construction of TOA-operators.</u> 

</div>

</details>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Notations </summary>

<div class="research-box" markdown="1">

| Symbol | Meaning |
|---|---|
| $$\mu$$ | particle mass |
| $$(q,\,p) \rightarrow (\mathsf{\hat{q}},\,\mathsf{\hat{p}})$$ | position and momentum (classical, or operator) |
| $$V,\,H,\,\mathsf{\hat{H}}$$ | potential, classical Hamiltonian $$p^2/2\mu+V(q)$$, Hamiltonian operator |
| $$\mathcal{T}_C(q,p)$$ | classical (first) TOA at the origin for a particle with initial position $$q$$ and momentum $$p$$; $$\mathcal{T}_C^{(0)}$$ for the free particle |
| $$\mathsf{\hat{T}}$$, $$\mathsf{\hat{T}^Q}$$, $$\mathsf{\hat{T}^S}$$, $$\mathsf{\hat{T}^W}$$ | TOA-operator in general; canonical quantization with ordering rule $$Q$$; supraquantized; Weyl-ordered |
| $$T(q,q')$$, $$\tilde{T}(\eta,\zeta)$$ | time kernel factor (TKF) in the variables $$(q,q')$$ and $$(\eta,\zeta)$$ |
| $$\eta,\,\zeta$$ | $$\eta=(q+q')/2$$, $$\zeta=q-q'$$ |
| $$\Phi\subset L^2(\mathbb{R})\subset\Phi^\times$$ | rigged Hilbert space (RHS) |
| $$\mathsf{\hat{K}}$$ | time-reversal operator (antiunitary) |
| $$v_n$$, $$a_n^{(m)}$$ | Taylor coefficients of $$V$$, and of $$\int_0^q ds\,(V(q)-V(s))^m$$ |
| $$\beta_k^{(n)}$$, $$\Theta^Q(x)=\sum_j\alpha_j^Q x^j$$ | ordering coefficients; ordering function |
| TKF, TE-CCR, RHS | time kernel factor, time-energy canonical commutation relation, rigged Hilbert space |

</div>

</details>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Operators in rigged Hilbert space</summary>

<div class="research-box" markdown="1">

The rigorous mathematical framework of quantum mechanics was developed by von Neumann using the Hilbert space $$\mathcal{H}$$ as its underlying linear topological space. Physical states are represented by unit rays $$\ket{\psi}$$ in $$\mathcal{H}$$, and observables by self-adjoint densely defined operators $$\mathsf{\hat{A}}$$ in $$\mathcal{H}$$. For a self-adjoint operator, the eigenvalues are the possible measurement outcomes and the spectrum may be discrete, continuous, or a combination of both. When constructing TOA-operators below we do not impose self-adjointness. We require only that the operator be Hermitian on the space $$\Phi$$ introduced below, since constructing the domain on which it is self-adjoint is a separate and non-trivial problem. 

Operators in quantum mechanics are generally unbounded, and a continuous spectrum corresponds to non-normalizable eigenfunctions, e.g. the position and momentum operators, whose eigenfunctions are the Dirac delta function $$\delta(q-q_o)$$ and the plane wave $$\exp(ipq/\hbar)/\sqrt{2\pi\hbar}$$, respectively. In order to deal with these non-square-integrable functions that lie outside the Hilbert space, one can use Dirac's bra-ket notation, which is made mathematically rigorous by the rigged Hilbert space (RHS) and the theory of distributions {% cite bohm1974rigged de2002rigged de2002rigged2 de2003rigged galapon2018quantizations --file references --style american-physics-society %}. Here we choose the fundamental space of the RHS to be the space $$\Phi$$ of infinitely differentiable complex-valued functions with compact support, so that the RHS is $$\Phi\subset L^2(\mathbb{R}) \subset \Phi^\times$$, where $$\Phi^\times$$ is the space of all continuous linear functionals on $$\Phi$$. The standard Hilbert space formulation is recovered by closing $$\Phi$$ with respect to the $$L^2(\mathbb{R})$$ metric.

In coordinate representation, an observable $$\mathsf{\hat{A}}$$ is a mapping from $$\Phi$$ to $$\Phi^\times$$ given by the formal integral operator

$$
\begin{equation}
	(\mathsf{\hat{A}}\varphi)(q) = \int_{-\infty}^\infty dq' \mel{q}{\mathsf{\hat{A}}}{q'} \varphi(q'),
	\label{eq:genintop}
\end{equation}
$$

where the kernel satisfies $$\mel{q}{\mathsf{\hat{A}}}{q'}= \mel{q'}{\mathsf{\hat{A}}}{q}^*$$ to ensure Hermiticity. The integral Eq. $$\eqref{eq:genintop}$$ is interpreted in the distributional sense, i.e. it is a functional on $$\Phi$$ in which the kernel $$\mel{q}{\mathsf{\hat{A}}}{q'}$$ is a distribution. As an example, the position and momentum operators are given by

$$
\begin{align}
	(\mathsf{\hat{q}}\varphi)(q) =& \int_{-\infty}^\infty dq' \delta(q-q') \varphi(q') = q\varphi(q), \\
	(\mathsf{\hat{p}}\varphi)(q) =& \int_{-\infty}^\infty dq' i\hbar \dfrac{d \delta(q-q')}{dq'} \varphi(q') = -i\hbar \dfrac{d \varphi(q)}{dq}.
\end{align}
$$

**The inverse momentum operator.** One more kernel will matter, because the TOA involves $$1/p$$, e.g., the free particle TOA is $$ \mu q /p$$. Since $$\mathsf{\hat{p}}$$ acts as $$-i\hbar\, d/dq$$, its inverse is an integration, and the symmetric choice, "half the integral from $$-\infty$$ and half from $$+\infty$$", is the one with kernel {% cite gelgeneralized --file references --style american-physics-society %}

$$
\begin{align}
    \langle q | \mathsf{\hat{p}}^{-k} | q' \rangle =& \dfrac{i^k}{2\hbar^k(k-1)!}(q-q')^{k-1}\text{sgn}(q-q'), \qquad k \in \mathbb{Z}^+.
    \label{eq:momentumkernel}
\end{align}
$$

For $$k=1$$ this reads $$(\mathsf{\hat{p}}^{-1}\varphi)(q)=\frac{i}{2\hbar}\int dq'\,\text{sgn}(q-q')\varphi(q')$$. One can check directly that $$\mathsf{\hat{p}}^{-1}\mathsf{\hat{p}}\varphi=\varphi$$, i.e., 
$$
\begin{align}
(\mathsf{\hat{p}}^{-1}\mathsf{\hat{p}}\varphi)(q) =& \int dq' \langle q \vert \mathsf{\hat{p}}^{-1} \vert q' \rangle \int dq'' \langle q' \vert \mathsf{\hat{p}} \vert q'' \rangle \langle q'' \vert \varphi \rangle \nonumber \\
=& \int dq' \dfrac{i}{2\hbar} \text{sgn}(q-q')   \int dq'' i\hbar \dfrac{d \delta(q'-q'')}{dq''} \varphi (q'') \nonumber \\
=& \dfrac{i}{2\hbar} (-i\hbar) \int dq' \text{sgn}(q-q') \dfrac{d\varphi(q')}{dq'} \nonumber \\
=& -\dfrac{i}{2\hbar} (-i\hbar) \int dq' \dfrac{d \text{sgn}(q-q') }{dq'} \varphi(q') \nonumber \\
=& -\dfrac{i}{2\hbar} (-i\hbar) \int dq' (-2) \delta(q-q') \varphi(q') = \varphi (q)
\end{align}
$$



Every term of a quantized TOA contains an odd negative power of $$\mathsf{\hat{p}}$$, so its kernel carries a factor $$\text{sgn}(q-q')$$ times a smooth function. This is the origin of the form of the TOA kernel below.

**The form of a TOA-operator.** In coordinate representation, TOA-operators have the general form

$$
\begin{align}
    (\mathsf{\hat{T}} \varphi) (q) =&  \int_{-\infty}^\infty dq'  \langle q \vert \mathsf{\hat{T}}  \vert q' \rangle \varphi(q') = \int_{-\infty}^\infty dq' \dfrac{\mu}{i\hbar} T(q,q') \text{sgn}(q-q') \varphi(q'),
    \label{eq:rhstoa}
\end{align}
$$

where $$T(q,q')$$ is referred to as the *time kernel factor* (TKF). Eq. $$\eqref{eq:rhstoa}$$ says that $$\mathsf{\hat{T}}$$ is a mapping from $$\Phi$$ to $$\Phi^\times$$, interpreted as a functional on $$\Phi$$ with a distributional kernel $$\langle q \vert \mathsf{\hat{T}} \vert q' \rangle$$. It is convenient to also use the variables $$\eta=(q+q')/2$$ and $$\zeta=q-q'$$ and to write $$T(q,q')=\tilde{T}(\eta,\zeta)$$. The TKF is required to satisfy the following physical properties.

<ol style="list-style-type: none; padding-left: 1.5rem;">

<li markdown="1" style="text-indent: -1.5rem;">
(i) **Hermiticity**: $$\langle q \vert \mathsf{\hat{T}} \vert q'\rangle = \langle q'\vert \mathsf{\hat{T}}\vert q\rangle^*$$, which gives $$T(q,q') = T(q',q)^*$$.
</li>

<li markdown="1" style="text-indent: -1.5rem;">
(ii) **Time-reversal symmetry**: with $$\mathsf{\hat{K}}$$ the antiunitary time-reversal operator, $$\mathsf{\hat{K}} \mathsf{\hat{T}} \mathsf{\hat{K}}^{-1} = -\mathsf{\hat{T}}$$ (running the clock backwards flips the sign of the arrival time). In coordinate representation $$\mathsf{\hat{K}}$$ is complex conjugation, so $$\langle q|\mathsf{\hat{T}}|q'\rangle^* = -\langle q|\mathsf{\hat{T}}|q'\rangle$$: the kernel is purely imaginary and $$T(q,q')$$ is real. Together with (i), $$T(q,q')=T(q',q)$$ is real and symmetric, i.e. $$\tilde{T}(\eta,\zeta)$$ is real and even in $$\zeta$$.
</li>

<li markdown="1" style="text-indent: -1.5rem;">
(iii) **Quantum-classical correspondence**, established through the Weyl-Wigner transform {% cite galapon2004shouldn pablico2022quantum --file references --style american-physics-society %}: the operator must reduce to the classical TOA $$\mathcal{T}_C(q,p)$$ as $$\hbar\rightarrow 0$$,

$$
\begin{align}
\mathcal{T}_C(q,p) = \lim_{\hbar\rightarrow 0} \int_{-\infty}^\infty d\nu  \left\langle q + \frac{\nu}{2} \right| \mathsf{\hat{T}}  \left| q- \frac{\nu}{2} \right\rangle e^{-i\nu p/ \hbar}.
\end{align}
$$
</li>

<li markdown="1" style="text-indent: -1.5rem;">
(iv) **Conjugacy (TE-CCR)**, the property singled out by Pauli's theorem: for every $$\chi$$ and $$\varphi$$ in $$\Phi$$,

$$
\begin{align}
\langle \chi | [ \mathsf{\hat{H}} , \mathsf{\hat{T}} ] | \varphi \rangle = i\hbar \langle \chi | \varphi \rangle .
\label{eq:teccr}
\end{align}
$$

This one is special: properties (i)-(iii) are imposed on every TOA-operator, while (iv) turns out to be impossible to satisfy by quantizing the classical TOA in general, as we will see in Sec. 4.
</li>

</ol>

The problem of constructing a TOA-operator thus translates to constructing the corresponding TKF $$T(q,q')$$.

</div>

</details>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">TOA-operators for the free case</summary>

<div class="research-box" markdown="1">

Let us first consider the TOA of a free particle, whose measurement scheme is illustrated in Fig. <a href="#fig:measurement_scheme">1</a>. A wavepacket $$\psi_o(q)$$ is prepared between two detectors, $$D_T$$ and $$D_R$$, and is launched at $$t=0$$. The detector $$D_T$$ is located at the origin, which is the arrival point of the particle. Whenever the particle arrives at $$D_T$$, this triggers the detector to record the TOA. Meanwhile, the detector $$D_R$$ is located far to the left of $$D_T$$ and does not record any data even if the particle arrives and triggers it. This measurement scheme was prescribed in Refs. {% cite galapon2012only sombillo2014quantum sombillo2018barrier pablico2020quantum --file references --style american-physics-society %} to avoid altering the propagation of $$\psi_o(q)$$ and to provide an indirect but accurately realistic way of obtaining the TOA of the particle at the origin. After repeating the TOA measurement many times, one obtains a TOA distribution at $$D_T$$ and can ask: does this distribution have an underlying ideal distribution generated by a corresponding TOA-operator? The constructions below produce candidate operators for that question; comparing their predicted distributions with the detector scheme is the subject of the papers listed above.

<div id="fig:measurement_scheme" style="text-align:center;">
{% include figure.liquid
   path="assets/img/toa/free-particle.png"
   class="img-fluid rounded"
   width="30%"
   max-width="26rem"
   zoomable=true
   alt="Time-of-arrival measurement scheme for a free particle: a wavepacket prepared between a reference detector D_R on the far left and the triggering detector D_T at the origin"
   caption="<strong>Figure 1.</strong> Time-of-arrival measurement scheme for a free particle." %}
</div>

A quantum observable is traditionally obtained by quantizing the underlying classical observable. For example, the angular momentum operator $$\mathsf{\hat{L}} = \mathsf{\hat{r}} \times \mathsf{\hat{p}}$$ is obtained from the classical $$L = \vec{r} \times \vec{p}$$ by promoting position and momentum to operators. Similarly, it is postulated that the TOA-operator is obtained from the quantization of the classical free TOA

$$
\begin{equation}
	\mathcal{T}_C^{(0)}(q,p) = -\mu \dfrac{q}{p},
	\label{eq:classFreeTOA}
\end{equation}
$$

where $$\mu$$ is the mass of the particle, and $$q$$ and $$p$$ are the initial position and momentum. The earliest detailed investigation of a free TOA-operator is due to Aharonov and Bohm {% cite aharonov1961time --file references --style american-physics-society %}, who considered the symmetric quantization of Eq. $$\eqref{eq:classFreeTOA}$$,

$$
\begin{equation}
	\mathsf{\hat{T}_{AB}} = -\mu \dfrac{\mathsf{\hat{q}}\mathsf{\hat{p}}^{-1} + \mathsf{\hat{p}}^{-1} \mathsf{\hat{q}}}{2}.
\end{equation}
$$

The Aharonov-Bohm operator is Hermitian but not self-adjoint; it is a maximally symmetric operator {% cite muga1998space --file references --style american-physics-society %}. Using Eq. $$\eqref{eq:momentumkernel}$$ with $$k=1$$, the kernel of $$\mathsf{\hat{q}}\mathsf{\hat{p}}^{-1}$$ is $$q\,\frac{i}{2\hbar}\text{sgn}(q-q')$$ and that of $$\mathsf{\hat{p}}^{-1}\mathsf{\hat{q}}$$ is $$\frac{i}{2\hbar}\text{sgn}(q-q')\,q'$$, so the RHS extension of $$\mathsf{\hat{T}_{AB}}$$ is

$$
\begin{align}
	(\mathsf{\hat{T}_{AB}}\varphi)(q) = \dfrac{1}{4}\int_{-\infty}^\infty dq' \dfrac{\mu}{i\hbar} (q+q') \text{sgn}(q-q') \varphi(q'),
\end{align}
$$

with TKF $$T(q,q') = (q+q')/4$$, i.e. $$\tilde{T}(\eta,\zeta)=\eta/2$$.

**Check: correspondence.** Property (iii) can be verified directly. Setting $$q\to q+\nu/2$$ and $$q'\to q-\nu/2$$ gives $$\eta=q$$ and $$\zeta=\nu$$, so

$$
\begin{align}
\int_{-\infty}^\infty d\nu\, \langle q+\tfrac{\nu}{2}|\mathsf{\hat{T}_{AB}}|q-\tfrac{\nu}{2}\rangle e^{-i\nu p/\hbar}
= \frac{\mu q}{2i\hbar}\int_{-\infty}^\infty d\nu\, \text{sgn}(\nu)\, e^{-i\nu p/\hbar}
= \frac{\mu q}{2i\hbar}\left(-\frac{2i\hbar}{p}\right) = -\mu\frac{q}{p},
\end{align}
$$

where the integral is understood in the distributional (principal value) sense. This is exactly the classical free TOA, Eq. $$\eqref{eq:classFreeTOA}$$. For the free particle the result is even independent of $$\hbar$$.

</div>

</details>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">TOA-operators for the interacting case</summary>

<div class="research-box" markdown="1">

We can generalize the measurement scheme of Fig. <a href="#fig:measurement_scheme">1</a> to the presence of an interaction potential $$V(q)$$, with Hamiltonian $$H(q,p)=\dfrac{p^2}{2\mu}+V(q)$$ and the arrival point at the origin, $$q=0$$. The classical TOA is obtained by inverting Hamilton's equations of motion,

$$
\begin{equation}
	\mathcal{T}_C(q,p) = -\text{sgn}(p)\sqrt{\frac{\mu}{2}}\int_{0}^{q} \frac{ds}{\sqrt{H(q,p)-V(s)}}.
	\label{eq:classTOA}
\end{equation}
$$

For $$V=0$$ this reduces to Eq. $$\eqref{eq:classFreeTOA}$$. In general, Eq. $$\eqref{eq:classTOA}$$ may be complex and/or multiple-valued. This is easily demonstrated by a particle in a uniform gravitational field, $$V(q)=\mu g q$$ with $$q$$ pointing upward, that is projected upward. If the arrival point is below the classical turning point, the particle crosses it twice: the first (second) time while going up (down). If the arrival point is above the classical turning point, $$H-V(s)$$ becomes negative on part of the integration path and the classical TOA is complex-valued, which signals that the particle never reaches the desired location.

</div>

<details class="research-subsection" markdown="1" style="margin-left: 1.5rem;">
<summary class="h5 research-subheading" style="cursor:pointer;">Canonical quantization of the classical TOA</summary>

<div class="research-box" markdown="1">

Quantization is a linear mapping that associates a Hermitian operator with a real-valued function, e.g. the classical position and momentum observables $$q \rightarrow \mathsf{\hat{q}}$$ and $$p \rightarrow \mathsf{\hat{p}}$$. However, the non-commutativity $$[\mathsf{\hat{q}},\mathsf{\hat{p}}]=i\hbar$$ introduces ambiguities in the ordering of the quantized observable. There are infinitely many quantum observables corresponding to the same classical one, and there is no consensus on a "preferred" ordering rule for the transition from classical to quantum mechanics. The usual method is therefore to pick an ordering rule and invoke the correspondence principle, so that the operator reduces to the classical expression as $$\hbar\rightarrow 0$$.

Quantizing Eq. $$\eqref{eq:classTOA}$$ poses two problems.

1. **It may be ill-defined**, because the classical TOA may be complex and/or multiple-valued. It was argued in Ref. {% cite galapon2018quantizations --file references --style american-physics-society %} that only the *first* TOA is meaningful to quantize, because a detector collapses the wavefunction at the first instance of arrival, and that the TOA of a quantum particle is always real-valued because it can tunnel through the classically forbidden region.
2. **It need not be conjugate to the Hamiltonian**, because no quantization exists such that, for all classical observables $$f$$ and $$g$$, the Dirac condition holds,

$$
\begin{equation}
	\{f,g\} \mapsto [\mathsf{\hat{Q}}_f,\mathsf{\hat{Q}}_g] =i\hbar \mathsf{\hat{Q}}_{\{f,g\}},
\end{equation}
$$

where $$\{f,g\}$$ denotes the Poisson bracket. We come back to this problem in Sec. 4.2.

To address the first problem we quantize only the first TOA. This is done by expanding $$\mathcal{T}_C(q,p)$$ around the free TOA so that it is single and real-valued {% cite galapon2018quantizations --file references --style american-physics-society %},

$$
\begin{align}
\mathcal{T}_C(q,p) =& \sum_{m=0}^\infty  \dfrac{(2m-1)!!}{m! }\dfrac{(-\mu)^{m+1} }{p^{2m+1}}  \int_0^q ds\, (V(q)-V(s))^m,	\nonumber \\
=& \sum_{m=0}^\infty  \dfrac{(2m-1)!! (-\mu)^{m+1}}{m! }  \sum_{n=1}^\infty a_n^{(m)} q^n p^{-(2m+1)},
\label{eq:ltoa2}
\end{align}
$$

with $$(-1)!!=1$$. The $$m=0$$ term is exactly the free TOA, and the terms with $$m\geq 1$$ are corrections due to the potential. The second line assumes that $$V(q)$$ is analytic at the origin, $$V(q)=\sum_{n=0}^\infty v_n q^n$$, so that $$\int_0^q ds\,(V(q)-V(s))^m=\sum_{n=1}^\infty a_n^{(m)}q^n$$ defines the coefficients $$a_n^{(m)}$$. Notice that the infinite series converges absolutely and uniformly to the classical arrival time only when $$\vert V(q)-V(s)\vert <p^2/2\mu$$ along the path. Otherwise the series diverges, implying non-arrival at the arrival point. This is particularly important for cases without classical counterparts, such as quantum tunneling, where the diverging expansion of $$\mathcal{T}_C(q,p)$$ reflects the non-arrival of a classical particle at the chosen arrival point.

The classical observables $$(q,p)$$ are then promoted to operators $$(\mathsf{\hat{q}}, \mathsf{\hat{p}})$$, which leads to the ordering ambiguity,

$$
\begin{align}
    \mathcal{T}_C(q,p) \rightarrow \mathsf{\hat{T}^{Q}} =& \sum_{m=0}^\infty  \dfrac{(2m-1)!! (-\mu)^{m+1}}{m! }  \sum_{n=1}^\infty a_n^{(m)} \mathsf{\hat{t}}^{Q}_{n,-2m-1},
    \label{eq:toaexpansion}
\end{align}
$$

where $$\mathsf{\hat{t}}^{Q}_{n,-2m-1}$$ denotes a specific ordering of the monomial $$q^np^{-(2m+1)}$$. Explicitly, the quantization is done by generalizing the Bender-Dunne basis operators {% cite bender1989exact bender1989integration bender2012matrix --file references --style american-physics-society %},

$$
\begin{equation}
	\mathsf{\hat{t}}^{Q}_{n,-2m-1} = \dfrac{\sum_{k=0}^n \beta_k^{(n)} \mathsf{\hat{q}}^k\mathsf{\hat{p}}^{-2m-1}\mathsf{\hat{q}}^{n-k}}{\sum_{k=0}^n \beta_k^{(n)}},
	\label{eq:BDbasis}
\end{equation}
$$

in which $$\beta_k^{(n)}=\beta_{n-k}^{(n)*}$$ ensures that the ordering is Hermitian, e.g.,

$$
\begin{align}
	\beta_k^{(n)} =
	\begin{cases}
		\dfrac{n!}{k!(n-k)!} \quad &, \quad \text{Weyl}, \\
		1 \quad &, \quad \text{Born-Jordan}, \\
		\delta_{k,0} + \delta_{k,n} \quad &, \quad \text{simple-symmetric}.
	\end{cases}
	\label{eq:coeff}
\end{align}
$$

This opens a new problem: how do we exhaust all possible Hermitian ordering rules and obtain the corresponding TKF $$T^Q(q,q')$$?

<div id="fig:transform" style="text-align:center;">
{% include figure.liquid
   path="assets/img/toa/transform.jpg"
   class="img-fluid rounded"
   width="30%"
   max-width="26rem"
   zoomable=true
   alt="Diagram of two routes from the classical TOA to the quantized operator for a given ordering rule: a direct route, and an indirect route through the Weyl-ordered operator and the ordering function"
   caption="<strong>Figure 2.</strong> Visual representation of obtaining the operator \(\mathsf{\hat{T}^Q}\) through various ordering rules. Red arrows indicate the ‘direct route’ while the blue arrows indicate the ‘indirect route’ via the ordering function \(\Theta(x)\) to facilitate the transformation from Weyl to all other ordering rules." %}
</div>

It was shown in Ref. {% cite domingo2015generalized --file references --style american-physics-society %} that every known ordering rule can be associated with a real-valued function $$\Theta^Q(x)= \sum_j \alpha_j^Q x^j$$ with $$\Theta^Q(0)=1$$ (the Weyl ordering corresponds to $$\Theta=1$$, while Born-Jordan and simple-symmetric ordering correspond to particular non-trivial functions). The ordering function gives rise to transformation equations from Weyl to all other ordering rules. Instead of exhausting all possible $$\beta_k^{(n)}$$, we can therefore use the Weyl-ordered Bender-Dunne basis operators and let $$\Theta^Q(x)$$ transform the Weyl-ordered TKF $$T^W(q,q')$$ into the TKF $$T^Q(q,q')$$ of any other ordering rule, see Fig. <a href="#fig:transform">2</a>. For $$\mathsf{\hat{t}}^{Q}_{n,-2m-1}$$ the transformation is {% cite domingothesis --file references --style american-physics-society %}

$$
\begin{equation}
\mathsf{\hat{t}}^{Q}_{n,-2m-1} = \sum_{j=0}^\infty \dfrac{\hbar^j \alpha_j^Q  \Gamma(-2m)\Gamma(n+1)}{\Gamma(-2m-j)\Gamma(n-j+1)} \mathsf{\hat{t}}^{W}_{n-j,-2m-1-j},
\label{eq:allordering}
\end{equation}
$$

$$
\begin{equation}
\mathsf{\hat{t}}^{W}_{N,-M} = \dfrac{1}{2^{N}} \sum_{k=0}^N \dfrac{N!}{(N-k)!k!} \mathsf{\hat{q}}^k \mathsf{\hat{p}}^{-M} \mathsf{\hat{q}}^{N-k}.
\label{eq:weyl}
\end{equation}
$$

Here the ratio $$\Gamma(-2m)/\Gamma(-2m-j)$$ of poles is understood as its limit, the product $$(-2m-1)(-2m-2)\cdots(-2m-j)$$, and the ratio $$\Gamma(n+1)/\Gamma(n-j+1)$$ vanishes for $$j>n$$, so the sum in Eq. $$\eqref{eq:allordering}$$ terminates at $$j=n$$.

Using Eqs. $$\eqref{eq:ltoa2}$$, $$\eqref{eq:allordering}$$, and $$\eqref{eq:weyl}$$, together with the kernel of the inverse momentum, Eq. $$\eqref{eq:momentumkernel}$$, the coordinate representation of any TOA-operator $$\mathsf{\hat{T}^Q}$$ admits the expansion

$$
\begin{align}
(\mathsf{\hat{T}^Q}\varphi)(q) =& \int_{-\infty}^\infty dq' \langle q | \mathsf{\hat{T}^Q} | q' \rangle \varphi(q'), \nonumber \\
=&  \dfrac{\mu}{2i\hbar} \int_{-\infty}^\infty dq' \varphi(q') \text{sgn}(q-q') \sum_{m=0}^\infty \dfrac{(2m-1)!!}{(2m)!m!}  \left( \dfrac{\mu}{\hbar^2} (q-q')^2 \right)^m \nonumber \\
&\times  \sum_{n=1}^\infty a_n^{(m)}  \sum_{j=0}^\infty \alpha_j^Q  (-i)^j (q-q')^j \dfrac{\Gamma(n+1)}{\Gamma(n-j+1)} \left(\dfrac{q+q'}{2}\right)^{n-j}.
\label{eq:toaexpansion2}
\end{align}
$$

A closed form follows from the variables $$\eta=(q+q')/2$$ and $$\zeta=q-q'$$, in which

$$
\begin{align}
	\dfrac{\Gamma(n+1)}{\Gamma(n-j+1)} \left(\dfrac{q+q'}{2}\right)^{n-j} = \dfrac{d^j \eta^n}{d\eta^j}.
\end{align}
$$

Performing the necessary calculations, we obtain

$$
\begin{align}
    (\mathsf{\hat{T}^Q}\varphi)(q) =& \int_{-\infty}^\infty dq' \dfrac{\mu}{i\hbar} \bigg[ \mathsf{\hat{\Theta}^Q}  \tilde{T}^W(\eta,\zeta) \bigg] \text{sgn}(q-q') \varphi(q') \label{eq:toaRHS},\\
    %
    \tilde{T}^W(\eta,\zeta) =&  \dfrac{1}{2} \int_0^\eta ds \, {_0}F_1\left[ ; 1; \dfrac{\mu}{2 \hbar^2}(V(\eta)-V(s))\zeta^2\right], \label{eq:weyltkf}\\
    %
    \mathsf{\hat{\Theta}^Q} =& \Theta^Q \left( -i\zeta\frac{d}{d\eta} \right)= \sum_{j=0}^\infty \alpha_j^Q (-i\zeta)^j \dfrac{d^j}{d\eta^j}, \label{eq:deformation}
\end{align}
$$

where $${_0}F_1(;1;z)$$ is a hypergeometric function. For $$V=0$$ the hypergeometric function equals one and $$\tilde{T}^W=\eta/2$$, which is the Aharonov-Bohm result of Sec. 3.

The ordering function $$\Theta^Q(x)$$ thus serves as a "deformation operator", $$\mathsf{\hat{\Theta}^Q}$$, that acts on $$\tilde{T}^W(\eta,\zeta)$$ to give the TKF of every other ordering rule. In the $$(\eta,\zeta)$$ variables, Hermiticity requires $$\tilde{T}^Q(\eta,\zeta)=\mathsf{\hat{\Theta}^Q}\tilde{T}^W(\eta,\zeta)$$ to be even in $$\zeta$$. Since $$\tilde{T}^W$$ already is, the ordering function $$\Theta^Q(x)$$ must be even. (Time-reversal symmetry gives the same conclusion: the odd terms are imaginary, but $$\tilde{T}$$ must be real.) Eqs. $$\eqref{eq:toaRHS}$$-$$\eqref{eq:deformation}$$ present a unified description of all possible Hermitian ordering rules in the canonical quantization of the classical TOA.

Problem 1 is now solved, but problem 2 is not: nothing in this construction guarantees that $$\mathsf{\hat{T}^Q}$$ satisfies the TE-CCR, Eq. $$\eqref{eq:teccr}$$.

</div>

</details>

<details class="research-subsection" markdown="1" style="margin-left: 1.5rem;">
<summary class="h5 research-subheading" style="cursor:pointer;">Supraquantization</summary>

<div class="research-box" markdown="1">

The operators $$\mathsf{\hat{T}^Q}$$ generally do not satisfy the TE-CCR, because it was never imposed. Moreover, there are obstructions to quantization {% cite groenewold1946principles van1951certaines gotay1999groenewold --file references --style american-physics-society %}: no quantization satisfies the Dirac condition for all classical observables. While all ordering rules lead to the same conjugacy-preserving TOA-operator for the free particle, they are completely different for the interacting case. Only the Weyl-ordered operator $$\mathsf{\hat{T}^W}$$ satisfies the TE-CCR, and only for *linear systems*, i.e. linear equations of motion, which means $$V(q)=aq^2+bq+c$$ {% cite galapon2004shouldn --file references --style american-physics-society %}. For nonlinear systems a conjugate quantization does not necessarily exist {% cite domingothesis groenewold1946principles van1951certaines gotay1999groenewold --file references --style american-physics-society %}.

Inspired by the works of Mackey {% cite mackey1968induced mackey1978unitary birkhoff1975logic --file references --style american-physics-society %}, Galapon reconsidered the problem by constructing a TOA-operator $$\mathsf{\hat{T}^S}$$ independently of canonical quantization {% cite galapon2004shouldn --file references --style american-physics-society %}. The method is called *supraquantization*: the observable is constructed from first principles, starting from the TE-CCR, Eq. $$\eqref{eq:teccr}$$, together with properties (i)-(iii) of Sec. 2.

**From the TE-CCR to a differential equation.** Expanding the commutator and inserting the identity $$\int dq\,\vert q\rangle \langle q \vert$$ turns Eq. $$\eqref{eq:teccr}$$ into a condition on the kernel,

$$
\begin{align}
\langle q \vert [\mathsf{\hat{H}},\mathsf{\hat{T}^S}] \vert q'\rangle = -\frac{\hbar^2}{2\mu}\left(\partial_q^2-\partial_{q'}^2\right)K(q,q') + \left[V(q)-V(q')\right]K(q,q') = i\hbar\,\delta(q-q'),
\end{align}
$$

with $$K(q,q')=\langle q \vert \mathsf{\hat{T}^S} \vert q' \rangle = \frac{\mu}{i\hbar} T^S(q,q') \text{sgn}(q-q')$$. The derivatives act on the sign function as well. Using $$\partial_q\text{sgn}(q-q')=2\delta(q-q')=-\partial_{q'}\text{sgn}(q-q')$$, the terms with $$\delta'$$ cancel and

$$
\begin{align}
\left(\partial_q^2-\partial_{q'}^2\right)\left[T^S\,\text{sgn}(q-q')\right] = \text{sgn}(q-q')\left(\partial_q^2-\partial_{q'}^2\right)T^S + 4\,\delta(q-q')\,\frac{d}{dq}T^S(q,q).
\end{align}
$$

The condition therefore splits into two parts. The $$\delta$$-part gives $$2i\hbar\,\frac{d}{dq}T^S(q,q)\,\delta(q-q')=i\hbar\,\delta(q-q')$$, i.e. $$T^S(q,q)=q/2$$ up to a constant. The remaining part, proportional to $$\text{sgn}(q-q')$$, is a second-order partial differential equation for the TKF, the *time kernel equation*,

$$
\begin{align}
\label{TKEorigintro}
-\frac{\hbar^2}{2\mu}  \frac{\partial^2 T^S(q,q')}{\partial q^2}+\frac{\hbar^2}{2\mu} \frac{\partial^2 T^S(q,q')}{\partial q'^2} + \left[V(q)-V(q')\right]T^S(q,q')=0,
\end{align}
$$

subject to the boundary conditions

$$
\begin{equation}
T^S(q,q) = \dfrac{q}{2}, \qquad T^S(q,-q) = 0.
\end{equation}
$$

The first condition is the one found above, and it fixes the constant by $$T^S(0,0)=0$$. The second says that the TKF vanishes when $$\eta=0$$, i.e. the arrival time at the arrival point itself is zero. In the $$(\eta,\zeta)$$ variables, $$\partial_q^2-\partial_{q'}^2=2\partial_\eta\partial_\zeta$$ and the equation reads

$$
\begin{align}
-\frac{\hbar^2}{\mu}\,\partial_\eta\partial_\zeta \tilde{T}^S + \left[V\!\left(\eta+\tfrac{\zeta}{2}\right)-V\!\left(\eta-\tfrac{\zeta}{2}\right)\right]\tilde{T}^S = 0,
\end{align}
$$

with data $$\tilde{T}^S(\eta,0)=\eta/2$$ and $$\tilde{T}^S(0,\zeta)=0$$ on the two characteristic lines $$\zeta=0$$ and $$\eta=0$$. This is a Goursat problem, which is why a unique solution can be expected. Expanding the bracket, $$V(\eta+\zeta/2)-V(\eta-\zeta/2)=\zeta V'(\eta)+\frac{\zeta^3}{24}V'''(\eta)+\cdots$$ contains only odd derivatives of $$V$$. The term $$\zeta V'(\eta)$$ is the one that is already captured by the Weyl-ordered TKF, and the higher odd derivatives, which vanish for $$V$$ of at most quadratic order, are what generate the corrections below.

**The solution.** The full solution of Eq. $$\eqref{TKEorigintro}$$ was obtained in Ref. {% cite pablico2022quantum --file references --style american-physics-society %},

$$
\begin{equation}
\tilde{T}^S(\eta,\zeta) =\tilde{T}^W(\eta,\zeta) +  \sum_{n=1}^{\infty}\tilde{T}^{S,(n)}(\eta,\zeta),
\label{tkesol3compact}
\end{equation}
$$

$$
\begin{align}
\tilde{T}^{S,(n)}(\eta,\zeta) =& \left(\frac{\mu}{2\hbar^2}\right)\sum_{r=1}^{n} \dfrac{1}{4^{2r}(2r+1)!} \int_0^\eta ds \dfrac{d^{2r+1}V(s)}{ds^{2r+1}} \nonumber \\
%
&\times \int_0^\zeta dw\, w^{2r+1} G(s,w) \tilde{T}^{S,(n-r)}(s,w), \label{tnuvintro}
\end{align}
$$

$$
\begin{align}
G(s,w) =&\, {_0}F_1 \left[ ; 1 ; \left(\dfrac{\mu}{2\hbar^2}\right)(\zeta^2-w^2) \{ V(\eta) - V(s) \} \right],
\label{gsw}
\end{align}
$$

where the zeroth-order term is exactly the Weyl-ordered TKF of Eq. $$\eqref{eq:weyltkf}$$, $$\tilde{T}^{S,(0)}(\eta,\zeta)= \tilde{T}^W(\eta,\zeta)$$. The terms $$\tilde{T}^{S,(n)}(\eta,\zeta)$$ are the quantum corrections to $$\tilde{T}^W(\eta,\zeta)$$ that are needed to satisfy the conjugacy relation. They involve only the third and higher odd derivatives of $$V$$ and therefore vanish for linear systems.

**Worked example: uniform gravity.** For $$V(q)=\mu g q$$ all derivatives of order three and higher vanish, so $$\tilde{T}^S=\tilde{T}^W$$. With $$V(\eta)-V(s)=\mu g(\eta-s)$$, the integral in Eq. $$\eqref{eq:weyltkf}$$ can be done term by term,

$$
\begin{align}
\tilde{T}^S(\eta,\zeta)=\tilde{T}^W(\eta,\zeta) = \frac{\eta}{2}\;{_0}F_1\!\left[;2;\frac{\mu^2 g\,\eta\,\zeta^2}{2\hbar^2}\right],
\end{align}
$$

which reduces to the free result $$\eta/2$$ when $$g\to 0$$. In this case the Weyl-ordered operator is the TOA-operator that satisfies the TE-CCR.

</div>

</details>

</details>

<details class="research-subsection" markdown="1">
<summary class="h5 research-subheading" style="cursor:pointer;">Summary and outlook</summary>

<div class="research-box" markdown="1">

- A TOA-operator is a Hermitian operator (self-adjointness is not imposed) whose kernel has the form $$\frac{\mu}{i\hbar}T(q,q')\,\text{sgn}(q-q')$$, with the TKF real and symmetric (Hermiticity and time-reversal symmetry) and reducing to the classical TOA as $$\hbar\to0$$.
- For the free particle the TKF is $$\tilde{T}=\eta/2$$ (Aharonov-Bohm), and all ordering rules agree.
- For a potential, the classical TOA is first expanded around the free TOA so that it is single and real-valued. Canonical quantization then gives a family of operators labeled by the ordering function $$\Theta^Q$$, all obtained by deforming the Weyl-ordered TKF. Only the Weyl one is conjugate to the Hamiltonian, and only for $$V$$ of at most quadratic order.
- Supraquantization imposes the TE-CCR from the start. It yields a Goursat problem for the TKF, whose solution is the Weyl-ordered TKF plus corrections built from the third and higher odd derivatives of $$V$$.



</div>

</details>

<details class="research-references-dropdown">
  <summary><strong>References</strong></summary>

  <div class="research-references">
    {% bibliography --file references --cited_in_order --style american-physics-society --group_by none --template bib_plain %}
  </div>
</details>

<script src="{{ '/assets/js/cite-merge.js' | relative_url }}"></script>
