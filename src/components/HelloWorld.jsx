import '../assets/css/helloWorld.css'

const HelloWorld = () => {
    const msg =  'HelloWorld'
  return (
    <div className="hello">
      <h1>{msg}</h1>
      <p>
        For a guide and recipes on how to configure / customize this project,
        <br />
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener noreferrer">
          vue-cli documentation
        </a>
        .
      </p>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
            target="_blank"
            rel="noopener noreferrer"
          >
            babel
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
            target="_blank"
            rel="noopener noreferrer"
          >
            eslint
          </a>
        </li>
      </ul>
      <h3>Essential Links</h3>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
            Core Docs
          </a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank" rel="noopener noreferrer">
            Forum
          </a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank" rel="noopener noreferrer">
            Community Chat
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://news.vuejs.org" target="_blank" rel="noopener noreferrer">
            News
          </a>
        </li>
      </ul>
      <h3>Ecosystem</h3>
      <ul>
        <li>
          <a href="https://router.vuejs.org" target="_blank" rel="noopener noreferrer">
            vue-router
          </a>
        </li>
        <li>
          <a href="https://vuex.vuejs.org" target="_blank" rel="noopener noreferrer">
            vuex
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-devtools#vue-devtools"
            target="_blank"
            rel="noopener noreferrer"
          >
            vue-devtools
          </a>
        </li>
        <li>
          <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener noreferrer">
            vue-loader
          </a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener noreferrer">
            awesome-vue
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HelloWorld;
