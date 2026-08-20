// ============================================
// 📖 LESSON 1.1.4 - Variables in Python
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PRELOADER =====
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.classList.add('hidden');
    });

    // ===== LESSON DATA =====
    const lessonData = {
        id: '1.1.4',
        title: 'Variables in Python',
        duration: '20 min',
        totalLessons: 31,
        currentLesson: 4,
        content: `
            <div class="lesson-header">
                <span class="lesson-id">Lesson 1.1.4</span>
                <h1>Variables in Python</h1>
                <div class="lesson-meta">
                    <span><i class="fas fa-clock"></i> 20 min</span>
                    <span><i class="fas fa-signal"></i> Beginner</span>
                    <span><i class="fas fa-tag"></i> Fundamentals</span>
                </div>
            </div>

            <div class="lesson-body">

                <!-- ===== SECTION: Definition ===== -->
                <h2>Definition</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A variable is a name that refers to a value stored in memory.
                </div>
                <p>Python automatically manages memory when a variable is assigned a value.</p>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    A variable is a name used to store and access data in a program.
                </div>

                <!-- ===== SECTION: Syntax ===== -->
                <h2>Syntax</h2>
                <div class="code-block">
                    variable_name = value
                </div>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    name = <span class="string">"Rahul"</span><br>
                    age = <span class="number">20</span><br>
                    salary = <span class="number">25000</span>
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>name</strong> → Variable</li>
                    <li><strong>"Rahul"</strong> → String value</li>
                    <li><strong>age</strong> → Variable</li>
                    <li><strong>20</strong> → Integer value</li>
                    <li><strong>salary</strong> → Variable</li>
                    <li><strong>25000</strong> → Integer value</li>
                </ul>

                <!-- ===== SECTION: Memory Representation ===== -->
                <h2>Memory Representation</h2>
                <p>Conceptually, variables can be represented as:</p>

                <table>
                    <thead>
                        <tr><th>Variable</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>name</td><td>→ "Rahul"</td></tr>
                        <tr><td>age</td><td>→ 20</td></tr>
                        <tr><td>salary</td><td>→ 25000</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box">
                    <strong>Note:</strong> Python variables are actually references to objects, rather than fixed memory boxes containing values.
                </div>

                <!-- ===== SECTION: Multiple Assignment ===== -->
                <h2>Multiple Assignment</h2>
                <p>Python allows assigning multiple values to multiple variables in a single statement.</p>

                <div class="code-block">
                    a, b, c = <span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>a</strong> → 10</li>
                    <li><strong>b</strong> → 20</li>
                    <li><strong>c</strong> → 30</li>
                </ul>

                <p>You can also assign the same value to multiple variables:</p>
                <div class="code-block">
                    a = b = c = <span class="number">10</span>
                </div>

                <!-- ===== SECTION: Dynamic Typing ===== -->
                <h2>Dynamic Typing</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Python is a dynamically typed language.
                </div>
                <p>This means a variable does not have to be permanently associated with one data type. It can refer to objects of different types during program execution.</p>

                <div class="code-block">
                    x = <span class="number">10</span><br>
                    x = <span class="string">"Python"</span>
                </div>
                <p>Initially: <strong>x</strong> → 10</p>
                <p>Later: <strong>x</strong> → "Python"</p>

                <div class="highlight-box">
                    <strong>In simple words:</strong><br>
                    The variable x can therefore refer to a value of a different type.
                </div>

                <!-- ===== SECTION: Scope of Variables ===== -->
                <h2>Scope of Variables</h2>

                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Scope refers to the region of a program where a variable can be accessed.
                </div>

                <p>The two basic scopes are:</p>

                <!-- ===== ENHANCED HIERARCHY DIAGRAM ===== -->
                <div class="scope-diagram">
                    <div class="scope-flow">
                        <!-- ROOT -->
                        <div class="hierarchy-root">🔷 Scope</div>
                        <div class="hierarchy-arrow">⬇</div>

                        <!-- BRANCH LINE (connects root to children) -->
                        <div class="hierarchy-branch-line"></div>

                        <!-- CHILDREN (Global & Local) -->
                        <div class="hierarchy-children">
                            <div class="hierarchy-child">
                                <div class="hierarchy-node global">🌐 Global Scope</div>
                            </div>
                            <div class="hierarchy-child">
                                <div class="hierarchy-node local">📍 Local Scope</div>
                            </div>
                        </div>

                           
                    </div>
                </div>

                <!-- ===== Local Variable ===== -->
                <h3>Local Variable</h3>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A local variable is created inside a function and can normally be accessed only within that function.
                </div>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    <span class="keyword">def</span> <span class="function">display</span>():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;x = <span class="number">10</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(x)<br><br>
                    display()<br><br>
                    <span class="comment"># Output: 10</span>
                </div>
                <p>Here, <strong>x</strong> is a local variable.</p>

                <p><strong>It cannot normally be accessed outside the function:</strong></p>
                <div class="code-block">
                    <span class="keyword">def</span> <span class="function">display</span>():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;x = <span class="number">10</span><br><br>
                    display()<br>
                    print(x)<br><br>
                    <span style="color: #ff4757;"># This produces a NameError because x is not available in the global scope.</span>
                </div>

                <!-- ===== Global Variable ===== -->
                <h3>Global Variable</h3>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A global variable is defined outside functions and can normally be accessed from different parts of the program.
                </div>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    x = <span class="number">100</span><br><br>
                    <span class="keyword">def</span> <span class="function">show</span>():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(x)<br><br>
                    show()<br><br>
                    <span class="comment"># Output: 100</span>
                </div>
                <p>Here, <strong>x</strong> is a global variable.</p>

                <h3>Scope Diagram — Global vs Local</h3>
                
                <div class="scope-diagram">
                    <div class="scope-flow">
                        <div class="hierarchy-root" style="font-size:1rem; padding:10px 24px;">📦 Variable Scope</div>
                        <div class="hierarchy-arrow">⬇</div>
                        <div class="hierarchy-branch-line"></div>
                        <div class="hierarchy-children">
                            <div class="hierarchy-child">
                                <div class="hierarchy-node global" style="border-color: rgba(179,136,255,0.6);">Global<br><small style="color:var(--text-muted);">x = 100</small></div>
                            </div>
                            <div class="hierarchy-child">
                                <div class="hierarchy-node local" style="border-color: rgba(46,213,115,0.4);">Local<br><small style="color:var(--text-muted);">inside function</small></div>
                            </div>
                        </div>
                        <div class="hierarchy-arrow" style="margin-top:6px;">⬇</div>
                        <div class="hierarchy-branch-line" style="width:40%;"></div>
                        <div class="hierarchy-sub-level">
                            <div class="hierarchy-sub-node">Accessible anywhere</div>
                            <div class="hierarchy-sub-node">Accessible only inside function</div>
                        </div>
                    </div>
                </div>

                <p>A global variable can be read inside a function, but assigning to it inside the function requires the <strong>global</strong> keyword if you intend to modify the global variable.</p>

                <p><strong>Example:</strong></p>
                <div class="code-block">
                    x = <span class="number">100</span><br><br>
                    <span class="keyword">def</span> <span class="function">change</span>():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">global</span> x<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;x = <span class="number">200</span><br><br>
                    change()<br>
                    print(x)<br><br>
                    <span class="comment"># Output: 200</span>
                </div>

                <!-- ===== Lifetime of Variables ===== -->
                <h2>Lifetime of Variables</h2>

                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Lifetime is the period during which a variable exists and can be used during program execution.
                </div>

                <h3>Local Variable Lifetime</h3>
                <p>A local variable is created when the function executes and its local binding normally ceases to be accessible after the function returns.</p>

                <div class="code-block">
                    <span class="keyword">def</span> <span class="function">test</span>():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;x = <span class="number">50</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(x)<br><br>
                    test()
                </div>

                <p><strong>During function execution:</strong></p>
                <div class="lifetime-diagram">
                    <div class="lifetime-flow">
                        <div class="lifetime-step">Function starts</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step">x = 50 is created</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step">print(x)</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step">Function ends</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step" style="border-color: #ff4757;">Local name x goes out of scope</div>
                    </div>
                </div>

                <div class="highlight-box">
                    <strong>Note:</strong> The underlying object is destroyed only when no references to it remain; therefore, saying the variable is always immediately "destroyed" is an oversimplification.
                </div>

                <h3>Global Variable Lifetime</h3>
                <p>A global variable normally remains available throughout the execution of the module/program in which it is defined.</p>

                <div class="code-block">
                    x = <span class="number">100</span>
                </div>

                <div class="lifetime-diagram">
                    <div class="lifetime-flow">
                        <div class="lifetime-step">Program Starts</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step">Global variable created</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step">Program executes</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step">Functions execute</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step">Program ends</div>
                        <div class="lifetime-arrow">↓</div>
                        <div class="lifetime-step" style="border-color: #ff4757;">Global reference is released</div>
                    </div>
                </div>

                <!-- ===== Scope vs Lifetime ===== -->
                <h2>Scope vs Lifetime</h2>

                <table>
                    <thead>
                        <tr>
                            <th style="width: 50%;">Scope</th>
                            <th style="width: 50%;">Lifetime</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Scope means <strong>where a variable can be accessed</strong>.</td>
                            <td>Lifetime means <strong>how long a variable or object exists</strong> during execution.</td>
                        </tr>
                        <tr>
                            <td>It is related to <strong>accessibility</strong>.</td>
                            <td>It is related to <strong>existence</strong>.</td>
                        </tr>
                        <tr>
                            <td>It tells us <strong>where we can use a variable</strong>.</td>
                            <td>It tells us <strong>when the variable/object exists</strong>.</td>
                        </tr>
                        <tr>
                            <td>Determined mainly by the program's <strong>structure and namespaces</strong>.</td>
                            <td>Depends on <strong>execution and object references</strong>.</td>
                        </tr>
                        <tr>
                            <td>Example: A local variable can be accessed inside its function.</td>
                            <td>A local variable's binding normally exists during the function call.</td>
                        </tr>
                        <tr>
                            <td>Answers: <strong>"Where?"</strong></td>
                            <td>Answers: <strong>"How long?"</strong></td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    <span class="keyword">def</span> <span class="function">test</span>():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;x = <span class="number">50</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(x)<br><br>
                    test()
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>Scope of x</strong> → Inside the function test()</li>
                    <li><strong>Lifetime of local x</strong> → During the execution of test()</li>
                </ul>

                <!-- ===== Advantages ===== -->
                <h2>Advantages of Variables</h2>
                <ol>
                    <li>Store and access data easily.</li>
                    <li>Improve program readability by using meaningful names.</li>
                    <li>Allow data to change during program execution.</li>
                    <li>Support calculations and data processing.</li>
                    <li>Make programs easier to maintain and understand.</li>
                    <li>Help organize and manage data efficiently.</li>
                </ol>

                

                <!-- ===== Easy Definition ===== -->
                <div class="definition-box" style="border-left-color: #ffa500;">
                    <strong>Easy Definition for Exam</strong><br>
                    A variable is a named reference used to store and access data in a Python program. Python supports dynamic typing, and variables can have local or global scope depending on where they are defined.
                </div>

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
        if (e.key === 'ArrowLeft' && e.ctrlKey) {
            e.preventDefault();
            window.location.href = '1.1.3.html';
        }
        if (e.key === 'ArrowRight' && e.ctrlKey) {
            e.preventDefault();
            window.location.href = '1.1.5.html';
        }
        if (e.key === 'Escape') {
            window.location.href = 'index.html';
        }
    });

    // ===== INITIALIZE =====
    renderLesson();
    updateProgress();

    console.log('📖 Lesson 1.1.4: Variables in Python loaded!');
    console.log('💡 Use Ctrl+←/→ to navigate between lessons');
    console.log('💡 Press ESC to return to the course page');
});