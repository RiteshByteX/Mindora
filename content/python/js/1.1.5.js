// ============================================
// 📖 LESSON 1.1.5 - Data Types in Python
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PRELOADER =====
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.classList.add('hidden');
    });

    // ===== LESSON DATA =====
    const lessonData = {
        id: '1.1.5',
        title: 'Data Types in Python',
        duration: '25 min',
        totalLessons: 31,
        currentLesson: 5,
        content: `
            <div class="lesson-header">
                <span class="lesson-id">Lesson 1.1.5</span>
                <h1>Data Types in Python</h1>
                <div class="lesson-meta">
                    <span><i class="fas fa-clock"></i> 25 min</span>
                    <span><i class="fas fa-signal"></i> Beginner</span>
                    <span><i class="fas fa-tag"></i> Fundamentals</span>
                </div>
            </div>

            <div class="lesson-body">

                <!-- ===== SECTION: Definition ===== -->
                <h2>Definition</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A data type specifies the type of value that a variable can store or refer to.
                </div>
                <p>Python uses data types to determine:</p>
                <ul>
                    <li>What kind of data is being represented</li>
                    <li>What operations can be performed on the data</li>
                    <li>How the data behaves during program execution</li>
                </ul>

                <p><strong>Example</strong></p>
                <div class="code-block">
                    age = <span class="number">20</span><br>
                    name = <span class="string">"Ritesh"</span><br>
                    price = <span class="number">99.50</span><br>
                    is_student = <span class="keyword">True</span>
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>20</strong> → int</li>
                    <li><strong>"Ritesh"</strong> → str</li>
                    <li><strong>99.50</strong> → float</li>
                    <li><strong>True</strong> → bool</li>
                </ul>
                <p>Python automatically determines the data type, so you do not normally need to declare it explicitly.</p>

                <!-- ===== SECTION: Classification ===== -->
                <h2>Classification of Python Data Types</h2>
                <p>Python's built-in data types can be broadly classified as:</p>

                <h3>Collection Types Overview</h3>
                <div class="image-grid">
                    <div class="image-container">
                        <img 
                            src="../assets/Datatypes1.png" 
                            alt="List Example" 
                            class="lesson-image"
                        />
                        <p class="image-caption">Lists - Mutable sequences</p>
                    </div>
                    <div class="image-container">
                        <img 
                            src="../assets/Datatypes.png" 
                            alt="Tuple Example" 
                            class="lesson-image"
                        />
                        <p class="image-caption">Tuples - Immutable sequences</p>
                    </div>
                    
                </div>

                <!-- ===== SECTION: Numeric Data Types ===== -->
                <h2>Numeric Data Types</h2>
                <p>Numeric data types are used to store numbers.</p>
                <p>Python mainly provides:</p>
                <ul>
                    <li><strong>int</strong> — Integer</li>
                    <li><strong>float</strong> — Floating-point</li>
                    <li><strong>complex</strong> — Complex numbers</li>
                </ul>

                <h3>A. Integer (int)</h3>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    An integer represents whole numbers, positive, negative, or zero.
                </div>

                <p><strong>Examples</strong></p>
                <div class="code-block">
                    age = <span class="number">20</span><br>
                    marks = <span class="number">95</span><br>
                    temperature = <span class="number">-5</span>
                </div>
                <ul>
                    <li><strong>20</strong> → int</li>
                    <li><strong>95</strong> → int</li>
                    <li><strong>-5</strong> → int</li>
                </ul>

                <div class="code-block">
                    x = <span class="number">100</span><br><br>
                    <span class="keyword">print</span>(type(x))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'int'&gt;
                </div>

                <h3>B. Float (float)</h3>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A float represents a decimal/floating-point number.
                </div>

                <p><strong>Examples</strong></p>
                <div class="code-block">
                    price = <span class="number">99.50</span><br>
                    height = <span class="number">5.8</span><br>
                    temperature = <span class="number">-2.5</span>
                </div>

                <div class="code-block">
                    x = <span class="number">99.50</span><br><br>
                    <span class="keyword">print</span>(type(x))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'float'&gt;
                </div>

                <h3>C. Complex (complex)</h3>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A complex number contains a real part and an imaginary part.
                </div>
                <p>Python uses <strong>j</strong> to represent the imaginary part.</p>

                <div class="code-block">
                    z = <span class="number">2</span> + <span class="number">3</span>j<br><br>
                    <span class="keyword">print</span>(type(z))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'complex'&gt;
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>2</strong> → Real part</li>
                    <li><strong>3j</strong> → Imaginary part</li>
                </ul>

                <!-- ===== SECTION: Boolean ===== -->
                <h2>Boolean Data Type</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    The Boolean data type is represented by <strong>bool</strong>. It has only two values: <strong>True</strong> and <strong>False</strong>.
                </div>

                <div class="code-block">
                    is_student = <span class="keyword">True</span><br>
                    is_logged_in = <span class="keyword">False</span>
                </div>

                <div class="code-block">
                    x = <span class="keyword">True</span><br><br>
                    <span class="keyword">print</span>(type(x))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'bool'&gt;
                </div>

                <p>Boolean values are commonly used with conditions.</p>
                <div class="code-block">
                    age = <span class="number">20</span><br><br>
                    <span class="keyword">print</span>(age >= <span class="number">18</span>)
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    True
                </div>

                <!-- ===== SECTION: String ===== -->
                <h2>String Data Type</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A string (str) is a sequence of characters.
                </div>
                <p>Strings are written inside:</p>
                <ul>
                    <li>Single quotes <strong>' '</strong></li>
                    <li>Double quotes <strong>" "</strong></li>
                    <li>Triple quotes <strong>''' '''</strong> or <strong>""" """</strong></li>
                </ul>

                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br>
                    course = <span class="string">'BCA'</span>
                </div>

                <div class="code-block">
                    text = <span class="string">"Hello Python"</span><br><br>
                    <span class="keyword">print</span>(type(text))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'str'&gt;
                </div>

                <p><strong>String Indexing Example</strong></p>
                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br><br>
                    <span class="keyword">print</span>(name[<span class="number">0</span>])
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    R
                </div>
                <p>Strings are <strong>ordered</strong> and <strong>immutable</strong>.</p>

                <!-- ===== SECTION: List ===== -->
                <h2>List Data Type</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A list is an ordered and mutable collection of elements.
                </div>
                <p>Lists are written using square brackets <strong>[]</strong>.</p>

                <div class="code-block">
                    numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>]
                </div>

                <p>A list can contain different data types:</p>
                <div class="code-block">
                    student = [<span class="string">"Ritesh"</span>, <span class="number">20</span>, <span class="number">94.4</span>, <span class="keyword">True</span>]
                </div>

                <p><strong>Properties</strong></p>
                <ul>
                    <li>Ordered</li>
                    <li>Mutable</li>
                    <li>Allows duplicate values</li>
                    <li>Allows different data types</li>
                </ul>

                <div class="code-block">
                    numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>]<br><br>
                    numbers[<span class="number">0</span>] = <span class="number">100</span><br><br>
                    <span class="keyword">print</span>(numbers)
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    [100, 20, 30]
                </div>

                <!-- ===== SECTION: Tuple ===== -->
                <h2>Tuple Data Type</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A tuple is an ordered and immutable collection.
                </div>
                <p>Tuples are generally written using parentheses <strong>()</strong>.</p>

                <div class="code-block">
                    numbers = (<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>)
                </div>

                <p><strong>Properties</strong></p>
                <ul>
                    <li>Ordered</li>
                    <li>Immutable</li>
                    <li>Allows duplicate values</li>
                    <li>Can contain different data types</li>
                </ul>

                <div class="code-block">
                    data = (<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>)<br><br>
                    <span class="keyword">print</span>(data[<span class="number">0</span>])
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    10
                </div>

                <div class="highlight-box">
                    <strong>Note:</strong> You cannot normally modify a tuple element. <br>
                    <code>data[0] = 100</code> produces a <strong>TypeError</strong>.
                </div>

                <!-- ===== SECTION: Set ===== -->
                <h2>Set Data Type</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A set is an unordered collection of unique elements.
                </div>
                <p>Sets are created using curly braces <strong>{}</strong>.</p>

                <div class="code-block">
                    numbers = {<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>}
                </div>

                <p>Duplicate values are automatically removed:</p>
                <div class="code-block">
                    numbers = {<span class="number">10</span>, <span class="number">20</span>, <span class="number">20</span>, <span class="number">30</span>}<br><br>
                    <span class="keyword">print</span>(numbers)
                </div>
                <p><strong>Output (conceptual):</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    {10, 20, 30}
                </div>

                <p><strong>Properties</strong></p>
                <ul>
                    <li>Unordered</li>
                    <li>Mutable</li>
                    <li>Does not allow duplicate elements</li>
                    <li>Elements must be hashable</li>
                </ul>
                <p>A set does not support indexing like a list or tuple.</p>

                <!-- ===== SECTION: Dictionary ===== -->
                <h2>Dictionary Data Type</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    A dictionary (dict) stores data in key-value pairs.
                </div>
                <p>It is written using curly braces <strong>{}</strong>.</p>

                <div class="code-block">
                    student = {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"Ritesh"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"age"</span>: <span class="number">20</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"course"</span>: <span class="string">"BCA"</span><br>
                    }
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>"name"</strong> → Key, <strong>"Ritesh"</strong> → Value</li>
                    <li><strong>"age"</strong> → Key, <strong>20</strong> → Value</li>
                </ul>

                <p><strong>Accessing Values</strong></p>
                <div class="code-block">
                    <span class="keyword">print</span>(student[<span class="string">"name"</span>])
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    Ritesh
                </div>

                <p><strong>Properties</strong></p>
                <ul>
                    <li>Stores key-value pairs</li>
                    <li>Mutable</li>
                    <li>Keys must be unique</li>
                    <li>Keys must be hashable</li>
                    <li>Maintains insertion order in modern Python</li>
                </ul>

                <!-- ===== SECTION: Range ===== -->
                <h2>Range Data Type</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    range represents a sequence of numbers, commonly used with loops.
                </div>

                <div class="code-block">
                    numbers = range(<span class="number">5</span>)<br><br>
                    <span class="keyword">print</span>(list(numbers))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    [0, 1, 2, 3, 4]
                </div>

                <p><strong>Example with Loop</strong></p>
                <div class="code-block">
                    <span class="keyword">for</span> i <span class="keyword">in</span> range(<span class="number">5</span>):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(i)
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    0<br>1<br>2<br>3<br>4
                </div>

                <!-- ===== SECTION: None Type ===== -->
                <h2>None Type</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Python has a special value called <strong>None</strong>. Its data type is <strong>NoneType</strong>.
                </div>
                <p>It represents the absence of a value.</p>

                <div class="code-block">
                    result = <span class="keyword">None</span><br><br>
                    <span class="keyword">print</span>(type(result))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'NoneType'&gt;
                </div>
                <p>It is commonly used when a variable currently has no meaningful value.</p>

                <!-- ===== SECTION: Binary Data Types ===== -->
                <h2>Binary Data Types</h2>
                <p>Python provides three built-in binary data types:</p>
                <ul>
                    <li><strong>bytes</strong> — Immutable sequence of bytes</li>
                    <li><strong>bytearray</strong> — Mutable sequence of bytes</li>
                    <li><strong>memoryview</strong> — Access memory without copying</li>
                </ul>

                <div class="code-block">
                    data = b<span class="string">"Hello"</span><br><br>
                    <span class="keyword">print</span>(type(data))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'bytes'&gt;
                </div>

                <!-- ===== SECTION: type() ===== -->
                <h2>Checking Data Type Using type()</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Python provides the <strong>type()</strong> function to determine the type of an object.
                </div>

                <div class="code-block">
                    x = <span class="number">100</span><br>
                    <span class="keyword">print</span>(type(x))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'int'&gt;
                </div>

                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br>
                    <span class="keyword">print</span>(type(name))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    &lt;class 'str'&gt;
                </div>

                <!-- ===== SECTION: isinstance() ===== -->
                <h2>Checking Type Using isinstance()</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    <strong>isinstance()</strong> checks whether an object belongs to a particular type or class.
                </div>

                <div class="code-block">
                    x = <span class="number">10</span><br><br>
                    <span class="keyword">print</span>(isinstance(x, int))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    True
                </div>

                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br><br>
                    <span class="keyword">print</span>(isinstance(name, int))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    False
                </div>

                <!-- ===== SECTION: Mutable vs Immutable ===== -->
                <h2>Mutable and Immutable Data Types</h2>

                <h3>Mutable</h3>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Mutable objects can be modified after they are created.
                </div>
                <p><strong>Examples:</strong></p>
                <ul>
                    <li>list</li>
                    <li>dict</li>
                    <li>set</li>
                    <li>bytearray</li>
                </ul>

                <div class="code-block">
                    numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>]<br><br>
                    numbers[<span class="number">0</span>] = <span class="number">100</span><br><br>
                    <span class="keyword">print</span>(numbers)
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    [100, 20, 30]
                </div>

                <h3>Immutable</h3>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Immutable objects cannot be modified after they are created.
                </div>
                <p><strong>Common examples:</strong></p>
                <ul>
                    <li>int, float, complex</li>
                    <li>bool</li>
                    <li>str</li>
                    <li>tuple</li>
                    <li>bytes</li>
                    <li>frozenset</li>
                    <li>NoneType</li>
                </ul>

                <div class="code-block">
                    x = <span class="number">10</span>
                </div>
                <p>You cannot change the existing integer object itself. An assignment such as:</p>
                <div class="code-block">
                    x = <span class="number">20</span>
                </div>
                <p>makes <strong>x</strong> refer to another integer object.</p>

                <!-- ===== SECTION: Ordered vs Unordered ===== -->
                <h2>Ordered and Unordered Types</h2>

                <h3>Ordered</h3>
                <p>These maintain an element order:</p>
                <ul>
                    <li>str</li>
                    <li>list</li>
                    <li>tuple</li>
                    <li>range</li>
                    <li>dict</li>
                </ul>

                <h3>Unordered</h3>
                <p>A set and frozenset should not be treated as indexed sequences.</p>
                <ul>
                    <li>set</li>
                    <li>frozenset</li>
                </ul>

                <!-- ===== SECTION: Homogeneous vs Heterogeneous ===== -->
                <h2>Homogeneous and Heterogeneous Data</h2>
                <p>Python collections can contain different types of values.</p>

                <h3>Homogeneous</h3>
                <p>Same type of data:</p>
                <div class="code-block">
                    numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>]
                </div>
                <p>All elements are integers.</p>

                <h3>Heterogeneous</h3>
                <p>Different types of data:</p>
                <div class="code-block">
                    student = [<span class="string">"Ritesh"</span>, <span class="number">20</span>, <span class="number">94.4</span>, <span class="keyword">True</span>]
                </div>
                <p>Here we have: str, int, float, bool</p>
                <p>Python allows this.</p>

                <!-- ===== SECTION: Type Conversion ===== -->
                <h2>Type Conversion</h2>
                <div class="definition-box">
                    <strong>Definition</strong><br>
                    Type conversion means converting a value from one data type to another.
                </div>

                <table>
                    <thead>
                        <tr><th>Function</th><th>Converts to</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>int()</strong></td><td>Integer</td></tr>
                        <tr><td><strong>float()</strong></td><td>Float</td></tr>
                        <tr><td><strong>str()</strong></td><td>String</td></tr>
                        <tr><td><strong>bool()</strong></td><td>Boolean</td></tr>
                        <tr><td><strong>list()</strong></td><td>List</td></tr>
                        <tr><td><strong>tuple()</strong></td><td>Tuple</td></tr>
                        <tr><td><strong>set()</strong></td><td>Set</td></tr>
                        <tr><td><strong>dict()</strong></td><td>Dictionary</td></tr>
                    </tbody>
                </table>

                <div class="code-block">
                    x = <span class="string">"100"</span><br><br>
                    y = int(x)<br><br>
                    <span class="keyword">print</span>(y)<br>
                    <span class="keyword">print</span>(type(y))
                </div>
                <p><strong>Output:</strong></p>
                <div class="code-block" style="color: #4fc3f7;">
                    100<br>
                    &lt;class 'int'&gt;
                </div>

                <!-- ===== SECTION: Complete Classification ===== -->
                <h2>Complete Data Type Classification</h2>

                <div class="type-diagram">
                    <div class="type-flow">
                        <div class="type-root">🐍 PYTHON DATA TYPES</div>
                        <div class="type-vertical-line"></div>
                        <div class="type-branch-container">
                            <div class="type-horizontal-line" style="width: 80%;"></div>
                        </div>
                        <div class="type-children" style="gap: 25px;">
                            <div class="type-child">
                                <div class="type-node numeric">🔢 Numeric</div>
                            </div>
                            <div class="type-child">
                                <div class="type-node sequence">📝 Sequence</div>
                            </div>
                            <div class="type-child">
                                <div class="type-node set-type">🔷 Set</div>
                            </div>
                            <div class="type-child">
                                <div class="type-node boolean">⚡ Boolean</div>
                            </div>
                            <div class="type-child">
                                <div class="type-node mapping">🗺️ Mapping</div>
                            </div>
                            <div class="type-child">
                                <div class="type-node binary">💾 Binary</div>
                            </div>
                            <div class="type-child">
                                <div class="type-node none-type">⬛ None</div>
                            </div>
                        </div>
                        <div class="type-sub-level" style="gap: 15px;">
                            <div class="type-sub-node">int, float, complex</div>
                            <div class="type-sub-node">str, list, tuple, range</div>
                            <div class="type-sub-node">set, frozenset</div>
                            <div class="type-sub-node">bool</div>
                            <div class="type-sub-node">dict</div>
                            <div class="type-sub-node">bytes, bytearray, memoryview</div>
                            <div class="type-sub-node">NoneType</div>
                        </div>
                    </div>
                </div>

                <!-- ===== SECTION: Important Data Types Table ===== -->
                <h2>Important Data Types Table</h2>

                <table class="type-table">
                    <thead>
                        <tr>
                            <th>Data Type</th>
                            <th>Example</th>
                            <th>Mutable?</th>
                            <th>Ordered?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>int</strong></td>
                            <td><code>10</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td><strong>float</strong></td>
                            <td><code>10.5</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td><strong>complex</strong></td>
                            <td><code>2+3j</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td><strong>bool</strong></td>
                            <td><code>True</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td><strong>str</strong></td>
                            <td><code>"Python"</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                        </tr>
                        <tr>
                            <td><strong>list</strong></td>
                            <td><code>[1, 2, 3]</code></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                        </tr>
                        <tr>
                            <td><strong>tuple</strong></td>
                            <td><code>(1, 2, 3)</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                        </tr>
                        <tr>
                            <td><strong>set</strong></td>
                            <td><code>{1, 2, 3}</code></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                            <td><span class="tag tag-no">No</span></td>
                        </tr>
                        <tr>
                            <td><strong>frozenset</strong></td>
                            <td><code>frozenset({1,2})</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td><span class="tag tag-no">No</span></td>
                        </tr>
                        <tr>
                            <td><strong>dict</strong></td>
                            <td><code>{"a": 1}</code></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                            <td><span class="tag tag-yes">Yes*</span></td>
                        </tr>
                        <tr>
                            <td><strong>range</strong></td>
                            <td><code>range(5)</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                        </tr>
                        <tr>
                            <td><strong>bytes</strong></td>
                            <td><code>b"Hi"</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                        </tr>
                        <tr>
                            <td><strong>bytearray</strong></td>
                            <td><code>bytearray(5)</code></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                            <td><span class="tag tag-yes">Yes</span></td>
                        </tr>
                        <tr>
                            <td><strong>NoneType</strong></td>
                            <td><code>None</code></td>
                            <td><span class="tag tag-no">No</span></td>
                            <td>—</td>
                        </tr>
                    </tbody>
                </table>
                <p style="font-size: 0.8rem; color: var(--text-muted);">* Dictionaries preserve insertion order in modern Python.</p>

                <!-- ===== SECTION: Real-Life Example ===== -->
                <h2>Real-Life Example</h2>
                <p>Consider a student record:</p>

                <div class="code-block">
                    name = <span class="string">"Ritesh"</span><br>
                    age = <span class="number">20</span><br>
                    percentage = <span class="number">94.4</span><br>
                    is_student = <span class="keyword">True</span><br><br>
                    subjects = [<span class="string">"Python"</span>, <span class="string">"DBMS"</span>, <span class="string">"Java"</span>]<br>
                    marks = (<span class="number">90</span>, <span class="number">85</span>, <span class="number">95</span>)<br><br>
                    skills = {<span class="string">"Python"</span>, <span class="string">"SQL"</span>, <span class="string">"C++"</span>}<br><br>
                    student = {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span>: <span class="string">"Ritesh"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"age"</span>: <span class="number">20</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"course"</span>: <span class="string">"BCA"</span><br>
                    }
                </div>

                <p><strong>Data types:</strong></p>
                <ul>
                    <li><strong>name</strong> → str</li>
                    <li><strong>age</strong> → int</li>
                    <li><strong>percentage</strong> → float</li>
                    <li><strong>is_student</strong> → bool</li>
                    <li><strong>subjects</strong> → list</li>
                    <li><strong>marks</strong> → tuple</li>
                    <li><strong>skills</strong> → set</li>
                    <li><strong>student</strong> → dict</li>
                </ul>

                <!-- ===== SECTION: Variables vs Literals ===== -->
                <h2>Data Types vs Variables vs Literals</h2>
                <p>These three concepts are related but different.</p>

                <div class="code-block">
                    age = <span class="number">20</span>
                </div>
                <p>Here:</p>
                <ul>
                    <li><strong>age</strong> → Variable / Identifier</li>
                    <li><strong>20</strong> → Literal</li>
                    <li><strong>int</strong> → Data Type</li>
                    <li><strong>=</strong> → Assignment Operator</li>
                </ul>

                <div class="code-block">
                    name = <span class="string">"Ritesh"</span>
                </div>
                <ul>
                    <li><strong>name</strong> → Identifier</li>
                    <li><strong>"Ritesh"</strong> → String Literal</li>
                    <li><strong>str</strong> → Data Type</li>
                    <li><strong>=</strong> → Assignment Operator</li>
                </ul>

                <!-- ===== SECTION: Exam Definition ===== -->
                <h2>Exam Definition</h2>
                <div class="definition-box" style="border-left-color: #ffa500;">
                    <strong>Exam Definition</strong><br>
                    A data type defines the kind of value an object represents and determines the operations that can be performed on it. Python provides built-in data types such as numeric, Boolean, string, list, tuple, set, dictionary, range, binary, and None types.
                </div>

                <div class="highlight-box" style="border-left-color: #ffa500;">
                    <strong>One-Line Revision</strong><br>
                    Data Type → Defines what kind of data a value/object represents.
                </div>

                <!-- ===== SECTION: Quick Revision ===== -->
                <h2>📌 Most Important Classification to Remember</h2>

                <div class="quick-revision">
                    <div class="rev-node rev-root">Python Data Types</div>
                    <div class="rev-arrow">↓</div>
                    <div class="rev-level" style="gap: 10px;">
                        <div class="rev-node rev-child">🔢 Numeric<br><small>int, float, complex</small></div>
                        <div class="rev-node rev-child">⚡ Boolean<br><small>bool</small></div>
                        <div class="rev-node rev-child">📝 Text<br><small>str</small></div>
                    </div>
                    <div class="rev-arrow">↓</div>
                    <div class="rev-level" style="gap: 10px;">
                        <div class="rev-node rev-child">📋 Sequence<br><small>list, tuple, range</small></div>
                        <div class="rev-node rev-child">🔷 Set<br><small>set, frozenset</small></div>
                        <div class="rev-node rev-child">🗺️ Mapping<br><small>dict</small></div>
                    </div>
                    <div class="rev-arrow">↓</div>
                    <div class="rev-level" style="gap: 10px;">
                        <div class="rev-node rev-child">💾 Binary<br><small>bytes, bytearray, memoryview</small></div>
                        <div class="rev-node rev-child">⬛ None<br><small>NoneType</small></div>
                    </div>
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
            window.location.href = '1.1.4.html';
        }
        if (e.key === 'ArrowRight' && e.ctrlKey) {
            e.preventDefault();
            window.location.href = '1.1.6.html';
        }
        if (e.key === 'Escape') {
            window.location.href = 'index.html';
        }
    });

    // ===== INITIALIZE =====
    renderLesson();
    updateProgress();

    console.log('📖 Lesson 1.1.5: Data Types in Python loaded!');
    console.log('💡 Use Ctrl+←/→ to navigate between lessons');
    console.log('💡 Press ESC to return to the course page');
});