<template>
    <div>
        <div class="container">
        <div class="pure-g custom-wrapper header" id="menu">
            <div class="pure-u-1 pure-u-md-1-3">
                <div class="pure-menu">
                    <router-link class="pure-menu-heading custom-brand" to="/">HTML<span>Boilerplate</span></router-link>
                    <router-link to="#" class="custom-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></router-link>
                </div>
            </div>
            <div class="pure-u-1 pure-u-md-2-3">
                <div class="pure-menu pure-menu-horizontal custom-can-transform">
                    <ul class="pure-menu-list">
                        <li class="pure-menu-item"><a class="pure-menu-link" href="./about.html">About</a></li>
                        <li class="pure-menu-item"><a class="pure-menu-link" href="./imprint.html">Imprint</a></li>
                        <li class="pure-menu-item"><a class="pure-menu-link" href="./typography.html">Typography</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-inner">
            <hr class="header-ruler">
        </div>
    </div>
    <div class="container content">
        <div class="container-inner">
            <div class="pure-g">
                <div class="pure-u-1">
                    <h2>404 - Not found</h2>
                    <p> The resource you are looking for (or one of its dependencies) could have been removed, had its
                        name changed, or is temporarily unavailable. Please review the following URL and make sure that
                        it is spelled correctly.</p>
                    <p>Go <a href="./index.html">home</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="container">
            <div class="container-inner">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-3-5">
                        <h3 class="footer-heading footer-heading-first">About HTML-Boilerplate</h3>
                        <p class="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="pure-u-1 pure-u-sm-1-2 pure-u-md-1-5">
                        <h3 class="footer-heading">Links</h3>
                        <ul class="footer-list">
                            <li><a class="footer-link" target="_blank"
                                    href="https://github.com/tbreuss/html-boilerplate">GitHub Repository</a></li>
                        </ul>
                    </div>
                    <div class="pure-u-1 pure-u-sm-1-2 pure-u-md-1-5">
                        <h3 class="footer-heading">Toolset</h3>
                        <ul class="footer-list">
                            <li><a class="footer-link" target="_blank" href="http://purecss.io">Pure.css</a></li>
                            <li><a class="footer-link" target="_blank" href="https://www.w3.org/">HTML5</a></li>
                        </ul>
                    </div>
                </div>
                <hr class="footer-ruler">
                <div class="pure-g">
                    <div class="pure-u-1">
                        A tiny <a class="footer-link" target="_blank" href="https://www.tebe.ch">tebe.ch</a> project
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>