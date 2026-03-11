
function goTo(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  window.location.hash = hash;
  updateActiveNavLink(hash);
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
const menuData = {
  appetizers: [
    { name: 'FISH FRY',          price: '$26.00', desc: 'A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'SPRING ROLLS',      price: '$14.00', desc: 'Crispy rolls filled with seasonal vegetables, glass noodles, and a tangy dipping sauce.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'CALAMARI',          price: '$18.00', desc: 'Lightly battered golden-fried squid rings served with house marinara sauce.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'BRUSCHETTA',        price: '$12.00', desc: 'Toasted sourdough topped with fresh tomatoes, basil, garlic, and aged balsamic.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'OYSTERS',           price: '$32.00', desc: 'Fresh half-shell oysters served with classic mignonette and fresh lemon wedges.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'STUFFED MUSHROOMS', price: '$16.00', desc: 'Portobello mushrooms filled with herbed ricotta and sun-dried tomato pesto.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
  ],
  'main courses': [
    { name: 'GRILLED SALMON',  price: '$38.00', desc: 'Atlantic salmon fillet with lemon butter, asparagus, and wild herb rice.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'BEEF TENDERLOIN', price: '$52.00', desc: 'Prime cut with truffle mashed potato, seasonal vegetables, and red wine jus.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'DUCK CONFIT',     price: '$44.00', desc: 'Slow-cooked duck leg with cherry gastrique and crispy lardons.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'LOBSTER PASTA',   price: '$48.00', desc: 'Fresh tagliatelle with pan-seared lobster in a saffron cream sauce.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'LAMB RACK',       price: '$56.00', desc: 'Herb-crusted lamb rack with ratatouille and rosemary jus.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'SEA BASS',        price: '$42.00', desc: 'Pan-seared sea bass with caponata, olives, and lemon caper butter.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
  ],
  sides: [
    { name: 'TRUFFLE FRIES',     price: '$12.00', desc: 'Hand-cut fries tossed with truffle oil and fresh parmesan shavings.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'GRILLED ASPARAGUS', price: '$10.00', desc: 'Seasonal asparagus with hollandaise sauce and fresh lemon zest.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'ROASTED POTATOES',  price: '$9.00',  desc: 'Crispy baby potatoes with rosemary, garlic, and flaked sea salt.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'CAESAR SALAD',      price: '$14.00', desc: 'Romaine lettuce, parmesan, house croutons, and classic Caesar dressing.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
  ],
  desserts: [
    { name: 'CRÈME BRÛLÉE',      price: '$14.00', desc: 'Classic vanilla custard with a perfectly caramelized sugar crust.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'CHOCOLATE FONDANT', price: '$16.00', desc: 'Warm dark chocolate cake with molten center and vanilla bean ice cream.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'TIRAMISU',          price: '$13.00', desc: 'Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
    { name: 'PANNA COTTA',       price: '$12.00', desc: 'Silky vanilla panna cotta with seasonal berry compote.', img: 'https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png' },
  ],
};

function scrollTo(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  window.location.hash = hash;
  updateActiveNavLink(hash);
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateActiveNavLink(hash) {
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.classList.remove('active-nav');
    if (link.getAttribute('href') === hash) {
      link.classList.add('active-nav');
    }
  });
}

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const hash = this.getAttribute('href');
    scrollTo(hash);
  });
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  navbar.style.backgroundColor = scrolled ? 'rgba(0,0,0,0.92)' : '';
  navbar.style.backdropFilter  = scrolled ? 'blur(12px)' : '';
  navbar.style.transition      = 'all 0.4s';
});

const navStyle = document.createElement('style');
navStyle.textContent = `.active-nav { color: #A6A182 !important; font-weight: 700 !important; }`;
document.head.appendChild(navStyle);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  revealObserver.observe(el);
});

function createMenuItemHTML({ name, price, desc, img }) {
  return `
    <div class="kicikbox d-flex justify-content-center">
      <div class="sekilqutusu2">
        <img src="${img}" width="70px" class="sekil5" alt="${name}">
      </div>
      <div class="ikincipart">
        <div class="basliq1">
          <p class="yazi12 p-0 m-0">${name}</p>
          <div class="xett1"></div>
          <button class="buton2">${price}</button>
        </div>
        <div class="esasyazi1">
          <p class="yazi13">${desc}</p>
        </div>
      </div>
    </div>`;
}

function renderMenu(category) {
  const items = menuData[category] || [];
  const col1  = document.getElementById('menuCol1');
  const col2  = document.getElementById('menuCol2');
  if (!col1 || !col2) return;

  const half = Math.ceil(items.length / 2);

  [col1, col2].forEach(col => {
    col.style.opacity    = '0';
    col.style.transform  = 'translateY(12px)';
    col.style.transition = 'opacity 0.3s, transform 0.3s';
  });

  setTimeout(() => {
    col1.innerHTML = items.slice(0, half).map(createMenuItemHTML).join('');
    col2.innerHTML = items.slice(half).map(createMenuItemHTML).join('');
    [col1, col2].forEach(col => {
      col.style.opacity   = '1';
      col.style.transform = 'translateY(0)';
    });
  }, 300);
}

function initMenuTabs() {
  const tabs = document.querySelectorAll('.inlinepart1 li');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('li2'));
      tab.classList.add('li2');
      renderMenu(tab.getAttribute('data-category'));
    });
  });
  if (tabs.length > 0) {
    tabs[0].classList.add('li2');
    renderMenu(tabs[0].getAttribute('data-category'));
  }
}


const rippleStyle = document.createElement('style');
rippleStyle.textContent = `@keyframes ripple { to { transform: scale(20); opacity: 0; } }`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('.button1, .button2').forEach(btn => {
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.addEventListener('click', function(e) {
    const rect   = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    Object.assign(ripple.style, {
      position: 'absolute',
      width: '6px', height: '6px',
      background: 'rgba(255,255,255,0.4)',
      borderRadius: '50%',
      left: `${e.clientX - rect.left - 3}px`,
      top:  `${e.clientY - rect.top  - 3}px`,
      transform: 'scale(0)',
      animation: 'ripple 0.5s ease-out forwards',
      pointerEvents: 'none',
    });
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

initMenuTabs();
const initialHash = window.location.hash || '#home';
updateActiveNavLink(initialHash);