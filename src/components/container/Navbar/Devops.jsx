import React, { useEffect } from 'react'
import Navbar from './Navbar'
import "./style.css"
const Devops = () => {
    var ubuntu = "https://linuxjourney.com/"
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
          modal.classList.add('active')
          overlay.classList.add('active')
        }
        
        function closeModal(modal) {
          if (modal == null) return
          modal.classList.remove('active')
          overlay.classList.remove('active')
        }
        
    },[])
  return (
    <>

    
    <Navbar />

    
    <div className="tree">
        <h2>DevOps</h2> 
        <ul>
            <div className="tree">
                <ul>
                    <li>
                        <button id="rootButton">DevOps</button>
                        <ul>

                            <li>
                                <button id="child1Button" data-modal-target="#">Learn a Language</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#go">Go
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#python">Python
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button"
                                                            data-modal-target="#javascript">JavaScript
                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button" data-modal-target="#php">PHP
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
                            <li>
                                <button id="child1Button" data-modal-target="#INTERNET">Operating System</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#ubuntu">Ubuntu / Debian
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#susu">SUSE Linux
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#rhel">RHEL
                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button"
                                                                    data-modal-target="#freebsd">FreeBSD
                                                                </button>
                                                                <ul>
                                                                    <li>
                                                                        <button id="child1Button"
                                                                            data-modal-target="#openbsd">OpenBSD

                                                                        </button>
                                                                        <ul>
                                                                            <li>
                                                                                <button id="child1Button"
                                                                                    data-modal-target="#netbsd">NetBSD

                                                                                </button>
                                                                                <ul>
                                                                                    <li>
                                                                                        <button id="child1Button"
                                                                                            data-modal-target="#windows">Windows
        
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
                                </ul>
                            </li>


                            <li>
                                <button id="child1Button" data-modal-target="#"> Learn to use terminal</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#process">Process Monitoring
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#performance">Performance
                                                    Monitoring
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button"
                                                            data-modal-target="#networking">Networking Tools
                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button" data-modal-target="#text">Text
                                                                    Manipulation
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
                            <li>
                                <button id="child1Button" data-modal-target="#">Version Control and VCS Hosting</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#git">Git
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#github">GitHub
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#gitlab">GitLab

                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button"
                                                                    data-modal-target="#bitbucket">BitBucket
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
                            <li>
                                <button id="child1Button" data-modal-target="#"> Learn to setup these </button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#reverse">Reverse Proxy
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#forward">Forward Proxy
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#firewall">Firewall
                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button" data-modal-target="#load">Load
                                                                    Balancer
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
                            <li>
                                <button>Containers Databases</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#lxc">LXC
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#docker"> Docker
                                                </button>

                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <button>Cloud Providers </button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#aws">AWS
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#google"> Google Cloud
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#azure">Azure
                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button"
                                                                    data-modal-target="#timescaledb">Digital Ocean
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
                            <li>
                                <button>Networking security and protocols </button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#ftp">FTP
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#http"> HTTP
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#ssl">SSL / TLS
                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button" data-modal-target="#dns">DNS
                                                                </button>
                                                                <ul>
                                                                    <li>
                                                                        <button id="child1Button"
                                                                            data-modal-target="#https">HTTPS
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
                                <button>Configuration Management </button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#ansible">Ansible
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#chef"> Chef
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button" data-modal-target="#puppet">Puppet
                                                        </button>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button id="child1Button" data-modal-target="#"> Learn to use CI/CD Tool</button>
                                <ul>
                                    <li>
                                        <button id="child1Button" data-modal-target="#gitlabci">Gitlab CI
                                        </button>
                                        <ul>
                                            <li>
                                                <button id="child1Button" data-modal-target="#githubactions">GitHub Actions
                                                    
                                                </button>
                                                <ul>
                                                    <li>
                                                        <button id="child1Button"
                                                            data-modal-target="#circleci">Circle CI
                                                        </button>
                                                        <ul>
                                                            <li>
                                                                <button id="child1Button" data-modal-target="#jenkin">Jenkin
                                                                    
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
                </div>
        </ul>
    </div>

    <div className="modal" id="">
        <div className="modal-header">
            <h1 className="title">Basics of Linux and Debian</h1>
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

    <div className="modal" id="ubuntu">
        <div className="modal-header">
            <h1 className="title">What is HTTPS ?</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p>
                 {/*<br/>*/} 
                Visit the following resources to learn more:      <a href="https://linuxjourney.com/" target='_blank' >Link</a>
                 {/*<br/>*/}
               
            </p>
        </div>
    </div>

    <div className="modal" id="susu">
        <div className="modal-header">
            <h1 className="title">What is SUSU Linux ?</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://en.opensuse.org/Main_Page" target="_blank">
                Everything about SUSU Linux .</a>
        </div>
    </div>

    <div className="modal" id="rhel">
        <div className="modal-header">
            <h1 className="title">what is RHEL ? ?</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p>

            {/*<br/>*/}
            Visit the following resources to learn more:<a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9"
                target="_blank"> Everything about Working of RHEL.</a>
            </p>
            {/*<br/>*/}
            
        </div>
    </div>

    <div className="modal" id="freebsd">
        <div className="modal-header">
            <h1 className="title">What is FreeBSD ?</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p>

            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://docs.freebsd.org/en/" target="_blank"> Everything about
                FreeBSD.</a>
        </p>

        </div>
    </div>

    <div className="modal" id="openbsd">
        <div className="modal-header">
            <h1 className="title">What is OpenBSD ?</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.openbsd.org/" target="_blank"> Everything about
                OpenBSD.</a>
        </div>
    </div>

    <div className="modal" id="netbsd">
        <div className="modal-header">
            <h1 className="title">How A NetBSD works ?</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://netbsd.org/docs/"
            target="_blank"> Everything about Working of NetBSD.</a>

    </div>

    <div className="modal" id="go">
        <div className="modal-header">
            <h1 className="title">What is Go language ?</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">

        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://go.dev/doc/" target="_blank"> Everything about Go.
        </a>
    </div>

    <div className="modal" id="rust">
        <div className="modal-header">
            <h1 className="title">So what is Rust ?</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">

        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://doc.rust-lang.org/book/" target="_blank"> Everything about RUST Basics.
        </a>
    </div>

    <div className="modal" id="python">
        <div className="modal-header">
            <h1 className="title">Learn Python</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.python.org/about/gettingstarted/" target="_blank"> Everything about Python.
        </a>
    </div>

    <div className="modal" id="javascript">
        <div className="modal-header">
            <h1 className="title">Learn JavaScript</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://javascript.info/" target="_blank"> Everything about javascript .
        </a>
    </div>

    <div className="modal" id="php">
        <div className="modal-header">
            <h1 className="title">learn PHP</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://phptherightway.com/" target="_blank"> Everything about PHP.
        </a>
    </div>

    <div className="modal" id="process">
        <div className="modal-header">
            <h1 className="title">Process Monitoring</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://man7.org/linux/man-pages/man1/ps.1.html" target="_blank"> Everything about Process Monitoring .
        </a>
    </div>

    <div className="modal" id="performance">
        <div className="modal-header">
            <h1 className="title">Basics of Performance Monitoring</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.ibm.com/docs/en/aix/7.2?topic=n-nmon-command" target="_blank"> Everything about Performance Monitoring.
        </a>
    </div>

    <div className="modal" id="networking">
        <div className="modal-header">
            <h1 className="title">Networking Tools</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://linuxhint.com/run_traceroute_linux/" target="_blank"> Everything about Networking Tools.
        </a>
    </div>

    <div className="modal" id="text">
        <div className="modal-header">
            <h1 className="title">Text Manipulation</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://linuxize.com/post/awk-command/" target="_blank"> Everything about Text Manipulation.
        </a>
    </div>

    <div className="modal" id="git">
        <div className="modal-header">
            <h1 className="title">Learn About Git</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.atlassian.com/git" target="_blank"> Everything about Git.
        </a>
    </div>

    <div className="modal" id="github">
        <div className="modal-header">
            <h1 className="title">Learn GitHub</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://docs.github.com/en/get-started/quickstart" target="_blank"> Everything about GitHub.
        </a>
    </div>

    <div className="modal" id="gitlab">
        <div className="modal-header">
            <h1 className="title">Learn GitLab</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://docs.gitlab.com/" target="_blank"> Everything about GitLab.
        </a>
    </div>

    <div className="modal" id="bitbucket">
        <div className="modal-header">
            <h1 className="title">BitBucket </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.youtube.com/watch?v=i5T-DB8tb4A&ab_channel=TheChannelAboutAnything" target="_blank">
            Everything about BitBucket.
        </a>
    </div>

    <div className="modal" id="reverse">
        <div className="modal-header">
            <h1 className="title">Learn Reverse Proxy</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.cloudflare.com/en-gb/learning/cdn/glossary/reverse-proxy/" target="_blank"> Everything about Reverse Proxy.
        </a>
    </div>

    <div className="modal" id="forward">
        <div className="modal-header">
            <h1 className="title">Learn to Forward Proxy</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.fortinet.com/resources/cyberglossary/proxy-server" target="_blank"> Everything
            about Forward Proxy.
        </a>
    </div>

    <div className="modal" id="firewall">
        <div className="modal-header">
            <h1 className="title">Learn to build Firewall</h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
            <p></p>
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.cisco.com/c/en_in/products/security/firewalls/what-is-a-firewall.html"
            target="_blank"> Everything about Firewall.
        </a>
    </div>


    <div className="modal" id="load">
        <div className="modal-header">
            <h1 className="title">Learn Load Balancer </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.cloudflare.com/en-gb/learning/performance/what-is-load-balancing/" target="_blank"> Everything about Load Balancer.
        </a>
    </div>

    <div className="modal" id="lxc">
        <div className="modal-header">
            <h1 className="title">Learn LXC </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://linuxcontainers.org/lxc/documentation/" target="_blank"> Everything about LXC.
        </a>
    </div>

    <div className="modal" id="docker">
        <div className="modal-header">
            <h1 className="title">Learn Docker </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://docs.docker.com/" target="_blank"> Everything about Docker.
        </a>
    </div>

    <div className="modal" id="aws">
        <div className="modal-header">
            <h1 className="title">Learn AWS </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://docs.aws.amazon.com/" target="_blank"> Everything about AWS.
        </a>
    </div>

    <div className="modal" id="google">
        <div className="modal-header">
            <h1 className="title">Learn Google Cloud </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://cloud.google.com/docs" target="_blank"> Everything about Google Cloud.
        </a>
    </div>

    <div className="modal" id="azure">
        <div className="modal-header">
            <h1 className="title">Learn Azure </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://learn.microsoft.com/en-us/azure/?product=popular" target="_blank"> Everything about Azure.
        </a>
    </div>

    <div className="modal" id="digital">
        <div className="modal-header">
            <h1 className="title">Learn Digital Ocean </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://docs.digitalocean.com/products/" target="_blank"> Everything about Digital Ocean.
        </a>
    </div>

    <div className="modal" id="ftp">
        <div className="modal-header">
            <h1 className="title">Learn FTP </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/" target="_blank"> Everything about FTP.
        </a>
    </div>

    <div className="modal" id="http">
        <div className="modal-header">
            <h1 className="title">Learn HTTP </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/" target="_blank"> Everything about HTTP.
        </a>
    </div>

    <div className="modal" id="ssl">
        <div className="modal-header">
            <h1 className="title">Learn SSL/TSL </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.cloudflare.com/learning/ssl/what-is-ssl/" target="_blank"> Everything about SSL.
        </a>
    </div>

    <div className="modal" id="dns">
        <div className="modal-header">
            <h1 className="title">Learn About DNS </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://howdns.works/" target="_blank"> Everything about DNS.
        </a>
    </div>

    <div className="modal" id="https">
        <div className="modal-header">
            <h1 className="title">Learn HTTPS </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://web.dev/articles/why-https-matters" target="_blank"> Everything about HTTPS.
        </a>
    </div>

    <div className="modal" id="ansible">
        <div className="modal-header">
            <h1 className="title">Ansible </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://docs.ansible.com/" target="_blank"> Everything about Ansible.
        </a>
    </div>

    <div className="modal" id="chef">
        <div className="modal-header">
            <h1 className="title">Chef </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.chef.io/products/chef-infra" target="_blank"> Everything about Chef.
        </a>
    </div>

    <div className="modal" id="puppet">
        <div className="modal-header">
            <h1 className="title">Puppet </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.puppet.com/docs/" target="_blank"> Everything about Puppet.
        </a>
    </div>

    <div className="modal" id="gitlabci">
        <div className="modal-header">
            <h1 className="title">Learn GitLab CI </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://docs.gitlab.com/ee/ci/quick_start/" target="_blank"> Everything about GitLab CI.
        </a>
    </div>

    <div className="modal" id="githubactions">
        <div className="modal-header">
            <h1 className="title">Learn GitHub Actions </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://docs.github.com/en/actions" target="_blank"> Everything about GitHub Actions.
        </a>
    </div>

    <div className="modal" id="circleci">
        <div className="modal-header">
            <h1 className="title">Learn Circle CI </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://circleci.com/docs/" target="_blank"> Everything about Circle CI.
        </a>
    </div>

    <div className="modal" id="jenkin">
        <div className="modal-header">
            <h1 className="title">Learn Jenkin </h1>
            <button className="close-button" data-close-button>X</button>
        </div>
        <div className="modal-body">
        </div>
        {/*<br/>*/}
        Visit the following resources to learn more:
        {/*<br/>*/}
        <a href="https://www.jenkins.io/doc/pipeline/tour/getting-started/" target="_blank"> Everything about Jenkin.
        </a>
    </div>

    <div className="modal" id="">
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

export default Devops