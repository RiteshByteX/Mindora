// ============================================
// 📖 LESSON 1.1.3 - Tokens in Python
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PRELOADER =====
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.classList.add('hidden');
    });

    // ===== LESSON DATA =====
    const lessonData = {
        id: '1.1.3',
        title: 'Tokens in Python',
        duration: '25 min',
        totalLessons: 31,
        currentLesson: 3,
        content: `
            <div class="lesson-header">
                <span class="lesson-id">Lesson 1.1.3</span>
                <h1>Tokens in Python</h1>
                <div class="lesson-meta">
                    <span><i class="fas fa-clock"></i> 25 min</span>
                    <span><i class="fas fa-signal"></i> Beginner</span>
                    <span><i class="fas fa-tag"></i> Fundamentals</span>
                </div>
            </div>

            <div class="lesson-body">

                <p>A token is the smallest meaningful unit of a Python program. When Python reads a program, it breaks the source code into different tokens.</p>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    x = <span class="number">10</span> + <span class="number">20</span>
                </div>

                <p>This statement can be divided into tokens:</p>
                <ul>
                    <li><strong>x</strong> → Identifier</li>
                    <li><strong>=</strong> → Operator</li>
                    <li><strong>10</strong> → Literal</li>
                    <li><strong>+</strong> → Operator</li>
                    <li><strong>20</strong> → Literal</li>
                </ul>

                <p>Python tokens are mainly divided into <strong>5 categories</strong>:</p>
                <ol>
                    <li>Keywords</li>
                    <li>Identifiers</li>
                    <li>Literals</li>
                    <li>Operators</li>
                    <li>Delimiters / Punctuators</li>
                </ol>

                <!-- ===== SECTION 1: Keywords ===== -->
                <h2>1. Keywords</h2>

                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Keywords are reserved words that have a predefined/special meaning in Python. They are used to define the structure and behavior of a Python program.
                </div>

                <p>These words cannot normally be used as variable, function, or class names.</p>

                <h3>Common Python Keywords</h3>

                <table>
                    <thead>
                        <tr><th>Keyword</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>if</td><td>Conditional statement</td></tr>
                        <tr><td>else</td><td>Alternative condition</td></tr>
                        <tr><td>elif</td><td>Multiple conditions</td></tr>
                        <tr><td>for</td><td>Loop</td></tr>
                        <tr><td>while</td><td>Loop</td></tr>
                        <tr><td>break</td><td>Exit a loop</td></tr>
                        <tr><td>continue</td><td>Skip the current iteration</td></tr>
                        <tr><td>def</td><td>Function definition</td></tr>
                        <tr><td>return</td><td>Return a value from a function</td></tr>
                        <tr><td>class</td><td>Class definition</td></tr>
                        <tr><td>import</td><td>Import a module</td></tr>
                        <tr><td>try</td><td>Exception handling</td></tr>
                        <tr><td>except</td><td>Handle an exception</td></tr>
                        <tr><td>True</td><td>Boolean value</td></tr>
                        <tr><td>False</td><td>Boolean value</td></tr>
                        <tr><td>None</td><td>Represents no value</td></tr>
                        <tr><td>and</td><td>Logical AND</td></tr>
                        <tr><td>or</td><td>Logical OR</td></tr>
                        <tr><td>not</td><td>Logical NOT</td></tr>
                    </tbody>
                </table>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    <span class="keyword">if</span> age >= <span class="number">18</span>:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"Eligible"</span>)
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>if</strong> → Keyword</li>
                    <li><strong>age</strong> → Identifier</li>
                    <li><strong>>=</strong> → Operator</li>
                    <li><strong>18</strong> → Literal</li>
                </ul>

                <p><strong>Another example:</strong></p>
                <div class="code-block">
                    <span class="keyword">if</span> <span class="keyword">True</span>:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"Python"</span>)
                </div>
                <p>Here, <strong>if</strong> and <strong>True</strong> are Python keywords.</p>

                <p><strong>Invalid Example</strong></p>
                <p>You cannot use a keyword as a variable name:</p>
                <div class="code-block">
                    <span style="color: #ff4757;">if = 10</span>
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block">
                    <span class="output">SyntaxError</span>
                </div>
                <p>Similarly:</p>
                <div class="code-block">
                    <span style="color: #ff4757;">for = 10</span>
                </div>
                <p>also produces a <strong>SyntaxError</strong>.</p>

                <h3>Diagram :</h3>

                <div class="code-block" style="text-align: center;">
                    Keyword<br>
                    ↓<br>
                    Reserved Word<br>
                    ↓<br>
                    Has special meaning in Python<br>
                    ↓<br>
                    Cannot normally be used as variable/function/class name<br>
                    
                </div>

                <div class="highlight-box">
                    <strong>In Simple Words</strong><br>
                    Keywords are reserved words in Python that have predefined meanings and are used to tell Python what operation or program structure is being used.
                </div>

                <!-- ===== SECTION 2: Identifiers ===== -->
                <h2>2. Identifiers</h2>

                <div class="definition-box">
                    <strong>Definition</strong><br>
                    An identifier is a name used to identify a programming element such as:
                    <ul>
                        <li>Variable</li>
                        <li>Function</li>
                        <li>Class</li>
                        <li>Object</li>
                        <li>Module</li>
                    </ul>
                </div>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br>
                    age = <span class="number">20</span>
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>name</strong> → Identifier</li>
                    <li><strong>age</strong> → Identifier</li>
                </ul>

                <p><strong>Another example:</strong></p>
                <div class="code-block">
                    <span class="keyword">def</span> <span class="function">calculate_sum</span>():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">pass</span>
                </div>
                <p>Here, <strong>calculate_sum</strong> is an identifier.</p>

                <h3>Rules for Identifiers</h3>

                <h4>Rule 1: Letters are allowed</h4>
                <p>Identifiers can contain letters (A-Z and a-z).</p>
                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br>
                    student = <span class="string">"BCA"</span>
                </div>

                <h4>Rule 2: Digits are allowed</h4>
                <p>Digits can be used in an identifier, but an identifier cannot start with a digit.</p>
                <p><strong>❌ Invalid:</strong></p>
                <div class="code-block">
                    <span style="color: #ff4757;">1student = "Ritesh"</span>
                </div>
                <p><strong>✅ Valid:</strong></p>
                <div class="code-block">
                    student1 = <span class="string">"Ritesh"</span>
                </div>

                <h4>Rule 3: Underscore is allowed</h4>
                <p>The underscore (_) can be used in identifiers.</p>
                <div class="code-block">
                    student_name = <span class="string">"Ritesh"</span><br>
                    roll_no = <span class="number">101</span>
                </div>

                <h4>Rule 4: Spaces are not allowed</h4>
                <p><strong>❌ Invalid:</strong></p>
                <div class="code-block">
                    <span style="color: #ff4757;">student name = "Ritesh"</span>
                </div>
                <p><strong>✅ Valid:</strong></p>
                <div class="code-block">
                    student_name = <span class="string">"Ritesh"</span>
                </div>

                <h4>Rule 5: Special Symbols are not allowed</h4>
                <p>Characters such as @, #, $, %, -, etc. cannot normally be used in identifiers.</p>
                <p><strong>❌ Invalid:</strong></p>
                <div class="code-block">
                    <span style="color: #ff4757;">student-name = "Ritesh"</span>
                </div>
                <p><strong>✅ Valid:</strong></p>
                <div class="code-block">
                    student_name = <span class="string">"Ritesh"</span>
                </div>

                <h4>Rule 6: Python is Case-Sensitive</h4>
                <p>Python treats uppercase and lowercase letters as different.</p>
                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br>
                    Name = <span class="string">"Raj"</span>
                </div>
                <p>Here, <strong>name</strong> and <strong>Name</strong> are two different identifiers.</p>

                <h4>Rule 7: Keywords Cannot Be Used</h4>
                <p>Python keywords cannot normally be used as identifiers.</p>
                <p><strong>❌ Invalid:</strong></p>
                <div class="code-block">
                    <span style="color: #ff4757;">class = 10</span><br>
                    <span style="color: #ff4757;">for = 10</span>
                </div>
                <p>These produce a <strong>SyntaxError</strong>.</p>

                <h3>Examples of Valid Identifiers</h3>
                <ul>
                    <li>student</li>
                    <li>student_name</li>
                    <li>roll_no</li>
                    <li>age1</li>
                    <li>total_marks</li>
                    <li>employee_salary</li>
                    <li>_student</li>
                </ul>

                <h3>Examples of Invalid Identifiers</h3>
                <ul>
                    <li><span style="color: #ff4757;">1student</span> → Cannot start with a digit</li>
                    <li><span style="color: #ff4757;">student-name</span> → Special symbol (-) not allowed</li>
                    <li><span style="color: #ff4757;">student name</span> → Spaces not allowed</li>
                    <li><span style="color: #ff4757;">for</span> → Keyword</li>
                    <li><span style="color: #ff4757;">class</span> → Keyword</li>
                </ul>

                

                <h3>Good Naming Practices</h3>
                <p>Use meaningful and readable names:</p>
                <div class="code-block">
                    student_name = <span class="string">"Ritesh"</span><br>
                    total_marks = <span class="number">450</span><br>
                    employee_salary = <span class="number">50000</span><br>
                    calculate_average = <span class="number">90</span>
                </div>

                <div class="highlight-box">
                    <strong>In Simple Words</strong><br>
                    Identifiers are names given to variables, functions, classes, objects, and modules so that Python can identify and access them.
                </div>

                <!-- ===== SECTION 3: Literals ===== -->
                <h2>3. Literals</h2>

                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A literal is a fixed value written directly in a Python program.
                </div>

                <p><strong>In simple words:</strong></p>
                <p>Literals are actual values that are directly written in the source code.</p>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    x = <span class="number">100</span><br>
                    name = <span class="string">"Ritesh"</span>
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>100</strong> → Integer literal</li>
                    <li><strong>"Ritesh"</strong> → String literal</li>
                </ul>

                <h3>Types of Literals in Python</h3>
                <p>Python supports several types of literals.</p>

                <h4>A. Numeric Literals</h4>
                <p>Numeric literals represent numbers.</p>

                <p><strong>1. Integer Literal</strong></p>
                <p>An integer is a whole number without a decimal point.</p>
                <div class="code-block">
                    x = <span class="number">100</span><br>
                    age = <span class="number">20</span>
                </div>
                <p>Here, <strong>100</strong> and <strong>20</strong> are integer literals.</p>

                <p><strong>2. Float Literal</strong></p>
                <p>A float represents a number with a decimal point.</p>
                <div class="code-block">
                    price = <span class="number">99.50</span><br>
                    height = <span class="number">5.8</span>
                </div>
                <p>Here, <strong>99.50</strong> and <strong>5.8</strong> are float literals.</p>

                <p><strong>3. Complex Literal</strong></p>
                <p>A complex number contains a real part and an imaginary part.</p>
                <div class="code-block">
                    z = <span class="number">2</span> + <span class="number">3</span>j
                </div>
                <p>Here, <strong>2 + 3j</strong> is a complex literal.</p>

                <h4>B. String Literals</h4>
                <p>A string literal represents a sequence of characters and is written inside quotes.</p>

                <p><strong>Using Double Quotes</strong></p>
                <div class="code-block">
                    name = <span class="string">"Ritesh"</span>
                </div>

                <p><strong>Using Single Quotes</strong></p>
                <div class="code-block">
                    name = <span class="string">'Ritesh'</span>
                </div>
                <p>Both are valid string literals.</p>

                <h4>C. Boolean Literals</h4>
                <p>Python has two Boolean literals:</p>
                <ul>
                    <li><strong>True</strong></li>
                    <li><strong>False</strong></li>
                </ul>
                <p>They represent true and false values.</p>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    is_student = <span class="keyword">True</span><br>
                    is_teacher = <span class="keyword">False</span>
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>True</strong> → Boolean literal</li>
                    <li><strong>False</strong> → Boolean literal</li>
                </ul>

                <h4>D. Special Literal</h4>
                <p>Python has a special literal:</p>
                <p><strong>None</strong></p>
                <p>None represents the absence of a value or no value.</p>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    result = <span class="keyword">None</span>
                </div>
                <p>Here, <strong>None</strong> is a special literal.</p>

                <h4>E. Collection Literals</h4>
                <p>Python provides literals for creating collections.</p>

                <p><strong>1. List Literal</strong></p>
                <p>A list is written using square brackets <strong>[]</strong>.</p>
                <div class="code-block">
                    numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>]
                </div>
                <p>Here, <strong>[10, 20, 30]</strong> is a list literal.</p>

                <p><strong>2. Tuple Literal</strong></p>
                <p>A tuple is generally written using parentheses <strong>()</strong>.</p>
                <div class="code-block">
                    numbers = (<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>)
                </div>
                <p>Here, <strong>(10, 20, 30)</strong> is a tuple literal.</p>

                <p><strong>3. Set Literal</strong></p>
                <p>A set is written using curly braces <strong>{}</strong>.</p>
                <div class="code-block">
                    numbers = {<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>}
                </div>
                <p>Here, <strong>{10, 20, 30}</strong> is a set literal.</p>

                <p><strong>4. Dictionary Literal</strong></p>
                <p>A dictionary contains key-value pairs.</p>
                <div class="code-block">
                    student = {<span class="string">"name"</span>: <span class="string">"Ritesh"</span>, <span class="string">"age"</span>: <span class="number">20</span>}
                </div>
                <p>Here, <strong>{"name": "Ritesh", "age": 20}</strong> is a dictionary literal.</p>

                <h3>Summary Table</h3>
                <table>
                    <thead>
                        <tr><th>Type</th><th>Example</th><th>Description</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Integer</td><td>100</td><td>Whole number</td></tr>
                        <tr><td>Float</td><td>99.50</td><td>Decimal number</td></tr>
                        <tr><td>Complex</td><td>2 + 3j</td><td>Complex number</td></tr>
                        <tr><td>String</td><td>"Ritesh"</td><td>Sequence of characters</td></tr>
                        <tr><td>Boolean</td><td>True, False</td><td>Logical value</td></tr>
                        <tr><td>Special</td><td>None</td><td>Absence of a value</td></tr>
                        <tr><td>List</td><td>[10, 20, 30]</td><td>Ordered collection</td></tr>
                        <tr><td>Tuple</td><td>(10, 20, 30)</td><td>Ordered, immutable collection</td></tr>
                        <tr><td>Set</td><td>{10, 20, 30}</td><td>Unordered collection of unique values</td></tr>
                        <tr><td>Dictionary</td><td>{"name": "Ritesh"}</td><td>Key-value collection</td></tr>
                    </tbody>
                </table>

               
                <div class="highlight-box">
                    <strong>In Simple Words</strong><br>
                    Literals are fixed values directly written in a Python program, such as numbers, strings, Boolean values, None, lists, tuples, sets, and dictionaries.
                </div>

                <!-- ===== SECTION 4: Operators ===== -->
                <h2>4. Operators</h2>

                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Operators are symbols or keywords used to perform operations on values or variables.
                </div>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    a + b
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>a</strong> → Operand</li>
                    <li><strong>+</strong> → Operator</li>
                    <li><strong>b</strong> → Operand</li>
                </ul>
                <p>So, <strong>+</strong> is used to perform addition.</p>

                <h3>Classification of Operators</h3>

                <div class="highlight-box" style="background: rgba(0, 240, 255, 0.03); border-left-color: var(--neon-cyan);">
                    <p style="margin-bottom: 8px;"><strong>Python operators are classified into 7 types:</strong></p>
                    <ul style="margin: 0; padding-left: 20px;">
                        <li><strong>1. Arithmetic Operators</strong> → +, -, *, /, //, %, **</li>
                        <li><strong>2. Comparison / Relational Operators</strong> → ==, !=, >, <, >=, <=</li>
                        <li><strong>3. Logical Operators</strong> → and, or, not</li>
                        <li><strong>4. Assignment Operators</strong> → =, +=, -=, *=, /=, //=, %=, **=</li>
                        <li><strong>5. Bitwise Operators</strong> → &, |, ^, ~, <<, >></li>
                        <li><strong>6. Membership Operators</strong> → in, not in</li>
                        <li><strong>7. Identity Operators</strong> → is, is not</li>
                    </ul>
                </div>


                <p>Python operators can be classified into:</p>
                <ol>
                    <li>Arithmetic Operators</li>
                    <li>Comparison/Relational Operators</li>
                    <li>Logical Operators</li>
                    <li>Assignment Operators</li>
                    <li>Bitwise Operators</li>
                    <li>Membership Operators</li>
                    <li>Identity Operators</li>
                </ol>

                <!-- ===== A. Arithmetic Operators ===== -->
                <h3>A. Arithmetic Operators</h3>
                <p>Arithmetic operators are used to perform mathematical calculations.</p>

                <table>
                    <thead>
                        <tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>+</td><td>Addition</td><td>10 + 5</td></tr>
                        <tr><td>-</td><td>Subtraction</td><td>10 - 5</td></tr>
                        <tr><td>*</td><td>Multiplication</td><td>10 * 5</td></tr>
                        <tr><td>/</td><td>Division</td><td>10 / 5</td></tr>
                        <tr><td>//</td><td>Floor Division</td><td>10 // 3</td></tr>
                        <tr><td>%</td><td>Modulus/Remainder</td><td>10 % 3</td></tr>
                        <tr><td>**</td><td>Exponent/Power</td><td>2 ** 3</td></tr>
                    </tbody>
                </table>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    a = <span class="number">10</span><br>
                    b = <span class="number">3</span><br><br>
                    print(a + b)   <span class="comment"># 13</span><br>
                    print(a - b)   <span class="comment"># 7</span><br>
                    print(a * b)   <span class="comment"># 30</span><br>
                    print(a / b)   <span class="comment"># 3.3333333333333335</span><br>
                    print(a // b)  <span class="comment"># 3</span><br>
                    print(a % b)   <span class="comment"># 1</span><br>
                    print(a ** b)  <span class="comment"># 1000</span>
                </div>

                <!-- ===== B. Comparison Operators ===== -->
                <h3>B. Comparison / Relational Operators</h3>
                <p>Comparison operators are used to compare two values.</p>
                <p>The result is generally <strong>True</strong> or <strong>False</strong>.</p>

                <table>
                    <thead>
                        <tr><th>Operator</th><th>Meaning</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>==</td><td>Equal to</td></tr>
                        <tr><td>!=</td><td>Not equal to</td></tr>
                        <tr><td>></td><td>Greater than</td></tr>
                        <tr><td><</td><td>Less than</td></tr>
                        <tr><td>>=</td><td>Greater than or equal to</td></tr>
                        <tr><td><=</td><td>Less than or equal to</td></tr>
                    </tbody>
                </table>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    x = <span class="number">10</span><br>
                    y = <span class="number">20</span><br><br>
                    print(x < y)   <span class="comment"># True</span>
                </div>

                <p><strong>Another example:</strong></p>
                <div class="code-block">
                    print(<span class="number">10</span> == <span class="number">5</span>)   <span class="comment"># False</span>
                </div>

                <!-- ===== C. Logical Operators ===== -->
                <h3>C. Logical Operators</h3>
                <p>Logical operators are used to combine or reverse conditions.</p>

                <table>
                    <thead>
                        <tr><th>Operator</th><th>Meaning</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>and</td><td>True if both conditions are true</td></tr>
                        <tr><td>or</td><td>True if at least one condition is true</td></tr>
                        <tr><td>not</td><td>Reverses the Boolean result</td></tr>
                    </tbody>
                </table>

                <p><strong>and Example</strong></p>
                <div class="code-block">
                    age = <span class="number">20</span><br>
                    citizen = <span class="keyword">True</span><br><br>
                    print(age >= <span class="number">18</span> <span class="keyword">and</span> citizen == <span class="keyword">True</span>)   <span class="comment"># True</span>
                </div>

                <p><strong>or Example</strong></p>
                <div class="code-block">
                    age = <span class="number">16</span><br><br>
                    print(age >= <span class="number">18</span> <span class="keyword">or</span> age == <span class="number">16</span>)   <span class="comment"># True</span>
                </div>

                <p><strong>not Example</strong></p>
                <div class="code-block">
                    is_student = <span class="keyword">True</span><br><br>
                    print(<span class="keyword">not</span> is_student)   <span class="comment"># False</span>
                </div>

                <!-- ===== D. Assignment Operators ===== -->
                <h3>D. Assignment Operators</h3>
                <p>Assignment operators are used to assign or update values in variables.</p>

                <table>
                    <thead>
                        <tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>=</td><td>Assign</td><td>x = 10</td></tr>
                        <tr><td>+=</td><td>Add and assign</td><td>x += 5</td></tr>
                        <tr><td>-=</td><td>Subtract and assign</td><td>x -= 5</td></tr>
                        <tr><td>*=</td><td>Multiply and assign</td><td>x *= 5</td></tr>
                        <tr><td>/=</td><td>Divide and assign</td><td>x /= 5</td></tr>
                        <tr><td>//=</td><td>Floor divide and assign</td><td>x //= 5</td></tr>
                        <tr><td>%=</td><td>Modulus and assign</td><td>x %= 5</td></tr>
                        <tr><td>**=</td><td>Power and assign</td><td>x **= 2</td></tr>
                    </tbody>
                </table>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    x = <span class="number">10</span><br>
                    x += <span class="number">5</span><br><br>
                    print(x)   <span class="comment"># 15</span>
                </div>

                <p>Here:</p>
                <div class="code-block">
                    x += <span class="number">5</span>
                </div>
                <p>is equivalent to:</p>
                <div class="code-block">
                    x = x + <span class="number">5</span>
                </div>

                <!-- ===== E. Bitwise Operators ===== -->
                <h3>E. Bitwise Operators</h3>
                <p>Bitwise operators perform operations on the individual bits of integer values.</p>

                <table>
                    <thead>
                        <tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>&</td><td>Bitwise AND</td><td>5 & 3</td></tr>
                        <tr><td>|</td><td>Bitwise OR</td><td>5 | 3</td></tr>
                        <tr><td>^</td><td>Bitwise XOR</td><td>5 ^ 3</td></tr>
                        <tr><td>~</td><td>Bitwise NOT</td><td>~5</td></tr>
                        <tr><td><<</td><td>Left Shift</td><td>5 << 1</td></tr>
                        <tr><td>>></td><td>Right Shift</td><td>5 >> 1</td></tr>
                    </tbody>
                </table>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    a = <span class="number">5</span><br>
                    b = <span class="number">3</span><br><br>
                    print(a & b)   <span class="comment"># 1</span>
                </div>

                <p><strong>Binary representation:</strong></p>
                <div class="code-block" style="font-family: monospace;">
                    5 = 101<br>
                    3 = 011<br><br>
                    101<br>
                    AND 011<br>
                    ---<br>
                    001
                </div>

                <p><strong>Simple Explanation</strong></p>
                <ul>
                    <li><strong>&</strong> → Performs AND on bits</li>
                    <li><strong>|</strong> → Performs OR on bits</li>
                    <li><strong>^</strong> → Performs XOR on bits</li>
                    <li><strong>~</strong> → Inverts bits</li>
                    <li><strong><<</strong> → Shifts bits to the left</li>
                    <li><strong>>></strong> → Shifts bits to the right</li>
                </ul>

                <!-- ===== F. Membership Operators ===== -->
                <h3>F. Membership Operators</h3>
                <p>Membership operators check whether a value exists in a sequence or collection.</p>

                <table>
                    <thead>
                        <tr><th>Operator</th><th>Meaning</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>in</td><td>Checks whether a value exists</td></tr>
                        <tr><td>not in</td><td>Checks whether a value does not exist</td></tr>
                    </tbody>
                </table>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    <span class="string">"Python"</span> <span class="keyword">in</span> [<span class="string">"Java"</span>, <span class="string">"Python"</span>, <span class="string">"C++"</span>]   <span class="comment"># True</span>
                </div>

                <p><strong>not in Example</strong></p>
                <div class="code-block">
                    <span class="string">"JavaScript"</span> <span class="keyword">not in</span> [<span class="string">"Java"</span>, <span class="string">"Python"</span>, <span class="string">"C++"</span>]   <span class="comment"># True</span>
                </div>

                <!-- ===== G. Identity Operators ===== -->
                <h3>G. Identity Operators</h3>
                <p>Identity operators check whether two references refer to the same object.</p>

                <table>
                    <thead>
                        <tr><th>Operator</th><th>Meaning</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>is</td><td>Checks whether two references refer to the same object</td></tr>
                        <tr><td>is not</td><td>Checks whether they refer to different objects</td></tr>
                    </tbody>
                </table>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    a = <span class="keyword">None</span><br><br>
                    print(a <span class="keyword">is</span> <span class="keyword">None</span>)   <span class="comment"># True</span>
                </div>

                <p>Here, <strong>is</strong> checks whether a refers to the None object.</p>

                <p><strong>Important Difference</strong></p>
                <ul>
                    <li><strong>==</strong> → Checks value equality</li>
                    <li><strong>is</strong> → Checks object identity</li>
                </ul>

                <p><strong>For example:</strong></p>
                <div class="code-block">
                    a = [<span class="number">1</span>, <span class="number">2</span>]<br>
                    b = [<span class="number">1</span>, <span class="number">2</span>]<br><br>
                    print(a == b)   <span class="comment"># True</span><br>
                    print(a <span class="keyword">is</span> b)   <span class="comment"># False</span>
                </div>
                <p>The values are equal, but a and b are different list objects.</p>

                <!-- ===== Summary Table ===== -->
                <h3>Summary</h3>

                <table>
                    <thead>
                        <tr><th>Type</th><th>Operators</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Arithmetic</td><td>+ - * / // % **</td><td>Mathematical calculations</td></tr>
                        <tr><td>Comparison / Relational</td><td>== != > < >= <=</td><td>Compare values</td></tr>
                        <tr><td>Logical</td><td>and or not</td><td>Combine/reverse conditions</td></tr>
                        <tr><td>Assignment</td><td>= += -= *= /= //= %= **=</td><td>Assign/update values</td></tr>
                        <tr><td>Bitwise</td><td>& | ^ ~ << >></td><td>Perform operations on bits</td></tr>
                        <tr><td>Membership</td><td>in, not in</td><td>Check membership</td></tr>
                        <tr><td>Identity</td><td>is, is not</td><td>Check object identity</td></tr>
                    </tbody>
                </table>

                <!-- ===== Quick Revision ===== -->
                <h3>Quick Revision</h3>
                <ul>
                    <li><strong>Arithmetic</strong> → + - * / // % **</li>
                    <li><strong>Comparison</strong> → == != > < >= <=</li>
                    <li><strong>Logical</strong> → and or not</li>
                    <li><strong>Assignment</strong> → = += -= *= /= //= %= **=</li>
                    <li><strong>Bitwise</strong> → & | ^ ~ << >></li>
                    <li><strong>Membership</strong> → in, not in</li>
                    <li><strong>Identity</strong> → is, is not</li>
                </ul>

                <div class="definition-box">
                    <strong>Easy Definition for Exam</strong><br>
                    Operators are symbols or keywords used to perform specific operations on values and variables, such as arithmetic calculations, comparisons, logical operations, assignments, bitwise operations, membership checking, and identity checking.
                </div>

                <!-- ===== SECTION 5: Delimiters / Punctuators ===== -->
                <h2>5. Delimiters / Punctuators</h2>

                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Delimiters or punctuators are symbols used to organize, separate, and define different parts of Python code.
                </div>

                <p>They help Python understand the structure of a program.</p>

                <h3>Common Delimiters / Punctuators</h3>

                <table>
                    <thead>
                        <tr><th>Symbol</th><th>Name</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>()</td><td>Parentheses</td><td>Function calls, grouping expressions</td></tr>
                        <tr><td>[]</td><td>Square brackets</td><td>Lists, indexing</td></tr>
                        <tr><td>{}</td><td>Curly braces</td><td>Sets and dictionaries</td></tr>
                        <tr><td>,</td><td>Comma</td><td>Separates items</td></tr>
                        <tr><td>:</td><td>Colon</td><td>Starts a block or separates key-value pairs</td></tr>
                        <tr><td>.</td><td>Dot</td><td>Accesses attributes or methods</td></tr>
                        <tr><td>;</td><td>Semicolon</td><td>Separates statements</td></tr>
                    </tbody>
                </table>

                <h3>Example 1: List</h3>
                <div class="code-block">
                    numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>]
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>[</strong> and <strong>]</strong> → Delimiters</li>
                    <li><strong>,</strong> → Separates list elements</li>
                    <li><strong>=</strong> → Assignment operator</li>
                    <li><strong>10, 20, 30</strong> → Literals</li>
                </ul>

                <h3>Example 2: if Statement</h3>
                <div class="code-block">
                    <span class="keyword">if</span> age >= <span class="number">18</span>:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"Adult"</span>)
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>if</strong> → Keyword</li>
                    <li><strong>age</strong> → Identifier</li>
                    <li><strong>>=</strong> → Operator</li>
                    <li><strong>18</strong> → Integer literal</li>
                    <li><strong>:</strong> → Delimiter/punctuator</li>
                    <li><strong>print</strong> → Built-in function name</li>
                    <li><strong>(</strong> and <strong>)</strong> → Delimiters</li>
                    <li><strong>"Adult"</strong> → String literal</li>
                </ul>

                <div class="highlight-box">
                    <strong>In Simple Words</strong><br>
                    The <strong>:</strong> (colon) indicates that the indented block belonging to the if statement begins.
                </div>

                <!-- ===== SUMMARY OF ALL TOKENS ===== -->
                <h2>📌 Summary of Python Tokens</h2>

                <table>
                    <thead>
                        <tr><th>Token Type</th><th>Description</th><th>Examples</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Keywords</strong></td><td>Reserved words with special meaning</td><td>if, else, for, while, def, class, True, False, None</td></tr>
                        <tr><td><strong>Identifiers</strong></td><td>Names given to variables, functions, classes</td><td>name, age, student_name, calculate_sum</td></tr>
                        <tr><td><strong>Literals</strong></td><td>Fixed values written directly in code</td><td>100, 99.50, "Ritesh", True, None, [10, 20]</td></tr>
                        <tr><td><strong>Operators</strong></td><td>Symbols that perform operations</td><td>+, -, *, /, //, %, **, ==, !=, >, <, and, or, not</td></tr>
                        <tr><td><strong>Delimiters / Punctuators</strong></td><td>Symbols that organize and structure code</td><td>(), [], {}, ,, :, ., ;</td></tr>
                    </tbody>
                </table>

                <div class="definition-box">
                    <strong>Easy Definition for Exam</strong><br>
                    Tokens are the smallest meaningful units of a Python program. They are categorized into:
                    <ul>
                        <li><strong>Keywords</strong> → Reserved words with predefined meaning</li>
                        <li><strong>Identifiers</strong> → Names given to variables, functions, and classes</li>
                        <li><strong>Literals</strong> → Fixed values like numbers, strings, and collections</li>
                        <li><strong>Operators</strong> → Symbols that perform operations on values</li>
                        <li><strong>Delimiters / Punctuators</strong> → Symbols that organize and structure code</li>
                    </ul>
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
        // Left arrow = Previous lesson
        if (e.key === 'ArrowLeft' && e.ctrlKey) {
            e.preventDefault();
            window.location.href = '1.1.2.html';
        }
        // Right arrow = Next lesson
        if (e.key === 'ArrowRight' && e.ctrlKey) {
            e.preventDefault();
            window.location.href = '1.1.4.html';
        }
        // ESC = Back to course
        if (e.key === 'Escape') {
            window.location.href = 'index.html';
        }
    });

    // ===== INITIALIZE =====
    renderLesson();
    updateProgress();

    console.log('📖 Lesson 1.1.3: Tokens in Python loaded!');
    console.log('💡 Use Ctrl+←/→ to navigate between lessons');
    console.log('💡 Press ESC to return to the course page');
});