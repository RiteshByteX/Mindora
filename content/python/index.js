// ============================================
// 🐍 PYTHON - Complete Course Data
// ============================================

const PYTHON_DATA = {
    subjectId: 'python',
    subjectName: 'Python Programming',
    icon: '🐍',
    color: '#306998',
    description: 'Learn Python programming from basics to advanced concepts. Build real-world projects and master one of the most popular programming languages.',
    stats: {
        units: 3,
        topics: 15,
        lessons: 31,
        hours: 90,
        difficulty: 'Beginner to Advanced',
        category: 'Programming'
    },
    units: [
        {
            id: 1,
            title: 'Introduction to Python and Basics',
            description: 'Learn Python fundamentals, syntax, and programming concepts',
            hours: 30,
            topics: [
                {
                    id: '1.1',
                    title: 'Introduction to Python',
                    lessons: [
                        { id: '1.1.1', title: 'Python Overview, History, Features & Applications', description: 'Introduction, History, features & Applications', file: '1.1.1.html', duration: '15 min' },
                        { id: '1.1.2', title: 'Python Environment', description: 'setting up programming environment', file: '1.1.2.html', duration: '20 min' },
                        { id: '1.1.3', title: 'Tokens in Python', description: 'Keywords, Identifiers, Literals, Operators, Delimiters', file: '1.1.3.html', duration: '20 min' },
                        { id: '1.1.4', title: 'Variables in Python', description: 'variables, Scope and Lifetime of Variables', file: '1.1.4.html', duration: '15 min' }
                    ]
                },
                {
                    id: '1.2',
                    title: 'Conditional Statements & Loops',
                    lessons: [
                        { id: '1.2.1', title: 'Conditional Statements', description: '', file: '1.2.1.html', duration: '25 min' },
                        { id: '1.2.2', title: 'Looping in Python', description: 'For, While, Nested loops, Jumping Statements', file: '1.2.2.html', duration: '25 min' },
                        { id: '1.2.3', title: 'Loop Control', description: 'Break and continue statements', file: '1.2.3.html', duration: '15 min' }
                    ]
                },
                {
                    id: '1.3',
                    title: 'Python Sequences',
                    lessons: [
                        { id: '1.3.1', title: 'Lists in Python', description: 'Accessing, modifying, organizing lists, list comprehension', file: '1.3.1.html', duration: '30 min' },
                        { id: '1.3.2', title: 'Tuples & Sets', description: 'Tuple, Set operations and methods', file: '1.3.2.html', duration: '20 min' },
                        { id: '1.3.3', title: 'Dictionaries', description: 'Working with dictionaries, looping, nesting', file: '1.3.3.html', duration: '25 min' },
                        { id: '1.3.4', title: 'Input & Output', description: 'print() and input() functions, comments, code structure', file: '1.3.4.html', duration: '15 min' }
                    ]
                },
                {
                    id: '1.4',
                    title: 'Functions',
                    lessons: [
                        { id: '1.4.1', title: 'Function Basics', description: 'Passing arguments, Return Values, Passing a list', file: '1.4.1.html', duration: '20 min' },
                        { id: '1.4.2', title: 'Advanced Functions', description: 'Arbitrary arguments, Modules, Recursive, Nested functions', file: '1.4.2.html', duration: '25 min' },
                        { id: '1.4.3', title: 'Lambda & Built-in Functions', description: 'Lambda, Map, Filter, Reduce, built-in functions', file: '1.4.3.html', duration: '20 min' }
                    ]
                },
                {
                    id: '1.5',
                    title: 'Classes & OOP',
                    lessons: [
                        { id: '1.5.1', title: 'Classes & Objects', description: 'Creating and using classes, instances, public/private members', file: '1.5.1.html', duration: '25 min' },
                        { id: '1.5.2', title: 'Inheritance & Polymorphism', description: 'Inheritance, types, Polymorphism, Importing classes', file: '1.5.2.html', duration: '30 min' },
                        { id: '1.5.3', title: 'Python Standard Library', description: 'Standard library overview, import statement', file: '1.5.3.html', duration: '15 min' }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: 'Data Analytics',
            description: 'Learn data analytics using NumPy, Pandas, and visualization libraries',
            hours: 30,
            topics: [
                {
                    id: '2.1',
                    title: 'NumPy Fundamentals',
                    lessons: [
                        { id: '2.1.1', title: 'Introduction to NumPy', description: 'Features, environment setup, Ndarray creation', file: '2.1.1.html', duration: '20 min' },
                        { id: '2.1.2', title: 'NumPy Operations', description: 'Array attributes, operations, mathematical functions', file: '2.1.2.html', duration: '25 min' }
                    ]
                },
                {
                    id: '2.2',
                    title: 'Data Visualization with Matplotlib',
                    lessons: [
                        { id: '2.2.1', title: 'Matplotlib Basics', description: 'Figure class, Axes class, line plot, subplots', file: '2.2.1.html', duration: '20 min' },
                        { id: '2.2.2', title: 'Advanced Plots', description: 'Bar, histogram, scatter, pie, box, area charts', file: '2.2.2.html', duration: '30 min' },
                        { id: '2.2.3', title: 'Customizing Plots', description: 'Word cloud, swarm plot, violin graph, titles, labels, legends', file: '2.2.3.html', duration: '25 min' }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: 'GUI Programming and Visualization',
            description: 'Build GUI applications with Tkinter and create visualizations with Seaborn and Plotly',
            hours: 30,
            topics: [
                {
                    id: '3.1',
                    title: 'Tkinter GUI Programming',
                    lessons: [
                        { id: '3.1.1', title: 'Tkinter Basics', description: 'Introduction, installing, creating window, widget classes', file: '3.1.1.html', duration: '20 min' },
                        { id: '3.1.2', title: 'Widgets & Events', description: 'Canvas, geometry managers, images, menus, events', file: '3.1.2.html', duration: '30 min' }
                    ]
                },
                {
                    id: '3.2',
                    title: 'Seaborn & Plotly',
                    lessons: [
                        { id: '3.2.1', title: 'Seaborn Visualization', description: 'Relational, categorical, distribution plots, matrix plots', file: '3.2.1.html', duration: '25 min' },
                        { id: '3.2.2', title: 'Plotly Interactive Charts', description: 'Line, bar, scatter, histogram, violin, gantt, heatmap, 3D', file: '3.2.2.html', duration: '30 min' }
                    ]
                }
            ]
        }
    ]
};

// Make it available globally
window.PYTHON_DATA = PYTHON_DATA;

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PYTHON_DATA;
}