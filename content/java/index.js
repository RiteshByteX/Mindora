// ============================================
// ☕ JAVA - Topics & Lessons Metadata
// ============================================

const JAVA_DATA = {
    subjectId: 'java',
    subjectName: 'Java',
    icon: '☕',
    description: 'Master Java for enterprise applications and Android development.',
    
    topics: [
        {
            id: '1.1',
            title: 'Java Fundamentals',
            description: 'Learn the core concepts of Java programming',
            lessons: [
                {
                    id: '1.1.1',
                    title: 'Java Basics',
                    description: 'Introduction to Java, JVM, and basic syntax',
                    file: '1.1.1.html',
                    duration: '20 min'
                }
            ]
        },
        {
            id: '1.2',
            title: 'Object-Oriented Programming',
            description: 'Master OOP concepts in Java',
            lessons: [
                {
                    id: '1.2.1',
                    title: 'Classes and Objects',
                    description: 'Creating classes, objects, and understanding OOP principles',
                    file: '1.2.1.html',
                    duration: '25 min'
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = JAVA_DATA;
}