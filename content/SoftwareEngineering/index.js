// ============================================
// 🧑‍💻 SOFTWARE ENGINEERING - Topics & Lessons Metadata
// ============================================

const SOFTWARE_ENGINEERING_DATA = {
    subjectId: 'software-engineering',
    subjectName: 'Software Engineering',
    icon: '🧑‍💻',
    description: 'Learn software design principles, development methodologies, and best practices.',
    
    topics: [
        {
            id: '1.1',
            title: 'Software Engineering Fundamentals',
            description: 'Introduction to software development practices',
            lessons: [
                {
                    id: '1.1.1',
                    title: 'Introduction to Software Engineering',
                    description: 'Software development lifecycle, methodologies, and best practices',
                    file: '1.1.1.html',
                    duration: '20 min'
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SOFTWARE_ENGINEERING_DATA;
}