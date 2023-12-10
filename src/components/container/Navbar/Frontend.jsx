import React, { useEffect } from 'react'
import Navbar from './Navbar'
import "./style.css"
const Frontend = () => {
    
    useEffect(()=>{
        const openModalButtons = document.querySelectorAll('[data-modal-target]')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const overlay = document.getElementById('overlay')
        
        openModalButtons.forEach(button => {
          button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
          })
        })
        
        overlay.addEventListener('click', () => {
          const modals = document.querySelectorAll('.modal.active')
          modals.forEach(modal => {
            closeModal(modal)
          })
        }) 
        
        closeModalButtons.forEach(button => {
          button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
          })
        })
        
        function openModal(modal) {
          if (modal == null) return
          modal.classNameList.add('active')
          overlay.classNameList.add('active')
        }
        
        function closeModal(modal) {
          if (modal == null) return
          modal.classNameList.remove('active')
          overlay.classNameList.remove('active')
        }
        
    },[])
  return (
    <>

    
    <Navbar />

    
    <div className="tree">
        <h2>Front End</h2> 
        <ul>
            <div className="tree">
                <ul>
                    <li>
                        <button id="rootButton">FRONT END</button>
                        <ul>
                            <li>
                                <button id="child1Button" data-modal-target="#INTERNET">INTERNET</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#internetWork">How does the
                                            Internet work
                                            ?</button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#HTTPS">What is HTTP
                                                    ?</button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#Domain">What is
                                                            domain name ?</button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button"
                                                                    data-modal-target="#Hosting">What is Hosting ?
                                                                </button>
                                                                <ul>
                                                                    <li>
                                                                        <button id="child1Button"
                                                                            data-modal-target="#DNS">DNS and how it
                                                                            works ?
                                                                        </button>
                                                                        <ul>
                                                                            <li>
                                                                                <button id="child1Button"
                                                                                    data-modal-target="#Browser">Browsers
                                                                                    and how they work ?
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button id="child1Button" data-modal-target="#HTML">HTML</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#Basics">Basics
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#Semantic">Semantic HTML
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#Forms">Forms and
                                                            validation
                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button"
                                                                    data-modal-target="#Accessibility">Accessibility
                                                                </button>
                                                                <ul>
                                                                    <li>
                                                                        <button id="child1Button"
                                                                            data-modal-target="#SEO">SEO Basics
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button>CSS</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#CSSBasic">Basics
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#Layouts">Making layouts
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#Responsive">Responsive
                                                            design
                                                        </button>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button>JavaScript</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#BasicJS">Basics
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#DOM">DOM Manipulation
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#FetchAPI">Fetch API
                                                            / AJAX (XHR)
                                                        </button>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button id="child1Button" data-modal-target="#popup1">Framework
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#React">React
                                                </button>
                                            </li>
                                            <li>
                                                <button id="child1Button" data-modal-target="#Vue">Vue.js
                                                </button>
                                            </li>
                                            <li>
                                                <button id="child1Button" data-modal-target="#Angular">Angular
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </ul>
    </div>

    <div className="modal" id="INTERNET">
                <div className="modal-header">
                    <h1 className="title">Basics of Internet</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>
                        The Internet (or internet)[a] is the global system of interconnected computer networks that uses
                        the Internet protocol suite (TCP/IP)[b] to communicate between networks and devices. It is a
                        network of networks that consists of private, public, academic, business, and government
                        networks of local to global scope, linked by a broad array of electronic, wireless, and optical
                        networking technologies. The Internet carries a vast range of information resources and
                        services, such as the interlinked hypertext documents and applications of the World Wide Web
                        (WWW), electronic mail, telephony, and file sharing.
                    </p>
                </div>
            </div>

            <div className="modal" id="HTTPS">
                <div className="modal-header">
                    <h1 className="title">What is HTTPS ?</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>HTTP is the TCP/IP based application layer communication protocol which standardizes how the
                        client and server communicate with each other. HTTP follows a classNameical “Client-Server model”
                        with a client opening a connection request, then waiting until it receives a response. HTTP is a
                        stateless protocol, that means that the server does not keep any data (state) between two
                        requests.
                        {/*<br/>*/}
                        Visit the following resources to learn more:
                        {/*<br/>*/}
                        <a href="https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/"
                            target="_blank"> Everything about HTTPS .</a>
                    </p>
                </div>
            </div>

            <div className="modal" id="Domain">
                <div className="modal-header">
                    <h1 className="title">What is Domain ?</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>A domain name is a unique, easy-to-remember address used to access websites, such as
                        ‘google.com’, and ‘facebook.com’. Users can connect to websites using domain names thanks to the
                        DNS system.</p>
                    {/*<br/>*/}
                    Visit the following resources to learn more:
                    {/*<br/>*/}
                    <a href="https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/" target="_blank">
                        Everything about Domain .</a>
                </div>
            </div>

            <div className="modal" id="internetWork">
                <div className="modal-header">
                    <h1 className="title">How does the Internet Works ?</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>The Internet is a network of networks. It works by using a technique called packet switching, and
                        by relying on standardized networking protocols that all computers can interpret.</p>
                    {/*<br/>*/}
                    Visit the following resources to learn more:
                    {/*<br/>*/}
                    <a href="https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/#:~:text=Computers%20connect%20to%20each%20other%20and%20to%20the%20Internet%20via,interpreted%20by%20the%20receiving%20computer."
                        target="_blank"> Everything about Working of Internet.</a>
                </div>
            </div>

            <div className="modal" id="Hosting">
                <div className="modal-header">
                    <h1 className="title">What is Hosting ?</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>

                        Web hosting is an online service that makes your website’s content accessible on the internet.
                        When you purchase a hosting plan, you are renting space on a physical server to store all the
                        website’s files and data.

                        Web hosts provide the hosting technology and resources required for the effective and secure
                        operation of your website. They are responsible for keeping the server up and running,
                        implementing hosting security measures, and ensuring that data such as texts, photos, and other
                        files are transferred successfully to the visitors’ browsers.</p>
                    {/*<br/>*/}
                    Visit the following resources to learn more:
                    {/*<br/>*/}
                    <a href="https://www.hostinger.in/tutorials/what-is-web-hosting/" target="_blank"> Everything about
                        Hosting.</a>

                </div>
            </div>

            <div className="modal" id="DNS">
                <div className="modal-header">
                    <h1 className="title">What is DNS ?</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online
                        through domain names, like nytimes.com or espn.com. Web browsers interact through Internet
                        Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load
                        Internet resources.

                        Each device connected to the Internet has a unique IP address which other machines use to find
                        the device. DNS servers eliminate the need for humans to memorize IP addresses such as
                        192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as
                        2400:cb00:2048:1::c629:d7a2 (in IPv6).</p>
                    {/*<br/>*/}
                    Visit the following resources to learn more:
                    {/*<br/>*/}
                    <a href="https://www.cloudflare.com/learning/dns/what-is-dns/" target="_blank"> Everything about
                        DNS.</a>
                </div>
            </div>

            <div className="modal" id="Browser">
                <div className="modal-header">
                    <h1 className="title">How A Browser works ?</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>Browsers are responsible for retrieving and displaying web content to users. When a user enters a
                        URL or clicks on a link, the browser initiates a complex series of actions to retrieve the web
                        content from a server and display it on the user’s device.</p>
                </div>
                {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://www.browserstack.com/guide/what-is-browser#:~:text=Engine%20in%20Browsers-,How%20does%20a%20Browser%20Work%3F,it%20on%20the%20user's%20device."
                    target="_blank"> Everything about Working of Browsers.</a>

            </div>

            <div className="modal" id="HTML">
                <div className="modal-header">
                    <h1 className="title">What is HTML ?</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the
                        meaning and structure of web content. Other technologies besides HTML are generally used to
                        describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).

                        "Hypertext" refers to links that connect web pages to one another, either within a single
                        website or between websites. Links are a fundamental aspect of the Web. By uploading content to
                        the Internet and linking it to pages created by other people, you become an active participant
                        in the World Wide Web.</p>
                </div>
                {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> Everything about HTML.
                </a>
            </div>

            <div className="modal" id="Basics">
                <div className="modal-header">
                    <h1 className="title">So what is HTML?</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>HTML is a markup language that defines the structure of your content. HTML consists of a series
                        of elements, which you use to enclose, or wrap, different parts of the content to make it appear
                        a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to
                        somewhere else, can italicize words, can make the font bigger or smaller, and so on. For
                        example, take the following line of content:
                        {/*<br/>*/}
                        My cat is very grumpy
                        {/*<br/>*/}
                        If we wanted the line to stand by itself, we could specify that it is a paragraph by enclosing
                        it in paragraph tags:
                        {/*<br/>*/}
                        <pre className="modal-body">
                            
                            write as  : < p > My cat is very grumpy </p>
                        </pre>
                    </p>
                </div>
                {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank"> Everything about HTML Basics.
                </a>
            </div>

            <div className="modal" id="Semantic">
                <div className="modal-header">
                    <h1 className="title">Semantic</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics" target="_blank"> Everything about HTML Semantic.
                </a>
            </div>

            <div className="modal" id="Forms">
                <div className="modal-header">
                    <h1 className="title">Forms</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
             {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank"> Everything about HTML Forms.
                </a>
            </div>

            <div className="modal" id="Accessibility">
                <div className="modal-header">
                    <h1 className="title">Accessibility</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML" target="_blank"> Everything about HTML Accessibility.
                </a>
            </div>

            <div className="modal" id="SEO">
                <div className="modal-header">
                    <h1 className="title">SEO</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://www.greengeeks.com/blog/html-tags-for-seo/" target="_blank"> Everything about HTML SEO.
                </a>
            </div>

            <div className="modal" id="CSSBasic">
                <div className="modal-header">
                    <h1 className="title">Basics of CSS</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank"> Everything about Basic CSS.
                </a>
            </div>

            <div className="modal" id="Layouts">
                <div className="modal-header">
                    <h1 className="title">CSS Layouts</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout" target="_blank"> Everything about CSS Layouts.
                </a>
            </div>

            <div className="modal" id="Responsive">
                <div className="modal-header">
                    <h1 className="title">Responsive website</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank"> Everything about Responsive Design.
                </a>
            </div>

             <div className="modal" id="JavaScript">
                <div className="modal-header">
                    <h1 className="title">Responsive website</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> Everything about Responsive Design.
                </a>
            </div>

             <div className="modal" id="BasicJS">
                <div className="modal-header">
                    <h1 className="title">JavaScript Basics</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank"> Everything about JavaScript basic.
                </a>
            </div>

             <div className="modal" id="DOM">
                <div className="modal-header">
                    <h1 className="title">Learn DOM Manipulation</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" target="_blank"> Everything about DOM Manipulation.
                </a>
            </div>

             <div className="modal" id="FetchAPI">
                <div className="modal-header">
                    <h1 className="title">Fetching an API</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank"> Everything about Fetching an API.
                </a>
            </div>

             <div className="modal" id="React">
                <div className="modal-header">
                    <h1 className="title">Learn React</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://react.dev/learn" target="_blank"> Everything about React.
                </a>
            </div>

             <div className="modal" id="Vue">
                <div className="modal-header">
                    <h1 className="title">Vue.js</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://vuejs.org/guide/quick-start.html" target="_blank"> Everything about vue.js.
                </a>
            </div>

             <div className="modal" id="Angular">
                <div className="modal-header">
                    <h1 className="title">Angular</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p></p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://angular.io/docs" target="_blank"> Everything about Angular.
                </a>
            </div>
            

            <div className="modal" id="popup">
                <div className="modal-header">
                    <h1 className="title">Popup Title</h1>
                    <button className="close-button" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem quis augue venenatis dictum.
                        Sed nec odio odio. Curabitur efficitur, orci non fringilla hendrerit, ligula orci iaculis purus,
                        vel dignissim ipsum urna a tellus.</p>
                </div>
            {/*<br/>*/}
                Visit the following resources to learn more:
                {/*<br/>*/}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank"> Everything about HTML Forms.
                </a>
            </div>

            <div className="modal" id="popup1">
                <div className="modal-header">
                    <h1 className="title">Popup Title</h1>
                    <button className="close" data-close-button>X</button>
                </div>
                <div className="modal-body">
                    <p>hello</p>
                </div>
            </div>
            <div id="overlay"></div>

    

    {/* <script src="script.js"></script> */}

    
    </>
  )
}

export default Frontend