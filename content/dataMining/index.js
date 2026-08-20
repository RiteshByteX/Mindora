// ============================================
// 📊 DATA MINING - Topics & Lessons Metadata
// ============================================

const DATA_MINING_DATA = {
    subjectId: 'data-mining',
    subjectName: 'Data Mining',
    icon: '📊',
    description: 'Discover patterns, insights, and knowledge from large datasets.',
    
    topics: [
        {
            id: '1.1',
            title: 'Data Mining Introduction',
            description: 'Understanding data mining concepts and techniques',
            lessons: [
                {
                    id: '1.1.1',
                    title: 'Introduction to Data Mining',
                    description: 'What is data mining? Key concepts and applications',
                    file: '1.1.1.html',
                    duration: '20 min'
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_MINING_DATA;
}