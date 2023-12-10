import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./style.css";
const Fullstack = () => {
  
  useEffect(() => {
    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    const closeModalButtons = document.querySelectorAll("[data-close-button]");
    const overlay = document.getElementById("overlay");

    openModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
      });
    });

    overlay.addEventListener("click", () => {
      const modals = document.querySelectorAll(".modal.active");
      modals.forEach((modal) => {
        closeModal(modal);
      });
    });

    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
      });
    });

    function openModal(modal) {
      if (modal == null) return;
      modal.classList.add("active");
      overlay.classList.add("active");
    }

    function closeModal(modal) {
      if (modal == null) return;
      modal.classList.remove("active");
      overlay.classList.remove("active");
    }
  }, []);
  return (
    <>
      <Navbar />

      <div className="tree">
        <h2>Full-Stack</h2>
        <ul>
          <div className="tree">
            <ul>
              <li>
                <button id="rootButton">Full-Stack</button>
                <ul>
                  <li>
                    <button id="child1Button" data-modal-target="#">
                      Frontend
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#html">
                          HTML
                        </button>
                        <ul>
                          <li>
                            <button id="child1Button" data-modal-target="#css">
                              CSS
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#javascript"
                                >
                                  JavaScript
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#npm"
                                    >
                                      npm
                                    </button>
                                    <ul>
                                      <li>
                                        <button
                                          id="child1Button"
                                          data-modal-target="#git"
                                        >
                                          Git
                                        </button>
                                        <ul>
                                          <li>
                                            <button
                                              id="child1Button"
                                              data-modal-target="#github"
                                            >
                                              GitHub
                                            </button>
                                            <ul>
                                              <li>
                                                <button
                                                  id="child1Button"
                                                  data-modal-target="#tailwind"
                                                >
                                                  Tailwind
                                                </button>
                                                <ul>
                                                  <li>
                                                    <button
                                                      id="child1Button"
                                                      data-modal-target="#react"
                                                    >
                                                      React
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
                    </ul>
                  </li>
                  <li>
                    <button id="child1Button" data-modal-target="#INTERNET">
                      Backend
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#nodejs">
                          Node.js
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#postgresql"
                            >
                              PostgreSQL
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#restful"
                                >
                                  RESTful APIs
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#jwt"
                                    >
                                      JWT Auth
                                    </button>
                                    <ul>
                                      <li>
                                        <button
                                          id="child1Button"
                                          data-modal-target="#redis"
                                        >
                                          Redis
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
                    <button id="child1Button" data-modal-target="#">
                      Devops
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#linux">
                          Linux Basics
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#basicaws"
                            >
                              Basic AWS Services
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#route53"
                                >
                                  Route53
                                </button>
                              </li>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#sec"
                                >
                                  SEC
                                </button>
                              </li>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#ec2"
                                >
                                  EC2
                                </button>
                              </li>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#vpc"
                                >
                                  VPC
                                </button>
                              </li>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#s3"
                                >
                                  S3
                                </button>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#monit"
                                >
                                  Monit
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#githubactions"
                                    >
                                      GitHub Actions
                                    </button>
                                    <ul>
                                      <li>
                                        <button
                                          id="child1Button"
                                          data-modal-target="#ansible"
                                        >
                                          Ansible
                                        </button>
                                        <ul>
                                          <li>
                                            <button
                                              id="child1Button"
                                              data-modal-target="#terraform"
                                            >
                                              Terraform
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
            </ul>
          </div>
        </ul>
      </div>

      <div className="modal" id="">
        <div className="modal-header">
          <h1 className="title">Basics of Linux and Debian</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            The Internet (or internet)[a] is the global system of interconnected
            computer networks that uses the Internet protocol suite (TCP/IP)[b]
            to communicate between networks and devices. It is a network of
            networks that consists of private, public, academic, business, and
            government networks of local to global scope, linked by a broad
            array of electronic, wireless, and optical networking technologies.
            The Internet carries a vast range of information resources and
            services, such as the interlinked hypertext documents and
            applications of the World Wide Web (WWW), electronic mail,
            telephony, and file sharing.
          </p>
        </div>
      </div>

      <div className="modal" id="linux">
        <div className="modal-header">
          <h1 className="title">Linux Basics</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:{" "}
            <a href="https://dev.to/rudrakshi99/linux-basics-2onj" target="_blank">
              Linux Basics
            </a>
            {/*<br/>*/}
          </p>
        </div>
      </div>

      <div className="modal" id="html">
        <div className="modal-header">
          <h1 className="title">HTML</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.codecademy.com/learn/learn-html" target="_blank">
              Everything about HTML .
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="css">
        <div className="modal-header">
          <h1 className="title">what is css ? ?</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              {" "}
              Everything about CSS.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="javascript">
        <div className="modal-header">
          <h1 className="title"> Learn Javascript</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://javascript.info/" target="_blank">
              {" "}
              Everything about JavaScript.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="npm">
        <div className="modal-header">
          <h1 className="title">What is npm ?</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/" target="_blank">
              {" "}
              Everything about npm.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="tailwind">
        <div className="modal-header">
          <h1 className="title">How tailwind works ?</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://tailwindcss.com/docs/installation" target="_blank">
              {" "}
              Everything about Tailwind.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="react">
        <div className="modal-header">
          <h1 className="title">What is React ?</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://react.dev/learn" target="_blank">
              {" "}
              Everything about React.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="nodejs">
        <div className="modal-header">
          <h1 className="title">Learn Node.js ?</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://nodejs.org/en/learn/" target="_blank">
              {" "}
              Everything about Node.js
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="postgresql">
        <div className="modal-header">
          <h1 className="title">Learn PostgreSQL</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://www.postgresql.org/docs/"
              target="_blank"
            >
              {" "}
              Everything about PostgreSQL.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="restful">
        <div className="modal-header">
          <h1 className="title">Learn RESTful APIs</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.redhat.com/en/topics/api/what-is-a-rest-api" target="_blank">
              {" "}
              Everything about RESTful APIs .
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="jwt">
        <div className="modal-header">
          <h1 className="title">JWT Auth</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://jwt.io/introduction" target="_blank">
              {" "}
              Everything about JWT Auth.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="redis">
        <div className="modal-header">
          <h1 className="title">Redis </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://redis.io/docs/get-started/data-store/"
              target="_blank"
            >
              {" "}
              Everything about Redis .
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="route53">
        <div className="modal-header">
          <h1 className="title">Route53</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://www.youtube.com/watch?v=RGWgfhZByAI"
              target="_blank"
            >
              {" "}
              Everything about Route53.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="ses">
        <div className="modal-header">
          <h1 className="title">SES</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://www.youtube.com/watch?v=HiHflLTqiwU"
              target="_blank"
            >
              {" "}
              Everything about SES.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="ec2">
        <div className="modal-header">
          <h1 className="title"> EC2</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://cs.fyi/guide/up-and-running-with-aws-ec2" target="_blank">
              {" "}
              Everything about EC2.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="git">
        <div className="modal-header">
          <h1 className="title">Learn About Git</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.atlassian.com/git" target="_blank">
              {" "}
              Everything about Git.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="github">
        <div className="modal-header">
          <h1 className="title">Learn GitHub</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://docs.github.com/en/get-started/quickstart"
              target="_blank"
            >
              {" "}
              Everything about GitHub.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="vpc">
        <div className="modal-header">
          <h1 className="title">Learn AWS VPC</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.youtube.com/watch?v=TUTqYEZZUdc&feature=youtu.be" target="_blank">
              {" "}
              Everything about VPC.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="s3">
        <div className="modal-header">
          <h1 className="title">AWS S3 </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://www.youtube.com/watch?v=RoY3ekCCxKc&list=PL0X6fGhFFNTcU-_MCPe9dkH6sqmgfhy_M"
              target="_blank"
            >
              Everything about AWS S3.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="monit">
        <div className="modal-header">
          <h1 className="title">Learn about Monit</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://mmonit.com/monit/#documentation"
              target="_blank"
            >
              {" "}
              Everything about Monit.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="githubactions">
        <div className="modal-header">
          <h1 className="title">Learn to use GitHub Actions</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://docs.github.com/en/actions"
              target="_blank"
            >
              {" "}
              Everything about GitHub Actions.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="ansible">
        <div className="modal-header">
          <h1 className="title">Ansible</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://docs.ansible.com/"
              target="_blank"
            >
              {" "}
              Everything about Ansible.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="terraform">
        <div className="modal-header">
          <h1 className="title">Learn Terraform </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://developer.hashicorp.com/terraform/docs"
              target="_blank"
            >
              {" "}
              Everything about Terraform.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="lxc">
        <div className="modal-header">
          <h1 className="title">Learn LXC </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {" "}
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://linuxcontainers.org/lxc/documentation/"
              target="_blank"
            >
              {" "}
              Everything about LXC.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="docker">
        <div className="modal-header">
          <h1 className="title">Learn Docker </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://docs.docker.com/" target="_blank">
              {" "}
              Everything about Docker.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="aws">
        <div className="modal-header">
          <h1 className="title">Learn AWS </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://docs.aws.amazon.com/" target="_blank">
              {" "}
              Everything about AWS.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="google">
        <div className="modal-header">
          <h1 className="title">Learn Google Cloud </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://cloud.google.com/docs" target="_blank">
              {" "}
              Everything about Google Cloud.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="azure">
        <div className="modal-header">
          <h1 className="title">Learn Azure </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://learn.microsoft.com/en-us/azure/?product=popular"
              target="_blank"
            >
              {" "}
              Everything about Azure.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="digital">
        <div className="modal-header">
          <h1 className="title">Learn Digital Ocean </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://docs.digitalocean.com/products/" target="_blank">
              {" "}
              Everything about Digital Ocean.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="ftp">
        <div className="modal-header">
          <h1 className="title">Learn FTP </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {" "}
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/"
              target="_blank"
            >
              {" "}
              Everything about FTP.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="http">
        <div className="modal-header">
          <h1 className="title">Learn HTTP </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/"
              target="_blank"
            >
              {" "}
              Everything about HTTP.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="ssl">
        <div className="modal-header">
          <h1 className="title">Learn SSL/TSL </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://www.cloudflare.com/learning/ssl/what-is-ssl/"
              target="_blank"
            >
              {" "}
              Everything about SSL.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="dns">
        <div className="modal-header">
          <h1 className="title">Learn About DNS </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://howdns.works/" target="_blank">
              {" "}
              Everything about DNS.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="https">
        <div className="modal-header">
          <h1 className="title">Learn HTTPS </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://web.dev/articles/why-https-matters"
              target="_blank"
            >
              {" "}
              Everything about HTTPS.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="ansible">
        <div className="modal-header">
          <h1 className="title">Ansible </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://docs.ansible.com/" target="_blank">
              {" "}
              Everything about Ansible.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="chef">
        <div className="modal-header">
          <h1 className="title">Chef </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.chef.io/products/chef-infra" target="_blank">
              {" "}
              Everything about Chef.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="puppet">
        <div className="modal-header">
          <h1 className="title">Puppet </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.puppet.com/docs/" target="_blank">
              {" "}
              Everything about Puppet.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="gitlabci">
        <div className="modal-header">
          <h1 className="title">Learn GitLab CI </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://docs.gitlab.com/ee/ci/quick_start/"
              target="_blank"
            >
              {" "}
              Everything about GitLab CI.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="githubactions">
        <div className="modal-header">
          <h1 className="title">Learn GitHub Actions </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://docs.github.com/en/actions" target="_blank">
              {" "}
              Everything about GitHub Actions.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="circleci">
        <div className="modal-header">
          <h1 className="title">Learn Circle CI </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://circleci.com/docs/" target="_blank">
              {" "}
              Everything about Circle CI.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="jenkin">
        <div className="modal-header">
          <h1 className="title">Learn Jenkin </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a
              href="https://www.jenkins.io/doc/pipeline/tour/getting-started/"
              target="_blank"
            >
              {" "}
              Everything about Jenkin.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="">
        <div className="modal-header">
          <h1 className="title">Popup Title</h1>
          <button className="close" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>hello</p>
        </div>
      </div>
      <div id="overlay"></div>

      {/* <script src="script.js"></script> */}
    </>
  );
};

export default Fullstack;
