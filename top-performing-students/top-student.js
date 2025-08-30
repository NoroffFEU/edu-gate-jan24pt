// Top Performing Students – simple, beginner-friendly version
// This file fills the table with repeated mock data, adds search,
// and shows pagination that adapts to mobile/desktop sizes.

document.addEventListener('DOMContentLoaded', () => {
  // 1) Simple mock data (same student repeated)
  const DATA = [];
  for (let i = 0; i < 50; i++) {
    DATA.push({
      id: '1921840',
      first: 'Joe',
      last: 'Bloggs',
      year: 2020,
      subject: 'Mathematics',
      grade: 'A',
    });
  }

  // 2) Basic settings/state
  const PAGE_SIZE = 7;
  let filteredData = DATA.slice();
  let currentPage = 1;

  // 3) Quick element helpers
  const $ = (id) => document.getElementById(id);
  const tbody = $('studentsBody');
  const pager = $('pagination');
  const searchInput = $('searchInput');
  const searchBtn = $('searchBtn');

  // Icon paths used in pagination buttons
  const ICON = {
    first: '/assets/icons/general/first.svg',
    prev: '/assets/icons/general/left.svg',
    next: '/assets/icons/general/right.svg',
    last: '/assets/icons/general/last.svg',
  };

  // 4) Table rendering
  function renderTable(page) {
    if (!tbody) return;
    currentPage = page || 1;

    // Which slice of data should we show on this page?
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const rows = filteredData.slice(start, end);

    // Clear old rows
    tbody.innerHTML = '';

    // Add new rows
    for (const r of rows) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${r.id}</td>
        <td>${r.first}</td>
        <td>${r.last}</td>
        <td>${r.year}</td>
        <td>${r.subject}</td>
        <td>${r.grade}</td>
      `;
      tbody.appendChild(tr);
    }

    // Update pagination after table is drawn
    renderPagination();
  }

  // 5) Pagination helpers
  function createButton(label, pageToGo, disabled, iconSrc) {
    const btn = document.createElement('button');

    if (iconSrc) {
      btn.innerHTML = `<img src="${iconSrc}" alt="${label}">`;
    } else {
      btn.textContent = String(label);
    }

    if (disabled) {
      btn.disabled = true;
    } else {
      btn.addEventListener('click', () => renderTable(pageToGo));
    }

    // Highlight the active page number
    const isNumber = /^\d+$/.test(String(label));
    if (isNumber && pageToGo === currentPage) {
      btn.classList.add('active');
    }

    return btn;
  }

  function createEllipsis() {
    const span = document.createElement('span');
    span.className = 'ellipsis';
    span.textContent = '…';
    return span;
  }

  function renderPagination() {
    if (!pager) return;

    const totalPages = Math.ceil(filteredData.length / PAGE_SIZE) || 1;
    pager.innerHTML = '';

    // Small screens: show fewer controls
    const isMobile = window.innerWidth <= 480;
    if (isMobile) {
      // «, ‹, current, …, last, »
      pager.appendChild(createButton('«', 1, currentPage === 1, ICON.first));
      pager.appendChild(
        createButton('‹', Math.max(1, currentPage - 1), currentPage === 1, ICON.prev)
      );
      pager.appendChild(createButton(String(currentPage), currentPage, false));
      if (totalPages > 2) pager.appendChild(createEllipsis());
      if (totalPages > 1) pager.appendChild(createButton(String(totalPages), totalPages, false));
      pager.appendChild(
        createButton('»', totalPages, currentPage === totalPages, ICON.last)
      );
      return;
    }

    // Desktop: show a bit more numbers
    // «, ‹, [current,current+1] or [total-1,total], (… last-1 last), ›,»
    pager.appendChild(createButton('«', 1, currentPage === 1, ICON.first));
    pager.appendChild(
      createButton('‹', Math.max(1, currentPage - 1), currentPage === 1, ICON.prev)
    );

    let numbersToShow = [];
    if (currentPage < totalPages - 2) {
      numbersToShow = [currentPage, currentPage + 1];
    } else {
      numbersToShow = [Math.max(1, totalPages - 1), totalPages];
    }

    // Keep only valid page numbers
    numbersToShow = numbersToShow.filter((n) => n >= 1 && n <= totalPages);

    // Add those page number buttons
    numbersToShow.forEach((n) => pager.appendChild(createButton(String(n), n, false)));

    // If we’re far from the end, add … and the last two pages
    if (currentPage < totalPages - 2) {
      pager.appendChild(createEllipsis());
      if (totalPages - 1 >= 1) {
        pager.appendChild(
          createButton(String(totalPages - 1), totalPages - 1, currentPage === totalPages - 1)
        );
      }
      pager.appendChild(
        createButton(String(totalPages), totalPages, currentPage === totalPages)
      );
    }

    pager.appendChild(
      createButton('›', Math.min(totalPages, currentPage + 1), currentPage === totalPages, ICON.next)
    );
    pager.appendChild(createButton('»', totalPages, currentPage === totalPages, ICON.last));
  }

  // 6) Search wiring
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      filteredData = DATA.filter((r) =>
        `${r.id} ${r.first} ${r.last} ${r.year} ${r.subject} ${r.grade}`
          .toLowerCase()
          .includes(q)
      );
      renderTable(1);
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      // Trigger the input handler above
      if (searchInput) {
        const evt = new Event('input');
        searchInput.dispatchEvent(evt);
      }
    });
  }

  // 7) Initial paint + keep pagination responsive on resize
  renderTable(1);
  window.addEventListener('resize', renderPagination);

  // 8) Sidebar toggle (page-specific)
  const toggleButton = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (toggleButton && sidebar) {
    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
  }
});
