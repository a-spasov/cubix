<template>
  <header>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation" style="display: flex; justify-content: space-between;">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io" style="padding: 12px 24px;">
          <img src="../../assets/images/logo2.png" style="max-height: 100%" width="200">
        </a>
      </div>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <nav class="level" style="height: 36px; margin: 0; display: flex; align-items: flex-end;">
          <div class="level-right" style="margin-left: auto">
            <p class="level-item overline" style="border-right: 1px solid gray; padding: 0 20px; margin: 0;"><strong>Home</strong>
            </p>
            <p class="level-item overline" style="border-right: 1px solid gray; padding: 0 20px; margin: 0;"><a>About</a></p>
            <p class="level-item overline" style="border-right: 1px solid gray; padding: 0 20px; margin: 0;"><a>Usefull links</a>
            </p>
            <p class="level-item overline" style="border-right: 1px solid gray; padding: 0 20px; margin: 0;"><a>Log in</a></p>
            <p class="level-item overline" style="border-right: 1px solid gray; padding: 0 20px; margin: 0;"><a>Join Cubix</a></p>
            <p><font-awesome-icon icon="fa-brands fa-facebook" style="font-size: 1em; padding: 0 10px; color: gray;" /></p>
            <p><font-awesome-icon icon="fa-brands fa-youtube" style="font-size: 1em; padding: 0 10px; color: gray;" /></p>
            <p><font-awesome-icon icon="fa-brands fa-twitter" style="font-size: 1em; padding: 0 20px 0 10px; color: gray;" /></p>
          </div>
        </nav>
        <div class="navbar-menu" style="height: 36px; width: 100%; display: flex; justify-content: space-between;">
          <div class="navbar-start" style="">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link overline-1">
                Puzzles
              </a>
              <div class="navbar-dropdown">
                <div class="tile is-ancestor box">
                  <div class="tile is-parent">
                    <article class="tile is-child" style="width: 200px;">
                      <p class="title is-4">Information</p>
                      <hr>
                      <a class="navbar-item">Subtitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item is-active">More...</a>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child" style="width: 200px;">
                      <p class="title is-4">Solutions</p>
                      <hr>
                      <a class="navbar-item">Subtitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item is-active">More...</a>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child" style="width: 200px;">
                      <p class="title is-4">Collections</p>
                      <hr>
                      <a class="navbar-item">Subtitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item is-active">More...</a>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link overline-1">
                Feed
              </a>
              <div class="navbar-dropdown">
                <div class="tile is-ancestor box">
                  <div class="tile is-parent">
                    <article class="tile is-child" style="width: 200px;">
                      <p class="title is-4">Articles</p>
                      <hr>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subtitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item is-active">More...</a>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child" style="width: 200px;">
                      <p class="title is-4">Forum</p>
                      <hr>
                      <a class="navbar-item">Subtitle</a>
                      <a class="navbar-item">Subtitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subtitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item">Subtbt btitle</a>
                      <a class="navbar-item">Subbt itle</a>
                      <a class="navbar-item is-active">More...</a>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child" style="width: 600px;">
                      <p class="title is-4">Featured</p>
                      <hr>
                      <article class="message">
                        <div class="message-header">
                          <p>Hello World</p>
                          <button class="delete" aria-label="delete"></button>
                        </div>
                        <div class="message-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                          tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus. Nullam
                          gravida purus diam, et dictum <a>felis venenatis</a> efficitur...
                        </div>
                      </article>
                      <article class="message is-info">
                        <div class="message-header">
                          <p>Info</p>
                          <button class="delete" aria-label="delete"></button>
                        </div>
                        <div class="message-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                          tempus quis placerat ut, porta nec nulla...
                        </div>
                      </article>
                      <a class="navbar-item is-active">More...</a>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <a class="navbar-item">
              Marketplace
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-item is-hoverable" style="">
            <button class="button is-rounded is-link" style="width: 320px;">
              <span class="icon is-small is-left" style="display: inline-block; margin-right: 10px;">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </span>
              SEARCH
            </button>
            <div class="navbar-dropdown">
              <div class="tile is-ancestor box">
                <div class="tile is-parent">
                  <article class="tile is-child" style="width: 200px;">
                    <p class="title is-4">Articles</p>
                    <hr>
                    <a class="navbar-item">Subbt itle</a>
                    <a class="navbar-item">Subtitle</a>
                    <a class="navbar-item">Subbt itle</a>
                    <a class="navbar-item">Subtbt btitle</a>
                    <a class="navbar-item">Subtbt btitle</a>
                    <a class="navbar-item">Subtitle</a>
                    <a class="navbar-item">Subbt itle</a>
                    <a class="navbar-item">Subtbt btitle</a>
                    <a class="navbar-item is-active">More...</a>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child" style="width: 200px;">
                    <p class="title is-4">Forum</p>
                    <hr>
                    <a class="navbar-item">Subtitle</a>
                    <a class="navbar-item">Subtitle</a>
                    <a class="navbar-item">Subbt itle</a>
                    <a class="navbar-item">Subtbt btitle</a>
                    <a class="navbar-item">Subtbt btitle</a>
                    <a class="navbar-item">Subtitle</a>
                    <a class="navbar-item">Subbt itle</a>
                    <a class="navbar-item">Subtbt btitle</a>
                    <a class="navbar-item">Subbt itle</a>
                    <a class="navbar-item is-active">More...</a>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child" style="width: 600px;">
                    <p class="title is-4">Featured</p>
                    <hr>
                    <article class="message">
                      <div class="message-header">
                        <p>Hello World</p>
                        <button class="delete" aria-label="delete"></button>
                      </div>
                      <div class="message-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                        tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus. Nullam
                        gravida purus diam, et dictum <a>felis venenatis</a> efficitur...
                      </div>
                    </article>
                    <article class="message is-info">
                      <div class="message-header">
                        <p>Info</p>
                        <button class="delete" aria-label="delete"></button>
                      </div>
                      <div class="message-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                        tempus quis placerat ut, porta nec nulla...
                      </div>
                    </article>
                    <a class="navbar-item is-active">More...</a>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="navbar-end">
            <div class="navbar-item">
              <div class="field has-addons">
                <p class="control has-icons-left">
                  <input class="input is-rounded " type="text" placeholder="Search...">
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                  </span>
                </p>
                <p class="control">
                  <button class="button is-rounded is-primary">
                    Search
                  </button>
                </p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </nav>
  </header>
</template>