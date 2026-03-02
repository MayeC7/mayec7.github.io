const otherProjects = [
    
  {
    title: "Toki Pona Tools",
    subhead: "A browser extension and a kindle dictionary generator for looking up words in the constructed language Toki Pona",
    url: "toki-pona",
    roles: ["Solo Developer", "Designer", "Programmer"],
    skills: ["Web Extensions", "Chrome", "Firefox", "Javascript", "HTML", "CSS", "Python"],
    img: "toki/tile_small.png",
    page: `
    <header>
    <h1>o kama pona a!</h1>
    <h1 class="linja-pona">o kama+pona a!</h1>
    <p>
        Toki Pona is a constructed language with fewer than 200 words. 
        It's concept encourages the simplification of thoughts down to their 
        basic meanings. The process of learning the language inspired me to 
        create a couple projects that might be useful to other learners.
    </p>
    </header>
    <main>
    <section>
        <h3>
            Toki Pona Dictionary - <em>ilo nimi pi toki pona</em>
        </h3>
        <p>
            A web extension for looking up words in the language
        </p>
        <p>
            Available for <a href="https://chrome.google.com/webstore/detail/toki-pona-dictionary/cccekjhkcfnbfdkimklpaednfcekcbac?hl=en&authuser=2">Google Chrome</a> and 
            <a href="https://addons.mozilla.org/en-US/firefox/addon/toki-pona-dictionary/">Firefox</a>,
            or visit the <a href="https://github.com/MayeC7/ilo_nimi_pi_toki_pona">source code</a>
        </p>
        <img src="toki/chrome_popup.png" alt="a screenshot of the extention's popup showing the definition, symbol, and other info for the toki pona word 'sijelo'">
        <img src="toki/ff_settings.png" alt="a screenshot of the extention's settings page" width="50%">

        <p>
            The extension can display definitions in multiple languages, show different symbols, and play audio clips of pronunciation.
            It will automatically find the definition of the highlighted word when clicked, and can autoplay the pronounciation as well.
            It is only possible thanks to the online database of words 
            <a href="https://linku.la/about/">Linku</a> and the community members that build 
            and support it.
        </p>
        

    </section>
    <section>
        <h3>Kindle Dictionaries for Toki Pona</h3>
        <p>
            When I started trying to read books in Toki Pona while still 
            new to the language, I found myself repeatedly having to 
            look up words on another device, interrupting the experience.
            Unlike with English texts, I couldn't quickly get a definition by
            highlighting a word. After researching and finding out how to import
            and create a custom kindle dictionary, I got to work creating one
            using existing resources 
            (thanks again to <a href="https://linku.la/about/">Linku</a>)
        </p>
        <strong>This project is curretly broken as the old data source it relied on is no longer available. It needs to be updated to work with the latest version of the Linku API</strong>
        <p>to get dictionaries you can either 
            <a href="https://github.com/MayeC7/lipu_nimi_pi_toki_pona">build from source</a> 
            or download one from 
            <a href="https://github.com/MayeC7/lipu_nimi_pi_toki_pona/releases">releases</a></p>
    </section>
    </main>
    `
  },
  {
    title: "Circular Trade & Barter",
    subhead: "Single-Page Web Application in React",
    roles: ["Frontend Developer", "Product Owner"],
    skills: ["Javascript", "React", "Web APIs", "SCRUM", "Agile"],
    url: "circular",
    img: "circular/screenshot1.png",
    page: `
    <p>This project was completed in Spring quarter 2023 for my Introduction to Software Engineering Course at UCSC.</p>

    <p>
    The concept is for an application, similar to BuyNothing or Freecycle, which allows people to make moneyless excanges of unwanted items. 
    Our final product allowed users to create listings for items they want to either give away or trade for something else. Other users can then
    respond to these posts with requests or offers to trade. The initial poster is given the email address of users who request trades, so communication
    can occur to plan the exchange. Lastly, the user can archive a post when the exchange has been finished.
    </p>


    <p>Our team used Agile & SCRUM methodologies to plan, manage, and track develoment. This included sprint planning, sprint review, and SCRUM Meetings three times a week.
    We kept comprehensive documentation of each step of our process.</p>

    <p>As Product Owner, I defined the user stories and their priority, and led sprint planning meetings</p>

    <p>
    For this project I learned React to build the frontend with the Material UI component library.
    I utilized calls to the Imgur API that would have allowed users to upload images of their items from our app.
    Additonally, I fixed bugs with the backend Docker container, and other issues with the database.
    </p>

    <img src="circular/architecture.png" width=500>
    <img src="circular/tech_stack.png" width=500>

    <h3> Documents </h3>
    <ul>
        <li><a href="circular/final_presentation.pdf">Final Presentation</a></li>
        <li><a href="circular/Release_Plan.pdf">Release Plan</a></li>
        <li><a href="circular/Sprint_4_Planning.pdf">Sprint 4 Plan</a></li>
    </ul>
    `

  },
  {
    title: "Multi-threaded HTTP Server",
    url: "http-server",
    subhead: "A web server program capable of handling GET and PUT requests concurrently, written in C",
    roles: ["Solo Developer"],
    skills: ["C", "Multithreading", "Systems Design", "Makefile", "Bash Scripting", "Testing"],
    img: "HTTP_logo.svg.png",
    page: 
    `
    
<p>
I wrote this http server as the final assignment for my course on Computer Systems Design. 
It appropriately handles GET and PUT requests, and utilizes a thread pool to handle many requests at once. 
I used a variety of techniques to maintain data coherence and prevent overlapping writes, which you can 
read more about in the Design section below. I also wrote a set of bash scipts to test it against the spec.

The source code is not publicly available at this time.
</p>

<h3>Instructions</h3>

<p>To build the object file for the library,
enter <code>make</code> or <code>make all</code> on the command line</p>

<p>To run the program on the command line, use the following format:</p>

<pre><code>\`./httpserver -l &lt;logfile&gt; -t &lt;threads&gt; &lt;port&gt;\`</code></pre>

<p>where <code>&lt;port&gt;</code> is the number of an available port</p>

<p>use <code>-l</code> to choose a file to write the audit log to. If this optional
argument is not provided, the log will be printed to <code>stderr</code> by
default.</p>

<p>To set the number of worker threads the server will create, use <code>-t</code>.
By default, the server creates 5 threads.</p>

<h3>Design</h3>

<p>This server runs using a thread-pool model. A set number of threads are
initiated at the beginning of execution, and set to wait for requests
coming from the thread safe request_queue. When the main thread receives
an incoming connection, it will push the fd of the connection to the
queue. One of the threads will be awakened to pop the fd and begin
processing the connection.</p>

<p>A primary concern for doing requested work in parallel is preventing
file operations on the same file from overlapping. Ensuring the
atomicity of file writes and reads is critical. However, as discussed in
class, multiple reads happening to the same file simultaneously does not
cause issues. Therefore, it would make sense to use some sort of
shared/exclusive lock setup. I looked into different methods for doing
this in C, including flock. I discovered that flock only locks processes
from using a specific file descriptor, and not an actual file though.
Since each thread opens the file itself, each thread could have a
different descriptor for the same file, so it wouldn&#39;t really work.</p>

<p>The method I ultimately settled with was to implement a URI lock which
locks a specific URI for use by one thread at a time. I saw this method
being discussed in the Discord server, and it seemed like a good idea
to me becuase it could also be used to protect operations of
opening/creating files, which worked well for my implementation.</p>

<p>Some students mentioned using a hash map to store URI-lock pairs, but
Prof. Alvaro added that doing so would not be required: an array would
do, even if it wouldn&#39;t be the fastest (Big-O wise) for searching.
I felt like this was the right move, so I implemented the URI locks with
a table (basic array) of URI_locks.
Each of these locks stores:</p>

<ul><li>a flag <code>initialized</code></li><li>a 20 char string <code>URI</code></li><li>a read/write lock <code>rwlock</code></li></ul>

<p>The initializer function allocates all necessary memory for the table
and sets all <code>initialized</code> flags to 0.</p>

<p>To lock <code>URI</code>, we iterate over the table looking for the
matching string. If we reach a lock with <code>initialized == 0</code> before then,
we have reached the end of the initialized locks, meaning we need to
create a lock for the given URI. Once we do this, we set the flag to 1.
If the end of the array is reached before finding a matching or
uninitialized lock, the array is <code>realloc</code>&#39;d at double it&#39;s previous
size. Initially, I wanted to figure out a way to avoid this by &#39;freeing&#39;
locks not in use, but I couldn&#39;t work out the details of conclusively
knowing a lock is not in use anymore, so I scrapped that idea.</p>

<p>Once we have a URI lock, whether we created it or not, it is locked
according to the access type passed (READ or WRITE). READ places a
<code>rdlock</code>, which can coexist with other <code>rdlock</code>s. WRITE, however, places
an exlusive <code>wrlock</code>, which must wait for any other locks to be
unlocked,
shared or otherwise. The major downside of this method, which I did not
end up addresing in my implementation, is that the threads looking to
WRITE can be kept waiting for a long time, as multiple threads doing
reads continually lock.</p>

<p>Unlocking a <code>URI</code> goes through a similar process of searching through 
the table for the <code>URI</code>, and then it unlocks whatever the current
thread has on the <code>URI</code>.</p>

<p>In <code>main()</code>, a <code>main_uri_table</code> is initialized for use by all threads.
I used these URI locks within the functions for processing GET and PUT
requests. The lock on GET is set as READ, and the lock on PUT is set as
WRITE. In both of these functions, I mostly lock the sections related to
performing file creation and I/O.</p>

<p>The next major hurdle for getting the server thread-safe was seperating
the <code>io</code> modules buffers out for each thread. In my single-threaded
implementation, the buffers and indices used by the <code>io</code> functions were
all global, which I realized wouldn&#39;t work for a multi-threaded version.
To resolve this, I stored buffers and pointers for each thread as
structs which needed to be passed to all <code>io</code> functions. The structs are
stored in global arrays <code>in_buffers</code> and <code>out_buffers</code>, and each thread 
is passed its thread id to use as an index to access its own buffers.
I&#39;m not sure if this is the ideal solution, but it works well.</p>

<p>Lastly, the log also needed it&#39;s own lock to keep writes to it atomic.
Calls to <code>log_request</code> were placed strategically within the locked 
critical regions of GET and PUT functions, such that the ordering of
processed requests to the same file would be accurate in the log.</p>

    `
    
  },
  {
    title: "This Portfolio Website",
    subhead: "this page you are looking at right now, built with react and MUI components",
    url: "portfolio",
    img: "portfolio.png",
    skills: ["React", "Javascript",  "HTML", "JSON", "Data-driven Design"],
    page: `
    <p>
      Welcome to my portfolio! I designed and developed this site myself using Vite, React, Material UI components, and JSONs containing data for each project.
    </p>
    <p>
    I did this myself primarily because I didn't like any of the portfolio templates I was finding out there. I could have chosen to be not picky 
    and went with something acceptable, but I tend to dislike settling for another person's work, especially for something so personal as my OWN website.
    That being said, I did take heavy inspiration from <a href="https://github.com/schouffy/gamedev-portfolio"> this template</a>, especially the way it processes project data.
    This isn't meant to be a template, but you could probably use it like one if you took the source and replaced all my stuff.

    I know my site (app) isn't perfect. Visually I know a lot of the style is still close to the MUI defaults. I also think there may be a better way to route to and build all the pages.
    If you have any tips or suggestions for improving this site, let me know through the issues section on GitHub.
    </p>
    <p>
    Also a huge shout out to my friend Phong for helping me refine my layout and designing my cool nametag logo! Please check out
    <a href="https://pdtran.wixsite.com/cool-portfolio">his portfolio</a> he does some pretty amazing stuff.
    </p>
    
    `
  }
];

export default otherProjects;