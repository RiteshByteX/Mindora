// ============================================
// 🟨 JAVASCRIPT - Topics & Lessons Metadata
// ============================================

const JAVASCRIPT_DATA = {
    subjectId: 'javascript',
    subjectName: 'JavaScript',
    icon: '🟨',
    description: 'Build interactive websites and web applications with JavaScript.',
    
    topics: [
        {
            id: '1.1',
            title: 'JavaScript Fundamentals',
            description: 'Learn the basics of JavaScript programming',
            lessons: [
                {
                    id: '1.1.1',
                    title: 'JavaScript Basics',
                    description: 'Variables, functions, DOM manipulation, and events',
                    file: '1.1.1.html',
                    duration: '20 min'
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = JAVASCRIPT_DATA;
}