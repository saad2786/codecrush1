import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./style.css";
const Backend = () => {
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
        <h2>Back End</h2>
        <ul>
          <div className="tree">
            <ul>
              <li>
                <button id="rootButton">BACK END</button>
                <ul>
                  <li>
                    <button id="child1Button" data-modal-target="#">
                      Learn a Language
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#kotlin">
                          Kotlin
                        </button>
                        <ul>
                          <li>
                            <button id="child1Button" data-modal-target="#java">
                              Java
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button id="child1Button" data-modal-target="#">
                      Version Control
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#git">
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
                                  data-modal-target="#gitlab"
                                >
                                  GitLab
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#bitbucket"
                                    >
                                      BitBucket
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
                    <button id="child1Button" data-modal-target="#">
                      {" "}
                      The Fundamentals
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#development">
                          Development IDE
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#basicskotlin"
                            >
                              Basics of Kotlin
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#basicsoops"
                                >
                                  Basics of OOPS
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#dsa"
                                    >
                                      DSA
                                    </button>
                                    <ul>
                                      <li>
                                        <button
                                          id="child1Button"
                                          data-modal-target="#what"
                                        >
                                          What is and how to use Gradle?
                                        </button>
                                        <ul>
                                          <li>
                                            <button
                                              id="child1Button"
                                              data-modal-target="#create"
                                            >
                                              Create a basic Hello world App
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
                    <button>App Components</button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#activity">
                          Activity
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#services"
                            >
                              {" "}
                              Services
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#content"
                                >
                                  Content Provider
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#broadcast"
                                    >
                                      Broadcast Reciever
                                    </button>
                                    <ul>
                                      <li>
                                        <button
                                          id="child1Button"
                                          data-modal-target="#intent"
                                        >
                                          Intent
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
                    <button>Interface and Navigation</button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#elements">
                          Elements
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#layouts"
                            >
                              Layouts
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#navigation"
                                >
                                  Navigation Components
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#appschortcuts"
                                    >
                                      App Shortcuts
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
                    <button id="child1Button" data-modal-target="#">
                      {" "}
                      Storage
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#shared">
                          Shared Preferences
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#datastore"
                            >
                              DataStore
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#room"
                                >
                                  Room Database
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#file"
                                    >
                                      File System
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
                    <button>Network</button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#retrofit">
                          Retrofit
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#okhttp"
                            >
                              OkHttp
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#apollo"
                                >
                                  Apollo-Android
                                </button>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <button>Asynchronism</button>
                    <ul>
                      <li>
                        <button
                          id="child1Button"
                          data-modal-target="#coroutines"
                        >
                          Coroutines
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#threads"
                            >
                              Threads
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#rxjava"
                                >
                                  RxJava
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#rxkotlin"
                                    >
                                      RxKotlin
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
                    <button>Common Services</button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#firebase">
                          Firebase
                        </button>
                        <ul>
                          <li>
                            <button
                              id="child1Button"
                              data-modal-target="#googleadmob"
                            >
                              Google AdMob
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#googleplay"
                                >
                                  Google PlayService
                                </button>
                                <ul>
                                  <li>
                                    <button
                                      id="child1Button"
                                      data-modal-target="#googlemap"
                                    >
                                      Google Map
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
                    <button>Debugging</button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#timber">
                          Timber
                        </button>
                        <ul>
                          <li>
                            <button id="child1Button" data-modal-target="#leak">
                              Leak Canary
                            </button>
                            <ul>
                              <li>
                                <button
                                  id="child1Button"
                                  data-modal-target="#chucker"
                                >
                                  Chucker
                                </button>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <button id="child1Button" data-modal-target="#">
                      Testing
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#junit">
                          Junit
                        </button>
                        <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#espresso">
                          Espresso
                        </button>
                      </li>
                    </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <button id="child1Button" data-modal-target="#">
                      Distribution
                    </button>
                    <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#signed">
                          Signed APK
                        </button>
                        <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#googleplaystore">
                          Google Playstore
                        </button>
                        <ul>
                      <li>
                        <button id="child1Button" data-modal-target="#firebasedistribution">
                          Firebase Distribution
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

      <div className="modal" id="kotlin">
        <div className="modal-header">
          <h1 className="title">What is Kotlin ?</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:{" "}
            <a href="https://kotlinlang.org/docs/home.html" target="_blank">
              About Kotlin
            </a>
            {/*<br/>*/}
          </p>
        </div>
      </div>

      <div className="modal" id="java">
        <div className="modal-header">
          <h1 className="title">Learn Java</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.codecademy.com/learn/learn-java" target="_blank">
              Java .
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="development">
        <div className="modal-header">
          <h1 className="title">what is the Android Development IDE?</h1>
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
              href="https://developer.android.com/studio?gclid=Cj0KCQiAyKurBhD5ARIsALamXaGnunRxquFtHRIyaolbAOqiVxPjIjqfhcxJ1Ia1LctoOVs_NxoD6d0aAhkpEALw_wcB&gclsrc=aw.ds"
              target="_blank"
            >
              {" "}
              Android IDE
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="basicskotlin">
        <div className="modal-header">
          <h1 className="title">Kotlin</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://kotlinlang.org/docs/home.html" target="_blank">
              {" "}
              Everything about Kotlin.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="basicsoops">
        <div className="modal-header">
          <h1 className="title">What is OOPS ?</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.javatpoint.com/java-oops-concepts" target="_blank">
              {" "}
              Everything about OOPS.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="dsa">
        <div className="modal-header">
          <h1 className="title">Data Structure and Algorithm</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.codechef.com/certification/data-structures-and-algorithms/prepare" target="_blank">
              {" "}
              Everything about DSA.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="what">
        <div className="modal-header">
          <h1 className="title">What is Gradle ?</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developer.android.com/build" target="_blank">
              {" "}
              Everything about Greadle.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="create">
        <div className="modal-header">
          <h1 className="title">Create basic hellow world App</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developer.android.com/codelabs/basic-android-kotlin-compose-first-app" target="_blank">
              {" "}
              to create app.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="activity">
        <div className="modal-header">
          <h1 className="title">Activity</h1>
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
              href="https://developer.android.com/reference/android/app/Activity"
              target="_blank"
            >
              {" "}
              Everything about Activity.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="services">
        <div className="modal-header">
          <h1 className="title">Android Services</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developer.android.com/guide/components/services" target="_blank">
              {" "}
              Everything about Services .
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="content">
        <div className="modal-header">
          <h1 className="title">Content Provider</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developer.android.com/guide/topics/providers/content-provider-basics#:~:text=A%20content%20provider%20manages%20access,using%20a%20provider%20client%20object." target="_blank">
              {" "}
              Everything about Content Provider.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="broadcast">
        <div className="modal-header">
          <h1 className="title">Broadcast Reciever</h1>
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
              href="https://developer.android.com/guide/components/broadcasts"
              target="_blank"
            >
              {" "}
              Everything about Broadcast Reciever .
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="intent">
        <div className="modal-header">
          <h1 className="title">Intent</h1>
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
              href="https://developer.android.com/reference/android/content/Intent"
              target="_blank"
            >
              {" "}
              Everything about Intent.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="elements">
        <div className="modal-header">
          <h1 className="title">Android Elements</h1>
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
              href="https://developer.android.com/develop/ui/views/components/button"
              target="_blank"
            >
              {" "}
              Everything about Elements.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="layouts">
        <div className="modal-header">
          <h1 className="title">Layouts</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developer.android.com/develop/ui/views/layout/declaring-layout" target="_blank">
              {" "}
              Everything about Layouts.
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

      <div className="modal" id="gitlab">
        <div className="modal-header">
          <h1 className="title">Learn GitLab</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://docs.gitlab.com/" target="_blank">
              {" "}
              Everything about GitLab.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="bitbucket">
        <div className="modal-header">
          <h1 className="title">BitBucket </h1>
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
              href="https://www.youtube.com/watch?v=i5T-DB8tb4A&ab_channel=TheChannelAboutAnything"
              target="_blank"
            >
              Everything about BitBucket.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="appshortcuts">
        <div className="modal-header">
          <h1 className="title">App Shortcuts</h1>
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
              href="https://developer.android.com/develop/ui/views/launch/shortcuts"
              target="_blank"
            >
              {" "}
              Everything about App Shortcuts.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="navigation">
        <div className="modal-header">
          <h1 className="title">Navigation Components</h1>
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
              href="https://developer.android.com/guide/navigation/get-started"
              target="_blank"
            >
              {" "}
              Everything about Navigation Components.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="datastore">
        <div className="modal-header">
          <h1 className="title">Datastore</h1>
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
              href="https://developer.android.com/topic/libraries/architecture/datastore"
              target="_blank"
            >
              {" "}
              Datastore
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="room">
        <div className="modal-header">
          <h1 className="title"> Room Database </h1>
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
              href="https://developer.android.com/training/data-storage/room"
              target="_blank"
            >
              {" "}
              Everything about Room Database.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="file">
        <div className="modal-header">
          <h1 className="title">File System </h1>
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
              href="https://developer.android.com/training/data-storage"
              target="_blank"
            >
              {" "}
              Everything about File System.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="retrofit">
        <div className="modal-header">
          <h1 className="title">Learn Retrofit </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://square.github.io/retrofit/" target="_blank">
              {" "}
              Everything about Retrofit.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="okhttp">
        <div className="modal-header">
          <h1 className="title">Learn OkHttp </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://square.github.io/okhttp/" target="_blank">
              {" "}
              Everything about OkHttp.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="apollo">
        <div className="modal-header">
          <h1 className="title">Learn Apolo-Android </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://www.apollographql.com/docs/kotlin/" target="_blank">
              {" "}
              Apollo.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="coroutines">
        <div className="modal-header">
          <h1 className="title">Coroutines</h1>
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
              href="https://developer.android.com/codelabs/kotlin-coroutines#:~:text=Coroutines%20are%20a%20Kotlin%20feature,network%20access%2C%20into%20sequential%20code.&text=You%20will%20start%20with%20an,style%20for%20long%2Drunning%20tasks."
              target="_blank"
            >
              {" "}
              Everything about  Coroutines.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="threads">
        <div className="modal-header">
          <h1 className="title">Threads</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developer.android.com/guide/components/processes-and-threads" target="_blank">
              {" "}
              Everything about Threads.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="rxjava">
        <div className="modal-header">
          <h1 className="title">RxJava </h1>
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
              href="https://www.toptal.com/android/functional-reactive-android-rxjava"
              target="_blank"
            >
              {" "}
              Everything about RxJava.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="rxkotlin">
        <div className="modal-header">
          <h1 className="title">RxKotlin </h1>
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
              href="https://www.baeldung.com/kotlin/rxkotlin"
              target="_blank"
            >-++
            +
              {" "}
              Everything about RxKotlin.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="firebase">
        <div className="modal-header">
          <h1 className="title">Learn to add Firebase to Android </h1>
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
              href="https://firebase.google.com/docs/android/setup"
              target="_blank"
            >
              {" "}
              Everything about Firebase .
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="googleadmob">
        <div className="modal-header">
          <h1 className="title">Learn about Google AdMob </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://admob.google.com/home/" target="_blank">
              {" "}
              Google AdMob.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="googleplayservice">
        <div className="modal-header">
          <h1 className="title">Google Playservice </h1>
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
              href="https://developers.google.com/android/guides/overview"
              target="_blank"
            >
              {" "}
              Everything about Google Playservice.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="googlemaps">
        <div className="modal-header">
          <h1 className="title">Google Maps </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developers.google.com/maps/documentation/android-sdk/start" target="_blank">
              {" "}
              Everything about Google Maps SDK.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="timber">
        <div className="modal-header">
          <h1 className="title">Timber</h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://medium.com/mindorks/better-logging-in-android-using-timber-72e40cc2293d" target="_blank">
              {" "}
              Everything about Timber.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="leak">
        <div className="modal-header">
          <h1 className="title">Leak Canary </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://square.github.io/leakcanary/" target="_blank">
              {" "}
              Everything about Leak Canary.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="chucker">
        <div className="modal-header">
          <h1 className="title"> Chucker </h1>
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
              href="https://www.section.io/engineering-education/debugging-with-chucker/"
              target="_blank"
            >
              {" "}
              Everything about Chucker.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="jetpack">
        <div className="modal-header">
          <h1 className="title"> Jetpack Benchmark </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developer.android.com/jetpack/androidx/releases/benchmark" target="_blank">
              {" "}
              Everything about Jetpack Benchmark.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="espresso">
        <div className="modal-header">
          <h1 className="title">Learn about Espresso </h1>
          <button className="close-button" data-close-button>
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            {/*<br/>*/}
            Visit the following resources to learn more:
            {/*<br/>*/}
            <a href="https://developer.android.com/training/testing/espresso" target="_blank">
              {" "}
              Everything about Espresso.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="junit">
        <div className="modal-header">
          <h1 className="title">Learn Junit </h1>
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
              href="https://developer.android.com/training/testing/local-tests"
              target="_blank"
            >
              {" "}
              Everything about Junit.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="firebasedistribution">
        <div className="modal-header">
          <h1 className="title">Learn about Firebase Distribution </h1>
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
              href="https://firebase.google.com/docs/app-distribution"
              target="_blank"
            >
              {" "}
              Everything about Firebase Distribution.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="googleplaystore">
        <div className="modal-header">
          <h1 className="title">Learn about Playstore Distribution </h1>
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
              href="https://developer.android.com/distribute"
              target="_blank"
            >
              {" "}
              Everything about Google Playstore Distribution.
            </a>
          </p>
        </div>
      </div>

      <div className="modal" id="signed">
        <div className="modal-header">
          <h1 className="title">How to create Signed APK </h1>
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
              href="https://developer.android.com/studio/publish/app-signing"
              target="_blank"
            >
              {" "}
              Everything about Signed APK.
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

export default Backend;
