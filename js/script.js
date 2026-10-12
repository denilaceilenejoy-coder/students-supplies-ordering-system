// Campus Supplies Shop: products, cart, payment and receipt logic
(function () {
  // Hard-coded product list
  function frame(inner, uid) {
    return '<svg viewBox="0 0 200 150" role="img" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="bg' + uid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4fbf7"/><stop offset="1" stop-color="#d7ecdf"/></linearGradient>' +
      '<radialGradient id="sh' + uid + '"><stop offset="0" stop-color="#0f3d24" stop-opacity=".35"/><stop offset="1" stop-color="#0f3d24" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="200" height="150" fill="url(#bg' + uid + ')"/>' + inner + '</svg>';
  }
  var art = {
    ballpen: function () {
      return frame(
        '<ellipse cx="100" cy="120" rx="80" ry="8" fill="url(#shB)"/>' +
        '<defs><linearGradient id="pb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa0f0"/><stop offset=".5" stop-color="#1f5fbf"/><stop offset="1" stop-color="#143f85"/></linearGradient>' +
        '<linearGradient id="pm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#c9d3dc"/></linearGradient></defs>' +
        '<g transform="rotate(-28 100 75)">' +
        '<rect x="28" y="66" width="104" height="18" rx="9" fill="url(#pm)"/>' +
        '<rect x="128" y="66" width="30" height="18" fill="url(#pb)"/>' +
        '<polygon points="158,66 158,84 178,75" fill="#2a2f36"/><polygon points="175,73.5 175,76.5 184,75" fill="#9aa4ae"/>' +
        '<rect x="22" y="66" width="14" height="18" rx="6" fill="url(#pb)"/>' +
        '<rect x="40" y="58" width="60" height="6" rx="3" fill="#143f85"/><rect x="40" y="62" width="10" height="6" fill="#143f85"/>' +
        '<rect x="40" y="68" width="88" height="3" rx="1.5" fill="#fff" opacity=".7"/></g>', 'B');
    },
    pencil: function () {
      return frame(
        '<ellipse cx="100" cy="122" rx="80" ry="8" fill="url(#shP)"/>' +
        '<defs><linearGradient id="py" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe56a"/><stop offset=".5" stop-color="#f6c516"/><stop offset="1" stop-color="#d49a0a"/></linearGradient></defs>' +
        '<g transform="rotate(-28 100 75)">' +
        '<rect x="34" y="64" width="22" height="22" rx="4" fill="#f08aa0"/>' +
        '<rect x="56" y="64" width="12" height="22" fill="#b9bfc6"/><rect x="56" y="64" width="12" height="4" fill="#e5e9ed"/>' +
        '<rect x="68" y="64" width="80" height="22" fill="url(#py)"/>' +
        '<rect x="68" y="73" width="80" height="3" fill="#fff" opacity=".35"/>' +
        '<polygon points="148,64 148,86 176,75" fill="#e8c597"/><polygon points="168,71 168,79 180,75" fill="#2d2d2d"/>' +
        '<polygon points="148,64 148,86 160,86 160,64" fill="#e8c597" opacity="0"/></g>', 'P');
    },
    notebook: function () {
      var rings = '';
      for (var i = 0; i < 8; i++) { rings += '<rect x="46" y="' + (28 + i * 11) + '" width="16" height="5" rx="2.5" fill="#d9dee2" stroke="#8c969e" stroke-width=".8"/>'; }
      return frame(
        '<ellipse cx="100" cy="132" rx="62" ry="7" fill="url(#shN)"/>' +
        '<defs><linearGradient id="nc" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1b7d49"/><stop offset="1" stop-color="#2fa365"/></linearGradient></defs>' +
        '<rect x="52" y="20" width="102" height="108" rx="6" fill="#0f3d24" opacity=".25" transform="translate(4 4)"/>' +
        '<rect x="52" y="20" width="102" height="108" rx="6" fill="url(#nc)"/>' +
        '<rect x="56" y="22" width="4" height="104" fill="#fff" opacity=".15"/>' +
        '<rect x="76" y="44" width="62" height="38" rx="3" fill="#fff"/>' +
        '<rect x="82" y="52" width="50" height="4" rx="2" fill="#17703f"/><rect x="82" y="62" width="38" height="3" rx="1.5" fill="#9bb9a8"/><rect x="82" y="70" width="44" height="3" rx="1.5" fill="#9bb9a8"/>' +
        rings, 'N');
    },
    yellowpad: function () {
      var lines = '';
      for (var i = 0; i < 9; i++) { lines += '<line x1="50" y1="' + (50 + i * 10) + '" x2="150" y2="' + (50 + i * 10) + '" stroke="#7fb3d5" stroke-width=".9"/>'; }
      return frame(
        '<ellipse cx="100" cy="134" rx="62" ry="7" fill="url(#shY)"/>' +
        '<rect x="48" y="22" width="108" height="108" rx="3" fill="#0f3d24" opacity=".2" transform="translate(4 4)"/>' +
        '<rect x="50" y="24" width="104" height="104" fill="#fff3a0"/>' +
        '<rect x="50" y="20" width="104" height="14" fill="#a9261f"/><rect x="50" y="20" width="104" height="3" fill="#d0463d"/>' +
        '<rect x="50" y="34" width="104" height="94" fill="#fbe97a"/>' + lines +
        '<line x1="66" y1="34" x2="66" y2="128" stroke="#d9534f" stroke-width="1.2"/>' +
        '<line x1="50" y1="34" x2="154" y2="34" stroke="#c9a52a" stroke-width="1"/>' +
        '<polygon points="154,128 154,112 138,128" fill="#e9d36a" opacity=".9"/>', 'Y');
    },
    eraser: function () {
      return frame(
        '<ellipse cx="100" cy="112" rx="62" ry="8" fill="url(#shE)"/>' +
        '<defs><linearGradient id="ew" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe5ea"/></linearGradient>' +
        '<linearGradient id="eb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a8fe0"/><stop offset="1" stop-color="#1e5cb3"/></linearGradient></defs>' +
        '<g transform="rotate(-8 100 75)">' +
        '<rect x="46" y="52" width="108" height="50" rx="8" fill="url(#ew)" stroke="#c4ccd3" stroke-width="1"/>' +
        '<rect x="82" y="52" width="48" height="50" fill="url(#eb)"/>' +
        '<rect x="82" y="52" width="48" height="6" fill="#fff" opacity=".25"/>' +
        '<text x="106" y="83" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">ERASER</text>' +
        '<rect x="48" y="58" width="30" height="3" rx="1.5" fill="#fff"/></g>', 'E');
    },
    ruler: function () {
      var t = '';
      for (var i = 0; i <= 30; i++) {
        var x = 28 + i * 4.8; var len = i % 10 === 0 ? 14 : (i % 5 === 0 ? 10 : 6);
        t += '<line x1="' + x.toFixed(1) + '" y1="56" x2="' + x.toFixed(1) + '" y2="' + (56 + len) + '" stroke="#12261b" stroke-width="1"/>';
        if (i % 5 === 0 && i > 0 && i < 30) { t += '<text x="' + x.toFixed(1) + '" y="86" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#12261b">' + (i / 2) + '</text>'; }
      }
      return frame(
        '<ellipse cx="100" cy="112" rx="76" ry="7" fill="url(#shR)"/>' +
        '<defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6cf"/><stop offset="1" stop-color="#7fc79c"/></linearGradient></defs>' +
        '<g transform="rotate(-6 100 75)"><rect x="20" y="50" width="160" height="44" rx="4" fill="url(#rg)" stroke="#4f9d73" stroke-width="1"/>' +
        '<rect x="22" y="52" width="156" height="5" fill="#fff" opacity=".35"/>' + t +
        '<text x="168" y="90" text-anchor="end" font-family="Arial, sans-serif" font-size="7" fill="#12261b">cm</text></g>', 'R');
    }
  };
  // Each frame's shadow gradient uses a per-product id; add matching defs by wrapping.
  var PRODUCTS = [
    { id: 'ballpen', name: 'Ballpen', price: 1200 },
    { id: 'pencil', name: 'Pencil', price: 1000 },
    { id: 'notebook', name: 'Notebook', price: 3500 },
    { id: 'yellowpad', name: 'Yellow Pad', price: 4500 },
    { id: 'eraser', name: 'Eraser', price: 800 },
    { id: 'ruler', name: 'Ruler', price: 1500 }
  ]; // prices stored in centavos to avoid floating point errors

  var cart = {};      // id -> quantity
  var locked = false; // true after a successful payment
  var receipt = null;

  function peso(c) { return '₱' + (c / 100).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function $(id) { return document.getElementById(id); }
  function byId(id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; }
  function lines() {
    return PRODUCTS.filter(function (p) { return cart[p.id] > 0; }).map(function (p) {
      return { p: p, qty: cart[p.id], sub: p.price * cart[p.id] };
    });
  }
  function total() { return lines().reduce(function (s, l) { return s + l.sub; }, 0); }
  function count() { return lines().reduce(function (s, l) { return s + l.qty; }, 0); }

  // Product list
  $('productGrid').innerHTML = PRODUCTS.map(function (p) {
    var svg = art[p.id]();
    return '<article class="product">' + svg +
      '<div class="info"><h3>' + p.name + '</h3><div class="price">' + peso(p.price) + '</div>' +
      '<button class="btn" type="button" data-add="' + p.id + '" aria-label="Add ' + p.name + ' to cart">Add to Cart</button></div></article>';
  }).join('');

  function render() {
    var ls = lines(), t = total(), n = count();
    $('navCount').textContent = n;
    $('cartHint').textContent = n ? n + (n === 1 ? ' item' : ' items') + ' in your cart' : '';
    document.querySelectorAll('[data-add]').forEach(function (b) { b.disabled = locked; });

    // Cart
    if (!ls.length) {
      $('cartBody').innerHTML = '<div class="empty">Your cart is empty. Add products from the Product List.</div>';
    } else {
      $('cartBody').innerHTML = '<div class="table-wrap"><table><thead><tr><th>Product</th><th class="num">Price</th><th>Quantity</th><th class="num">Subtotal</th><th></th></tr></thead><tbody>' +
        ls.map(function (l) {
          return '<tr><td><strong>' + l.p.name + '</strong></td><td class="num">' + peso(l.p.price) + '</td>' +
            '<td><div class="qty"><button type="button" data-dec="' + l.p.id + '" aria-label="Decrease ' + l.p.name + '"' + (locked || l.qty <= 1 ? ' disabled' : '') + '>−</button><span>' + l.qty + '</span>' +
            '<button type="button" data-inc="' + l.p.id + '" aria-label="Increase ' + l.p.name + '"' + (locked ? ' disabled' : '') + '>+</button></div></td>' +
            '<td class="num">' + peso(l.sub) + '</td>' +
            '<td><button class="link-btn" type="button" data-rem="' + l.p.id + '"' + (locked ? ' disabled' : '') + '>Remove</button></td></tr>';
        }).join('') + '</tbody></table></div>';
    }

    // Summary
    if (!ls.length) {
      $('summaryBody').innerHTML = '<p class="meta" style="margin:0 0 12px">No items yet.</p><div class="total-row"><span>Total Amount</span><span class="mono">' + peso(0) + '</span></div>';
    } else {
      $('summaryBody').innerHTML = '<ul class="summary-list">' + ls.map(function (l) {
        return '<li><span>' + l.p.name + ' (' + peso(l.p.price) + ' × ' + l.qty + ')</span><span class="mono">' + peso(l.sub) + '</span></li>';
      }).join('') + '</ul><div class="total-row"><span>Total Amount</span><span class="mono">' + peso(t) + '</span></div>' +
        '<p class="meta">' + n + (n === 1 ? ' item' : ' items') + ' · ' + ls.length + (ls.length === 1 ? ' product' : ' products') + '</p>';
    }

    // Payment
    $('dueAmt').textContent = peso(t);
    $('paid').disabled = locked;
    $('confirmBtn').disabled = locked;

    // Receipt
    if (!receipt) {
      $('receiptBody').innerHTML = '<p class="receipt-empty">Your receipt will appear here after payment is confirmed.</p>';
    } else {
      var r = receipt;
      $('receiptBody').innerHTML = '<div class="receipt"><h3>Campus Supplies Shop</h3><p class="center">Official Digital Receipt</p><hr>' +
        '<div class="row"><span>Ref No.</span><span>' + r.ref + '</span></div>' +
        '<div class="row"><span>Date</span><span>' + r.when + '</span></div><hr>' +
        r.lines.map(function (l) {
          return '<div class="item"><div class="row"><strong>' + l.name + '</strong><span>' + peso(l.sub) + '</span></div><div class="sub">' + l.qty + ' × ' + peso(l.price) + '</div></div>';
        }).join('') + '<hr>' +
        '<div class="row big"><span>Total Due</span><span>' + peso(r.total) + '</span></div>' +
        '<div class="row"><span>Amount Paid</span><span>' + peso(r.paid) + '</span></div>' +
        '<div class="row big"><span>Change</span><span>' + peso(r.change) + '</span></div>' +
        '<div class="ok">Payment confirmed. Thank you for shopping with us!</div></div>' +
        '<div class="receipt-actions"><button class="btn" type="button" id="newTx">New Transaction</button></div>';
    }
  }

  function showError(msg) {
    var e = $('payError');
    e.hidden = !msg; e.textContent = msg || '';
    $('paidField').classList.toggle('bad', !!msg);
  }

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('button');
    if (!b) return;
    if (b.dataset.add && !locked) { cart[b.dataset.add] = (cart[b.dataset.add] || 0) + 1; showError(''); render(); }
    else if (b.dataset.inc && !locked) { cart[b.dataset.inc] += 1; showError(''); render(); }
    else if (b.dataset.dec && !locked) { if (cart[b.dataset.dec] > 1) cart[b.dataset.dec] -= 1; showError(''); render(); }
    else if (b.dataset.rem && !locked) { delete cart[b.dataset.rem]; showError(''); render(); }
    else if (b.id === 'newTx') {
      cart = {}; locked = false; receipt = null;
      $('paid').value = ''; showError(''); render();
      document.getElementById('products').scrollIntoView();
    }
  });

  $('paid').addEventListener('input', function () { showError(''); });

  $('payForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (locked) return;
    var t = total();
    var raw = $('paid').value.trim().replace(/,/g, '');
    if (t === 0) { showError('Your cart is empty. Add at least one product before paying.'); return; }
    if (raw === '') { showError('Enter the amount paid by the customer.'); return; }
    if (!/^[-+]?(\d+\.?\d*|\.\d+)$/.test(raw)) { showError('The amount must be a valid number, like 100 or 150.50.'); return; }
    var paid = Math.round(Number(raw) * 100);
    if (paid < 0) { showError('The amount cannot be negative.'); return; }
    if (paid < t) { showError('Payment is not enough. You still need ' + peso(t - paid) + ' more to cover ' + peso(t) + '.'); return; }
    showError('');
    var d = new Date();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var ref = 'TXN-' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds()) + '-' + Math.floor(1000 + Math.random() * 9000);
    receipt = {
      ref: ref,
      when: d.toLocaleString('en-PH', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit' }),
      lines: lines().map(function (l) { return { name: l.p.name, qty: l.qty, price: l.p.price, sub: l.sub }; }),
      total: t, paid: paid, change: paid - t
    };
    locked = true;
    render();
    document.getElementById('receipt').scrollIntoView();
  });

  // Highlight the current section in the nav
  var links = document.querySelectorAll('[data-nav]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    ['products', 'cart', 'summary', 'payment', 'receipt'].forEach(function (id) { io.observe($(id)); });
  }

  render();
})();
