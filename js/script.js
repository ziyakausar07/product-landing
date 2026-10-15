/**
 * NEXORA - Modern SaaS Product Landing Page
 * Core JavaScript Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Sticky Navigation & Scroll Effects
  // =========================================================================
  const headerNav = document.getElementById('header-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      headerNav?.classList.add('scrolled');
    } else {
      headerNav?.classList.remove('scrolled');
    }

    // Scrollspy navigation highlight
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial run

  // =========================================================================
  // 2. Mobile Hamburger Menu
  // =========================================================================
  const navToggle = document.getElementById('nav-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  const openMobileMenu = () => {
    navToggle?.setAttribute('aria-expanded', 'true');
    mobileDrawer?.classList.add('open');
    document.body.classList.add('menu-open');
  };

  const closeMobileMenu = () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    mobileDrawer?.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  navToggle?.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close drawer when any mobile link is clicked
  const mobileLinks = mobileDrawer?.querySelectorAll('a, button');
  mobileLinks?.forEach((element) => {
    element.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close on window resize if crossing desktop threshold
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileDrawer?.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // =========================================================================
  // 3. Interactive Pricing Switcher (Monthly / Annual Billing)
  // =========================================================================
  const billingToggle = document.getElementById('billing-toggle');
  const monthlyLabel = document.getElementById('label-monthly');
  const annualLabel = document.getElementById('label-annual');

  // Pricing configuration
  const pricingData = {
    starter: {
      monthly: { price: 0, billedNote: 'Free forever for individuals' },
      annual: { price: 0, billedNote: 'Free forever for individuals' }
    },
    professional: {
      monthly: { price: 19, billedNote: 'Billed monthly' },
      annual: { price: 15, billedNote: 'Billed annually ($180/year) — Save 20%' }
    },
    team: {
      monthly: { price: 49, billedNote: 'Billed monthly' },
      annual: { price: 39, billedNote: 'Billed annually ($468/year) — Save 20%' }
    }
  };

  const updatePricing = (isAnnual) => {
    const cycle = isAnnual ? 'annual' : 'monthly';

    // Update labels
    if (isAnnual) {
      annualLabel?.classList.add('active');
      monthlyLabel?.classList.remove('active');
    } else {
      monthlyLabel?.classList.add('active');
      annualLabel?.classList.remove('active');
    }

    // Update price cards
    ['starter', 'professional', 'team'].forEach((tier) => {
      const amountEl = document.getElementById(`price-amount-${tier}`);
      const periodEl = document.getElementById(`price-period-${tier}`);
      const noteEl = document.getElementById(`price-note-${tier}`);

      if (amountEl) {
        amountEl.style.opacity = '0';
        setTimeout(() => {
          amountEl.textContent = pricingData[tier][cycle].price;
          amountEl.style.opacity = '1';
        }, 120);
      }

      if (periodEl) {
        periodEl.textContent = '/month';
      }

      if (noteEl) {
        noteEl.textContent = pricingData[tier][cycle].billedNote;
      }
    });
  };

  billingToggle?.addEventListener('change', (e) => {
    updatePricing(e.target.checked);
  });

  monthlyLabel?.addEventListener('click', () => {
    if (billingToggle && billingToggle.checked) {
      billingToggle.checked = false;
      updatePricing(false);
    }
  });

  annualLabel?.addEventListener('click', () => {
    if (billingToggle && !billingToggle.checked) {
      billingToggle.checked = true;
      updatePricing(true);
    }
  });

  // =========================================================================
  // 4. Accessible FAQ Accordion
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  const closeAccordionItem = (item) => {
    item.classList.remove('open');
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (panel) panel.style.maxHeight = null;
  };

  const openAccordionItem = (item) => {
    item.classList.add('open');
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    if (panel) {
      // Calculate scrollHeight for fluid CSS height animation
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  };

  faqTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      const currentItem = trigger.closest('.faq-item');
      if (!currentItem) return;

      const isOpen = currentItem.classList.contains('open');

      // Close all other items (strictly 1 open item requirement)
      faqItems.forEach((item) => {
        if (item !== currentItem) {
          closeAccordionItem(item);
        }
      });

      // Toggle clicked item
      if (isOpen) {
        closeAccordionItem(currentItem);
      } else {
        openAccordionItem(currentItem);
      }
    });

    // Keyboard accessibility navigation (Arrow keys, Home, End)
    trigger.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = (index + 1) % faqTriggers.length;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = (index - 1 + faqTriggers.length) % faqTriggers.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = faqTriggers.length - 1;
      }

      if (targetIndex !== null) {
        faqTriggers[targetIndex].focus();
      }
    });
  });

  // Re-calculate open panel max-height on window resize
  window.addEventListener('resize', () => {
    faqItems.forEach((item) => {
      if (item.classList.contains('open')) {
        const panel = item.querySelector('.faq-panel');
        if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });

  // =========================================================================
  // 5. Interactive Demo Modals & Feedback System
  // =========================================================================
  const modalBackdrop = document.getElementById('demo-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalSubmitBtn = document.getElementById('modal-submit-btn');
  const modalForm = document.getElementById('modal-form');
  const toastContainer = document.getElementById('toast-container');

  const showToast = (message, duration = 3500) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  const openDemoModal = (title, description, submitLabel = 'Continue Demo') => {
    if (!modalBackdrop) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDescription) modalDescription.textContent = description;
    if (modalSubmitBtn) modalSubmitBtn.textContent = submitLabel;

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');

    // Focus input
    const firstInput = modalBackdrop.querySelector('input');
    setTimeout(() => firstInput?.focus(), 150);
  };

  const closeDemoModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  };

  modalCloseBtn?.addEventListener('click', closeDemoModal);

  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeDemoModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('open')) {
      closeDemoModal();
    }
  });

  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('demo-email')?.value || 'user@example.com';
    closeDemoModal();
    showToast(`Success! Demo access initialized for ${email}`);
    modalForm.reset();
  });

  // Attach interactive demo handlers to CTA buttons
  const demoButtons = document.querySelectorAll('[data-demo-action]');
  demoButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.getAttribute('data-demo-action');

      if (action === 'get-started' || action === 'signup') {
        openDemoModal(
          'Get Started with Nexora',
          'Create your free 14-day workspace trial. No credit card required. Experience smarter project tracking today.',
          'Create Workspace'
        );
      } else if (action === 'sign-in') {
        openDemoModal(
          'Welcome Back to Nexora',
          'Sign in to access your projects, team boards, and automated workflows.',
          'Sign In to Nexora'
        );
      } else if (action === 'contact-sales') {
        openDemoModal(
          'Contact Nexora Enterprise',
          'Connect with our team for custom integrations, security compliance, and dedicated team onboarding.',
          'Send Inquiry'
        );
      } else if (action === 'plan-starter') {
        showToast('Starter plan selected! Ready to explore free features.');
      } else if (action === 'plan-professional') {
        openDemoModal(
          'Upgrade to Professional',
          'Unlock unlimited projects, automated workflows, and priority support for your team.',
          'Start 14-Day Free Trial'
        );
      } else if (action === 'plan-team') {
        openDemoModal(
          'Upgrade to Team Plan',
          'Scale with advanced team management, custom workflows, and enhanced reporting.',
          'Start Team Trial'
        );
      }
    });
  });

  // =========================================================================
  // 6. Smooth Scroll for Internal Anchors
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // =========================================================================
  // 7. Dynamic Year in Footer
  // =========================================================================
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
