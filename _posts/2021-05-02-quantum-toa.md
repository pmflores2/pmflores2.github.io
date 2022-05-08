---
layout: post
title: Quantum time of arrival operator
date: 2021-05-02
description: Overview
tags: explainer
category: time-of-arrival

comments: true

---

<!-- Classical mechanics treats time only as a parameter. Meanwhile, time in special and general relativity acquires a dynamical concept. Special relativity treats time and space on equal footing as coordinates of a four-vector in special which are intertwined with each other under Lorentz transforms. Meanwhile, the geometry of spacetime affects the dynamics of time in general relativity and allows material clocks to display proper time. Now in quantum theory, time is still treated as a parameter in the same way as classical mechanics treats time. This parameter  t then governs the evolution of the system. These different treatment of time then poses a problem when physicists attempt to unify general relativity and quantum theory and constitutes one aspect of the problem of time in quantum gravity. We have different notions of time, such as entropic time, coordinate time, parametric time, and so on. One might argue that the problem of time might be because we are using a different notions of time which leads to confusion. To avoid this, we will only deal with the concept of time of arrival. -->

The goal of this post is to discuss the various constructions of the time of arrival (TOA) operator for both the free and interacting case. This is to help me prepare on my upcoming thesis proposal and will serve as a review on the early studies of TOA operators. Most of the early studies have been mainly focused on the momentum representation of the free TOA operator while our work is done in the position representation of the free and interacting TOA operators. This has lead us to more meaningful interpretations of the TOA operator and its eigenfunctions (this will be a topic for another post). As a breakdown, I will first motivate how TOA poses a fundamental problem in standard quantum mechanics. Then, I will very briefly show the various free TOA operators, and lastly, the construction of TOA operators for the interacting case via quantization and "supraquantization".

<h4>Motivation</h4>

Classically, there are two ways to measure the TOA of a free particle. The first method is to invert the particle's classical equation of motion  

$$t_{free} = -\mu \dfrac{q-x}{p}$$

where, $$q$$ is the initial position, $$x$$ is the arrival point, $$\mu$$ is the mass of the particle, and $$p$$ is the initial momentum. The second method is to use a detector to record the time at which the particle leaves the point $$q$$ and another detector to record its arrival at $$x$$. These two methods will always yield the same TOA, and can be easily generalized for the interacting case, i.e.

$$t = -\text{sgn}(p) \sqrt{\dfrac{\mu}{2}} \int_x^q \dfrac{dq'}{\sqrt{H(q,p)-V(q')}}$$

where, the Hamiltonian is

$$H(q,p) = \dfrac{p^2}{2\mu} + V(q).$$

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ site.baseurl }}/assets/img/classicaltoa.png" data-zoomable>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ site.baseurl }}/assets/img/classicaltoainteracting.png" data-zoomable>
    </div>
</div>

However, we cannot use these two methods to solve for the TOA of a quantum particle. Inverting the equation of motion of the position opertator (Heisenberg picture) to solve for the TOA leads to an ordering ambiguity of the position and momentum operators. The same problem is present if we quantize the classical TOA which is further complicated by the complex and/or multiple valuedness of the classical TOA, e.g. complex TOA means that the classical particle cannot arrive at that point while multiple arrival is exhibited by harmonic oscillator potential. We cannot use two detectors as in the classical case because the first detector will induce the collapse of the wavefunction and that the state upon arrival at $$x$$ is no longer causally related to the initial state.

If classical mechanics arises from quantum mechanics in the limit as $$\hbar\rightarrow 0$$, then this means that quantum mechanics is more fundamental than classical mechanics. However, quantum mechanics offers no solution to the TOA problem while classical mechanics has two equivalent solutions. This poses a fundamental problem in the standard formulation of quantum mechanics.

<h4>Time of arrival operators: free case</h4>

The demotion of time as a parameter in quantum mechanics is mainly due to Pauli's theorem$$^1$$:
<blockquote>
There is no self-adjoint time operator that is canonically conjugate with its corresponding system Hamiltonian.
</blockquote>
Thus, it is non-sensical to ask the TOA of a quantum particle because time is not an observable in quantum mechanics. Pauli's proof was only formal, i.e. without regard on the domains of the operators involved, but despite this, the validity of his theorem was unquestioned and has lead to a diverse treatment of time, and TOA, within and beyond the standard formulation of quantum mechanics$$^2$$. Furthermore, it has also lead the construction of TOA operators to either give up self-adjointness or conjugacy with the Hamiltoninan in order to bypass Pauli's theorem.  

