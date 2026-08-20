// ============================================
// ⚙️ C++ - Topics & Lessons Metadata
// ============================================

const CPP_DATA = {
    subjectId: 'cpp',
    subjectName: 'C++',
    icon: '⚙️',
    description: 'Learn C++ for system programming, game development, and performance-critical applications.',
    
    topics: [
        {
            id: '1.1',
            title: 'C++ Fundamentals',
            description: 'Get started with C++ programming',
            lessons: [
                {
                    id: '1.1.1',
                    title: 'C++ Basics',
                    description: 'Syntax, variables, data types, and basic I/O',
                    file: '1.1.1.html',
                    duration: '20 min'
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CPP_DATA;
}