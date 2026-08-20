document.addEventListener('DOMContentLoaded', () => {
    
    // ===== PRELOADER =====
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.classList.add('hidden');
    });

    // ===== SUBJECT DATA =====
    const SUBJECTS_DATA = {
        python: {
            id: 'python',
            name: 'Python',
            icon: '🐍',
            color: '#306998',
            description: 'Learn Python programming from basics to advanced concepts.',
            meta: { difficulty: 'Beginner to Advanced', category: 'Programming' },
            path: '../content/python/index.html'
        },
        java: {
            id: 'java',
            name: 'Java',
            icon: '☕',
            color: '#f89820',
            description: 'Master Java for enterprise applications and Android development.',
            meta: { difficulty: 'Intermediate', category: 'Programming' },
            path: '../content/java/index.html'
        },
        javascript: {
            id: 'javascript',
            name: 'JavaScript',
            icon: '🟨',
            color: '#f7df1e',
            description: 'Build interactive websites and web applications with JavaScript.',
            meta: { difficulty: 'Beginner', category: 'Web Development' },
            path: '../content/javascript/index.html'
        },
        cpp: {
            id: 'cpp',
            name: 'C++',
            icon: '⚙️',
            color: '#00599c',
            description: 'Learn C++ for system programming, game development, and performance-critical applications.',
            meta: { difficulty: 'Advanced', category: 'Programming' },
            path: '../content/cpp/index.html'
        },
        c: {
            id: 'c',
            name: 'C Language',
            icon: '🔵',
            color: '#a8b9cc',
            description: 'Master the fundamentals of C programming - the foundation of modern computing.',
            meta: { difficulty: 'Intermediate', category: 'Programming' },
            path: '../content/c/index.html'
        },
        'data-mining': {
            id: 'data-mining',
            name: 'Data Mining',
            icon: '📊',
            color: '#4fc3f7',
            description: 'Discover patterns, insights, and knowledge from large datasets.',
            meta: { difficulty: 'Intermediate', category: 'Data Science' },
            path: '../content/data-mining/index.html'
        },
        'software-engineering': {
            id: 'software-engineering',
            name: 'Software Engineering',
            icon: '🧑‍💻',
            color: '#66bb6a',
            description: 'Learn software design principles, development methodologies, and best practices.',
            meta: { difficulty: 'Intermediate', category: 'Engineering' },
            path: '../content/software-engineering/index.html'
        },
        'gender-studies': {
            id: 'gender-studies',
            name: 'Gender Studies',
            icon: '🚺',
            color: '#ec407a',
            description: 'Explore gender perspectives, equality, and inclusion in society and technology.',
            meta: { difficulty: 'Beginner', category: 'Social Sciences' },
            path: '../content/gender-studies/index.html'
        }
    };

    // ===== RENDER SUBJECTS =====
    function renderSubjects() {
        const grid = document.getElementById('subjectGrid');
        if (!grid) return;

        const subjectIds = Object.keys(SUBJECTS_DATA);
        
        grid.innerHTML = subjectIds.map(id => {
            const subject = SUBJECTS_DATA[id];
            
            return `
                <a href="${subject.path}" class="subject-card" style="--subject-color: ${subject.color};">
                    <span class="icon-box">${subject.icon}</span>
                    <h3>${subject.name}</h3>
                    <p class="subject-desc">${subject.description}</p>
                    <div class="subject-meta">
                        <span class="lesson-count">
                            <i class="fas fa-folder-open"></i> View Subject
                        </span>
                        <span class="difficulty">${subject.meta.difficulty}</span>
                    </div>
                    <span class="learn-badge">
                        <i class="fas fa-arrow-right"></i> Start Learning
                    </span>
                </a>
            `;
        }).join('');
    }

    // ===== SEARCH SUBJECTS =====
    function filterSubjects(query) {
        const cards = document.querySelectorAll('.subject-card');
        const searchTerm = query.toLowerCase().trim();
        
        cards.forEach(card => {
            const name = card.querySelector('h3')?.textContent?.toLowerCase() || '';
            const desc = card.querySelector('.subject-desc')?.textContent?.toLowerCase() || '';
            const matches = name.includes(searchTerm) || desc.includes(searchTerm);
            card.style.display = matches ? '' : 'none';
        });
    }

    // ===== ADD SEARCH BAR =====
    function addSearchBar() {
        const pageHeader = document.querySelector('.page-header');
        if (!pageHeader) return;

        const searchWrapper = document.createElement('div');
        searchWrapper.className = 'search-wrapper';
        searchWrapper.innerHTML = `
            <i class="fas fa-search"></i>
            <input type="text" 
                   id="subjectSearch" 
                   placeholder="Search subjects..." 
                   autocomplete="off"
            />
            <span class="search-shortcut">Ctrl+K</span>
        `;
        
        pageHeader.appendChild(searchWrapper);

        const searchInput = document.getElementById('subjectSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                filterSubjects(e.target.value);
            });
        }
    }

    // ===== KEYBOARD SHORTCUT =====
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('subjectSearch');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });

    // ===== INITIALIZE =====
    renderSubjects();
    addSearchBar();

    console.log('📚 Mindora Dashboard loaded!');
    console.log(`📖 ${Object.keys(SUBJECTS_DATA).length} subjects available`);
    console.log('💡 Click any subject to open its main page');
});