The earliest TOA operator was constructed by <a href="https://journals.aps.org/pr/abstract/10.1103/PhysRev.122.1649">Aharonov and Bohm</a> by quantizing the classical TOA of a free particle using symmetric ordering

$$\hat{T}_{AB} = -\mu ( \dfrac{\hat{q}\hat{p}^{-1} + \hat{p}^{-1}\hat{q}}{2} ).$$

This operator has been studied extensively and shown to be a maximally symmetric operator whose eigenfunctions are complete but non-orthogonal. <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.54.4676">Grot, Rovelli, and Tate</a> traces the non-self-adjointness of $$\hat{T}_{AB}$$ to the singularity at $$p=0$$ and constructed a "regularized" self-adjoint TOA operator

$$\hat{T}_{GRT} = -\mu \sqrt{f_\epsilon(\hat{p})} \hat{q} \sqrt{f_\epsilon(\hat{p})}$$

where

$$f_\epsilon(\hat{p}) =
\begin{cases}
\hat{p}^{-1}        & |p| > \epsilon \\
\epsilon^2 \hat{p}  & |p| < \epsilon.
\end{cases}
$$

The regularization amounts to introducing negative energies in the region around $$p=0$$ which changes the energy spectrum of the Hamiltonian and thus bypasses Pauli's theorem.

A self-adjoint extension of $$\hat{T}_{AB}$$ was also proposed by <a href="https://www.sciencedirect.com/science/article/abs/pii/S0034487774800042">Kijowski</a>, <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.56.3425">Delgado, and Muga</a> using the combination

$$\hat{T}_{KDM} = \hat{T}_{AB} \Theta(p) - \hat{T}_{AB} \Theta(-p)$$

where the first (second) term only acts on the positive (negative) momentum subspace of the system Hilbert space. This operator bypasses Pauli's theorem because it is canonically conjugate to $$\text{sgn}(\hat{p})\hat{H}$$.

It was later shown that Pauli's theorem does not hold within the single Hilbert space formulation of quantum mechanics because Pauli has made implicit assumption that were inconsistent $$^3$$. This has lead <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.72.062107">Galapon, Caballar, and Bahague</a> to construct the <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.93.180406">confined time of arrival operators</a>(CTOA)

$$ \hat{T}_\gamma \varphi(q)= \int_{-l}^l T_\gamma(q,q') \varphi(q') dq'$$

where

$$ T_\gamma(q,q') = -\mu \dfrac{q+q'}{4\hbar\sin\gamma} \left( e^{i\gamma} \Theta(q-q') + e^{-i\gamma}\Theta(q'-q)\right).$$

The CTOA operators are self-adjoint and canonically conjugate with the system Hamiltonian. The self-adjointness was was addressed by confining the particle in a segment of the real line $$ [-l,l]$$ and imposing non-vanishing boundary conditions $$ \varphi(-l) = e^{-2i\gamma}\varphi(l) $$ on the system Hilbert space. It is important to note that the kernel $$T(q,q')$$ should be treated as a distribution and this representation allows us to manipulate the TOA operator as a scalar object.

<h4>Time of arrival operators: interacting case</h4>

Constructing TOA operators for the interacting case has been more challenging because the classical TOA expression may be complex and/or multiple-valued. An example of a complex TOA is when a particle is fired upward and the arrival point is chosen to be above the classical turning point. Meanwhile, multiple arrivals is exhibited by a harmonic oscillator potential wherein a particle can arrive multiple times at the arrival point. Because of these, it was deemed non-sensical to quantize the classical TOA for the interacting case. However, these arguments can be addressed on physical grounds. First, it is important to note that the TOA of a quantum particle is always real-valued because it can tunnel through the classically forbidden region. Lastly, only the first TOA is relevant because the detector will induce the collapse of the wavefunction upon its arrival.

It was shown that a TOA operator that is canonically conjugate with the Hamiltonian can be expressed as a sum of the Bender-Dunne basis operators$$^4$$. Explicitly, we have

$$\hat{T} = \sum_{m,n} \alpha_{m,n} \hat{t}_{m,n},$$

where

$$ \hat{t}_{m,n} = \dfrac{1}{\sum_{k=0}^n a_k^{(n)}} \sum_{k=0}^n a_k^{(n)} \hat{q}^k \hat{p}^m \hat{q}^{n-k} = \dfrac{1}{\sum_{j=0}^m a_j^{(m)}} \sum_{j=0}^m a_j^{(m)} \hat{p}^j \hat{q}^n \hat{p}^{m-j}.$$

The coefficients depend on the ordering rule but must be chosen so that $$\hat{T}$$ is Hermitian. Then, by taking the position representation of the TOA operator we get

$$ \hat{T}\varphi(q) = \int_{-\infty}^\infty \langle q | \hat{T} | q' \rangle \varphi(q') dq' = \dfrac{\mu}{i\hbar} \int_{-\infty}^\infty T(q,q') \varphi(q') \text{sgn}(q-q')dq'$$

