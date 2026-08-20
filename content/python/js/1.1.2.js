// ============================================
// 📖 LESSON 1.1.2 - Setting Up Python Environment
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PRELOADER =====
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.classList.add('hidden');
    });

    // ===== LESSON DATA =====
    const lessonData = {
        id: '1.1.2',
        title: 'Setting Up Python Programming Environment',
        duration: '20 min',
        totalLessons: 31,
        currentLesson: 2,
        content: `
            <div class="lesson-header">
                <span class="lesson-id">Lesson 1.1.2</span>
                <h1>Setting Up Python Programming Environment</h1>
                <div class="lesson-meta">
                    <span><i class="fas fa-clock"></i> 20 min</span>
                    <span><i class="fas fa-signal"></i> Beginner</span>
                    <span><i class="fas fa-tag"></i> Setup & Installation</span>
                </div>
            </div>

            <div class="lesson-body">

                <p>Before writing Python programs, we need to set up a Python programming environment. A programming environment contains all the software and tools required to write, execute, test, and debug Python programs.</p>

                <!-- ===== SECTION 1: Programming Environment ===== -->
                <h2>1. What is a Programming Environment?</h2>
                <p>A programming environment is a combination of hardware, operating system, Python software, and programming tools used to develop and execute programs.</p>

                <p><strong>A simple structure is:</strong></p>
                <div class="diagram-box">
                    <div class="diagram">
                        <div class="diagram-row">
                            <div class="diagram-box-item">Computer</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Operating System</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Python Interpreter</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Code Editor / IDE</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Python Program</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Execution</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Output</div>
                        </div>
                    </div>
                </div>

                <h3>Main Components</h3>

                <h4>1. Computer</h4>
                <p>The computer provides the hardware required to run Python programs.</p>

                <h4>2. Operating System</h4>
                <p>Python can run on different operating systems, such as:</p>
                <ul>
                    <li>Windows</li>
                    <li>Linux</li>
                    <li>macOS</li>
                </ul>

                <h4>3. Python Interpreter</h4>
                <p>The interpreter is responsible for executing Python programs.</p>

                <h4>4. Code Editor / IDE</h4>
                <p>A code editor or IDE is used to write and manage Python programs.</p>
                <p><strong>Examples:</strong></p>
                <ul>
                    <li>IDLE</li>
                    <li>Visual Studio Code</li>
                    <li>PyCharm</li>
                    <li>Jupyter Notebook</li>
                </ul>

                <h4>5. Program Execution</h4>
                <p>After writing the program, the Python interpreter executes it and produces the output.</p>

                <!-- ===== SECTION 2: Installing Python ===== -->
                <h2>2. Installing Python on Windows</h2>
                <p>To write and execute Python programs on Windows, Python needs to be installed on the computer.</p>

                <h3>Step 1: Download Python</h3>
                <p>Download Python from the official Python website:</p>
                <p><strong>Python Official Website</strong></p>
                <p>Choose the appropriate version for Windows.</p>

                <h3>Step 2: Run the Installer</h3>
                <p>After downloading the installer, open it.</p>
                <p>You will see an option similar to:</p>
                <div class="code-block">
                    ☑ Add Python.exe to PATH
                </div>

                <div class="definition-box">
                    <strong>Important</strong><br>
                    Make sure to check:<br>
                    ☑ Add Python to PATH<br><br>
                    This allows Python commands to be used directly from the Command Prompt.
                </div>

                <h3>Step 3: Install Python</h3>
                <p>Click:</p>
                <div class="code-block">
                    Install Now
                </div>
                <p>The installer will install Python and the required components.</p>
                <p>After installation is complete, Python is ready to use.</p>

                <!-- ===== SECTION 3: Verifying Installation ===== -->
                <h2>3. Verifying Python Installation</h2>
                <p>After installing Python, we should check whether it was installed correctly.</p>

                <h3>Step 1</h3>
                <p>Open Command Prompt.</p>
                <p>You can press:</p>
                <div class="code-block">
                    Windows + R
                </div>
                <p>Then type:</p>
                <div class="code-block">
                    cmd
                </div>
                <p>and press Enter.</p>

                <h3>Step 2</h3>
                <p>Type:</p>
                <div class="code-block">
                    python --version
                </div>
                <p>You may get output such as:</p>
                <div class="code-block">
                    Python 3.13.5
                </div>
                <p>The exact version may be different depending on the version installed.</p>

                <h3>Another command</h3>
                <p>You can also try:</p>
                <div class="code-block">
                    python
                </div>
                <p>If Python is installed correctly, the Python interpreter will start.</p>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    python --version is used to check the installed Python version.
                </div>

                <!-- ===== SECTION 4: Python Interactive Shell ===== -->
                <h2>4. Python Interactive Shell</h2>
                <p>Python provides an Interactive Shell, also called the Python REPL.</p>

                <p><strong>REPL stands for:</strong></p>
                <ul>
                    <li><strong>R</strong> → Read</li>
                    <li><strong>E</strong> → Evaluate</li>
                    <li><strong>P</strong> → Print</li>
                    <li><strong>L</strong> → Loop</li>
                </ul>
                <p>It allows us to enter Python commands and immediately see their results.</p>

                <h3>Starting the Shell</h3>
                <p>Open Command Prompt and type:</p>
                <div class="code-block">
                    python
                </div>
                <p>You will see:</p>
                <div class="code-block">
                    >>>
                </div>
                <p>The <strong>>>></strong> symbol is called the Python prompt.</p>

                <h3>Example</h3>
                <div class="code-block">
                    >>> <span class="number">5</span> + <span class="number">5</span><br>
                    <span class="output">10</span>
                </div>

                <p><strong>Another example:</strong></p>
                <div class="code-block">
                    >>> <span class="number">10</span> * <span class="number">5</span><br>
                    <span class="output">50</span>
                </div>

                <p><strong>Another example:</strong></p>
                <div class="code-block">
                    >>> print(<span class="string">"Hello Python"</span>)<br>
                    <span class="output">Hello Python</span>
                </div>

                <p><strong>Diagram:</strong></p>
                <div class="diagram-box">
                    <div class="diagram">
                        <div class="diagram-row">
                            <div class="diagram-box-item">User Input</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Python Interactive Shell</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Python Interpreter</div>
                            <div class="diagram-arrow">↓</div>
                            <div class="diagram-box-item">Immediate Output</div>
                        </div>
                    </div>
                </div>

                <h3>Advantage</h3>
                <p>The interactive shell is useful for:</p>
                <ul>
                    <li>Testing small pieces of code</li>
                    <li>Learning Python</li>
                    <li>Performing calculations</li>
                    <li>Checking functions</li>
                    <li>Experimenting with Python syntax</li>
                </ul>

                <!-- ===== SECTION 5: Popular IDEs ===== -->
                <h2>5. Popular Python IDEs and Code Editors</h2>
                <p>An IDE (Integrated Development Environment) is software that provides tools for writing, running, testing, and debugging programs.</p>
                <p>Some popular Python development tools are:</p>
                <ol>
                    <li>IDLE</li>
                    <li>Visual Studio Code</li>
                    <li>PyCharm</li>
                    <li>Jupyter Notebook</li>
                </ol>

                <!-- 5.1 IDLE -->
                <h3>5.1 IDLE</h3>
                <p>IDLE stands for <strong>Integrated Development and Learning Environment</strong>.</p>
                <p>It is included with the standard Python installation and is designed to be simple and beginner-friendly.</p>

                <p><strong>Features:</strong></p>
                <ul>
                    <li>Simple interface</li>
                    <li>Lightweight</li>
                    <li>Python Shell included</li>
                    <li>Basic debugging</li>
                    <li>Suitable for beginners</li>
                    <li>Easy program execution</li>
                </ul>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    print(<span class="string">"Hello World"</span>)
                </div>

                <p><strong>Best for:</strong></p>
                <p>Beginners who are learning basic Python programming.</p>

                <!-- 5.2 VS Code -->
                <h3>5.2 Visual Studio Code</h3>
                <p>Visual Studio Code (VS Code) is a popular source-code editor developed by Microsoft.</p>
                <p>Python support can be added using the Python extension.</p>

                <p><strong>Features:</strong></p>
                <ul>
                    <li>Python extensions</li>
                    <li>Code completion</li>
                    <li>Debugging</li>
                    <li>Git integration</li>
                    <li>Terminal</li>
                    <li>Syntax highlighting</li>
                    <li>Project management</li>
                    <li>Support for many programming languages</li>
                </ul>

                <p><strong>Best for:</strong></p>
                <ul>
                    <li>Beginners</li>
                    <li>Students</li>
                    <li>Professional developers</li>
                    <li>Large projects</li>
                </ul>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    VS Code is a lightweight but powerful code editor that can be customized using extensions.
                </div>

                <!-- 5.3 PyCharm -->
                <h3>5.3 PyCharm</h3>
                <p>PyCharm is an IDE developed by JetBrains and is specially designed for Python development.</p>

                <p><strong>Features:</strong></p>
                <ul>
                    <li>Advanced code completion</li>
                    <li>Debugging</li>
                    <li>Project management</li>
                    <li>Testing tools</li>
                    <li>Virtual environment support</li>
                    <li>Code navigation</li>
                    <li>Database tools in supported editions</li>
                </ul>

                <p><strong>Best for:</strong></p>
                <ul>
                    <li>Professional Python development</li>
                    <li>Large projects</li>
                    <li>Web development</li>
                    <li>Software development</li>
                </ul>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    PyCharm provides many professional tools for developing Python applications.
                </div>

                <!-- 5.4 Jupyter Notebook -->
                <h3>5.4 Jupyter Notebook</h3>
                <p>Jupyter Notebook is an interactive environment that allows programmers to write and execute code in separate cells.</p>

                <p>It is especially popular in:</p>
                <ul>
                    <li>Data Science</li>
                    <li>Machine Learning</li>
                    <li>Artificial Intelligence</li>
                    <li>Scientific Computing</li>
                    <li>Data Visualization</li>
                </ul>

                <p><strong>Example:</strong></p>
                <p>A notebook can contain:</p>
                <ul>
                    <li>Cell 1 → Python Code</li>
                    <li>Cell 2 → Output</li>
                    <li>Cell 3 → Explanation</li>
                    <li>Cell 4 → Graph</li>
                </ul>

                <p><strong>For example:</strong></p>
                <div class="code-block">
                    x = <span class="number">10</span><br>
                    y = <span class="number">20</span><br>
                    print(x + y)<br><br>
                    <span class="comment"># Output: 30</span>
                </div>

                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Interactive coding</li>
                    <li>Code can be executed cell by cell</li>
                    <li>Supports graphs and visualizations</li>
                    <li>Can combine code with explanations</li>
                    <li>Very useful for data analysis</li>
                </ul>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Jupyter Notebook is useful when we want to write code, see results immediately, and document our work together.
                </div>

                <!-- ===== SECTION 6: IDE Comparison ===== -->
                <h2>6. IDE Comparison</h2>

                <table>
                    <thead>
                        <tr>
                            <th>IDE / Tool</th>
                            <th>Beginner Friendly</th>
                            <th>Professional Use</th>
                            <th>Main Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>IDLE</td><td>Yes</td><td>Limited</td><td>Basic Python learning</td></tr>
                        <tr><td>VS Code</td><td>Yes</td><td>Yes</td><td>General programming</td></tr>
                        <tr><td>PyCharm</td><td>Moderate</td><td>Yes</td><td>Professional Python development</td></tr>
                        <tr><td>Jupyter Notebook</td><td>Yes</td><td>Yes</td><td>Data Science and ML</td></tr>
                    </tbody>
                </table>

                <h3>Which one should you use?</h3>
                <ul>
                    <li><strong>For learning Python:</strong> IDLE or VS Code</li>
                    <li><strong>For professional development:</strong> VS Code or PyCharm</li>
                    <li><strong>For Data Science and Machine Learning:</strong> Jupyter Notebook</li>
                </ul>

                <!-- ===== SECTION 7: Python Program Structure ===== -->
                <h2>7. Python Program Structure</h2>
                <p>A Python program is usually organized into different sections.</p>

                <p><strong>A simple structure is:</strong></p>

                <div class="code-block" style="text-align: center;">
                    Comments<br>
                    ↓<br>
                    Import Modules<br>
                    ↓<br>
                    Variables<br>
                    ↓<br>
                    Processing / Logic<br>
                    ↓<br>
                    Output
                </div>

                <p>Let's understand each part.</p>

                <h3>7.1 Comments</h3>
                <p>Comments are used to explain code.</p>
                <p>Python comments begin with <strong>#</strong>.</p>
                <div class="code-block">
                    <span class="comment"># This program calculates the sum</span>
                </div>
                <p>Comments are ignored by the Python interpreter.</p>

                <p><strong>Purpose:</strong></p>
                <ul>
                    <li>Explain code</li>
                    <li>Improve readability</li>
                    <li>Help developers understand the program</li>
                    <li>Document important information</li>
                </ul>

                <h3>7.2 Import Modules</h3>
                <p>Modules provide additional functionality.</p>
                <p><strong>For example:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> math
                </div>
                <p>Now we can use functions provided by the math module.</p>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    <span class="keyword">import</span> math<br><br>
                    print(math.sqrt(<span class="number">25</span>))<br><br>
                    <span class="comment"># Output: 5.0</span>
                </div>

                <h3>7.3 Variables</h3>
                <p>Variables are used to store data.</p>
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    a = <span class="number">10</span><br>
                    b = <span class="number">20</span>
                </div>
                <p>Here:</p>
                <ul>
                    <li>a stores 10</li>
                    <li>b stores 20</li>
                </ul>
                <p>Python automatically determines their data types.</p>

                <h3>7.4 Processing / Logic</h3>
                <p>This is the part where the actual operation is performed.</p>
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    sum = a + b
                </div>
                <p>Here Python adds the values of a and b and stores the result in sum.</p>

                <h3>7.5 Output</h3>
                <p>The print() function is commonly used to display output.</p>
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    print(sum)<br><br>
                    <span class="comment"># Output: 30</span>
                </div>

                <!-- ===== SECTION 8: Complete Example ===== -->
                <h2>8. Complete Example of Python Program Structure</h2>

                <div class="code-block">
                    <span class="comment"># Program to calculate the sum of two numbers</span><br><br>
                    <span class="keyword">import</span> math<br><br>
                    <span class="comment"># Variables</span><br>
                    a = <span class="number">10</span><br>
                    b = <span class="number">20</span><br><br>
                    <span class="comment"># Processing</span><br>
                    sum = a + b<br><br>
                    <span class="comment"># Output</span><br>
                    print(<span class="string">"Sum ="</span>, sum)<br><br>
                    <span class="comment"># Output: Sum = 30</span>
                </div>

                <p><strong>Explanation:</strong></p>
                <table>
                    <thead>
                        <tr><th>Part</th><th>Code</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Comment</td><td># Program...</td><td>Explains the program</td></tr>
                        <tr><td>Import</td><td>import math</td><td>Imports a module</td></tr>
                        <tr><td>Variables</td><td>a = 10, b = 20</td><td>Stores values</td></tr>
                        <tr><td>Processing</td><td>sum = a + b</td><td>Performs calculation</td></tr>
                        <tr><td>Output</td><td>print()</td><td>Displays result</td></tr>
                    </tbody>
                </table>

                <!-- ===== SECTION: First Python Program ===== -->
                <h2>First Python Program</h2>
                <p>The first program that beginners usually write in Python is the "Hello World" program. It is used to check whether Python is working correctly and to learn the basic print() function.</p>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    print(<span class="string">"Hello World"</span>)
                </div>

                <p><strong>Output</strong></p>
                <div class="code-block">
                    <span class="output">Hello World</span>
                </div>

                <p><strong>Explanation</strong></p>
                <ul>
                    <li>print() is a built-in Python function.</li>
                    <li>It is used to display information on the screen.</li>
                    <li>"Hello World" is a string.</li>
                    <li>The text inside quotation marks is displayed as output.</li>
                </ul>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    The print() function is used to display output on the screen.
                </div>

                <!-- ===== SECTION: Program to Add Two Numbers ===== -->
                <h2>Program to Add Two Numbers</h2>
                <p>Python can perform mathematical calculations using simple operators.</p>

                <p><strong>Program</strong></p>
                <div class="code-block">
                    a = <span class="number">10</span><br>
                    b = <span class="number">20</span><br><br>
                    sum = a + b<br><br>
                    print(<span class="string">"Sum ="</span>, sum)
                </div>

                <p><strong>Output</strong></p>
                <div class="code-block">
                    <span class="output">Sum = 30</span>
                </div>

                <p><strong>Explanation</strong></p>
                <p><strong>Step 1:</strong> Store the first number</p>
                <div class="code-block">
                    a = <span class="number">10</span>
                </div>
                <p>The value 10 is stored in variable a.</p>

                <p><strong>Step 2:</strong> Store the second number</p>
                <div class="code-block">
                    b = <span class="number">20</span>
                </div>
                <p>The value 20 is stored in variable b.</p>

                <p><strong>Step 3:</strong> Add the numbers</p>
                <div class="code-block">
                    sum = a + b
                </div>
                <p>The + operator adds the values. 10 + 20 = 30. The result 30 is stored in the variable sum.</p>

                <p><strong>Step 4:</strong> Display the result</p>
                <div class="code-block">
                    print(<span class="string">"Sum ="</span>, sum)
                </div>
                <p>The print() function displays the result.</p>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    Variables store values, operators perform calculations, and print() displays the result.
                </div>

                <!-- ===== SECTION: Python Execution Process ===== -->
                <h2>Python Execution Process</h2>
                <p>When we execute a Python program, several steps take place internally.</p>

                <div class="code-block" style="text-align: center;">
                    Python Program (.py file)<br>
                    ↓<br>
                    Python Interpreter<br>
                    ↓<br>
                    Python Bytecode<br>
                    ↓<br>
                    Python Virtual Machine (PVM)<br>
                    ↓<br>
                    Output
                </div>

                <h3>Step 1: Python Program</h3>
                <p>We first write Python source code in a .py file.</p>
                <p><strong>Example:</strong></p>
                <div class="code-block">
                    print(<span class="string">"Hello World"</span>)
                </div>
                <p>The file may be saved as: <strong>hello.py</strong></p>

                <h3>Step 2: Python Interpreter</h3>
                <p>The Python interpreter processes the Python source code.</p>
                <p>It checks the program and prepares it for execution.</p>

                <h3>Step 3: Bytecode</h3>
                <p>In standard Python implementations such as CPython, source code is compiled into bytecode.</p>
                <p>Bytecode is an intermediate representation of the Python program.</p>
                <p>It is commonly associated with .pyc files stored in the <strong>__pycache__</strong> directory.</p>

                <h3>Step 4: Python Virtual Machine</h3>
                <p>The Python Virtual Machine (PVM) executes the bytecode.</p>
                <p>The PVM is part of the Python runtime environment.</p>

                <h3>Step 5: Output</h3>
                <p>After execution, the program produces the required result.</p>
                <p><strong>For example:</strong></p>
                <div class="code-block">
                    <span class="output">Hello World</span>
                </div>

                <div class="definition-box">
                    <strong>Important Note</strong><br>
                    A common simplified explanation is:<br><br>
                    <strong>Source Code → Interpreter → Bytecode → PVM → Output</strong><br><br>
                    This is useful for understanding the execution process. Technically, the exact implementation details can vary between Python implementations.
                </div>

                <!-- ===== SECTION: Popular IDEs Summary ===== -->
                <h2>Popular Python IDEs</h2>
                <p>An IDE (Integrated Development Environment) provides tools for writing, running, and debugging programs.</p>

                <h3>1. IDLE</h3>
                <ul>
                    <li>Simple</li>
                    <li>Lightweight</li>
                    <li>Good for beginners</li>
                </ul>

                <h3>2. VS Code</h3>
                <ul>
                    <li>Extensions</li>
                    <li>Debugging</li>
                    <li>Git integration</li>
                    <li>Suitable for small and large projects</li>
                </ul>

                <h3>3. PyCharm</h3>
                <ul>
                    <li>Professional Python IDE</li>
                    <li>Advanced debugging</li>
                    <li>Project management</li>
                    <li>Code completion</li>
                </ul>

                <h3>4. Jupyter Notebook</h3>
                <ul>
                    <li>Interactive coding</li>
                    <li>Data Science</li>
                    <li>Machine Learning</li>
                    <li>Data visualization</li>
                </ul>

                <!-- ===== SECTION: Python Program Structure Summary ===== -->
                <h2>Python Program Structure</h2>
                <p>A basic Python program can be organized into the following sections:</p>


                <div class="code-block" style="text-align: center;">
                    Comments<br>
                    ↓<br>
                    imports<br>
                    ↓<br>
                    variable<br>
                    ↓<br>
                    Processing<br>
                    ↓<br>
                    Output
                </div>

                <h3>1. Comments</h3>
                <p>Used to explain the program.</p>
                <div class="code-block">
                    <span class="comment"># Calculate the sum</span>
                </div>

                <h3>2. Imports</h3>
                <p>Used to include modules.</p>
                <div class="code-block">
                    <span class="keyword">import</span> math
                </div>

                <h3>3. Variables</h3>
                <p>Used to store data.</p>
                <div class="code-block">
                    a = <span class="number">10</span><br>
                    b = <span class="number">20</span>
                </div>

                <h3>4. Processing</h3>
                <p>Performs calculations or other operations.</p>
                <div class="code-block">
                    sum = a + b
                </div>

                <h3>5. Output</h3>
                <p>Displays the result.</p>
                <div class="code-block">
                    print(sum)
                </div>

                <!-- ===== SECTION: Quick Revision ===== -->
                <h2>📌 Quick Revision</h2>

                <h3>First Program</h3>
                <div class="code-block">
                    print(<span class="string">"Hello World"</span>)
                </div>

                <h3>Addition Program</h3>
                <div class="code-block">
                    a = <span class="number">10</span><br>
                    b = <span class="number">20</span><br>
                    sum = a + b<br>
                    print(<span class="string">"Sum ="</span>, sum)
                </div>

                <h3>Execution Process</h3>
                <div class="code-block" style="text-align: center;">
                    Python Source Code<br>
                    ↓<br>
                    Interpreter<br>
                    ↓<br>
                    Bytecode<br>
                    ↓<br>
                    Python Virtual Machine<br>
                    ↓<br>
                    Output
                </div>

                <h3>Main Advantages</h3>
                <ul>
                    <li>Easy to learn</li>
                    <li>Readable</li>
                    <li>Portable</li>
                    <li>Free and open source</li>
                    <li>Large community</li>
                    <li>Extensive libraries</li>
                    <li>Supports AI and Data Science</li>
                    <li>Faster development</li>
                </ul>

                <h3>Main Features</h3>
                <ul>
                    <li>Simple</li>
                    <li>Interpreted</li>
                    <li>Portable</li>
                    <li>Open source</li>
                    <li>Object-oriented</li>
                    <li>Dynamically typed</li>
                </ul>

                <h3>Popular IDEs</h3>
                <ul>
                    <li>IDLE</li>
                    <li>VS Code</li>
                    <li>PyCharm</li>
                    <li>Jupyter Notebook</li>
                </ul>

            </div>
        `
    };

    // ===== RENDER LESSON =====
    function renderLesson() {
        const container = document.getElementById('lessonContent');
        if (!container) return;
        
        container.innerHTML = lessonData.content;
    }

    // ===== UPDATE PROGRESS =====
    function updateProgress() {
        const percentage = (lessonData.currentLesson / lessonData.totalLessons) * 100;
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = percentage + '%';
        }
    }

    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', function(e) {
        // Left arrow = Previous lesson
        if (e.key === 'ArrowLeft' && e.ctrlKey) {
            e.preventDefault();
            window.location.href = '1.1.1.html';
        }
        // Right arrow = Next lesson
        if (e.key === 'ArrowRight' && e.ctrlKey) {
            e.preventDefault();
            window.location.href = '1.1.3.html';
        }
        // ESC = Back to course
        if (e.key === 'Escape') {
            window.location.href = 'index.html';
        }
    });

    // ===== INITIALIZE =====
    renderLesson();
    updateProgress();

    console.log('📖 Lesson 1.1.2: Setting Up Python Environment loaded!');
    console.log('💡 Use Ctrl+←/→ to navigate between lessons');
    console.log('💡 Press ESC to return to the course page');
});