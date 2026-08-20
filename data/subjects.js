// ============================================
// 📚 ALL SUBJECTS METADATA
// This file contains all subject information
// ============================================

const SUBJECTS_DATA = {
    python: {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        color: '#306998',
        description: 'Learn Python programming from basics to advanced concepts.',
        meta: {
            difficulty: 'Beginner to Advanced',
            category: 'Programming',
            lessonsCount: 3
        }
    },
    java: {
        id: 'java',
        name: 'Java',
        icon: '☕',
        color: '#f89820',
        description: 'Master Java for enterprise applications and Android development.',
        meta: {
            difficulty: 'Intermediate',
            category: 'Programming',
            lessonsCount: 2
        }
    },
    javascript: {
        id: 'javascript',
        name: 'JavaScript',
        icon: '🟨',
        color: '#f7df1e',
        description: 'Build interactive websites and web applications with JavaScript.',
        meta: {
            difficulty: 'Beginner',
            category: 'Web Development',
            lessonsCount: 1
        }
    },
    cpp: {
        id: 'cpp',
        name: 'C++',
        icon: '⚙️',
        color: '#00599c',
        description: 'Learn C++ for system programming, game development, and performance-critical applications.',
        meta: {
            difficulty: 'Advanced',
            category: 'Programming',
            lessonsCount: 1
        }
    },
    c: {
        id: 'c',
        name: 'C Language',
        icon: '🔵',
        color: '#a8b9cc',
        description: 'Master the fundamentals of C programming - the foundation of modern computing.',
        meta: {
            difficulty: 'Intermediate',
            category: 'Programming',
            lessonsCount: 1
        }
    },
    'data-mining': {
        id: 'data-mining',
        name: 'Data Mining',
        icon: '📊',
        color: '#4fc3f7',
        description: 'Discover patterns, insights, and knowledge from large datasets.',
        meta: {
            difficulty: 'Intermediate',
            category: 'Data Science',
            lessonsCount: 1
        }
    },
    'software-engineering': {
        id: 'software-engineering',
        name: 'Software Engineering',
        icon: '🧑‍💻',
        color: '#66bb6a',
        description: 'Learn software design principles, development methodologies, and best practices.',
        meta: {
            difficulty: 'Intermediate',
            category: 'Engineering',
            lessonsCount: 1
        }
    },
    'gender-studies': {
        id: 'gender-studies',
        name: 'Gender Studies',
        icon: '🚺',
        color: '#ec407a',
        description: 'Explore gender perspectives, equality, and inclusion in society and technology.',
        meta: {
            difficulty: 'Beginner',
            category: 'Social Sciences',
            lessonsCount: 1
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUBJECTS_DATA;
}