where the kernel $$T(q,q')$$ is called the time kernel function and is given as $$^5$$

$$ T_W(q,q') = \dfrac{1}{2} \int_0^{\frac{q+q'}{2}} ds{_0}F_1\left[;1;\dfrac{\mu}{2\hbar^2}(q-q')^2 V(\frac{q+q'}{2},s)\right], $$

$$ T_{BJ}(q,q') = \dfrac{1}{2(q-q')} \left(\int_0^q ds - \int_0^{q'} ds\right) \int_0^s du {_0}F_1\left[;1;\dfrac{\mu}{2\hbar^2}(q-q')^2 V(s,u)\right],$$

$$ T_{SS}(q,q') = \dfrac{1}{4} \int_0^q ds {_0}F_1\left[;1;\dfrac{\mu}{2\hbar^2}(q-q')^2 V(q,s)\right] - \dfrac{1}{4} \int_0^{q'} ds {_0}F_1\left[;1;\dfrac{\mu}{2\hbar^2}(q-q')^2 V(q',s)\right]$$

$$V(x,y)=V(x)-V(y).$$

The subscripts "W", "BJ", and "SS" stand for Weyl, Born-Jordan, and simple symmetric. These are the most well-knows and well-studied ordering rules with each having its own distrinctive feature. The Weyl ordering is able to reflect the covariant property of Hamiltonian dynamics, Born-Jordan ordering preserves the equivalence of the Schrodinger and Heisenberg pictures of quantum mechanics, and simple symmetric ordering uses the "average" rule.

A downside to the quantization prescription is that the TOA operators are not generally covariant because of obstructions to quantization. This has lead Galapon$$^6$$ to propose the method known as "supraquantization" wherein the time kernel function must satisfy the partial differential equation

$$ -\dfrac{\hbar^2}{2\mu} \left( \dfrac{\partial^2}{\partial q^2} - \dfrac{\partial^2}{\partial q'^2} \right) T(q,q,) + (V(q)-V(q'))T(q,q')=0$$

with the boundary conditions $$T(q,q)=q/2$$ and $$T(q,-q)=0$$. The PDE is a consequence of imposing conjugacy with the Hamiltonian while the boundary conditions arise due to the correspondence principle. In contrast to the quantization prescription, the supraquantized prescription offers a unique TOA operator because the classical observable is used as a boundary condition.

An important result of the supraquantization prescription is that it is equal to the Weyl-ordered quantization for potentials of the form $$V(q)=aq^2+bq+c$$. For non-linear systems, the leading term of supraquantization is equal to the Weyl-ordered quantization plus correction terms. These correction terms arise due to the obstruction to quantization and are needed to satisfy the conjugacy relation.







<h4> Footnotes </h4>
<ol>
 <li>Pauli, W. (1933). Handbuch der physik. Geiger and scheel, 2, 83-272.</li>

 <li>See the review paper by <a href="https://www.sciencedirect.com/science/article/abs/pii/S0370157300000478">Muga and Leavens</a>. To my knowledge, there is no recent review paper on TOA in quantum mechanics and there there may be recent progress on the topics discussed in the paper</li>

 <li>See the following papers</li>

  <ul>
  <li><a href="https://royalsocietypublishing.org/doi/abs/10.1098/rspa.2001.0874">Galapon, E. (2002). Pauli's theorem and quantum canonical pairs: the consistency of a bounded, self–adjoint time operator canonically conjugate to a Hamiltonian with non–empty point spectrum. Proceedings of the Royal Society of London. Series A: Mathematical, Physical and Engineering Sciences, 458(2018), 451-472.</a></li>
  <li><a href="https://royalsocietypublishing.org/doi/abs/10.1098/rspa.2002.0992">Galapon, E. A. (2002). Self–adjoint time operator is the rule for discrete semi–bounded Hamiltonians. Proceedings of the Royal Society of London. Series A: Mathematical, Physical and Engineering Sciences, 458(2027), 2671-2689.</a></li>
  <li><a href="https://link.springer.com/chapter/10.1007/978-3-642-03174-8_3">Galapon, E. A. (2009). Post Pauli’s theorem emerging perspective on time in quantum mechanics. In Time in Quantum Mechanics-Vol. 2 (pp. 25-63). Springer, Berlin, Heidelberg.</a></li>
  </ul>

 <li>See the following papers</li>
  <ul>
  <li> <a href="https://aip.scitation.org/doi/abs/10.1063/1.527869">Bender, C. M., & Dunne, G. V. (1988). Polynomials and operator orderings. Journal of mathematical physics, 29(8), 1727-1731.</a></li>
  <li> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.40.2739">Bender, C. M., & Dunne, G. V. (1989). Exact solutions to operator differential equations. Physical Review D, 40(8), 27.</a></li>
  <li> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.40.3504">Bender, C. M., & Dunne, G. V. (1989). Integration of operator differential equations. Physical Review D, 40(10), 3504.</a></li>
  </ul>

  <li> <a href="https://www.sciencedirect.com/science/article/abs/pii/S0003491618302173">Galapon, E. A., & Magadan, J. J. P. (2018). Quantizations of the classical time of arrival and their dynamics. Annals of Physics, 397, 278-302.</a></li>

  <li><a href="https://aip.scitation.org/doi/abs/10.1063/1.1767297">Galapon, E. A. (2004). Shouldn’t there be an antithesis to quantization?. Journal of mathematical physics, 45(8), 3180-3215.</a></li>

</ol>



<!-- vector fields wherein one has zero divergence while the other has zero curl, that is $$\vec{A}(\vec{x},t) = \vec{A}_\parallel(\vec{x},t) + \vec{A}_\bot(\vec{x},t) $$, where, $$\nabla \times \vec{A}_\parallel(\vec{x},t) = 0$$ and $\nabla \cdot \vec{A}_\bot(\vec{x},t) = 0$. It follows that we can write $\vec{A}_\parallel(\vec{x},t) = \nabla \chi(\vec{x},t)$ where $\chi(\vec{x},t)$ is a scalar field.   

It is easy to see that $\vec{A}_\bot(\vec{x},t)$ is now gauge-invariant while the scalar field $\chi(\vec{x},t)$ transforms as $\chi(\vec{x},t) \rightarrow \chi(\vec{x},t) + \Lambda(\vec{x},t)$. We can thus define a new gauge-invariant quantity $\Phi(\vec{x},t) = V(\vec{x},t) + \partial_t\chi(\vec{x},t)$ and rewrite the minimally coupled Schrodinger equation in terms of these gauge-invariant fields
\begin{align}
	i\hbar \dfrac{\partial \phi(\vec{x},t)}{\partial t} = \left[ -\dfrac{1}{2m} \left( -i\hbar \nabla - q \vec{A}_\bot(\vec{x},t)\right)^2 + q \Phi(\vec{x},t) \right] \phi(\vec{x},t)
	\label{eq:segi}
\end{align}
where $\phi(\vec{x},t) = e^{-iq \chi(\vec{x},t)/\hbar} \psi(\vec{x},t)$. The fields $\vec{A}_\bot(\vec{x},t)$ and $\Phi(\vec{x},t)$ are the physical degrees of freedom of the electromagnetic field. Using Eq. \eqref{eq:segi}, the Hamiltonian is now gauge-invariant and it is easy to see that the arising standard time of arrival distribution is also gauge-invariant. Using these transforms, the quantum flux also gauge-invariant.   -->
