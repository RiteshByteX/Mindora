// ============================================
// 🐍 PYTHON SUBJECT PAGE - Render Logic
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PRELOADER =====
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.classList.add('hidden');
    });

    // ===== CHECK IF DATA EXISTS =====
    if (typeof window.PYTHON_DATA === 'undefined') {
        console.error('❌ PYTHON_DATA not found! Make sure index.js is loaded first.');
        document.getElementById('unitsContainer').innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 16px;"></i>
                <h3>Error loading course data</h3>
                <p>Please refresh the page or try again later.</p>
            </div>
        `;
        return;
    }

    // ===== RENDER SUBJECT BANNER =====
    function renderBanner() {
        const container = document.getElementById('subjectBanner');
        if (!container) return;

        const data = window.PYTHON_DATA;
        
        container.innerHTML = `
            <div class="subject-header-section">
                <div class="subject-banner">
                    <div class="icon-box">${data.icon}</div>
                    <div class="subject-info">
                        <h1>${data.subjectName}</h1>
                        <p>${data.description}</p>
                        <div class="subject-stats">
                            <span><i class="fas fa-book"></i> ${data.stats.units} Units</span>
                            <span><i class="fas fa-signal"></i> ${data.stats.difficulty}</span>
                            <span><i class="fas fa-tag"></i> ${data.stats.category}</span>
                            <span><i class="fas fa-clock"></i> ${data.stats.hours} Hours</span>
                            <span><i class="fas fa-list"></i> ${data.stats.lessons} Lessons</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ===== RENDER UNITS =====
    function renderUnits() {
        const container = document.getElementById('unitsContainer');
        if (!container) return;

        const data = window.PYTHON_DATA;
        
        let html = '';
        
        data.units.forEach(function(unit, unitIndex) {
            const isFirstUnit = unitIndex === 0;
            
            html += `
                <div class="unit-card">
                    <div class="unit-header" onclick="toggleUnit(this)">
                        <div>
                            <h3>Unit ${unit.id}: ${unit.title}</h3>
                            <div class="unit-desc">${unit.description}</div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                            <span class="unit-badge">${unit.hours} Hours</span>
                            <span class="unit-badge">${unit.topics.length} Topics</span>
                            <i class="fas fa-chevron-down toggle-icon ${isFirstUnit ? 'open' : ''}"></i>
                        </div>
                    </div>
                    <div class="topics-list ${isFirstUnit ? 'open' : ''}">
            `;
            
            unit.topics.forEach(function(topic, topicIndex) {
                const isFirstTopic = isFirstUnit && topicIndex === 0;
                const lessonCount = topic.lessons ? topic.lessons.length : 0;
                
                html += `
                    <div class="topic-item">
                        <div class="topic-header" onclick="toggleTopic(this)">
                            <div>
                                <span class="topic-number">${topic.id}</span>
                                <span class="topic-title">${topic.title}</span>
                                <span style="font-size: 0.7rem; color: var(--text-muted); margin-left: 8px;">(${lessonCount} lessons)</span>
                            </div>
                            <i class="fas fa-chevron-right toggle-icon-small ${isFirstTopic ? 'open' : ''}"></i>
                        </div>
                        <div class="lessons-list ${isFirstTopic ? 'open' : ''}">
                `;
                
                if (topic.lessons && topic.lessons.length > 0) {
                    topic.lessons.forEach(function(lesson) {
                        html += `
                            <a href="${lesson.file || '#'}" class="lesson-item" data-lesson-id="${lesson.id}">
                                <div class="lesson-left">
                                    <div class="lesson-icon"><i class="fas fa-play"></i></div>
                                    <div>
                                        <div class="lesson-title">${lesson.id} ${lesson.title}</div>
                                        <div class="lesson-desc">${lesson.description}</div>
                                    </div>
                                </div>
                                <div class="lesson-right">
                                    <span class="duration">${lesson.duration || 'N/A'}</span>
                                    <span class="start-btn">Start</span>
                                </div>
                            </a>
                        `;
                    });
                } else {
                    html += `
                        <div style="padding: 12px; color: var(--text-muted); font-size: 0.9rem; text-align: center;">
                            <i class="fas fa-info-circle"></i> No lessons available yet
                        </div>
                    `;
                }
                
                html += `
                        </div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    // ===== TOGGLE UNIT =====
    window.toggleUnit = function(headerElement) {
        const card = headerElement.closest('.unit-card');
        const topicsList = card.querySelector('.topics-list');
        const toggleIcon = card.querySelector('.toggle-icon');
        
        topicsList.classList.toggle('open');
        toggleIcon.classList.toggle('open');
    };

    // ===== TOGGLE TOPIC =====
    window.toggleTopic = function(headerElement) {
        const topic = headerElement.closest('.topic-item');
        const lessonsList = topic.querySelector('.lessons-list');
        const toggleIcon = topic.querySelector('.toggle-icon-small');
        
        lessonsList.classList.toggle('open');
        toggleIcon.classList.toggle('open');
    };

    // ===== HANDLE LESSON CLICKS =====
    function setupLessonClickHandlers() {
        document.querySelectorAll('.lesson-item').forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // If it's a placeholder link (#), prevent navigation
                if (!href || href === '#') {
                    e.preventDefault();
                    alert('🚧 This lesson is coming soon!');
                    return;
                }
                
                // If it's a valid link, add loading indicator
                this.style.opacity = '0.6';
                this.style.pointerEvents = 'none';
                
                console.log('📖 Opening lesson:', this.dataset.lessonId || 'unknown');
            });
        });
    }

    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', function(e) {
        // Escape to go back to dashboard
        if (e.key === 'Escape') {
            window.location.href = '../../pages/dashboard.html';
        }
    });

    // ===== ANIMATE STATS ON LOAD =====
    function animateStats() {
        const stats = document.querySelectorAll('.subject-stats span');
        stats.forEach(function(stat, index) {
            setTimeout(function() {
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        });
    }

    // ===== INITIALIZE =====
    function init() {
        console.log('🐍 Initializing Python page...');
        console.log('📊 Data:', window.PYTHON_DATA);
        
        renderBanner();
        renderUnits();
        
        // Setup event handlers after render
        setTimeout(function() {
            setupLessonClickHandlers();
        }, 100);
        
        // Animate stats
        setTimeout(animateStats, 300);

        // Log success
        const data = window.PYTHON_DATA;
        console.log(`✅ ${data.subjectName} page loaded successfully!`);
        console.log(`📚 ${data.stats.units} Units with ${data.stats.topics} topics and ${data.stats.lessons} lessons`);
        console.log('💡 Click unit headers to expand/collapse topics');
        console.log('💡 Press ESC to return to dashboard');
    }

    // Run initialization
    init();
});