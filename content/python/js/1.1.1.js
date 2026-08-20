// ============================================
// 📖 LESSON CONTENT LOADER
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // ===== PRELOADER =====
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    if (preloader) preloader.classList.add("hidden");
  });

  // ===== LESSON DATA =====
  const lessonData = {
    id: "1.1.1",
    title: "Introduction to Python",
    duration: "15 min",
    totalLessons: 31,
    currentLesson: 1,
    content: `
            <div class="lesson-header">
                <span class="lesson-id">Lesson 1.1.1</span>
                <h1>Introduction to Python</h1>
                <div class="lesson-meta">
                    <span><i class="fas fa-clock"></i> 15 min</span>
                    <span><i class="fas fa-signal"></i> Beginner</span>
                    <span><i class="fas fa-tag"></i> Fundamentals</span>
                </div>
            </div>

            <div class="lesson-body">

                <!-- ===== SECTION: Introduction ===== -->
                <p>Python is a high-level, interpreted, general-purpose programming language. It was created by Guido van Rossum and first released in 1991.</p>
                
                <p>Python is popular because its syntax is simple, readable, and easy to learn. It is used by beginners as well as professional developers.</p>
                
                <p>Python is designed to be simple, readable, and easy to learn. It is one of the most popular programming languages used in web development, data science, artificial intelligence, machine learning, automation, and software development.</p>

                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Python is an interpreted, high-level programming language that emphasizes code readability through its simple and clean syntax.
                </div>

                <!-- ===== SECTION: History ===== -->
                <h2>History of Python</h2>
                <p>Python is a high-level, general-purpose programming language created by Guido van Rossum. Its development began in the late 1980s, and the first public version was released in 1991.</p>

                <h3>🐍 Timeline of Python Development</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Development</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1989</td><td>Guido van Rossum started developing Python at CWI (Centrum Wiskunde & Informatica) in the Netherlands.</td></tr>
                        <tr><td>1991</td><td>Python 0.9.0 was released publicly. It already included classes, functions, exceptions, and core data types such as lists and dictionaries.</td></tr>
                        <tr><td>1994</td><td>Python 1.0 was released. It introduced important features such as lambda, map, filter, and reduce.</td></tr>
                        <tr><td>2000</td><td>Python 2.0 was released. It introduced garbage collection, list comprehensions, and Unicode support.</td></tr>
                        <tr><td>2001</td><td>The Python Software Foundation (PSF) was established to support and promote Python.</td></tr>
                        <tr><td>2008</td><td>Python 3.0 was released. It was a major redesign that improved the language and removed several older features.</td></tr>
                        <tr><td>2010</td><td>Python 2.7 was released and became the final major Python 2 release.</td></tr>
                        <tr><td>2015</td><td>Python 3.5 introduced features such as async and await syntax.</td></tr>
                        <tr><td>2020</td><td>Official support for Python 2 ended. Python 3 became the standard version.</td></tr>
                        <tr><td>2022</td><td>Python 3.11 was released with significant performance improvements.</td></tr>
                        <tr><td>2024</td><td>Python 3.13 was released with improvements including experimental free-threaded Python and a JIT compiler.</td></tr>
                        <tr><td>2025</td><td>Python 3.14 development/release cycle continued with further language and performance improvements.</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box">
                    <strong>💡 Key Insight:</strong> Python has evolved significantly over three decades, with Python 3 becoming the standard version after Python 2 support ended in 2020.
                </div>

                <!-- ===== SECTION: Creator ===== -->
                <h2>👨‍💻 Creator of Python</h2>
                <p><strong>Guido van Rossum</strong> is the creator of Python.</p>
                <ul>
                    <li><strong>Born:</strong> January 31, 1956</li>
                    <li><strong>Nationality:</strong> Dutch</li>
                    <li><strong>Started Python:</strong> December 1989</li>
                    <li><strong>First public release:</strong> 1991</li>
                    <li><strong>Nickname:</strong> Benevolent Dictator For Life (BDFL) — a title he held for many years while leading Python's development.</li>
                    <li><strong>Developed at:</strong> CWI (Centrum Wiskunde & Informatica) 🇳🇱 Location: Amsterdam, Netherlands</li>
                    <li>He stepped down as Python's BDFL in 2018.</li>
                </ul>

                <h3>Why did Guido create Python?</h3>
                <p>Guido wanted to create a language that was:</p>
                <ul>
                    <li>Easy to read and understand</li>
                    <li>Simple to write</li>
                    <li>Powerful enough for real-world programming</li>
                    <li>Better suited for rapid development</li>
                    <li>More convenient than the languages he was using at the time</li>
                </ul>
                <p>Python was influenced by the ABC programming language, which Guido had previously worked on.</p>

                <!-- ===== SECTION: Features ===== -->
                <h2>Features of Python</h2>
                <p>Python has many features that make it one of the most popular programming languages. Below is a simple but detailed explanation suitable for class notes, exams, and viva preparation.</p>

                <div class="feature-grid">
                    <div class="feature-item">
                        <span class="feature-icon">📖</span>
                        <span class="feature-label">Simple & Easy</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">⚡</span>
                        <span class="feature-label">Interpreted</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">📈</span>
                        <span class="feature-label">High-Level</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🧩</span>
                        <span class="feature-label">Object-Oriented</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🌍</span>
                        <span class="feature-label">Portable</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🔓</span>
                        <span class="feature-label">Open Source</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">📚</span>
                        <span class="feature-label">Large Library</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🔌</span>
                        <span class="feature-label">Extensible</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🔄</span>
                        <span class="feature-label">Dynamically Typed</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">👥</span>
                        <span class="feature-label">Community Support</span>
                    </div>
                </div>

                <!-- Feature 1 -->
                <h3>1. Simple and Easy to Learn</h3>
                <p>Python has a simple and readable syntax. Its syntax is close to normal English, so beginners can learn it easily.</p>
                <div class="code-block">
                    <span class="comment"># Simple Python program</span><br>
                    print(<span class="string">"Hello World"</span>)
                </div>
                <p>In many other programming languages, displaying a message requires more lines of code. Python can do it with just one line.</p>
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Easy for beginners</li>
                    <li>Easy to read and understand</li>
                    <li>Easy to write</li>
                    <li>Requires fewer lines of code</li>
                    <li>Reduces programming complexity</li>
                </ul>
                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br>
                    print(<span class="string">"Hello"</span>, name)<br><br>
                    <span class="comment"># Output: Hello Ritesh</span>
                </div>
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python is easy to learn because its syntax is simple and similar to the English language.
                </div>

                <!-- Feature 2 -->
                <h3>2. Interpreted Language</h3>
                <p>Python is an interpreted programming language. The Python interpreter executes Python instructions at runtime.</p>
                
                <p><strong>A simplified view is:</strong></p>
                <div class="diagram-box">
                    <div class="diagram">
                        <div class="diagram-row">
                            <div class="diagram-box-item">Python Source Code</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Python Interpreter</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Execution</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Output</div>
                        </div>
                    </div>
                </div>
                
                <p><strong>For example:</strong></p>
                <div class="code-block">
                    a = <span class="number">10</span><br>
                    b = <span class="number">20</span><br>
                    print(a + b)<br><br>
                    <span class="comment"># The Python interpreter processes the program and produces the output</span><br>
                    <span class="comment"># Output: 30</span>
                </div>
                
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Easy to test programs</li>
                    <li>Errors can be identified during execution</li>
                    <li>Faster development</li>
                    <li>No separate compilation step required by the programmer</li>
                </ul>
                
                <div class="definition-box">
                    <strong>Important Note</strong><br>
                    In basic terms, Python is called interpreted because the Python interpreter executes the program. Internally, standard Python implementations such as CPython first compile source code to bytecode, which is then executed by the Python virtual machine.
                </div>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python programs are executed by the Python interpreter, making testing and development convenient.
                </div>
                 <!-- ===== FEATURE 3 ===== -->
                <h2>3. High-Level Language</h2>
                <p>Python is a high-level programming language.</p>
                <p>A high-level language allows programmers to write programs without dealing directly with hardware-level instructions, CPU registers, or memory addresses.</p>
                
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    a = <span class="number">10</span><br>
                    b = <span class="number">20</span><br>
                    sum = a + b<br>
                    print(sum)<br><br>
                    <span class="comment"># Output: 30</span>
                </div>
                
                <p>We simply tell Python what we want to do. We don't need to manually manage the memory used by a and b.</p>
                
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Easy to understand</li>
                    <li>Easier programming</li>
                    <li>Less code</li>
                    <li>No direct hardware management</li>
                    <li>Faster application development</li>
                </ul>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python allows programmers to concentrate on solving problems instead of dealing with machine-level details.
                </div>

                <!-- ===== FEATURE 4 ===== -->
                <h2>4. Object-Oriented</h2>
                <p>Python supports Object-Oriented Programming (OOP).</p>
                <p>OOP is a programming approach where programs are designed using classes and objects.</p>
                
                <p>Python supports concepts such as:</p>
                <ul>
                    <li>Class</li>
                    <li>Object</li>
                    <li>Inheritance</li>
                    <li>Polymorphism</li>
                    <li>Encapsulation</li>
                    <li>Abstraction</li>
                </ul>
                
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">class</span> <span class="function">Student</span>:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span> <span class="function">display</span>(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"I am a student"</span>)<br><br>
                    s1 = Student()<br>
                    s1.display()<br><br>
                    <span class="comment"># Output: I am a student</span>
                </div>
                
                <p><strong>Here:</strong></p>
                <ul>
                    <li>Student → Class</li>
                    <li>s1 → Object</li>
                    <li>display() → Method</li>
                </ul>
                
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Code can be organized properly</li>
                    <li>Code can be reused</li>
                    <li>Easier to maintain large programs</li>
                    <li>Useful for real-world applications</li>
                </ul>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python supports OOP, which helps programmers organize programs using classes and objects.
                </div>

                <!-- ===== FEATURE 5 ===== -->
                <h2>5. Portable</h2>
                <p>Python is a portable language.</p>
                <p>This means a Python program can generally be executed on different operating systems without changing the source code significantly.</p>
                
                <p>Python supports platforms such as:</p>
                <ul>
                    <li>Windows</li>
                    <li>Linux</li>
                    <li>macOS</li>
                </ul>
                
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    print(<span class="string">"Welcome to Python"</span>)
                </div>
                
                <p>The same basic program can run on Windows, Linux, and macOS when a suitable Python environment is installed.</p>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Write the Python program once and run it on different operating systems with little or no modification.
                </div>

                <!-- ===== FEATURE 6 ===== -->
                <h2>6. Open Source</h2>
                <p>Python is open-source software.</p>
                <p>This means its source code is publicly available, and Python can be used freely according to its license.</p>
                <p>Python is maintained by a large community and is managed by the Python Software Foundation (PSF).</p>
                
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Free to use</li>
                    <li>Freely available</li>
                    <li>Community contributions</li>
                    <li>Developers can study its implementation</li>
                    <li>Continuous improvement</li>
                </ul>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python is freely available and supported by a worldwide developer community.
                </div>

                <!-- ===== FEATURE 7 ===== -->
                <h2>7. Large Standard Library</h2>
                <p>Python comes with a large collection of built-in modules and libraries.</p>
                <p>These modules provide ready-made functions, so programmers don't have to write everything from scratch.</p>
                
                <p><strong>Important modules:</strong></p>
                <table>
                    <thead>
                        <tr><th>Module</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>math</td><td>Mathematical operations</td></tr>
                        <tr><td>random</td><td>Generate random values</td></tr>
                        <tr><td>os</td><td>Operating-system related operations</td></tr>
                        <tr><td>datetime</td><td>Date and time operations</td></tr>
                        <tr><td>sys</td><td>Python system-related functions</td></tr>
                        <tr><td>json</td><td>Working with JSON data</td></tr>
                        <tr><td>re</td><td>Regular expressions</td></tr>
                        <tr><td>tkinter</td><td>GUI development</td></tr>
                    </tbody>
                </table>
                
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> math<br><br>
                    print(math.sqrt(<span class="number">25</span>))<br><br>
                    <span class="comment"># Output: 5.0</span>
                </div>
                
                <p>Instead of creating our own square-root algorithm, we can use the existing math module.</p>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python provides many ready-made modules that make programming faster and easier.
                </div>

                <!-- ===== FEATURE 8 ===== -->
                <h2>8. Extensible</h2>
                <p>Python is an extensible language.</p>
                <p>It can work together with programs or code written in other programming languages such as C and C++.</p>
                
                <p>This is useful when a programmer needs:</p>
                <ul>
                    <li>Better performance</li>
                    <li>Existing code written in another language</li>
                    <li>Access to system-level functionality</li>
                </ul>
                
                <p>For example, many Python libraries use implementations written in C or C++ internally for better performance.</p>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python can be extended by using code written in other programming languages.
                </div>

                <!-- ===== FEATURE 9 ===== -->
                <h2>9. Dynamically Typed</h2>
                <p>Python is a dynamically typed language.</p>
                <p>This means we don't have to specify the data type of a variable when creating it. Python determines the type automatically at runtime.</p>
                
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    x = <span class="number">100</span><br>
                    print(x)<br><br>
                    <span class="comment"># Here Python automatically understands that x contains an integer</span><br>
                    <span class="comment"># Output: 100</span>
                </div>
                
                <p>We can also assign another type later:</p>
                <div class="code-block">
                    x = <span class="number">100</span><br>
                    x = <span class="string">"Python"</span>
                </div>
                
                <p>Both statements are valid.</p>
                <ul>
                    <li><strong>Initially:</strong> x → integer</li>
                    <li><strong>Later:</strong> x → string</li>
                </ul>
                
                <p><strong>Compare with C:</strong></p>
                <div class="code-block">
                    <span class="comment">// In C:</span><br>
                    <span class="keyword">int</span> x = <span class="number">100</span>;<br><br>
                    <span class="comment"># In Python:</span><br>
                    x = <span class="number">100</span>
                </div>
                
                <p>Python doesn't require us to write int.</p>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python automatically determines the type of a variable during program execution.
                </div>

                <!-- ===== FEATURE 10 ===== -->
                <h2>10. Huge Community Support</h2>
                <p>Python has a large worldwide developer community.</p>
                <p>Millions of programmers use Python for different purposes such as:</p>
                <ul>
                    <li>Web development</li>
                    <li>Data science</li>
                    <li>Artificial intelligence</li>
                    <li>Machine learning</li>
                    <li>Automation</li>
                    <li>Cybersecurity</li>
                    <li>Scientific computing</li>
                </ul>
                
                <p>Because of its large community, there are many:</p>
                <ul>
                    <li>Tutorials</li>
                    <li>Books</li>
                    <li>Documentation</li>
                    <li>Online courses</li>
                    <li>Forums</li>
                    <li>Open-source projects</li>
                    <li>Third-party libraries</li>
                </ul>
                
                <p><strong>Popular Python libraries include:</strong></p>
                <ul>
                    <li>NumPy → Numerical computing</li>
                    <li>Pandas → Data analysis</li>
                    <li>Matplotlib → Data visualization</li>
                    <li>Django → Web development</li>
                    <li>Flask → Web development</li>
                    <li>TensorFlow → Machine learning</li>
                    <li>PyTorch → Machine learning</li>
                </ul>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    A large community makes it easier to learn Python, find solutions to problems, and use ready-made libraries.
                </div>

                <!-- ===== ADDITIONAL FEATURES ===== -->
                <h2>⭐ Additional Important Features</h2>

                <!-- Feature 11 -->
                <h3>11. Automatic Memory Management</h3>
                <p>Python provides automatic memory management.</p>
                <p>Programmers generally don't need to manually allocate and release memory.</p>
                <p>Python uses mechanisms such as garbage collection to help manage unused objects.</p>
                
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    x = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>]  <span class="comment"># Python manages the memory required for this list</span>
                </div>
                
                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python automatically manages memory, making programming easier and reducing certain types of memory-management errors.
                </div>

                <!-- Feature 12 -->
                <h3>12. GUI Programming</h3>
                <p>Python can be used to create Graphical User Interfaces (GUI).</p>
                
                <p><strong>Some GUI libraries include:</strong></p>
                <ul>
                    <li>Tkinter</li>
                    <li>PyQt</li>
                    <li>Kivy</li>
                </ul>
                
                <p><strong>Example using Tkinter:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> tkinter<br><br>
                    window = tkinter.Tk()<br>
                    window.title(<span class="string">"My Application"</span>)<br>
                    window.mainloop()
                </div>

                <!-- Feature 13 -->
                <h3>13. Database Support</h3>
                <p>Python can connect with different databases.</p>
                
                <p><strong>Examples include:</strong></p>
                <ul>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>PostgreSQL</li>
                    <li>Oracle</li>
                    <li>MongoDB</li>
                </ul>
                
                <p>This makes Python useful for developing database-based applications.</p>

                <!-- ===== SUMMARY TABLE ===== -->
                <h2>📌 Summary of Python Features</h2>
                
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Simple</td><td>Easy syntax and easy to learn</td></tr>
                        <tr><td>Interpreted</td><td>Executed by the Python interpreter</td></tr>
                        <tr><td>High-level</td><td>Hides low-level hardware details</td></tr>
                        <tr><td>Object-oriented</td><td>Supports classes and objects</td></tr>
                        <tr><td>Portable</td><td>Runs on different operating systems</td></tr>
                        <tr><td>Open source</td><td>Freely available and community-supported</td></tr>
                        <tr><td>Large library</td><td>Provides many ready-made modules</td></tr>
                        <tr><td>Extensible</td><td>Can work with languages like C/C++</td></tr>
                        <tr><td>Dynamically typed</td><td>Variable types are determined at runtime</td></tr>
                        <tr><td>Community support</td><td>Large worldwide developer community</td></tr>
                        <tr><td>Automatic memory management</td><td>Python manages memory automatically</td></tr>
                        <tr><td>Database support</td><td>Can work with many databases</td></tr>
                        <tr><td>GUI support</td><td>Can create graphical applications</td></tr>
                    </tbody>
                </table>


                
                <!-- ===== SECTION: Applications ===== -->
                <h2>Applications of Python</h2>
                <p>Python is a general-purpose programming language, so it can be used in many different fields. Its simple syntax, large number of libraries, and strong community support make it useful for both beginners and professional developers.</p>

                <!-- ===== APPLICATION 1 ===== -->
                <h3>1. Artificial Intelligence (AI)</h3>
                <p>Python is widely used in Artificial Intelligence to develop systems that can perform tasks that normally require human intelligence.</p>

                <p><strong>Python provides libraries and frameworks such as:</strong></p>
                <ul>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Scikit-learn</li>
                    <li>Keras</li>
                </ul>

                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Voice assistants</li>
                    <li>Face recognition</li>
                    <li>Chatbots</li>
                    <li>Natural Language Processing (NLP)</li>
                    <li>Image recognition</li>
                    <li>AI-based applications</li>
                </ul>

                <p><strong>Simple example:</strong></p>
                <div class="code-block">
                    print(<span class="string">"AI Application"</span>)
                </div>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python is used to create intelligent systems that can learn, understand, and make decisions.
                </div>

                <!-- ===== APPLICATION 2 ===== -->
                <h3>2. Machine Learning</h3>
                <p>Python is one of the most popular languages for Machine Learning (ML).</p>
                <p>Machine Learning allows computers to learn patterns from data and make predictions without being explicitly programmed for every situation.</p>

                <p><strong>Popular libraries:</strong></p>
                <ul>
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                </ul>

                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Spam email detection</li>
                    <li>Disease prediction</li>
                    <li>Recommendation systems</li>
                    <li>Fraud detection</li>
                    <li>House price prediction</li>
                    <li>Customer classification</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">from</span> sklearn.tree <span class="keyword">import</span> DecisionTreeClassifier
                </div>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python is used to train computers using data so they can make predictions or decisions.
                </div>

                <!-- ===== APPLICATION 3 ===== -->
                <h3>3. Data Science</h3>
                <p>Python is extensively used in Data Science for collecting, cleaning, analyzing, and visualizing data.</p>

                <p><strong>Important libraries:</strong></p>
                <table>
                    <thead>
                        <tr><th>Library</th><th>Use</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>NumPy</td><td>Numerical calculations</td></tr>
                        <tr><td>Pandas</td><td>Data analysis</td></tr>
                        <tr><td>Matplotlib</td><td>Data visualization</td></tr>
                        <tr><td>Seaborn</td><td>Statistical visualization</td></tr>
                    </tbody>
                </table>

                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Analyzing customer data</li>
                    <li>Sales analysis</li>
                    <li>Finding trends</li>
                    <li>Creating graphs</li>
                    <li>Business reports</li>
                    <li>Predictive analysis</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> pandas <span class="keyword">as</span> pd<br><br>
                    data = pd.read_csv(<span class="string">"students.csv"</span>)<br>
                    print(data.head())
                </div>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python helps convert raw data into useful information and insights.
                </div>

                <!-- ===== APPLICATION 4 ===== -->
                <h3>4. Web Development</h3>
                <p>Python is also used to develop websites and web applications.</p>

                <p><strong>Popular Python web frameworks include:</strong></p>
                <ul>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>FastAPI</li>
                </ul>

                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Online shopping websites</li>
                    <li>Social media applications</li>
                    <li>Banking applications</li>
                    <li>APIs</li>
                    <li>Educational websites</li>
                    <li>Content management systems</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">from</span> flask <span class="keyword">import</span> Flask<br><br>
                    app = Flask(__name__)<br><br>
                    @app.route(<span class="string">"/"</span>)<br>
                    <span class="keyword">def</span> <span class="function">home</span>():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="string">"Hello World"</span>
                </div>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python frameworks allow developers to build websites, web applications, and APIs.
                </div>

                <!-- ===== APPLICATION 5 ===== -->
                <h3>5. Automation</h3>
                <p>Python is very useful for automation.</p>
                <p>Automation means using a program to perform repetitive tasks automatically instead of doing them manually.</p>

                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Renaming files</li>
                    <li>Sending emails</li>
                    <li>Reading and processing files</li>
                    <li>Generating reports</li>
                    <li>Automating data entry</li>
                    <li>Downloading files</li>
                    <li>Web scraping</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> os<br><br>
                    <span class="keyword">for</span> file <span class="keyword">in</span> os.listdir():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(file)<br><br>
                    <span class="comment"># This program displays the files in the current directory</span>
                </div>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python can automatically perform repetitive tasks and save time and effort.
                </div>

                <!-- ===== APPLICATION 6 ===== -->
                <h3>6. Robotics</h3>
                <p>Python is used in robotics for programming and controlling robots.</p>

                <p><strong>Python can be used for:</strong></p>
                <ul>
                    <li>Robot control</li>
                    <li>Sensor data processing</li>
                    <li>Computer vision</li>
                    <li>Motion planning</li>
                    <li>AI-based robots</li>
                </ul>

                <p>Python is also commonly used with platforms such as Raspberry Pi and robotics frameworks.</p>

                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Autonomous robots</li>
                    <li>Industrial robots</li>
                    <li>Smart robots</li>
                    <li>Robot navigation</li>
                    <li>Drone systems</li>
                </ul>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python can help robots receive information from sensors, process it, and perform actions.
                </div>

                <!-- ===== APPLICATION 7 ===== -->
                <h3>7. Cyber Security</h3>
                <p>Python is widely used in Cyber Security because it makes it easy to automate security-related tasks and develop security tools.</p>

                <p><strong>Uses:</strong></p>
                <ul>
                    <li>Network monitoring</li>
                    <li>Log analysis</li>
                    <li>Security automation</li>
                    <li>Vulnerability assessment</li>
                    <li>Malware analysis</li>
                    <li>Penetration-testing tools</li>
                    <li>Password/security auditing</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> socket<br><br>
                    hostname = <span class="string">"example.com"</span><br>
                    ip = socket.gethostbyname(hostname)<br><br>
                    print(ip)<br><br>
                    <span class="comment"># This example demonstrates how Python can perform basic network-related operations</span>
                </div>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python is used by cybersecurity professionals to automate security tasks and analyze systems and networks.
                </div>

                <!-- ===== APPLICATION 8 ===== -->
                <h3>8. Scientific Computing</h3>
                <p>Python is heavily used in scientific and mathematical computing.</p>
                <p>Researchers use Python to perform complex calculations, analyze experimental data, and create visualizations.</p>

                <p><strong>Important libraries:</strong></p>
                <ul>
                    <li>NumPy</li>
                    <li>SciPy</li>
                    <li>Matplotlib</li>
                    <li>SymPy</li>
                </ul>

                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Physics calculations</li>
                    <li>Mathematical simulations</li>
                    <li>Chemistry research</li>
                    <li>Astronomy</li>
                    <li>Engineering calculations</li>
                    <li>Scientific data analysis</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> math<br><br>
                    result = math.sin(math.pi / <span class="number">2</span>)<br>
                    print(result)<br><br>
                                    <span class="comment"># Output: 1.0</span>
                </div>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python helps scientists and engineers perform calculations, simulations, and data analysis.
                </div>

                <!-- ===== APPLICATION 9 ===== -->
                <h3>9. Game Development</h3>
                <p>Python can also be used for game development.</p>
                <p>One popular Python library for games is Pygame.</p>

                <p><strong>Uses:</strong></p>
                <ul>
                    <li>2D games</li>
                    <li>Educational games</li>
                    <li>Game prototypes</li>
                    <li>Simple simulations</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> pygame<br><br>
                    pygame.init()<br>
                    print(<span class="string">"Game Started"</span>)<br>
                    pygame.quit()
                </div>

                <p>Python is especially useful for learning game-development concepts because its syntax is relatively simple.</p>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python can be used to create games, especially 2D games and prototypes.
                </div>

                <!-- ===== APPLICATION 10 ===== -->
                <h3>10. Cloud Computing</h3>
                <p>Python is widely used in Cloud Computing.</p>
                <p>Cloud platforms provide Python tools and SDKs that allow developers to create, deploy, and manage cloud applications.</p>

                <p><strong>Python is commonly used with services from:</strong></p>
                <ul>
                    <li>Amazon Web Services (AWS)</li>
                    <li>Microsoft Azure</li>
                    <li>Google Cloud</li>
                </ul>

                <p><strong>Uses:</strong></p>
                <ul>
                    <li>Cloud automation</li>
                    <li>Serverless applications</li>
                    <li>Cloud APIs</li>
                    <li>Data processing</li>
                    <li>Application deployment</li>
                    <li>Infrastructure management</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                <span class="comment"># Python can be used to write scripts that automatically create,</span><br>
                <span class="comment"># configure, or manage cloud resources.</span>
                </div>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Python helps developers build, automate, and manage applications and services running in the cloud.
                </div>

                <!-- ===== SUMMARY TABLE ===== -->
                <h2>📌 Summary Table</h2>

                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Application</th>
                            <th>Main Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>Artificial Intelligence</td><td>Building intelligent systems</td></tr>
                        <tr><td>2</td><td>Machine Learning</td><td>Prediction and pattern recognition</td></tr>
                        <tr><td>3</td><td>Data Science</td><td>Data analysis and visualization</td></tr>
                        <tr><td>4</td><td>Web Development</td><td>Websites, web apps, and APIs</td></tr>
                        <tr><td>5</td><td>Automation</td><td>Automating repetitive tasks</td></tr>
                        <tr><td>6</td><td>Robotics</td><td>Programming and controlling robots</td></tr>
                        <tr><td>7</td><td>Cyber Security</td><td>Security automation and analysis</td></tr>
                        <tr><td>8</td><td>Scientific Computing</td><td>Mathematical and scientific calculations</td></tr>
                        <tr><td>9</td><td>Game Development</td><td>Creating games and simulations</td></tr>
                        <tr><td>10</td><td>Cloud Computing</td><td>Building and managing cloud applications</td></tr>
                    </tbody>
                </table>
            </div>
        `,
  };

  // ===== RENDER LESSON =====
  function renderLesson() {
    const container = document.getElementById("lessonContent");
    if (!container) return;

    container.innerHTML = lessonData.content;
  }

  // ===== UPDATE PROGRESS =====
  function updateProgress() {
    const percentage =
      (lessonData.currentLesson / lessonData.totalLessons) * 100;
    const progressFill = document.querySelector(".progress-fill");
    if (progressFill) {
      progressFill.style.width = percentage + "%";
    }
  }

  // ===== KEYBOARD SHORTCUTS =====
  document.addEventListener("keydown", function (e) {
    // Left arrow = Previous lesson
    if (e.key === "ArrowLeft" && e.ctrlKey) {
      e.preventDefault();
      window.location.href = "index.html";
    }
    // Right arrow = Next lesson
    if (e.key === "ArrowRight" && e.ctrlKey) {
      e.preventDefault();
      window.location.href = "1.1.2.html";
    }
    // ESC = Back to course
    if (e.key === "Escape") {
      window.location.href = "index.html";
    }
  });

  // ===== INITIALIZE =====
  renderLesson();
  updateProgress();

  console.log("📖 Lesson 1.1.1: Introduction to Python loaded!");
  console.log("💡 Use Ctrl+←/→ to navigate between lessons");
  console.log("💡 Press ESC to return to the course page");
});
