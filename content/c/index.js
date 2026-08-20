// ============================================
// 🔵 C LANGUAGE - Topics & Lessons Metadata
// ============================================

const C_DATA = {
    subjectId: 'c',
    subjectName: 'C Language',
    icon: '🔵',
    description: 'Master the fundamentals of C programming - the foundation of modern computing.',
    
    topics: [
        {
            id: '1.1',
            title: 'C Fundamentals',
            description: 'Learn the basics of C programming',
            lessons: [
                {
                    id: '1.1.1',
                    title: 'C Basics',
                    description: 'Introduction to C, syntax, variables, and memory management',
                    file: '1.1.1.html',
                    duration: '20 min'
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = C_DATA;
}